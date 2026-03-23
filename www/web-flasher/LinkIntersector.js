/**
 * LinkIntersector.js
 * 
 * 攔截 GUI 與 tubitblock-link 之間的 WebSocket 通訊。
 * 當偵測到 upload 請求時，改由瀏覽器端發起：
 * 1. 向 Link Server 請求 /compile (模擬線上編譯)
 * 2. 獲取 Binary 後，使用 Web Serial (Esp32WebFlasher) 進行燒錄。
 */

(function () {
    const OriginalWebSocket = window.WebSocket;

    // --- 編譯伺服器設定 ---
    // 優先使用遠端公網伺服器 (NAS Public IP)
    const COMPILE_SERVER_URL = window.TUBITBLOCK_COMPILE_SERVER
        || 'https://kevinkid-tubit.mooo.com:3001/compile';

    // --- 編譯快取 (Phase 4) ---
    let cachedArtifacts = null;       // Base64 artifacts from last successful compile
    let cachedFlashAddresses = null;  // 對應的 flash 地址映射（由 server 回傳）
    let cachedCodeHash = null;        // 用來判斷程式碼是否已變更
    let isCompiling = false;          // 防止重複點擊
    let isUploading = false;          // 燒錄進行中（防止燒錄期間觸發編譯）
    
    // --- 階段 1：DOM 監聽與「編譯」按鈕注入 ---
    function injectCompileButton() {
        const uploadButton = document.querySelector('div.hardware-header_upload-button_24CyN');
        if (uploadButton && !document.getElementById('web-flasher-compile-btn')) {
            console.log('[Intersector] Found Upload button, injecting Compile button...');
            
            // 複製上傳按鈕的 DOM 結構以維持一致的樣式
            const compileButton = uploadButton.cloneNode(true);
            compileButton.id = 'web-flasher-compile-btn';
            
            // 修改文字與圖示 (如果有的話)
            const textSpan = compileButton.querySelector('span');
            if (textSpan) {
                textSpan.textContent = '編譯 (線上)';
            }
            
            // 更改顏色以區分 (可選，這裡稍微調暗一點藍色)
            compileButton.style.backgroundColor = '#155bb5';
            compileButton.style.marginRight = '10px';
            
            // 點擊事件：Phase 3 - 連接到線上編譯伺服器
            compileButton.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('[Intersector] Compile button clicked!');
                handleCompileOnly(compileButton);
            });

            // 插入到上傳按鈕的前面
            uploadButton.parentNode.insertBefore(compileButton, uploadButton);
        }
    }

    // 使用 MutationObserver 監聽 DOM 變化，確保切換設備後依然能注入按鈕
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                // 節流檢查，避免過多查詢
                injectCompileButton();
            }
        }
    });

    // 等待 body 出現後開始監聽
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
    // ----------------------------------------


    /**
     * 為 :20111 (Link server) URL 建立一個假的 WebSocket 物件。
     * 真實的 WebSocket 連線會因為 Link server 不存在而失敗，導致 GUI 顯示
     * 「請安裝 TUbitBlock Link」的對話框。
     * 假的 WS 立即模擬連線成功 (onopen)，並攔截所有 send() 呼叫。
     */
    function createFakeLinkWebSocket(url) {
        const fakeWs = new EventTarget();
        fakeWs.url = url;
        fakeWs.readyState = 0; // CONNECTING
        fakeWs.CONNECTING = 0; fakeWs.OPEN = 1; fakeWs.CLOSING = 2; fakeWs.CLOSED = 3;
        fakeWs.onopen = null; fakeWs.onclose = null; fakeWs.onerror = null; fakeWs.onmessage = null;
        fakeWs.bufferedAmount = 0; fakeWs.extensions = ''; fakeWs.protocol = ''; fakeWs.binaryType = 'blob';

        // 用 property setter 讓 on* 屬性透過 addEventListener 註冊，
        // 避免 dispatchEvent 重複觸發（舊做法會讓 addEventListener + onmessage 同時存在時訊息重複）
        ['open', 'close', 'error', 'message'].forEach(type => {
            let _h = null;
            Object.defineProperty(fakeWs, 'on' + type, {
                get() { return _h; },
                set(fn) {
                    if (_h) fakeWs.removeEventListener(type, _h);
                    _h = fn;
                    if (fn) fakeWs.addEventListener(type, fn);
                },
                configurable: true
            });
        });

        fakeWs.send = function (data) {
            try {
                const json = JSON.parse(data);
                if (json && json.method) {
                    console.log('[Intersector] Outgoing JSON-RPC Method:', json.method);
                    const method = json.method.replace('serialport/', '');
                    if (method === 'upload')   { handleInterceptedUpload(fakeWs, json);   return; }
                    if (method === 'discover') { handleInterceptedDiscover(fakeWs, json); return; }
                    if (method === 'connect')  { handleInterceptedConnect(fakeWs, json);  return; }
                }
            } catch (e) {}
            console.log('[Intersector] Unhandled WS send:', data);
        };

        fakeWs.close = function () {
            fakeWs.readyState = 3;
            fakeWs.dispatchEvent(new CloseEvent('close', { wasClean: true, code: 1000 }));
        };

        // 模擬立即連線成功
        setTimeout(function () {
            fakeWs.readyState = 1; // OPEN
            fakeWs.dispatchEvent(new Event('open'));
        }, 50);

        return fakeWs;
    }

    function HookedWebSocket(url, protocols) {
        console.log('[Intersector] WebSocket Attempt:', url);
        if (url.includes(':20111')) {
            console.log('[Intersector] Intercepting Link WebSocket, using fake WS (no real connection)');
            return createFakeLinkWebSocket(url);
        }
        return new OriginalWebSocket(url, protocols);
    }

    HookedWebSocket.prototype = OriginalWebSocket.prototype;
    window.WebSocket = HookedWebSocket;

    // 輔助函式：注入訊息回 GUI
    function injectMessage(ws, data) {
        const event = new MessageEvent('message', {
            data: JSON.stringify(data)
        });
        console.log('[Intersector] Injecting message to GUI:', data.method || 'response', data);
        // dispatchEvent 已被覆寫，內部會自動呼叫 onmessage，無需額外呼叫
        ws.dispatchEvent(event);
    }

    async function handleInterceptedDiscover(ws, originalRequest) {
        // 模擬發現一個設備
        injectMessage(ws, {
            jsonrpc: "2.0",
            method: "didDiscoverPeripheral",
            params: {
                peripheralId: "web-serial-device",
                name: "Web Serial (瀏覽器直通)",
                rssi: -50
            }
        });
    }

    async function handleInterceptedConnect(ws, originalRequest) {
        const { id } = originalRequest;
        try {
            if (!window.serialManager) throw new Error("SerialManager not initialized");

            if (window.serialManager.isOpen) {
                // 燒錄後序列埠已重新開啟，無需再次請求，直接回報連線成功
                console.log('[Intersector] 序列埠已開啟，直接回報連線成功。');
            } else {
                console.log('[Intersector] 請求 Web Serial 存取權...');
                if (!window.serialManager.port) {
                    await window.serialManager.requestPort();
                }
                await window.serialManager.open(115200);
                console.log('[Intersector] 連線成功！');
            }

            injectMessage(ws, {
                jsonrpc: "2.0",
                id: id,
                result: null
            });
        } catch (e) {
            console.error('[Intersector] 連線失敗:', e);
            injectMessage(ws, {
                jsonrpc: "2.0",
                id: id,
                error: { message: e.message }
            });
        }
    }

    // --- Phase 3: handleCompileOnly ---
    // 簡易的程式碼 hash（用來判斷是否需要重新編譯）
    function simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash.toString(36);
    }

    // 從 GUI 取得當前的程式碼與 board 設定
    function getCurrentCodeFromGUI() {
        // 嘗試從 GUI 的 Ace editor 取得程式碼，必須逐行取得以保留換行符號
        const aceLines = document.querySelectorAll('.ace_line');
        if (aceLines.length > 0) {
            // 替換掉 non-breaking space (\xA0) 為一般空白，否則 C++ 編譯會報錯 "extended character..."
            return Array.from(aceLines).map(l => l.textContent.replace(/\u00A0/g, ' ')).join('\n');
        }
        
        // 如果沒有 Ace editor，退路：嘗試取得 Monaco editor 內容
        const monacoLines = document.querySelectorAll('.view-line');
        if (monacoLines.length > 0) {
            return Array.from(monacoLines).map(l => l.textContent.replace(/\u00A0/g, ' ')).join('\n');
        }
        
        // 再退一步，如果只有純 text layer (雖然這會失去換行，但留作備用)
        const codeEditor = document.querySelector('.ace_text-layer');
        if (codeEditor) {
            return codeEditor.textContent || '';
        }
        
        return null;
    }

    async function handleCompileOnly(buttonElement) {
        if (isUploading) {
            alert('正在燒錄中，請等待燒錄完成後再編譯。');
            return;
        }
        if (isCompiling) {
            console.log('[Intersector] 正在編譯中，請稍候...');
            return;
        }
        isCompiling = true;

        const originalText = buttonElement.querySelector('span')?.textContent || '編譯 (線上)';
        const textSpan = buttonElement.querySelector('span');

        try {
            // 更新按鈕狀態
            if (textSpan) textSpan.textContent = '⏳ 編譯中...';
            buttonElement.style.opacity = '0.7';
            buttonElement.style.pointerEvents = 'none';

            // 取得當前程式碼
            const currentCode = getCurrentCodeFromGUI();
            if (!currentCode || currentCode.trim().length < 20) {
                throw new Error('無法從編輯器取得程式碼。請確認已選擇裝置並切換到程式碼檢視。');
            }
            if (!currentCode.includes('void setup') && !currentCode.includes('void loop')) {
                throw new Error('程式碼不完整（找不到 void setup 或 void loop）。請切換到程式碼檢視後再試。');
            }

            const codeHash = simpleHash(currentCode);
            
            // 如果程式碼沒有變更且已有快取，直接跳過
            if (cachedArtifacts && cachedCodeHash === codeHash) {
                console.log('[Intersector] 程式碼未變更，使用快取的編譯結果');
                if (textSpan) textSpan.textContent = '✅ 已編譯';
                setTimeout(() => { if (textSpan) textSpan.textContent = originalText; }, 2000);
                return;
            }

            console.log(`[Intersector] 發送編譯請求到 ${COMPILE_SERVER_URL}`);
            
            const response = await fetch(COMPILE_SERVER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    code: currentCode,
                    board: 'esp32:esp32:esp32:JTAGAdapter=default,PSRAM=disabled,PartitionScheme=default,CPUFreq=240,FlashMode=qio,FlashFreq=80,FlashSize=4M,UploadSpeed=460800,LoopCore=1,EventsCore=1,DebugLevel=none,EraseFlash=none,ZigbeeMode=default'
                })
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || '編譯失敗');
            }

            // 儲存快取（artifacts 與 flashAddresses 必須一起快取，保持一致性）
            cachedArtifacts = result.artifacts;
            cachedFlashAddresses = result.flashAddresses || null;
            cachedCodeHash = codeHash;

            console.log(`[Intersector] 編譯成功！取得 ${result.artifactCount || Object.keys(result.artifacts).length} 個檔案`);
            if (textSpan) textSpan.textContent = '✅ 編譯成功';
            setTimeout(() => { if (textSpan) textSpan.textContent = originalText; }, 3000);

        } catch (err) {
            console.error('[Intersector] 編譯失敗:', err);
            if (textSpan) textSpan.textContent = '❌ 編譯失敗';
            alert(`編譯失敗：${err.message}`);
            setTimeout(() => { if (textSpan) textSpan.textContent = originalText; }, 3000);
        } finally {
            isCompiling = false;
            buttonElement.style.opacity = '1';
            buttonElement.style.pointerEvents = 'auto';
        }
    }

    // --- Phase 4: 改寫 handleInterceptedUpload ---
    async function handleInterceptedUpload(ws, originalRequest) {
        const { id, params } = originalRequest;
        const logger = (msg) => {
            console.log('[Intersector]', msg);
            injectMessage(ws, {
                jsonrpc: "2.0",
                method: "uploadStdout",
                params: { message: `\x1b[32m[WebFlasher] ${msg}\n\x1b[0m` }
            });
        };

        isUploading = true;

        try {
            // --- 重大修復：SecurityError ---
            // Web Serial 的 requestPort 必須在「使用者手勢」(User Gesture) 的 call stack 裡面執行。
            // 由於之前的 fetch 是非同步的，等 fetch 回來後就失去了手勢上下文。
            // 解決方案：在開始編譯 (fetch) 之前，就先檢查並請求 Port 權限。
            if (!window.serialManager.isOpen) {
                logger("偵測到序列埠尚未連線，正在請求存取權限...");
                await window.serialManager.requestPort();
                // 先用 115200 開啟（之後閃爍時會自動調整，或者是這裡直接用 460800 也可以）
                await window.serialManager.open(115200);
                logger("序列埠已就緒。");
            }

            // --- 提早回覆 JSON-RPC result，防止 GUI 因等待 >10 秒而顯示「上傳超時」---
            // 燒錄 ESP32 約需 20-30 秒，遠超過 GUI 的 JSON-RPC timeout。
            // 提前送出 result:null 讓 GUI 確認 RPC 已被接受，
            // 後續進度訊息 (uploadStdout) 與完成通知 (uploadSuccess) 仍會正常送到。
            injectMessage(ws, {
                jsonrpc: "2.0",
                id: id,
                result: null
            });

            // 等待 GUI 處理 result 並 re-render 出 console 面板後，再送 uploadStdout
            await new Promise(resolve => setTimeout(resolve, 200));

            let artifacts;
            let flashAddresses;

            // Phase 4: 優先檢查快取
            if (cachedArtifacts) {
                logger('偵測到已編譯的快取檔案，跳過編譯步驟！');
                artifacts = cachedArtifacts;
                flashAddresses = cachedFlashAddresses;
            } else {
                // 沒有快取：走原本的編譯流程
                logger(`正在發起線上編譯 (${COMPILE_SERVER_URL})...`);
                logger(`⏳ 等待雲端編譯中，請稍候...（依程式複雜度，約需 30 秒至 2 分鐘）`);

                // 每 15 秒送一次提示，避免使用者誤以為當機
                let waitSecs = 15;
                const compileHeartbeat = setInterval(() => {
                    logger(`⏳ 仍在編譯中，已等待約 ${waitSecs} 秒，請繼續等候...`);
                    waitSecs += 15;
                }, 15000);

                let response;
                try {
                    // 嘗試兩種請求格式：先用 GUI 原生的 params，再用簡潔版
                    response = await fetch(COMPILE_SERVER_URL, {
                        method: 'POST',
                        body: JSON.stringify(params),
                        headers: { 'Content-Type': 'application/json' }
                    });
                } finally {
                    clearInterval(compileHeartbeat);
                }

                if (!response.ok) {
                    const errData = await response.json();
                    console.error('[Intersector] Compile server error:', errData);
                    throw new Error(errData.error || '編譯伺服器錯誤');
                }

                const result = await response.json();
                if (!result.success) {
                    throw new Error(result.error || '編譯失敗');
                }
                artifacts = result.artifacts;
                flashAddresses = result.flashAddresses || null;
            }

            logger('編譯完成！正在處理 Binary 檔案...');

            // 判斷晶片類型 (安全轉型避免 fqbn 為 object 導致 includes is not a function)
            const fqbnRaw = (params && params.config && params.config.fqbn);
            const boardRaw = (params && params.board);
            const typeStr = JSON.stringify({ fqbn: fqbnRaw, board: boardRaw }).toLowerCase();

            if (typeStr.includes('esp32')) {
                await flashESP32(artifacts, flashAddresses, logger);
            } else {
                // 如果前端 API 有變無法分辨，但產出檔案裡有 bootloader，我們就假設是 ESP32
                const hasBootloader = Object.keys(artifacts).some(k => k.includes('bootloader'));
                if (hasBootloader) {
                    logger('無法從指令分辨硬體類型，但偵測到 bootloader 檔案，自動啟用 ESP32 燒錄模式');
                    await flashESP32(artifacts, flashAddresses, logger);
                } else {
                    throw new Error('無法判斷設備類型，或目前不支援該晶片的網頁直通燒錄 (僅支援 ESP32)');
                }
            }

            // 燒錄成功後清除快取（避免再次燒錄舊版）
            cachedArtifacts = null;
            cachedFlashAddresses = null;
            cachedCodeHash = null;

            logger('燒錄流程全數完成！');

            injectMessage(ws, {
                jsonrpc: "2.0",
                method: "uploadSuccess",
                params: { aborted: false }
            });

        } catch (e) {
            console.error('[Intersector] 錯誤:', e);
            logger(`[錯誤] ${e.message}`);

            injectMessage(ws, {
                jsonrpc: "2.0",
                method: "uploadError",
                params: { message: `\x1b[31m${e.message}\x1b[0m` }
            });
        } finally {
            isUploading = false;
        }
    }

    async function flashESP32(artifacts, flashAddresses, logger) {
        if (!window.serialManager) throw new Error("SerialManager not initialized");
        if (!window.serialManager.isOpen) {
            logger("序列埠尚未開啟，正在請求權限並連線...");
            await window.serialManager.requestPort();
            await window.serialManager.open(460800);
        }

        const flasher = new window.Esp32WebFlasher(window.serialManager, logger);
        const fileArray = [];

        for (const [name, base64] of Object.entries(artifacts)) {
            const bn = name.includes('/') ? name.split('/').pop() : name;
            if (!bn.endsWith('.bin')) continue;  // 跳過 .hex / .elf

            let address;
            const hasServerMap = flashAddresses && Object.keys(flashAddresses).length > 0;
            if (hasServerMap) {
                // Server 有提供明確映射：只燒 server 清單內的檔案，其餘全部跳過
                // （避免 merged.bin 等合併映像被誤燒到錯誤地址）
                if (flashAddresses[name] === undefined) {
                    logger(`  跳過 ${name}（不在 server 燒錄清單中）`);
                    continue;
                }
                address = flashAddresses[name];
            } else {
                // 向下兼容 fallback：舊版 server 未回傳 flashAddresses 時依檔名推斷
                if (bn.includes('merged')) { logger(`  跳過 ${name}（merged binary）`); continue; }
                if (bn.includes('bootloader'))      address = 0x1000;
                else if (bn === 'boot_app0.bin')    address = 0xe000;
                else if (bn.includes('partitions')) address = 0x8000;
                else                                address = 0x10000;
                logger(`[警告] Server 未提供地址，使用檔名推斷: ${name} → 0x${address.toString(16)}`);
            }

            const data = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
            fileArray.push({ data, address });
            logger(`  ${name} → 0x${address.toString(16).toUpperCase()} (${data.length} bytes)`);
        }

        if (fileArray.length === 0) throw new Error("編譯結果中找不到任何可燒錄的 .bin 檔案");
        logger(`準備燒錄 ${fileArray.length} 個分區...`);
        await flasher.flashData(fileArray);
    }

    console.log('[Intersector] LinkIntersector 已載入並掛載 HookedWebSocket');
})();
