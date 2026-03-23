/**
 * Esp32WebFlasher.js
 * 
 * 整合官方 esptool-js (v0.5.7) 的 ESP32 燒錄模組。
 * 將 SerialManager 的 Port 授權給 esptool-js 進行協定通訊。
 * 
 * 使用方式：
 *   const flasher = new Esp32WebFlasher(window.serialManager, logger);
 *   await flasher.flashData([
 *     { data: Uint8Array, address: 0x1000 },   // bootloader
 *     { data: Uint8Array, address: 0x8000 },   // partition table
 *     { data: Uint8Array, address: 0x10000 },  // application
 *   ]);
 */

window.Esp32WebFlasher = class {
    constructor(manager, logCallback = console.log) {
        if (!manager || !manager.port) {
            throw new Error("[ESP32] SerialManager 尚未就緒");
        }
        this.manager = manager;
        this.port = manager.port;
        this.log = logCallback;
    }

    /**
     * 將 Uint8Array 安全地轉換為 binary string。
     * 不使用 String.fromCharCode.apply()，因為大型韌體（>64KB）會超過
     * JavaScript call stack 限制而導致 "RangeError: Maximum call stack size exceeded"。
     * @param {Uint8Array} u8Array
     * @returns {string}
     */
    static uint8ArrayToBinaryString(u8Array) {
        const CHUNK_SIZE = 0x8000; // 32KB chunks, safe for call stack
        const parts = [];
        for (let i = 0; i < u8Array.length; i += CHUNK_SIZE) {
            const slice = u8Array.subarray(i, Math.min(i + CHUNK_SIZE, u8Array.length));
            parts.push(String.fromCharCode.apply(null, slice));
        }
        return parts.join('');
    }

    /**
     * 核心輔助：動態載入 esptool-js 並建立 ESPLoader
     * 
     * 重要參數說明 (依據 esptool-js@0.5.7 源碼):
     *   - romBaudrate: 初始 ROM 握手時使用的 Baud Rate（預設 115200）
     *   - baudrate: Stub 載入成功後要切換到的目標 Baud Rate
     *   - main() 內部邏輯: if (romBaudrate !== baudrate) changeBaud()
     *     所以如果兩者相同，就不會變速。
     * 
     * @param {number} targetBaudrate - Stub 載入後的目標 Baud Rate
     * @returns {ESPLoader}
     */
    async _getLoader(targetBaudrate) {
        this.log("[ESP32] 關閉現有監聽以釋放 Port...");
        // 關鍵：先讓 Manager 釋放串流但保留 Port 引用，供 esptool 直接使用
        await this.manager.close(true);

        this.log("[ESP32] 正在向雲端請求燒錄引擎元件 (ESM Import)...");

        // 使用動態 Import 載入 esptool-js (ESM 版)
        const module = await import("https://cdn.jsdelivr.net/npm/esptool-js@0.5.7/+esm");

        // 檢查 pako (esptool-js 的壓縮相依項)
        if (typeof pako === 'undefined') {
            throw new Error("找不到 pako 庫，請檢查 index.html 是否正確載入。");
        }

        // 進入燒錄模式（停止 SerialManager 的 readLoop 干擾）
        this.manager.enableFlashingMode();

        // 建立 Transport（esptool-js 自己會管理 port 的 open/close）
        const transport = new module.Transport(this.port);

        // 建立 ESPLoader
        // romBaudrate = 115200 (固定，ROM 握手用)
        // baudrate = targetBaudrate (Stub 載入後切換到的高速率)
        const esploader = new module.ESPLoader({
            transport: transport,
            baudrate: targetBaudrate,
            romBaudrate: 115200,
            terminal: {
                clean: () => { },
                writeLine: (data) => this.log(data),
                write: (data) => this.log(data)
            },
            // debugLogging: true  // 除錯時可開啟
        });

        return esploader;
    }

    /**
     * 執行完整燒錄流程
     * @param {Array<{data: Uint8Array, address: number}>} fileArray 
     *        格式為 [{ data: Uint8Array, address: 0x1000 }, ...]
     */
    async flashData(fileArray) {
        if (!fileArray || fileArray.length === 0) {
            throw new Error("[ESP32] 燒錄資料為空");
        }

        let esploader;
        // 目標 Baud Rate：Stub 載入後自動從 115200 切換到此速率
        const targetBaudrate = 460800;

        try {
            // ===== 階段 1：初始化連線 =====
            esploader = await this._getLoader(targetBaudrate);

            this.log("[ESP32] 正在連接晶片 (Connect & Detect)...");

            // esploader.main() 內部會依序執行：
            //   1. detectChip() → connect() → transport.connect(romBaudrate)
            //      → constructResetSequence() → ClassicReset (DTR/RTS toggle)
            //      → sync() 握手
            //   2. 讀取晶片資訊（型號、功能、MAC）
            //   3. runStub() 上傳 flasher stub 到 RAM
            //   4. changeBaud() if romBaudrate !== baudrate → 切換到 targetBaudrate
            await esploader.main();

            this.log(`[ESP32] 已連接！晶片類型: ${esploader.chip.CHIP_NAME}`);

            // ===== 階段 2：寫入 Flash =====
            this.log("[ESP32] 開始寫入 Flash 分區...");

            // 格式轉換：esptool-js 0.5.x 的 writeFlash 要求 data 為 binary string
            // 使用分段轉換避免大檔案導致 call stack overflow
            const formattedFileArray = fileArray.map(file => ({
                data: typeof file.data === 'string'
                      ? file.data
                      : Esp32WebFlasher.uint8ArrayToBinaryString(file.data),
                address: file.address
            }));

            await esploader.writeFlash({
                fileArray: formattedFileArray,
                flashSize: "keep",    // 不修改 flash 大小參數（保持原樣）
                flashMode: "keep",    // 不修改 flash 模式（保持原樣）
                flashFreq: "keep",    // 不修改 flash 頻率（保持原樣）
                eraseAll: false,      // 不全域擦除（只擦寫入的區域）
                compress: true,       // 必須為 true，esptool-js 0.5.x 不支援未壓縮寫入
                reportProgress: (fileIndex, written, total) => {
                    const percent = total > 0 ? Math.round((written / total) * 100) : 0;
                    this.log(`[ESP32] 寫入進度: 第 ${fileIndex + 1}/${formattedFileArray.length} 個檔案, ${percent}% (${written}/${total} bytes)`);
                }
            });

            this.log("[ESP32] 全部分區寫入完成！");

            // ===== 階段 3：重啟晶片 =====
            this.log("[ESP32] 正在硬體重啟晶片...");
            try {
                await esploader.after("hard_reset");
            } catch (e) { /* ignore */ }

            // 二次重置：確保 transport 已釋放 port 後，直接用 Web Serial 發更長的 RTS 脈衝
            // 給 TuBit MTC v2 等自動重置電路更多反應時間（標準 100ms → 200ms）
            try {
                if (esploader.transport) {
                    try { await esploader.transport.disconnect(); } catch (e) { /* port 可能已斷，忽略 */ }
                }
                await new Promise(r => setTimeout(r, 200));
                await this.port.open({ baudRate: 115200 });
                await this.port.setSignals({ dataTerminalReady: false, requestToSend: true });
                await new Promise(r => setTimeout(r, 200));
                await this.port.setSignals({ dataTerminalReady: false, requestToSend: false });
                await this.port.close();
                this.log("[ESP32] 重置脈衝已送出。");
            } catch (retryErr) {
                this.log("[ESP32] 提示：若程式未自動啟動，請手動按板子上的 EN/RST 按鈕。");
            }

            this.log("[ESP32] ✅ 燒錄成功！晶片已重啟運行新韌體。");

        } catch (e) {
            this.log(`[ESP32] ❌ 燒錄失敗: ${e.message}`);
            throw e;
        } finally {
            // ===== 階段 4：恢復一般模式 =====
            if (this.manager) {
                this.manager.disableFlashingMode();
            }
            // 重新開啟序列埠，讓下次上傳無需按 F5
            try {
                await new Promise(r => setTimeout(r, 300));
                await this.manager.open(115200);
                this.log("[ESP32] 序列埠已恢復，可直接再次上傳。");
            } catch (reopenErr) {
                this.log("[ESP32] 序列埠未自動重開（下次上傳時會重新請求）。");
            }
            this.log("[ESP32] 燒錄流程結束。");
        }
    }
};
