/**
 * Electron Shim for TUbitBlock Web Deployment
 * 
 * This script provides browser-compatible stubs for Electron APIs
 * (ipcRenderer, clipboard, @electron/remote, etc.) so the Webpack-bundled
 * TUbitBlock GUI can run in a standard web browser without modifications
 * to the minified bundle code.
 *
 * It intercepts `require()` calls for 'electron', 'fs', 'path', and
 * '@electron/remote' and provides no-op or web-compatible implementations.
 */

(function () {
    'use strict';

    // ---- Global Error Handlers (MUST be first) ----
    window.onerror = function (msg, url, line, col, error) {
        console.error('[TUbitBlock Web] GLOBAL ERROR:', msg, '\n  URL:', url, '\n  Line:', line, '\n  Col:', col, '\n  Error:', error);
        return false; // Don't suppress the error
    };
    window.addEventListener('unhandledrejection', function (event) {
        console.error('[TUbitBlock Web] UNHANDLED PROMISE REJECTION:', event.reason);
        if (event.reason && event.reason.stack) {
            console.error('[TUbitBlock Web] Stack:', event.reason.stack);
        }
    });
    console.log('[TUbitBlock Web] Global error handlers installed.');

    // ---- Node.js global compatibility ----
    // Many npm packages reference `global` (Node.js global object)
    // In browsers, this must point to `window`
    if (typeof global === 'undefined') {
        window.global = window;
    }
    if (typeof self === 'undefined') {
        window.self = window;
    }

    // ---- ipcRenderer shim ----
    var _ipcListeners = {};
    const ipcRenderer = {
        on: function (channel, listener) {
            console.log('[Web] ipcRenderer.on:', channel);
            (_ipcListeners[channel] = _ipcListeners[channel] || []).push(listener);
            return ipcRenderer;
        },
        once: function (channel, listener) {
            console.log('[Web] ipcRenderer.once:', channel);
            var wrapper = function () {
                ipcRenderer.removeListener(channel, wrapper);
                listener.apply(this, arguments);
            };
            return ipcRenderer.on(channel, wrapper);
        },
        send: function (channel) {
            console.log('[Web] ipcRenderer.send:', channel);
            if (channel === 'installDriver') {
                console.log('[Web] Intercepted installDriver IPC call. Redirecting to WCH...');
                // The monkey-patched window.open will NOT be called if we just use normal location.href or a new original window.open
                // Use location.href instead of window.open to bypass popup blockers for file downloads!
                window.location.href = 'https://www.wch-ic.com/download/file?id=65';
            }
        },
        sendSync: function (channel) {
            console.log('[Web] ipcRenderer.sendSync:', channel);
            if (channel === 'getTelemetryDidOptIn') return true;
            return null;
        },
        invoke: function (channel) {
            console.log('[Web] ipcRenderer.invoke:', channel);
            if (channel === 'get-initial-project-data') {
                // Return a minimal valid Scratch 3 project JSON to bypass the
                // FETCHING_NEW_DEFAULT → storage.load() path that crashes the SB1 fallback
                return Promise.resolve(JSON.stringify({
                    targets: [{
                        isStage: true,
                        name: 'Stage',
                        variables: {},
                        lists: {},
                        broadcasts: {},
                        blocks: {},
                        comments: {},
                        currentCostume: 0,
                        costumes: [{
                            name: 'backdrop1',
                            dataFormat: 'svg',
                            assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                            md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                            rotationCenterX: 240,
                            rotationCenterY: 180
                        }],
                        sounds: [],
                        volume: 100,
                        layerOrder: 0,
                        tempo: 60,
                        videoTransparency: 50,
                        videoState: 'off',
                        textToSpeechLanguage: null
                    }, {
                        isStage: false,
                        name: 'BitTu',
                        variables: {},
                        lists: {},
                        broadcasts: {},
                        blocks: {},
                        comments: {},
                        currentCostume: 0,
                        costumes: [{
                            name: 'BitTu',
                            bitmapResolution: 2,
                            dataFormat: 'png',
                            assetId: 'BitTu',
                            md5ext: 'BitTu.png',
                            rotationCenterX: 150,
                            rotationCenterY: 150
                        }],
                        sounds: [],
                        volume: 100,
                        layerOrder: 1,
                        visible: true,
                        x: 0,
                        y: 0,
                        size: 100,
                        direction: 90,
                        draggable: false,
                        rotationStyle: 'all around'
                    }],
                    monitors: [],
                    extensions: [],
                    meta: {
                        semver: '3.0.0',
                        vm: '0.2.0',
                        agent: 'TUbitBlock-Web'
                    }
                }));
            }
            if (channel === 'getTelemetryDidOptIn') return Promise.resolve(true);
            return Promise.resolve(null);
        },
        removeListener: function (channel, listener) {
            var list = _ipcListeners[channel];
            if (list) { var i = list.indexOf(listener); if (i >= 0) list.splice(i, 1); }
            return ipcRenderer;
        },
        removeAllListeners: function (channel) {
            if (channel) { delete _ipcListeners[channel]; } else { _ipcListeners = {}; }
            return ipcRenderer;
        }
    };

    // Fire 'ready-to-show' after a short delay so listeners registered during 
    // module init can receive it (simulates Electron's main process behavior)
    setTimeout(function () {
        var listeners = _ipcListeners['ready-to-show'];
        if (listeners) {
            console.log('[Web] Firing ready-to-show event');
            listeners.slice().forEach(function (fn) { fn({}); });
        }
    }, 100);

    // ---- clipboard shim (use browser clipboard API) ----
    const clipboard = {
        readText: function () {
            // This will be overridden anyway; provide fallback
            return '';
        },
        writeText: function (text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text);
            }
        }
    };

    // ---- Electron module shim ----
    const electronModule = {
        ipcRenderer: ipcRenderer,
        clipboard: clipboard,
        shell: {
            openExternal: function (url) {
                // 重導向 wiki.openblock.cc 到 trgreat.com/tu-wiki/
                if (url && /wiki\.openblock\.cc/i.test(url)) {
                    url = 'https://trgreat.com/tu-wiki/';
                }
                if (url && /openblock\.cc/i.test(url)) {
                    url = 'https://trgreat.com/tu-wiki/';
                }
                console.log('[Web] shell.openExternal:', url);
                window.open(url, '_blank');
            }
        },
        remote: null
    };

    // ---- 全域 URL 重導向攔截器 ----
    // 編譯後的 GUI 可能繞過 shell.openExternal，直接用 window.open 或 <a> 標籤
    (function () {
        var URL_REDIRECTS = [
            { pattern: /wiki\.openblock\.cc/i, target: 'https://trgreat.com/tu-wiki/' },
            { pattern: /openblock\.cc/i, target: 'https://trgreat.com/tu-wiki/' }
        ];

        function redirectUrl(url) {
            if (!url) return url;
            for (var i = 0; i < URL_REDIRECTS.length; i++) {
                if (URL_REDIRECTS[i].pattern.test(url)) {
                    console.log('[Web] URL redirect:', url, '→', URL_REDIRECTS[i].target);
                    return URL_REDIRECTS[i].target;
                }
            }
            return url;
        }

        // 攔截 window.open
        var _originalWindowOpen = window.open;
        window.open = function (url, target, features) {
            url = redirectUrl(url);
            return _originalWindowOpen.call(window, url, target, features);
        };

        // 攔截 <a> 標籤點擊事件（捕獲階段）
        document.addEventListener('click', function (e) {
            var el = e.target;
            while (el && el.tagName !== 'A') el = el.parentElement;
            if (el && el.href) {
                var newUrl = redirectUrl(el.href);
                if (newUrl !== el.href) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(newUrl, el.target || '_blank');
                }
            }
        }, true); // 使用捕獲階段確保優先處理

        console.log('[TUbitBlock Web] URL redirect interceptors installed.');
    })();

    // ---- Mini ZIP reader: extract project.json from .tb/.sb3/.ob archives ----
    function extractProjectJSONFromZip(arrayBuffer) {
        return new Promise(function (resolve, reject) {
            var bytes = new Uint8Array(arrayBuffer);
            // Find EOCD signature from end of file
            var eocd = -1;
            for (var i = bytes.length - 22; i >= 0; i--) {
                if (bytes[i]===0x50&&bytes[i+1]===0x4B&&bytes[i+2]===0x05&&bytes[i+3]===0x06) { eocd=i; break; }
            }
            if (eocd === -1) { reject(new Error('Not a ZIP file')); return; }
            var numEntries = bytes[eocd+8]  | (bytes[eocd+9]<<8);
            var cdOffset   = bytes[eocd+16] | (bytes[eocd+17]<<8) | (bytes[eocd+18]<<16) | (bytes[eocd+19]<<24);
            var pos = cdOffset;
            for (var n = 0; n < numEntries; n++) {
                if (bytes[pos]!==0x50||bytes[pos+1]!==0x4B||bytes[pos+2]!==0x01||bytes[pos+3]!==0x02) break;
                var method = bytes[pos+10]|(bytes[pos+11]<<8);
                var compSz = bytes[pos+20]|(bytes[pos+21]<<8)|(bytes[pos+22]<<16)|(bytes[pos+23]<<24);
                var fnLen  = bytes[pos+28]|(bytes[pos+29]<<8);
                var exLen  = bytes[pos+30]|(bytes[pos+31]<<8);
                var cmtLen = bytes[pos+32]|(bytes[pos+33]<<8);
                var lhOff  = bytes[pos+42]|(bytes[pos+43]<<8)|(bytes[pos+44]<<16)|(bytes[pos+45]<<24);
                var fname  = new TextDecoder().decode(bytes.subarray(pos+46, pos+46+fnLen));
                if (fname === 'project.json') {
                    var lhFnLen = bytes[lhOff+26]|(bytes[lhOff+27]<<8);
                    var lhExLen = bytes[lhOff+28]|(bytes[lhOff+29]<<8);
                    var dataOff = lhOff + 30 + lhFnLen + lhExLen;
                    var comp    = bytes.subarray(dataOff, dataOff + compSz);
                    if (method === 0) { resolve(new TextDecoder().decode(comp)); return; }
                    if (method === 8) {
                        var ds = new DecompressionStream('deflate-raw');
                        var wr = ds.writable.getWriter(), rd = ds.readable.getReader(), chunks = [];
                        wr.write(comp); wr.close();
                        (function pump() {
                            rd.read().then(function(r) {
                                if (r.done) {
                                    var total=chunks.reduce(function(a,c){return a+c.length;},0), out=new Uint8Array(total), off=0;
                                    chunks.forEach(function(c){out.set(c,off);off+=c.length;});
                                    resolve(new TextDecoder().decode(out));
                                } else { chunks.push(r.value); pump(); }
                            }).catch(reject);
                        })();
                        return;
                    }
                    reject(new Error('Unsupported ZIP compression method: ' + method)); return;
                }
                pos += 46 + fnLen + exLen + cmtLen;
            }
            reject(new Error('project.json not found in ZIP'));
        });
    }

    // ---- @electron/remote shim ----
    const remoteModule = {
        dialog: {
            showMessageBox: function () { return Promise.resolve({ response: 0 }); },
            showMessageBoxSync: function () { return 0; },
            showOpenDialog: function (options) {
                return new Promise(function (resolve) {
                    var input = document.createElement('input');
                    input.type = 'file';
                    // 不設定 accept：macOS 對未登錄副檔名（.tb）會過濾導致無法選擇；
                    // 內容驗證（ZIP magic bytes）已在後面進行，不需要靠 accept 篩選
                    input.style.display = 'none';
                    document.body.appendChild(input);
                    var handled = false;
                    input.addEventListener('change', function () {
                        if (handled) return; handled = true;
                        if (input.parentNode) document.body.removeChild(input);
                        var file = input.files && input.files[0];
                        if (!file) { resolve({ canceled: true, filePaths: [] }); return; }
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var buf = e.target.result;
                            var header = new Uint8Array(buf, 0, 4);
                            if (header[0]===0x50 && header[1]===0x4B) {
                                // ZIP 格式（.tb/.sb3/.ob）→ 解壓取出 project.json
                                extractProjectJSONFromZip(buf).then(function (json) {
                                    window._pendingProjectJSON = json;
                                    resolve({ canceled: false, filePaths: ['/pending-project.tb'] });
                                }).catch(function (err) {
                                    console.error('[Web] 無法從 ZIP 取出 project.json:', err);
                                    resolve({ canceled: true, filePaths: [] });
                                });
                            } else {
                                // 純 JSON 格式
                                window._pendingProjectJSON = new TextDecoder().decode(buf);
                                resolve({ canceled: false, filePaths: ['/pending-project.tb'] });
                            }
                        };
                        reader.onerror = function () { resolve({ canceled: true, filePaths: [] }); };
                        reader.readAsArrayBuffer(file);
                    });
                    // 偵測使用者取消（焦點回到視窗但未選擇檔案）
                    window.addEventListener('focus', function onFocus() {
                        window.removeEventListener('focus', onFocus);
                        setTimeout(function () {
                            if (!handled) {
                                handled = true;
                                if (input.parentNode) document.body.removeChild(input);
                                resolve({ canceled: true, filePaths: [] });
                            }
                        }, 300);
                    });
                    input.click();
                });
            },
            showSaveDialog: function () { return Promise.resolve({ canceled: true }); }
        },
        getCurrentWindow: function () {
            return {
                setTitle: function () { },
                close: function () { },
                isMaximized: function () { return false; },
                minimize: function () { },
                maximize: function () { },
                unmaximize: function () { },
                on: function () { },
                removeListener: function () { }
            };
        },
        app: {
            getPath: function (name) { return '/tmp/' + name; },
            getVersion: function () { return '2.6.3-web'; }
        }
    };

    // ---- fs shim (minimal) ----
    const fsModule = {
        readFile: function (path, cb) {
            // 回傳使用者選擇的待載入專案 JSON
            if (path === '/pending-project.tb' && window._pendingProjectJSON) {
                var _json = window._pendingProjectJSON;
                window._pendingProjectJSON = null;
                if (cb) setTimeout(function () { cb(null, _json); }, 0);
                return;
            }
            // Attempt to fetch the file from the web server instead
            fetch(path.replace(/^.*\/static\//, 'static/'))
                .then(function (res) { return res.arrayBuffer(); })
                .then(function (buf) { cb(null, Buffer.from(buf)); })
                .catch(function (err) { cb(err); });
        },
        readFileSync: function () { return ''; },
        writeFile: function (path, data, cb) { if (cb) cb(null); },
        writeFileSync: function () { },
        existsSync: function () { return false; },
        mkdirSync: function () { },
        readdirSync: function () { return []; },
        statSync: function () { return { isDirectory: function () { return false; } }; }
    };

    // ---- path shim (minimal) ----
    const pathModule = {
        resolve: function () {
            var args = Array.prototype.slice.call(arguments);
            return args.join('/').replace(/\/+/g, '/');
        },
        join: function () {
            var args = Array.prototype.slice.call(arguments);
            return args.join('/').replace(/\/+/g, '/');
        },
        basename: function (p) {
            if (!p) return '';
            var parts = p.replace(/\\/g, '/').split('/');
            return parts[parts.length - 1];
        },
        dirname: function (p) {
            if (!p) return '.';
            var parts = p.replace(/\\/g, '/').split('/');
            parts.pop();
            return parts.join('/') || '.';
        },
        extname: function (p) {
            if (!p) return '';
            var dot = p.lastIndexOf('.');
            return dot > 0 ? p.substring(dot) : '';
        },
        sep: '/',
        delimiter: ':'
    };

    // ---- process shim ----
    // Build a process-like EventEmitter so @electron/remote can call process.on()
    var _processEvents = {};
    var _processShimMethods = {
        on: function (event, fn) { (_processEvents[event] = _processEvents[event] || []).push(fn); return window.process; },
        off: function (event, fn) { var list = _processEvents[event]; if (list) { var i = list.indexOf(fn); if (i >= 0) list.splice(i, 1); } return window.process; },
        once: function (event, fn) { var wrapper = function () { window.process.off(event, wrapper); fn.apply(this, arguments); }; return window.process.on(event, wrapper); },
        emit: function (event) { var list = _processEvents[event]; if (list) { var args = [].slice.call(arguments, 1); list.slice().forEach(function (fn) { fn.apply(null, args); }); } return false; },
        removeListener: function (event, fn) { return window.process.off(event, fn); },
        removeAllListeners: function (event) { if (event) { delete _processEvents[event]; } else { _processEvents = {}; } return window.process; },
        listeners: function (event) { return (_processEvents[event] || []).slice(); },
        listenerCount: function (event) { return (_processEvents[event] || []).length; },
        exit: function () { console.warn('[Web] process.exit() called - ignoring in browser'); },
        kill: function () { console.warn('[Web] process.kill() called - ignoring in browser'); },
        argv: ['browser'],
        pid: 1,
        ppid: 0,
        title: 'browser',
        arch: 'wasm',
        stdout: { write: function (s) { console.log(s); }, isTTY: false },
        stderr: { write: function (s) { console.error(s); }, isTTY: false }
    };
    if (typeof window.process === 'undefined') {
        window.process = {
            env: { NODE_ENV: 'production' },
            platform: 'browser',
            type: 'renderer',
            resourcesPath: '.',
            contextId: 'tubitblock-web-context',
            versions: { node: '0.0.0', electron: '25.0.0' },
            cwd: function () { return '/'; },
            nextTick: function (fn) { setTimeout(fn, 0); }
        };
    } else {
        if (!window.process.env) window.process.env = {};
        window.process.env.NODE_ENV = 'production';
        if (!window.process.resourcesPath) window.process.resourcesPath = '.';
        if (!window.process.contextId) window.process.contextId = 'tubitblock-web-context';
        if (!window.process.type) window.process.type = 'renderer';
        if (!window.process.versions) window.process.versions = {};
        if (!window.process.versions.electron) window.process.versions.electron = '25.0.0';
    }
    // Merge EventEmitter methods and extra properties into process
    for (var _pk in _processShimMethods) {
        if (!window.process[_pk]) {
            window.process[_pk] = _processShimMethods[_pk];
        }
    }

    // NOTE: Full Buffer shim is defined below (BufferShim). The minimal shim
    // that was here has been removed to avoid conflicts.

    // ---- EventEmitter shim (events module) ----
    function EventEmitter() {
        this._events = {};
        this._maxListeners = 10;
    }
    EventEmitter.prototype.on = function (type, listener) {
        if (!this._events[type]) this._events[type] = [];
        this._events[type].push(listener);
        return this;
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype.once = function (type, listener) {
        var self = this;
        function wrapped() {
            self.removeListener(type, wrapped);
            listener.apply(this, arguments);
        }
        wrapped.listener = listener;
        this.on(type, wrapped);
        return this;
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if (this._events[type]) {
            this._events[type] = this._events[type].filter(function (l) {
                return l !== listener && l.listener !== listener;
            });
        }
        return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (type) { delete this._events[type]; }
        else { this._events = {}; }
        return this;
    };
    EventEmitter.prototype.emit = function (type) {
        if (!this._events[type]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        var listeners = this._events[type].slice();
        for (var i = 0; i < listeners.length; i++) {
            listeners[i].apply(this, args);
        }
        return true;
    };
    EventEmitter.prototype.listeners = function (type) {
        return this._events[type] ? this._events[type].slice() : [];
    };
    EventEmitter.prototype.listenerCount = function (type) {
        return this._events[type] ? this._events[type].length : 0;
    };
    EventEmitter.prototype.setMaxListeners = function (n) {
        this._maxListeners = n;
        return this;
    };
    EventEmitter.prototype.getMaxListeners = function () {
        return this._maxListeners;
    };
    EventEmitter.prototype.prependListener = function (type, listener) {
        if (!this._events[type]) this._events[type] = [];
        this._events[type].unshift(listener);
        return this;
    };
    EventEmitter.prototype.eventNames = function () {
        return Object.keys(this._events);
    };
    EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
    };
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.defaultMaxListeners = 10;

    var eventsModule = EventEmitter;

    // ---- Buffer shim (full) ----
    var bufferModule;
    if (typeof window.Buffer !== 'undefined' && window.Buffer.alloc) {
        // If a real Buffer is available (e.g. via polyfill), use it
        bufferModule = { Buffer: window.Buffer };
    } else {
        // Provide a minimal Buffer implementation
        function BufferShim(arg, encodingOrOffset, length) {
            if (typeof arg === 'number') {
                return new Uint8Array(arg);
            }
            if (typeof arg === 'string') {
                // Handle encoding parameter (e.g., new Buffer(str, 'base64'))
                if (encodingOrOffset === 'base64') {
                    var binaryStr = atob(arg);
                    var bytes = new Uint8Array(binaryStr.length);
                    for (var k = 0; k < binaryStr.length; k++) bytes[k] = binaryStr.charCodeAt(k);
                    return bytes;
                }
                if (encodingOrOffset === 'hex') {
                    var hexBytes = new Uint8Array(arg.length / 2);
                    for (var h = 0; h < arg.length; h += 2) hexBytes[h / 2] = parseInt(arg.substr(h, 2), 16);
                    return hexBytes;
                }
                var encoder = new TextEncoder();
                return encoder.encode(arg);
            }
            if (arg instanceof ArrayBuffer) {
                return new Uint8Array(arg);
            }
            if (ArrayBuffer.isView(arg)) {
                return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
            }
            if (Array.isArray(arg)) {
                return new Uint8Array(arg);
            }
            return new Uint8Array(0);
        }
        BufferShim.from = function (data, encoding) {
            if (typeof data === 'string') {
                if (encoding === 'base64') {
                    // Decode base64 string to Uint8Array
                    var binaryStr = atob(data);
                    var bytes = new Uint8Array(binaryStr.length);
                    for (var i = 0; i < binaryStr.length; i++) {
                        bytes[i] = binaryStr.charCodeAt(i);
                    }
                    return bytes;
                }
                if (encoding === 'hex') {
                    var hexBytes = new Uint8Array(data.length / 2);
                    for (var j = 0; j < data.length; j += 2) {
                        hexBytes[j / 2] = parseInt(data.substr(j, 2), 16);
                    }
                    return hexBytes;
                }
                // Default: utf-8
                var encoder = new TextEncoder();
                return encoder.encode(data);
            }
            if (data instanceof ArrayBuffer) {
                return new Uint8Array(data);
            }
            if (ArrayBuffer.isView(data)) {
                return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
            }
            if (Array.isArray(data)) {
                return new Uint8Array(data);
            }
            return new Uint8Array(0);
        };
        BufferShim.alloc = function (size, fill) {
            var buf = new Uint8Array(size);
            if (fill !== undefined) buf.fill(fill);
            return buf;
        };
        BufferShim.allocUnsafe = function (size) {
            return new Uint8Array(size);
        };
        BufferShim.isBuffer = function (obj) {
            return obj instanceof Uint8Array;
        };
        BufferShim.concat = function (list, totalLength) {
            if (!totalLength) {
                totalLength = 0;
                for (var i = 0; i < list.length; i++) totalLength += list[i].length;
            }
            var result = new Uint8Array(totalLength);
            var offset = 0;
            for (var j = 0; j < list.length; j++) {
                result.set(list[j], offset);
                offset += list[j].length;
            }
            return result;
        };
        BufferShim.byteLength = function (string) {
            return new TextEncoder().encode(string).length;
        };
        BufferShim.isEncoding = function () { return true; };

        window.Buffer = BufferShim;
        bufferModule = { Buffer: BufferShim };
    }

    // ---- Add Buffer-compatible methods to Uint8Array if missing ----
    // UnicodeTrie and other Node.js modules call readUInt32LE, readUInt32BE, etc.
    if (!Uint8Array.prototype.readUInt32LE) {
        Uint8Array.prototype.readUInt32LE = function (offset) {
            offset = offset || 0;
            return this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24) >>> 0;
        };
    }
    if (!Uint8Array.prototype.readUInt32BE) {
        Uint8Array.prototype.readUInt32BE = function (offset) {
            offset = offset || 0;
            return ((this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]) >>> 0;
        };
    }
    if (!Uint8Array.prototype.readUInt16LE) {
        Uint8Array.prototype.readUInt16LE = function (offset) {
            offset = offset || 0;
            return this[offset] | (this[offset + 1] << 8);
        };
    }
    if (!Uint8Array.prototype.readUInt16BE) {
        Uint8Array.prototype.readUInt16BE = function (offset) {
            offset = offset || 0;
            return (this[offset] << 8) | this[offset + 1];
        };
    }
    if (!Uint8Array.prototype.readUInt8) {
        Uint8Array.prototype.readUInt8 = function (offset) {
            return this[offset || 0];
        };
    }
    if (!Uint8Array.prototype.readInt32LE) {
        Uint8Array.prototype.readInt32LE = function (offset) {
            offset = offset || 0;
            return this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
        };
    }
    if (!Uint8Array.prototype.readInt32BE) {
        Uint8Array.prototype.readInt32BE = function (offset) {
            offset = offset || 0;
            return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3];
        };
    }
    if (!Uint8Array.prototype.readFloatLE) {
        Uint8Array.prototype.readFloatLE = function (offset) {
            var view = new DataView(this.buffer, this.byteOffset, this.byteLength);
            return view.getFloat32(offset || 0, true);
        };
    }
    if (!Uint8Array.prototype.readDoubleBE) {
        Uint8Array.prototype.readDoubleBE = function (offset) {
            var view = new DataView(this.buffer, this.byteOffset, this.byteLength);
            return view.getFloat64(offset || 0, false);
        };
    }
    if (!Uint8Array.prototype.writeUInt32LE) {
        Uint8Array.prototype.writeUInt32LE = function (value, offset) {
            offset = offset || 0;
            this[offset] = value & 0xFF;
            this[offset + 1] = (value >> 8) & 0xFF;
            this[offset + 2] = (value >> 16) & 0xFF;
            this[offset + 3] = (value >> 24) & 0xFF;
        };
    }
    if (!Uint8Array.prototype.writeUInt32BE) {
        Uint8Array.prototype.writeUInt32BE = function (value, offset) {
            offset = offset || 0;
            this[offset] = (value >> 24) & 0xFF;
            this[offset + 1] = (value >> 16) & 0xFF;
            this[offset + 2] = (value >> 8) & 0xFF;
            this[offset + 3] = value & 0xFF;
        };
    }
    // toString compatible with Node.js Buffer
    var _origUint8ToString = Uint8Array.prototype.toString;
    Uint8Array.prototype.toString = function (encoding) {
        if (encoding === 'utf8' || encoding === 'utf-8') {
            return new TextDecoder().decode(this);
        }
        if (encoding === 'hex') {
            var hex = '';
            for (var i = 0; i < this.length; i++) hex += ('0' + this[i].toString(16)).slice(-2);
            return hex;
        }
        if (encoding === 'base64') {
            var binary = '';
            for (var j = 0; j < this.length; j++) binary += String.fromCharCode(this[j]);
            return btoa(binary);
        }
        return _origUint8ToString.call(this);
    };
    // copy method
    if (!Uint8Array.prototype.copy) {
        Uint8Array.prototype.copy = function (target, targetStart, sourceStart, sourceEnd) {
            targetStart = targetStart || 0;
            sourceStart = sourceStart || 0;
            sourceEnd = sourceEnd || this.length;
            for (var i = sourceStart; i < sourceEnd; i++) {
                target[targetStart++] = this[i];
            }
        };
    }
    // equals method
    if (!Uint8Array.prototype.equals) {
        Uint8Array.prototype.equals = function (other) {
            if (this.length !== other.length) return false;
            for (var i = 0; i < this.length; i++) { if (this[i] !== other[i]) return false; }
            return true;
        };
    }

    // ---- Override require() for Electron modules ----
    var _originalRequire = typeof window.require === 'function' ? window.require : null;

    window.require = function (moduleName) {
        switch (moduleName) {
            case 'electron':
                return electronModule;
            case '@electron/remote':
            case '@electron/remote/renderer':
            case '@electron/remote/renderer/index.js':
                return remoteModule;
            case 'fs':
                return fsModule;
            case 'path':
                return pathModule;
            case 'events':
                return eventsModule;
            case 'buffer':
                return bufferModule;
            case 'util':
                return {
                    inherits: function (ctor, superCtor) {
                        ctor.super_ = superCtor;
                        ctor.prototype = Object.create(superCtor.prototype, {
                            constructor: { value: ctor, enumerable: false, writable: true, configurable: true }
                        });
                    },
                    deprecate: function (fn) { return fn; },
                    isArray: Array.isArray,
                    isBuffer: function (obj) { return obj instanceof Uint8Array; },
                    isFunction: function (obj) { return typeof obj === 'function'; },
                    isString: function (obj) { return typeof obj === 'string'; },
                    isNumber: function (obj) { return typeof obj === 'number'; },
                    isObject: function (obj) { return typeof obj === 'object' && obj !== null; },
                    isUndefined: function (obj) { return obj === undefined; },
                    isNull: function (obj) { return obj === null; },
                    isNullOrUndefined: function (obj) { return obj == null; },
                    format: function () {
                        var args = Array.prototype.slice.call(arguments);
                        if (!args.length) return '';
                        var str = String(args[0]);
                        for (var i = 1; i < args.length; i++) str = str.replace(/%[sdj%]/, String(args[i]));
                        return str;
                    }
                };
            case 'stream':
            case 'readable-stream':
                // A minimal stream shim based on EventEmitter
                function Stream() { EventEmitter.call(this); }
                Stream.prototype = Object.create(EventEmitter.prototype);
                Stream.prototype.constructor = Stream;
                Stream.prototype.pipe = function (dest) { return dest; };
                Stream.Stream = Stream;
                Stream.Readable = Stream;
                Stream.Writable = Stream;
                Stream.Duplex = Stream;
                Stream.Transform = Stream;
                Stream.PassThrough = Stream;
                return Stream;
            case 'source-map-support/source-map-support.js':
            case 'source-map-support':
                return { install: function () { } };
            case 'net':
            case 'tls':
            case 'http':
            case 'https':
            case 'child_process':
            case 'os':
            case 'crypto':
                return (function () {
                    // --- Minimal MD5 implementation for crypto.createHash ---
                    function md5Bytes(input) {
                        var bytes;
                        if (typeof input === 'string') { bytes = new TextEncoder().encode(input); }
                        else if (input instanceof Uint8Array) { bytes = input; }
                        else if (ArrayBuffer.isView(input)) { bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength); }
                        else { bytes = new Uint8Array(0); }
                        function safeAdd(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); return ((x >> 16) + (y >> 16) + (lsw >> 16)) << 16 | lsw & 0xFFFF; }
                        function bitRot(n, c) { return (n << c) | (n >>> (32 - c)); }
                        function cmn(q, a, b, x, s, t) { return safeAdd(bitRot(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b); }
                        function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); }
                        function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); }
                        function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
                        function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); }
                        function core(x, len) {
                            x[len >> 5] |= 0x80 << (len % 32);
                            x[(((len + 64) >>> 9) << 4) + 14] = len;
                            var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
                            for (var i = 0; i < x.length; i += 16) {
                                var oa = a, ob = b, oc = c, od = d;
                                a = ff(a, b, c, d, x[i], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
                                a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426); c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
                                a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
                                a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
                                a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632); c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i], 20, -373897302);
                                a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
                                a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
                                a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784); c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
                                a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
                                a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
                                a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i], 11, -358537222); c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
                                a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
                                a = ii(a, b, c, d, x[i], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
                                a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606); c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
                                a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
                                a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
                                a = safeAdd(a, oa); b = safeAdd(b, ob); c = safeAdd(c, oc); d = safeAdd(d, od);
                            }
                            return [a, b, c, d];
                        }
                        var bin = [];
                        for (var i = 0; i < bytes.length * 8; i += 8) bin[i >> 5] |= (bytes[i / 8] & 0xFF) << (i % 32);
                        var hash = core(bin, bytes.length * 8);
                        var result = new Uint8Array(16);
                        for (var j = 0; j < 16; j++) result[j] = (hash[j >> 2] >>> ((j % 4) * 8)) & 0xFF;
                        return result;
                    }
                    function toHex(arr) { var h = ''; for (var i = 0; i < arr.length; i++) h += ('0' + arr[i].toString(16)).slice(-2); return h; }
                    return {
                        createHash: function () {
                            var chunks = [];
                            return {
                                update: function (data) {
                                    if (typeof data === 'string') chunks.push(new TextEncoder().encode(data));
                                    else if (data instanceof Uint8Array) chunks.push(data);
                                    else if (ArrayBuffer.isView(data)) chunks.push(new Uint8Array(data.buffer, data.byteOffset, data.byteLength));
                                    return this;
                                },
                                digest: function (encoding) {
                                    var totalLen = 0;
                                    for (var i = 0; i < chunks.length; i++) totalLen += chunks[i].length;
                                    var combined = new Uint8Array(totalLen);
                                    var offset = 0;
                                    for (var j = 0; j < chunks.length; j++) { combined.set(chunks[j], offset); offset += chunks[j].length; }
                                    var hash = md5Bytes(combined);
                                    if (encoding === 'hex') return toHex(hash);
                                    return hash;
                                }
                            };
                        },
                        randomBytes: function (size) { var b = new Uint8Array(size); window.crypto.getRandomValues(b); return b; },
                        createHmac: function () { return { update: function () { return this; }, digest: function () { return ''; } }; }
                    };
                })();
            case 'zlib':
            case 'dgram':
            case 'dns':
            case 'url':
            case 'querystring':
            case 'string_decoder':
                console.log('[Web] Returning empty stub for Node.js core module:', moduleName);
                return {};
            case 'openblock-link':
            case 'tubitblock-link':
                // The compiled GUI does require('openblock-link') to get the Link class
                // that creates a WebSocket connection to the local link server.
                // We provide a browser-compatible shim here.
                console.log('[Web] Providing openblock-link shim for:', moduleName);
                return (function () {
                    var Emitter = window.require('events');

                    function LinkShim() {
                        Emitter.call(this);
                        this._ws = null;
                        this._port = 20111;
                        this._host = '127.0.0.1';
                    }
                    LinkShim.prototype = Object.create(Emitter.prototype);
                    LinkShim.prototype.constructor = LinkShim;

                    LinkShim.prototype.listen = function (port, host) {
                        // In web mode, we don't start the server — we connect TO it
                        this._port = port || this._port;
                        this._host = host || this._host;
                        console.log('[Web] Link shim: server should be at ws://' + this._host + ':' + this._port);
                        var self = this;
                        setTimeout(function () { self.emit('ready'); }, 100);
                    };

                    return LinkShim;
                })();
            case 'openblock-resource':
            case 'tubitblock-resource':
                // The compiled GUI does require('openblock-resource') for the resource server.
                // In web mode, resources are served by the static HTTP server, so this is a no-op.
                console.log('[Web] Providing openblock-resource shim (no-op) for:', moduleName);
                return (function () {
                    var Emitter = window.require('events');

                    function ResourceShim() {
                        Emitter.call(this);
                    }
                    ResourceShim.prototype = Object.create(Emitter.prototype);
                    ResourceShim.prototype.constructor = ResourceShim;

                    ResourceShim.prototype.listen = function () {
                        var self = this;
                        setTimeout(function () { self.emit('ready'); }, 100);
                    };

                    return ResourceShim;
                })();
            default:
                if (_originalRequire) {
                    try { return _originalRequire(moduleName); }
                    catch (e) {
                        console.warn('[Web] require() fallback failed for:', moduleName);
                        return {};
                    }
                }
                console.warn('[Web] No shim for require("' + moduleName + '")');
                return {};
        }
    };

    // ---- Also handle module.exports pattern used by webpack ----
    if (typeof window.module === 'undefined') {
        window.module = { exports: {} };
    }

    console.log('[TUbitBlock Web] Electron shim loaded successfully.');

    // ---- Monkey-patch webpackJsonp to catch SB1 converter FixedAsciiString assertion ----
    // The scratch-sb1-converter (module 3197) throws "Non-ascii character in FixedAsciiString"
    // when given non-SB1 data. This is used as a fallback parser in module 650, but the error
    // can propagate to the React error boundary and crash the entire GUI. We patch the
    // original push method to wrap module 3197's SB1File constructor in a try-catch.
    if (window.webpackJsonp && Array.isArray(window.webpackJsonp)) {
        var _origPush = window.webpackJsonp.push.bind(window.webpackJsonp);
        window.webpackJsonp.push = function (chunk) {
            if (Array.isArray(chunk) && chunk[1]) {
                var origMod3197 = chunk[1][3197];
                if (origMod3197) {
                    chunk[1][3197] = function (module, exports, __webpack_require__) {
                        origMod3197.call(this, module, exports, __webpack_require__);
                        // Wrap SB1File if exported
                        if (module.exports && module.exports.SB1File) {
                            var OrigSB1File = module.exports.SB1File;
                            module.exports.SB1File = function SafeSB1File(input) {
                                try {
                                    return new OrigSB1File(input);
                                } catch (e) {
                                    console.warn('[Web] SB1File parsing skipped (not an SB1 project):', e.message);
                                    throw e; // Re-throw so the caller's catch block handles it
                                }
                            };
                        }
                    };
                }
            }
            return _origPush(chunk);
        };
    }

    // ---- Fetch Interceptor: Redirect TUbitBlock Resource Server (127.0.0.1:20112) ----
    // The TUbitBlock GUI fetches device lists, extension data, and assets from a local
    // resource server at http://127.0.0.1:20112/. In the web deployment, we intercept
    // these requests and serve them from the static ../external-resources/ directory.
    (function () {
        var _originalFetch = window.fetch;
        var RESOURCE_SERVER_RE = /^https?:\/\/127\.0\.0\.1:20112\//;
        var BASE_URL = './external-resources/';

        window.fetch = function (input, init) {
            var url = (typeof input === 'string') ? input : (input && input.url ? input.url : '');

            if (RESOURCE_SERVER_RE.test(url)) {
                // Rewrite the URL: http://127.0.0.1:20112/devices/zh-tw.json → ../external-resources/devices/zh-tw.json
                var relativePath = url.replace(RESOURCE_SERVER_RE, '');
                // Deduplicate: if path already starts with external-resources/, don't add it again
                if (relativePath.indexOf('external-resources/') === 0) {
                    relativePath = relativePath.replace('external-resources/', '');
                }
                var newUrl = BASE_URL + relativePath;
                if (!newUrl.includes('?')) newUrl += '?t=' + Date.now();
                console.log('[Web] Resource Server Redirect:', url, '→', newUrl);

                return _originalFetch.call(window, newUrl, init).then(function (response) {
                    if (!response.ok) {
                        console.warn('[Web] Resource redirect got', response.status, 'for', newUrl);
                        return response;
                    }
                    // For device JSON files, just log for debugging
                    if (newUrl.indexOf('/devices/') >= 0 && newUrl.indexOf('.json') >= 0) {
                        console.log('[Web] Device JSON loaded from:', newUrl);
                    }
                    return response;
                }).catch(function (err) {
                    console.warn('[Web] Resource redirect fetch failed for', newUrl, ':', err.message);
                    // Return an empty JSON response to prevent the app from crashing
                    return new Response('[]', {
                        status: 200,
                        statusText: 'OK',
                        headers: { 'Content-Type': 'application/json' }
                    });
                });
            }

            // Pass through all non-resource-server requests
            return _originalFetch.apply(window, arguments);
        };
        console.log('[TUbitBlock Web] Resource server fetch interceptor installed.');
    })();


    // ---- XMLHttpRequest Interceptor: Redirect Resource Server URLs ----
    // Some parts of the bundled code may use XMLHttpRequest instead of fetch.
    (function () {
        var _origXHROpen = XMLHttpRequest.prototype.open;
        var RESOURCE_SERVER_RE = /^https?:\/\/127\.0\.0\.1:20112\//;
        var BASE_URL = './external-resources/';

        XMLHttpRequest.prototype.open = function (method, url) {
            if (typeof url === 'string' && RESOURCE_SERVER_RE.test(url)) {
                var newUrl = BASE_URL + url.replace(RESOURCE_SERVER_RE, '');
                if (!newUrl.includes('?')) newUrl += '?t=' + Date.now();
                console.log('[Web] XHR Resource Redirect:', url, '→', newUrl);
                arguments[1] = newUrl;
            }
            return _origXHROpen.apply(this, arguments);
        };
        console.log('[TUbitBlock Web] XHR resource server interceptor installed.');
    })();

    // ---- DOM Element Interceptor ----
    // Rewrites src attributes on <img>, <source>, and <script> elements that point
    // to the local resource server (127.0.0.1:20112). This handles:
    // 1. React rendering <img src="http://127.0.0.1:20112/..."> for device icons
    // 2. loadjs creating <script src="http://127.0.0.1:20112/..."> for extension JS files
    (function () {
        var RESOURCE_SERVER_RE = /^https?:\/\/127\.0\.0\.1:20112\//;
        var BASE_URL = './external-resources/';

        function rewriteUrl(url) {
            if (url && RESOURCE_SERVER_RE.test(url)) {
                var relativePath = url.replace(RESOURCE_SERVER_RE, '');
                // Deduplicate: if path already starts with external-resources/, don't add it again
                if (relativePath.indexOf('external-resources/') === 0) {
                    relativePath = relativePath.replace('external-resources/', '');
                }
                var finalUrl = BASE_URL + relativePath;
                if (!finalUrl.includes('?')) finalUrl += '?t=' + Date.now();
                return finalUrl;
            }
            return null;
        }

        function rewriteSrc(el) {
            var src = el.getAttribute('src');

            // --- Intercept OpenBlock Logo ---
            if (src && src.includes('82bfb019b31f069af40d1a18b7cbfb24.svg')) {
                // Full-width text banner logo
                var newLogoSrc = './static/assets/logo.png?t=' + Date.now();
                el.setAttribute('src', newLogoSrc);
                el.style.height = '75%';
                el.style.objectFit = 'contain';
                console.log('[Web] Logo rewritten:', src, '→', newLogoSrc);
                return;
            }
            if (src && src.includes('575072545bff0feef2b50c8ca78ccf19.svg')) {
                // Small icon shown when window is narrow — use TuBit cube icon
                var newIconSrc = './static/assets/logo-icon.png?t=' + Date.now();
                el.setAttribute('src', newIconSrc);
                el.style.height = '100%';
                el.style.objectFit = 'contain';
                console.log('[Web] Logo-small rewritten:', src, '→', newIconSrc);
                return;
            }

            // --- Normal Resource Server Rewrite ---
            var newSrc = rewriteUrl(src);
            if (newSrc) {
                el.setAttribute('src', newSrc);
                console.log('[Web] Element src rewrite:', src, '→', newSrc);
            }
        }

        // ---- Script src setter override ----
        // loadjs sets script.src = 'http://127.0.0.1:20112/...' which triggers immediate loading.
        // We intercept this via the src property setter.
        var scriptSrcDescriptor = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
        if (scriptSrcDescriptor && scriptSrcDescriptor.set) {
            Object.defineProperty(HTMLScriptElement.prototype, 'src', {
                get: scriptSrcDescriptor.get,
                set: function (value) {
                    var newValue = rewriteUrl(value);
                    if (newValue) {
                        console.log('[Web] Script src rewrite:', value, '→', newValue);
                        scriptSrcDescriptor.set.call(this, newValue);
                    } else {
                        scriptSrcDescriptor.set.call(this, value);
                    }
                },
                configurable: true,
                enumerable: true
            });
            console.log('[TUbitBlock Web] Script src interceptor installed.');
        }

        // ---- MutationObserver for img/source elements ----
        function scanAllImages() {
            var imgs = document.querySelectorAll('img[src], source[src]');
            for (var i = 0; i < imgs.length; i++) {
                rewriteSrc(imgs[i]);
            }
        }

        var observer = new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var mutation = mutations[i];
                if (mutation.addedNodes) {
                    for (var j = 0; j < mutation.addedNodes.length; j++) {
                        var node = mutation.addedNodes[j];
                        if (node.nodeType === 1) {
                            if ((node.tagName === 'IMG' || node.tagName === 'SOURCE') && node.getAttribute('src')) {
                                rewriteSrc(node);
                            }
                            var children = node.querySelectorAll ? node.querySelectorAll('img[src], source[src]') : [];
                            for (var k = 0; k < children.length; k++) {
                                rewriteSrc(children[k]);
                            }
                        }
                    }
                }
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    if (mutation.target.tagName === 'IMG' || mutation.target.tagName === 'SOURCE') {
                        rewriteSrc(mutation.target);
                    }
                }
            }
        });

        function startObserver() {
            observer.observe(document.body || document.documentElement, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['src']
            });
            scanAllImages();
            console.log('[TUbitBlock Web] DOM element interceptor (MutationObserver) installed.');
        }

        if (document.body) {
            startObserver();
        } else {
            document.addEventListener('DOMContentLoaded', startObserver);
        }
    })();

    // ---- VM loadProject patch ----
    // The scratch-parser's SB3 validator (AJV schema) rejects TUbitBlock's
    // default project JSON because it omits some SB3-required fields
    // (monitors, extensions, layerOrder, comments, tempo, videoState, etc.).
    // When validation fails, loadProject falls back to the SB1 parser which
    // crashes with "Non-ascii character in FixedAsciiString" on the JSON string.
    // This patch bypasses the validator entirely: it JSON-parses the input,
    // sets projectVersion = 3, and calls deserializeProject directly.
    (function () {
        console.log('[TUbitBlock Web] Installing VM loadProject patch...');

        // Poll for the VM to become available (created by React)
        var patchInterval = setInterval(function () {
            // Look for the VM in React fiber tree
            var vm = window.vm;
            if (!vm) {
                var allElements = document.querySelectorAll('*');
                for (var i = 0; i < allElements.length; i++) {
                    var el = allElements[i];
                    for (var key in el) {
                        if (key.indexOf('__reactFiber$') === 0 || key.indexOf('__reactInternalInstance$') === 0) {
                            var fiber = el[key];
                            while (fiber) {
                                if (fiber.stateNode && fiber.stateNode.props && fiber.stateNode.props.vm) {
                                    vm = fiber.stateNode.props.vm;
                                    window.vm = vm;
                                    break;
                                }
                                fiber = fiber.return;
                            }
                            if (vm) break;
                        }
                    }
                    if (vm) break;
                }
            }

            if (!vm || !vm.loadProject || vm._webPatched) return;

            var origLoadProject = vm.loadProject.bind(vm);

            vm.loadProject = function (input) {
                console.log('[TUbitBlock Web] loadProject intercepted, type:', typeof input);

                // Convert input to a JSON object
                var projectJSON;
                try {
                    if (typeof input === 'string') {
                        projectJSON = JSON.parse(input);
                    } else if (typeof input === 'object' && !(input instanceof ArrayBuffer) && !ArrayBuffer.isView(input)) {
                        projectJSON = input;
                    } else if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
                        // Binary input — extract project.json from ZIP (.tb/.sb3/.ob)
                        var buf = input instanceof ArrayBuffer ? input : input.buffer;
                        var header = new Uint8Array(buf, 0, 4);
                        if (header[0] === 0x50 && header[1] === 0x4B) {
                            return extractProjectJSONFromZip(buf).then(function (json) {
                                var pj;
                                try { pj = JSON.parse(json); } catch (e) { pj = json; }
                                if (pj.targets && pj.meta) {
                                    pj.projectVersion = 3;
                                } else if (pj.objName) {
                                    pj.projectVersion = 2;
                                } else {
                                    return origLoadProject(input);
                                }
                                return vm.deserializeProject(pj, null)
                                    .then(function () {
                                        vm.runtime.emitProjectLoaded();
                                        console.log('[TUbitBlock Web] Project loaded successfully, targets:', vm.runtime.targets.length);
                                    })
                                    .catch(function (error) {
                                        console.error('[TUbitBlock Web] deserializeProject failed:', error);
                                        return Promise.reject(error);
                                    });
                            }).catch(function (err) {
                                console.error('[TUbitBlock Web] Failed to extract ZIP:', err);
                                return origLoadProject(input);
                            });
                        }
                        console.log('[TUbitBlock Web] Binary project data (non-ZIP), using original loadProject');
                        return origLoadProject(input);
                    } else {
                        projectJSON = JSON.parse(JSON.stringify(input));
                    }
                } catch (parseError) {
                    console.error('[TUbitBlock Web] Failed to parse project JSON:', parseError);
                    return origLoadProject(input);
                }

                // Determine version
                if (projectJSON.targets && projectJSON.meta) {
                    // SB3 format (Scratch 3.0)
                    projectJSON.projectVersion = 3;
                    console.log('[TUbitBlock Web] Detected SB3 format, skipping validator');
                } else if (projectJSON.objName) {
                    // SB2 format (Scratch 2.0)
                    projectJSON.projectVersion = 2;
                    console.log('[TUbitBlock Web] Detected SB2 format, skipping validator');
                } else {
                    // Unknown format — try original path
                    console.warn('[TUbitBlock Web] Unknown project format, using original loadProject');
                    return origLoadProject(input);
                }

                // Call deserializeProject directly (skipping the broken validator)
                return vm.deserializeProject(projectJSON, null)
                    .then(function () {
                        vm.runtime.emitProjectLoaded();
                        console.log('[TUbitBlock Web] Project loaded successfully, targets:', vm.runtime.targets.length);
                    })
                    .catch(function (error) {
                        console.error('[TUbitBlock Web] deserializeProject failed:', error);
                        return Promise.reject(error);
                    });
            };

            vm._webPatched = true;
            clearInterval(patchInterval);
            console.log('[TUbitBlock Web] VM loadProject patched successfully.');
        }, 500);

        // Stop polling after 30 seconds
        setTimeout(function () {
            clearInterval(patchInterval);
        }, 30000);

        // ---- Redux Store Patcher: Prevent crash on dispatch(undefined) ----
        // Some action creators (like onLoadedProject) may return undefined if 
        // the state is unexpected, causing Redux to crash when accessing .type.
        var storeInterval = setInterval(function () {
            var store;
            // Search for store in React fiber tree
            var el = document.getElementById('app') || document.querySelector('.flex-row');
            if (el) {
                var keys = Object.keys(el);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (key.indexOf('__reactFiber$') === 0 || key.indexOf('__reactInternalInstance$') === 0) {
                        var fiber = el[key];
                        while (fiber) {
                            if (fiber.memoizedProps && fiber.memoizedProps.store) {
                                store = fiber.memoizedProps.store;
                                break;
                            }
                            if (fiber.stateNode && fiber.stateNode.store) {
                                store = fiber.stateNode.store;
                                break;
                            }
                            fiber = fiber.return;
                        }
                    }
                    if (store) break;
                }
            }

            if (store && store.dispatch && !store._webPatched) {
                var origDispatch = store.dispatch;
                store.dispatch = function (action) {
                    if (!action || typeof action !== 'object' || !action.type) {
                        if (!action) {
                            console.warn('[TUbitBlock Web] Intercepted undefined/null action dispatch');
                        } else {
                            console.warn('[TUbitBlock Web] Intercepted invalid action dispatch (missing type):', action);
                        }
                        return;
                    }
                    return origDispatch.call(store, action);
                };
                store._webPatched = true;
                clearInterval(storeInterval);
                console.log('[TUbitBlock Web] Redux dispatch patched successfully.');
            }
        }, 500);

        setTimeout(function () {
            clearInterval(storeInterval);
        }, 30000);
    })();

    // ---- Runtime Brand Patcher: Replace display text, redirect links, hide elements ----
    // The compiled webpack bundles contain hardcoded strings and links.
    // This section uses MutationObserver to patch them after React renders the DOM.
    (function () {
        // ---- 文字替換規則 (較長/精確的放前面) ----
        var BRAND_MAP = [
            [/OpenBlockDesktop/g, 'TUbitBlockDesktop'],
            [/OpenBlock\.cc/g, 'TUbitBlock'],
            [/OpenBlock專案/g, '未命名專案'],
            [/OpenBlock/g, 'TUbitBlock'],
            [/上傳韌體/g, '燒錄程式'],
            [/編程模式/g, '程式設計模式'],
            [/教程/g, '課程'],
            [/維基/g, '說明']
        ];

        // ---- 超連結重導向規則 ----
        var LINK_REDIRECTS = {
            'https://wiki.openblock.cc': 'https://trgreat.com/tu-wiki/',
            'https://wiki.openblock.cc/': 'https://trgreat.com/tu-wiki/',
            'http://wiki.openblock.cc': 'https://trgreat.com/tu-wiki/',
            'http://wiki.openblock.cc/': 'https://trgreat.com/tu-wiki/'
        };
        var TUTORIAL_URL = 'https://trgreat.com/tubit-%e5%9f%ba%e7%a4%8e%e5%85%a5%e9%96%80%e8%aa%b2%e7%a8%8b/';

        // ---- 要隱藏的選單項目 (依文字內容比對) ----
        var HIDDEN_ITEMS = ['關於', '許可證', '許可証', '许可证', '隱私政策', '隐私政策', '數據政策', '數據設置', '数据设置', 'About', 'License', 'Privacy Policy', 'Data settings'];

        function patchText(text) {
            var result = text;
            for (var i = 0; i < BRAND_MAP.length; i++) {
                result = result.replace(BRAND_MAP[i][0], BRAND_MAP[i][1]);
            }
            return result;
        }

        // ---- Monkey-patch window.open (攔截安裝驅動等原生開啟行為) ----
        (function () {
            var _origWindowOpen = window.open;
            window.open = function (url, target, features) {
                if (typeof url === 'string') {
                    var lowerUrl = url.toLowerCase();
                    // 攔截安裝驅動 (如果 URL 中包含 driver 或 ch34 或 hardware)
                    if (lowerUrl.indexOf('driver') >= 0 || lowerUrl.indexOf('ch34') >= 0 || lowerUrl.indexOf('hardware') >= 0) {
                        url = 'https://www.wch-ic.com/download/file?id=65';
                        console.log('[Web] Intercepted window.open for Driver:', url);
                    } else if (lowerUrl.indexOf('wiki.openblock.cc') >= 0 || lowerUrl.indexOf('openblock.cc') >= 0) {
                        url = 'https://trgreat.com/tu-wiki/';
                        console.log('[Web] Intercepted window.open for Wiki:', url);
                    }
                }
                return _origWindowOpen.call(window, url, target, features);
            };
        })();

        // ---- Monkey-patch input.value setter 攔截 React 受控輸入 ----
        (function () {
            var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
            if (desc && desc.set) {
                var originalSet = desc.set;
                Object.defineProperty(HTMLInputElement.prototype, 'value', {
                    get: desc.get,
                    set: function (val) {
                        if (typeof val === 'string') {
                            val = patchText(val);
                        }
                        return originalSet.call(this, val);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        })();

        // ---- Monkey-patch 攔截存檔副檔名 (將 .ob / .sb3 改為 .tb) ----
        (function () {
            // 攔截 a.download = 'xxx.ob'
            var anchorDesc = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, 'download');
            if (anchorDesc && anchorDesc.set) {
                var origAnchorSet = anchorDesc.set;
                Object.defineProperty(HTMLAnchorElement.prototype, 'download', {
                    get: anchorDesc.get,
                    set: function (val) {
                        if (typeof val === 'string') {
                            val = val.replace(/\.(ob|sb3)$/i, '.tb');
                            val = patchText(val);
                        }
                        return origAnchorSet.call(this, val);
                    },
                    configurable: true,
                    enumerable: true
                });
            }

            // 攔截 a.setAttribute('download', 'xxx.ob')
            var _origSetAttribute = Element.prototype.setAttribute;
            Element.prototype.setAttribute = function (name, value) {
                if (name === 'download' && typeof value === 'string') {
                    value = value.replace(/\.(ob|sb3)$/i, '.tb');
                    value = patchText(value);
                }
                return _origSetAttribute.call(this, name, value);
            };
        })();

        function patchTextNodes(root) {
            var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
            var node;
            while ((node = walker.nextNode())) {
                var patched = patchText(node.nodeValue);
                if (patched !== node.nodeValue) {
                    node.nodeValue = patched;
                }
            }
        }

        // 替換 input/textarea 的 value 和 placeholder
        function patchInputs(root) {
            var inputs = root.querySelectorAll ? root.querySelectorAll('input, textarea') : [];
            for (var i = 0; i < inputs.length; i++) {
                var el = inputs[i];
                if (el.value) {
                    var pv = patchText(el.value);
                    if (pv !== el.value) el.value = pv;
                }
                if (el.placeholder) {
                    var pp = patchText(el.placeholder);
                    if (pp !== el.placeholder) el.placeholder = pp;
                }
            }
        }

        // 重導向連結
        function patchLinks(root) {
            var links = root.querySelectorAll ? root.querySelectorAll('a[href]') : [];
            for (var i = 0; i < links.length; i++) {
                var href = links[i].getAttribute('href');
                var text = (links[i].textContent || '').trim().toLowerCase();

                // 安裝驅動大按鈕直接下載官方 exe
                if (text.indexOf('安裝驅動') >= 0 || text.indexOf('install driver') >= 0 || text.indexOf('安装驱动') >= 0 || text.indexOf('安裝 usb 驅動') >= 0) {
                    var driverUrl = 'https://www.wch-ic.com/download/file?id=65';
                    if (href !== driverUrl) {
                        links[i].setAttribute('href', driverUrl);
                        console.log('[Web] Driver link redirect:', text, '→', driverUrl);
                    }
                    continue;
                }

                // 維基連結重導向
                if (href && LINK_REDIRECTS[href]) {
                    links[i].setAttribute('href', LINK_REDIRECTS[href]);
                    console.log('[Web] Link redirect:', href, '→', LINK_REDIRECTS[href]);
                }
                // 教程/課程連結重導向 (比對 tutorials 或 openblock 教程相關 URL)
                if (href && (href.indexOf('tutorials') >= 0 || href.indexOf('learn') >= 0)) {
                    links[i].setAttribute('href', TUTORIAL_URL);
                    console.log('[Web] Tutorial link redirect:', href, '→', TUTORIAL_URL);
                }
            }
        }

        // 隱藏不需要的選單項目
        function hideUnwantedItems(root) {
            function processHide(el) {
                var text = (el.textContent || '').trim();
                for (var j = 0; j < HIDDEN_ITEMS.length; j++) {
                    if (text === HIDDEN_ITEMS[j]) {
                        el.style.display = 'none';
                        console.log('[Web] Hidden menu item:', text);
                    }
                }
            }

            // 檢查根節點本身
            if (root.nodeType === Node.ELEMENT_NODE && (root.tagName === 'LI' || root.tagName === 'A' || root.tagName === 'BUTTON' || root.tagName === 'DIV' || root.tagName === 'SPAN')) {
                processHide(root);
            }

            // 搜尋所有可點擊子元素 
            var candidates = root.querySelectorAll ? root.querySelectorAll('li, div[class*="menu"], a, button, span[role="menuitem"], li[class*="menu_menu-item_"]') : [];
            for (var i = 0; i < candidates.length; i++) {
                processHide(candidates[i]);
            }
        }

        // Patch the document title
        function patchTitle() {
            if (document.title && document.title.indexOf('OpenBlock') >= 0) {
                document.title = patchText(document.title);
            }
        }

        // Run when DOM is ready
        function patchExtensionIcons(node) {
            if (!node || !node.querySelectorAll) return;

            function _applyTextSvgToElement(element, targetElement, prop) {
                var container = element.parentElement;
                var text = '';
                for (var k = 0; k < 4; k++) {
                    if (!container) break;
                    text = container.innerText || container.textContent || '';
                    text = text.trim();
                    if (text && text.length > 0) break;
                    container = container.parentElement;
                }

                if (text && text.length > 0) {
                    var firstChar = text.charAt(0).toUpperCase();
                    var colors = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#FF9800', '#FF5722', '#795548', '#607D8B'];
                    var colorIndex = text.charCodeAt(0) % colors.length;
                    var bgColor = colors[colorIndex];

                    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">' +
                        '<circle cx="30" cy="30" r="30" fill="' + bgColor + '"/>' +
                        '<text x="30" y="40" font-family="sans-serif" font-size="30" font-weight="bold" fill="white" text-anchor="middle">' + firstChar + '</text>' +
                        '</svg>';
                    var dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

                    element.dataset.iconPatched = "true";
                    if (prop === 'src') {
                        targetElement.src = dataUri;
                    } else if (prop === 'backgroundImage') {
                        targetElement.style.backgroundImage = 'url("' + dataUri + '")';
                        targetElement.style.backgroundSize = 'contain';
                    }
                }
            }

            // Patch .scratchCategoryItemIcon divs (Sidebar Palette)
            var divs = node.querySelectorAll('.scratchCategoryItemIcon');
            for (var j = 0; j < divs.length; j++) {
                var div = divs[j];
                if (div.dataset.iconPatched) continue;
                var styleBg = div.style.backgroundImage || '';
                if (!styleBg || styleBg.indexOf('/extensions/') === -1) continue;
                _applyTextSvgToElement(div, div, 'backgroundImage');
            }

            // If the node itself is one of the targets (from mutation observer attribute check)
            if (node.classList && node.classList.contains('scratchCategoryItemIcon') && !node.dataset.iconPatched) {
                var styleBg2 = node.style.backgroundImage || '';
                if (styleBg2 && styleBg2.indexOf('/extensions/') !== -1) {
                    _applyTextSvgToElement(node, node, 'backgroundImage');
                }
            }
        }

        function startPatching() {
            patchTextNodes(document.body);
            patchInputs(document.body);
            patchLinks(document.body);
            hideUnwantedItems(document.body);
            patchExtensionIcons(document.body);
            patchTitle();

            // Watch for React re-renders
            var observer = new MutationObserver(function (mutations) {
                for (var i = 0; i < mutations.length; i++) {
                    var m = mutations[i];
                    if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                            var node = m.addedNodes[j];
                            if (node.nodeType === Node.TEXT_NODE) {
                                var p = patchText(node.nodeValue);
                                if (p !== node.nodeValue) node.nodeValue = p;
                            } else if (node.nodeType === Node.ELEMENT_NODE) {
                                patchTextNodes(node);
                                patchInputs(node);
                                patchLinks(node);
                                hideUnwantedItems(node);
                                patchExtensionIcons(node);
                            }
                        }
                    } else if (m.type === 'characterData') {
                        var p2 = patchText(m.target.nodeValue);
                        if (p2 !== m.target.nodeValue) m.target.nodeValue = p2;
                    } else if (m.type === 'attributes') {
                        patchExtensionIcons(m.target);
                    }
                }
                patchTitle();
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true,
                attributeFilter: ['src', 'style']
            });

            console.log('[TUbitBlock Web] Brand patcher installed.');
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startPatching);
        } else {
            startPatching();
        }
    })();

})();

