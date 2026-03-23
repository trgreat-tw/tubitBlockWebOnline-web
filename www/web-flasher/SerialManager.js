/**
 * SerialManager.js
 * 
 * 負責統籌 Web Serial API 的基礎連線與資料流讀取。
 * 當連線開啟後，會啟動一個背景的讀迴圈 (_readLoop) 不斷將硬體
 * 傳來的資料寫入 Shared Buffer (window._stk500_rxBuffer)，以防止
 * 瀏覽器 Web Serial Reader 發生被阻塞或取消時的拋錯關閉。
 */

window.SerialManager = class {
    constructor() {
        this.port = null;
        this.reader = null;
        this.writer = null;
        this.isOpen = false;

        // 全域分享的接收緩衝區，給各個燒錄器（例如 STK500Flasher）存取
        window._stk500_rxBuffer = [];

        // 外部監聽器 (例如一般通訊模式下，把資料拋給 UI 或 Firmata)
        this.onDataReceived = null;

        // 標記是否為「燒錄攔截模式」。如果是 true，背景迴圈就把資料丟進 _stk500_rxBuffer
        this.isFlashingMode = false;
    }

    /**
     * 請求使用者選擇 Serial Port
     */
    async requestPort() {
        try {
            this.port = await navigator.serial.requestPort();
            return this.port;
        } catch (e) {
            console.error("[SerialManager] 使用者取消或選擇失敗", e);
            throw e;
        }
    }

    /**
     * 開啟 Serial Port 並啟動背景讀取迴圈
     * @param {number} baudRate 波特率 (Arduino Uno Optiboot 預設 115200)
     */
    async open(baudRate = 115200) {
        if (!this.port) {
            throw new Error("[SerialManager] 尚未選擇 Port，請先呼叫 requestPort()");
        }

        try {
            await this.port.open({ baudRate: baudRate });
            this.isOpen = true;
            this.writer = this.port.writable.getWriter();

            // 啟動背景迴圈
            this._startReadLoop();

            console.log(`[SerialManager] Port 已開啟 (${baudRate} baud)`);
        } catch (e) {
            console.error("[SerialManager] 開啟 Port 失敗", e);
            throw e;
        }
    }

    /**
     * 關閉 Serial Port
     * @param {boolean} shouldKeepPort 是否保留 Port 物件引用供外部(如 esptool-js)使用
     *
     * 重要：Web Serial API 規範要求在呼叫 port.close() 之前，
     * 所有 readable/writable stream 的鎖都必須被釋放。
     * reader.cancel() 只是取消讀取，並不會自動釋放鎖，
     * 必須額外呼叫 reader.releaseLock() 才能讓 port.close() 成功。
     */
    async close(shouldKeepPort = false) {
        if (!this.isOpen) return;

        this.isOpen = false;
        this.isFlashingMode = false;

        // Step 1: 取消 reader 並釋放鎖（兩步缺一不可）
        if (this.reader) {
            try { await this.reader.cancel(); } catch (e) { /* 已取消或已關閉，忽略 */ }
            try { this.reader.releaseLock(); } catch (e) { /* 已釋放，忽略 */ }
            this.reader = null;
        }

        // Step 2: 關閉 writer 並釋放鎖
        if (this.writer) {
            try { await this.writer.close(); } catch (e) { /* 已關閉，忽略 */ }
            try { this.writer.releaseLock(); } catch (e) { /* 已釋放，忽略 */ }
            this.writer = null;
        }

        // Step 3: 等一個 tick，讓 _startReadLoop 的 finally 有機會完成
        await new Promise(r => setTimeout(r, 0));

        // Step 4: 關閉 Port（此時所有 stream 鎖均已釋放，port.close() 才能成功）
        if (this.port) {
            try {
                await this.port.close();
                console.log("[SerialManager] Port 已安全關閉");
            } catch (e) {
                console.warn("[SerialManager] 關閉 Port 時發生錯誤:", e);
            }
        }

        if (!shouldKeepPort) {
            this.port = null;
        }
    }

    /**
     * 開啟燒錄攔截模式
     */
    enableFlashingMode() {
        this.isFlashingMode = true;
        window._stk500_rxBuffer = []; // 清空之前的殘留
        console.log("[SerialManager] 已進入燒錄攔截模式 (Hook Enabled)");
    }

    /**
     * 關閉燒錄攔截模式
     */
    disableFlashingMode() {
        this.isFlashingMode = false;
        console.log("[SerialManager] 已解除燒錄攔截模式 (Hook Disabled)");
    }

    /**
     * 寫入 Byte Array 給硬體
     * @param {Array|Uint8Array} bytes 
     */
    async write(bytes) {
        if (!this.writer) throw new Error("Writer 尚未就緒");
        const data = new Uint8Array(bytes);
        await this.writer.write(data);
    }

    /**
     * 背景讀取迴圈
     */
    async _startReadLoop() {
        try {
            if (this.port.readable) {
                this.reader = this.port.readable.getReader();

                while (this.isOpen) {
                    const { value, done } = await this.reader.read();
                    if (done) break;

                    if (value && value.length > 0) {
                        if (this.isFlashingMode && window._stk500_rxBuffer) {
                            // 燒錄模式：直接塞入分享陣列，供 STK500 _readByte 等待
                            for (let i = 0; i < value.length; i++) {
                                window._stk500_rxBuffer.push(value[i]);
                            }
                        } else {
                            // 一般模式：可將資料拋給外部系統 (如 Firmata 或終端機 UI)
                            if (this.onDataReceived) {
                                this.onDataReceived(value);
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.warn("[SerialManager] Read Loop 已結束或異常: ", e);
        } finally {
            if (this.reader) {
                this.reader.releaseLock();
                this.reader = null;
            }
        }
    }
};

// 全域建立一個 Instance 供整個專案使用
window.serialManager = new window.SerialManager();
