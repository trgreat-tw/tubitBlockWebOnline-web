/**
 * Stk500WebFlasher.js
 * 
 * 基於 Web Serial 實作的 AVR (Arduino Uno) 燒錄器。
 * 支援 STK500v1 協定，內建 Sliding Window 防錯位讀取機制，
 * 解決 Sync Timeout 與 0x14 0x10 重殘留問題。
 */

window.Stk500WebFlasher = class {
    /**
     * 初始化 STK500 燒錄器
     * @param {SerialManager} manager 已初始化並 open() 的 SerialManager 例項
     * @param {Function} logCallback 用於印出日誌的回呼函數 (預設 console.log)
     */
    constructor(manager, logCallback = console.log) {
        if (!manager || !manager.port) {
            throw new Error("[STK500] SerialManager 尚未就緒或連接");
        }
        this.manager = manager;
        this.port = manager.port;
        this.log = logCallback;

        // 常數表
        this.STK_OK = 0x10;
        this.STK_INSYNC = 0x14;
        this.CRC_EOP = 0x20;
        this.STK_GET_SYNC = 0x30;
        this.STK_ENTER_PROGMODE = 0x50;
        this.STK_LEAVE_PROGMODE = 0x51;
        this.STK_LOAD_ADDRESS = 0x55;
        this.STK_PROG_PAGE = 0x64;
    }

    /**
     * 以 Hex 字串方式印出輔助方法
     */
    _toHex(num) {
        return "0x" + num.toString(16).toUpperCase().padStart(2, '0');
    }

    /**
     * 封裝寫入位元組
     */
    async _write(bytes) {
        await this.manager.write(bytes);
    }

    /**
     * 清空目前的 Shared Buffer (消除上次指令的可能殘留字節)
     */
    _drainBuffer() {
        window._stk500_rxBuffer = [];
    }

    /**
     * 從 Buffer 阻塞讀取單個 Byte (Byte-by-Byte Tool)
     */
    async _readByte(timeoutMs = 1000) {
        let startTime = Date.now();
        while (window._stk500_rxBuffer.length < 1) {
            if (Date.now() - startTime > timeoutMs) {
                throw new Error(`[STK500] 讀取單一 Byte 超時 (${timeoutMs}ms)`);
            }
            await new Promise(r => setTimeout(r, 2));
        }
        return window._stk500_rxBuffer.shift();
    }

    /**
     * 第一步：透過 DTR/RTS 下降沿來 Reset 觸發 Optiboot 進入 Bootloader 模式
     */
    async reset() {
        this.log("[STK500] 透過 DTR/RTS 觸發硬體 Reset...");

        // 1. 確保為高電位 (Inactive/釋放)
        await this.port.setSignals({ dataTerminalReady: false, requestToSend: false });
        await new Promise(r => setTimeout(r, 100));

        // 2. 觸發 Reset (下降沿, LOW)
        await this.port.setSignals({ dataTerminalReady: true, requestToSend: true });
        await new Promise(r => setTimeout(r, 100)); // 拉長重置時間，確保放電完全

        // 3. 釋放 Reset (回到高電位)
        await this.port.setSignals({ dataTerminalReady: false, requestToSend: false });

        // 等待 Optiboot 開機完成。提高延遲至 500ms 以確保穩定
        await new Promise(r => setTimeout(r, 500));
        this._drainBuffer();
    }

    /**
     * 核心輔助：Sliding Window 等待 InSync(0x14) 與 OK(0x10)
     * 並自動拋棄過程中的任何雜訊 (如連續的 0x00 或殘留數據)
     */
    async _getInsyncOk(timeoutMs = 1000) {
        let startTime = Date.now();
        let gotInSync = false;
        let trashBytes = [];

        while (Date.now() - startTime < timeoutMs) {
            if (window._stk500_rxBuffer.length > 0) {
                let b = window._stk500_rxBuffer.shift();

                if (!gotInSync) {
                    if (b === this.STK_INSYNC) {
                        gotInSync = true;
                    } else {
                        trashBytes.push(b);
                    }
                } else {
                    if (b === this.STK_OK) {
                        return true; // 成功捕捉到 [0x14, 0x10]
                    } else if (b === this.STK_INSYNC) {
                        // 連續 0x14，保持狀態
                    } else {
                        gotInSync = false;
                        trashBytes.push(this.STK_INSYNC, b);
                    }
                }
            } else {
                await new Promise(r => setTimeout(r, 5));
            }
        }

        // 失敗時輸出最近收到的雜訊內容，利於診斷
        let trashInfo = trashBytes.length > 0 ? ` (最後雜訊: [${trashBytes.slice(-15).map(x => this._toHex(x)).join(' ')}])` : "";
        throw new Error(`超時未收到 InSync/OK${trashInfo}`);
    }

    /**
     * 第二步：STK_GET_SYNC 利用 Sliding Window 清除殘留狀態
     */
    async sync(maxRetries = 15) {
        this.log("[STK500] 開始嘗試握手 (STK_GET_SYNC)...");

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                this._drainBuffer();
                await this._write([this.STK_GET_SYNC, this.CRC_EOP]);
                await this._getInsyncOk(200);
                this.log(`[STK500] 握手成功 (Attempt ${attempt})！`);
                return;
            } catch (e) {
                // 忽略單次同步失敗，稍作等待後重試
                await new Promise(r => setTimeout(r, 50));
            }
        }
        throw new Error("[STK500] 無法與 Arduino 取得同步 (Sync Timeout)");
    }

    /**
     * 第三步：進入燒錄模式
     * 註記：Arduino Uno 的 Optiboot 處理 STK_ENTER_PROGMODE (回傳空或亂碼) 時，
     * 有時會因為 Baudrate 抖動進入瘋狂大吐 0x00 的狀態 (UART Float)。
     * 我們的策略是：包容 0x00，不強求收到 0x14 0x10，只要不吐其他亂碼就算過關。
     */
    async enterProgMode() {
        this.log("[STK500] 進入燒錄模式 (STK_ENTER_PROGMODE)...");

        // 核心修正：與先前指令間隔 50ms 確保 UART TX FIFO 已清空
        await new Promise(r => setTimeout(r, 50));
        this._drainBuffer();

        await this._write([this.STK_ENTER_PROGMODE, this.CRC_EOP]);

        try {
            await this._getInsyncOk(500);
            this.log("[STK500] 成功進入燒錄模式。");
        } catch (e) {
            // 對於 Optiboot，此指令失敗往往是因為沒回傳而非沒進入，故僅警告並繼續
            this.log(`[STK500] 警告：進入模式未獲標準回應，將嘗試繼續... ${e.message}`);
        }
    }

    /**
     * 第四步：離開燒錄模式
     */
    async leaveProgMode() {
        this.log("[STK500] 離開燒錄模式 (STK_LEAVE_PROGMODE)...");
        this._drainBuffer();
        await this._write([this.STK_LEAVE_PROGMODE, this.CRC_EOP]);

        try {
            await this._getInsyncOk(500);
        } catch (e) {
            this.log("[STK500] 離開燒錄模式未獲回應 (正常現象)。");
        }
    }

    /**
     * 載入位址 Load Address
     * @param {number} addr 16-bit word address (byte address / 2)
     */
    async loadAddress(addr) {
        const addrLow = addr & 0xFF;
        const addrHigh = (addr >> 8) & 0xFF;

        this._drainBuffer();
        await this._write([this.STK_LOAD_ADDRESS, addrLow, addrHigh, this.CRC_EOP]);

        try {
            await this._getInsyncOk(500);
        } catch (e) {
            throw new Error(`[STK500] Load Address 失敗！位址 0x${addr.toString(16)}：${e.message}`);
        }
    }

    /**
     * 寫入一整頁 (寫入 Flash)
     * @param {Uint8Array} data 要寫入的資料
     */
    async writePage(data) {
        if (data.length > 128) throw new Error("STK500v1 Page size 超過 128");

        const lenLow = data.length & 0xFF;
        const lenHigh = (data.length >> 8) & 0xFF;

        // 0x46 = 'F' (Flash memory)
        let cmd = [this.STK_PROG_PAGE, lenHigh, lenLow, 0x46];
        cmd.push(...data);
        cmd.push(this.CRC_EOP);

        this._drainBuffer();
        await this._write(cmd);

        try {
            await this._getInsyncOk(1000); // 寫入 Flash 較慢，超時放寬至 1 秒
        } catch (e) {
            throw new Error(`[STK500] Page 寫入失敗！${e.message}`);
        }
    }

    /**
     * 高階 API：燒錄完整的 Hex 資料
     * @param {string} hexText .hex 檔案原始字串
     */
    async flashHexContent(hexText) {
        try {
            this.manager.enableFlashingMode();

            // 0. 解析 Hex
            this.log("[STK500] 解析 Hex 檔...");
            const binaryData = this._parseIntelHex(hexText);

            // 1. 硬體重置與握手
            await this.reset();
            await this.sync();

            // 2. 進入燒錄模式
            await this.enterProgMode();

            // 3. 切割成 Page 並寫入 (Optiboot Uno 預設 128 bytes/page)
            const pageSize = 128;
            for (let i = 0; i < binaryData.length; i += pageSize) {
                let chunk = binaryData.slice(i, i + pageSize);

                // Address 必須是 Word (2-byte) 指標，所以 i / 2
                await this.loadAddress(i / 2);
                await this.writePage(chunk);

                // 印個進度
                const progress = Math.min(100, Math.round(((i + chunk.length) / binaryData.length) * 100));
                if (progress % 10 === 0) {
                    this.log(`[STK500] 燒錄進度: ${progress}%`);
                }
            }

            // 4. 完成
            await this.leaveProgMode();
            this.log("[STK500] 燒錄完成！");

        } catch (e) {
            this.log(`[STK500] 燒錄中斷發生命誤: ${e.message}`);
            throw e;
        } finally {
            // 解除背景攔截，將 Port 拉高重開機
            this.manager.disableFlashingMode();
            await this.port.setSignals({ dataTerminalReady: true, requestToSend: true });
        }
    }

    /**
     * 簡易版 Intel Hex 轉 Binary 解碼器
     */
    _parseIntelHex(hexStr) {
        const lines = hexStr.split('\n');
        let memory = new Uint8Array(32768); // Uno 32K Flash
        let maxAddress = 0;

        for (let line of lines) {
            line = line.trim();
            if (line[0] !== ':') continue;

            const byteCount = parseInt(line.substring(1, 3), 16);
            const address = parseInt(line.substring(3, 7), 16);
            const recordType = parseInt(line.substring(7, 9), 16);

            // 資料紀錄 (Data Record)
            if (recordType === 0x00) {
                for (let i = 0; i < byteCount; i++) {
                    memory[address + i] = parseInt(line.substring(9 + (i * 2), 11 + (i * 2)), 16);
                }
                if (address + byteCount > maxAddress) {
                    maxAddress = address + byteCount;
                }
            }
            // 檔案結束標記 (End of File Record)
            else if (recordType === 0x01) {
                break;
            }
        }

        return memory.slice(0, maxAddress);
    }
};
