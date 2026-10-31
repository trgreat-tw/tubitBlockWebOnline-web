(function () {
    'use strict';

    var LOCK_ICON = 'b0e76d4308c519856f176b614b1a7880.svg';
    var UNLOCK_ICON = '66f260aa0f03d5aed3f843a05968d33d.svg';
    var browserClipboard = navigator.clipboard || null;
    var readClipboard = browserClipboard && typeof browserClipboard.readText === 'function'
        ? browserClipboard.readText.bind(browserClipboard)
        : null;
    var writeClipboard = browserClipboard && typeof browserClipboard.writeText === 'function'
        ? browserClipboard.writeText.bind(browserClipboard)
        : null;

    function addStyles() {
        if (document.getElementById('tubitblock-code-clipboard-styles')) return;

        var style = document.createElement('style');
        style.id = 'tubitblock-code-clipboard-styles';
        style.textContent = [
            '.tubitblock-code-clipboard-controls{position:absolute;z-index:47;top:-1px;right:33px;display:flex;height:34px}',
            '.tubitblock-code-clipboard-button{display:flex;align-items:center;justify-content:center;width:34px;height:34px;padding:0;border:1px solid rgba(0,0,0,.15);border-right:0;background:#fff;color:#4c97ff;outline:none}',
            '.tubitblock-code-clipboard-button:first-child{border-radius:0 0 0 .5rem}',
            '.tubitblock-code-clipboard-button:hover:not(:disabled){background:#eef5ff;cursor:pointer}',
            '.tubitblock-code-clipboard-button:focus-visible{box-shadow:inset 0 0 0 2px #4c97ff}',
            '.tubitblock-code-clipboard-button:disabled{color:#aeb8c6;background:#f5f6f8;cursor:not-allowed}',
            '.tubitblock-code-clipboard-button svg{width:17px;height:17px;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round}',
            '.tubitblock-code-clipboard-status{position:absolute;z-index:48;top:38px;right:8px;max-width:190px;padding:6px 9px;border-radius:4px;background:#1f2937;color:#fff;font:12px/1.35 Arial,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.2);pointer-events:none}'
        ].join('');
        document.head.appendChild(style);
    }

    function getWrapper(textarea) {
        return textarea && textarea.closest('[class*="code-editor-wrapper"]');
    }

    function isUnlocked(wrapper) {
        var icon = wrapper && wrapper.querySelector('button[class*="lock-button"] img');
        var src = icon && (icon.getAttribute('src') || '');
        if (src.indexOf(UNLOCK_ICON) !== -1) return true;
        if (src.indexOf(LOCK_ICON) !== -1) return false;
        return false;
    }

    function showStatus(wrapper, message) {
        var previous = wrapper.querySelector('.tubitblock-code-clipboard-status');
        if (previous) previous.remove();

        var status = document.createElement('div');
        status.className = 'tubitblock-code-clipboard-status';
        status.setAttribute('role', 'status');
        status.textContent = message;
        wrapper.appendChild(status);
        window.setTimeout(function () {
            if (status.parentNode) status.parentNode.removeChild(status);
        }, 1800);
    }

    function fallbackCopy(text) {
        var helper = document.createElement('textarea');
        helper.value = text;
        helper.setAttribute('readonly', '');
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        var copied = document.execCommand('copy');
        document.body.removeChild(helper);
        return copied ? Promise.resolve() : Promise.reject(new Error('copy failed'));
    }

    function copyCode(textarea, wrapper) {
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selected = start !== end ? textarea.value.slice(start, end) : textarea.value;
        var operation = writeClipboard ? writeClipboard(selected) : fallbackCopy(selected);
        return Promise.resolve(operation).then(function () {
            showStatus(wrapper, start !== end ? '已複製選取的程式碼' : '已複製全部程式碼');
        }).catch(function () {
            showStatus(wrapper, '無法複製，請使用 Ctrl+C');
        });
    }

    function dispatchInput(textarea, text) {
        var inserted = false;
        textarea.focus();

        try {
            inserted = document.execCommand('insertText', false, text);
        } catch (error) {
            inserted = false;
        }

        if (!inserted) {
            var start = typeof textarea.selectionStart === 'number' ? textarea.selectionStart : textarea.value.length;
            var end = typeof textarea.selectionEnd === 'number' ? textarea.selectionEnd : start;
            textarea.setRangeText(text, start, end, 'end');

            var inputEvent;
            try {
                inputEvent = new InputEvent('input', {
                    bubbles: true,
                    composed: true,
                    data: text,
                    inputType: 'insertText'
                });
            } catch (error) {
                inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, false);
            }
            textarea.dispatchEvent(inputEvent);
        }
    }

    function pasteCode(textarea, wrapper, text) {
        if (!isUnlocked(wrapper)) {
            showStatus(wrapper, '請先點鎖頭解鎖程式碼');
            return false;
        }
        if (typeof text !== 'string') return false;

        dispatchInput(textarea, text);
        showStatus(wrapper, '已貼上程式碼');
        return true;
    }

    function createIcon(paths) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('aria-hidden', 'true');
        paths.forEach(function (definition) {
            var element = document.createElementNS('http://www.w3.org/2000/svg', definition[0]);
            Object.keys(definition[1]).forEach(function (name) {
                element.setAttribute(name, definition[1][name]);
            });
            svg.appendChild(element);
        });
        return svg;
    }

    function createButton(label, paths) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'tubitblock-code-clipboard-button';
        button.setAttribute('aria-label', label);
        button.title = label;
        button.appendChild(createIcon(paths));
        button.addEventListener('mousedown', function (event) {
            event.preventDefault();
        });
        return button;
    }

    function install(textarea) {
        var wrapper = getWrapper(textarea);
        if (!wrapper || wrapper.dataset.tubitblockClipboardReady === '1') return;
        wrapper.dataset.tubitblockClipboardReady = '1';

        addStyles();

        var controls = document.createElement('div');
        controls.className = 'tubitblock-code-clipboard-controls';

        var copyButton = createButton('複製程式碼', [
            ['rect', {x: '9', y: '9', width: '13', height: '13', rx: '2'}],
            ['path', {d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'}]
        ]);
        var pasteButton = createButton('貼上程式碼', [
            ['rect', {x: '9', y: '5', width: '6', height: '4', rx: '1'}],
            ['path', {d: 'M9 7H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3'}],
            ['path', {d: 'M12 12v6m-3-3h6'}]
        ]);

        controls.appendChild(copyButton);
        controls.appendChild(pasteButton);
        wrapper.appendChild(controls);

        function syncLockState() {
            var unlocked = isUnlocked(wrapper);
            pasteButton.disabled = !unlocked;
            pasteButton.title = unlocked ? '貼上程式碼' : '請先點鎖頭解鎖後再貼上';
            textarea.setAttribute('aria-readonly', unlocked ? 'false' : 'true');

            var currentLockButton = wrapper.querySelector('button[class*="lock-button"]');
            if (currentLockButton) {
                currentLockButton.title = unlocked ? '鎖定程式碼' : '解鎖程式碼';
                currentLockButton.setAttribute('aria-label', currentLockButton.title);
            }
        }

        copyButton.addEventListener('click', function () {
            copyCode(textarea, wrapper);
        });
        pasteButton.addEventListener('click', function () {
            if (!isUnlocked(wrapper)) {
                showStatus(wrapper, '請先點鎖頭解鎖程式碼');
                return;
            }
            if (!readClipboard) {
                showStatus(wrapper, '請使用 Ctrl+V 貼上');
                return;
            }
            Promise.resolve(readClipboard()).then(function (text) {
                pasteCode(textarea, wrapper, text);
            }).catch(function () {
                showStatus(wrapper, '瀏覽器無法讀取剪貼簿，請使用 Ctrl+V');
            });
        });

        textarea.addEventListener('keydown', function (event) {
            var hasCommandModifier = event.ctrlKey || event.metaKey;
            var key = String(event.key || '').toLowerCase();

            if (!isUnlocked(wrapper)) {
                var isAllowedReadOnlyShortcut = hasCommandModifier && /^(a|c)$/.test(key);
                var isEditingKey = key.length === 1 || /^(backspace|delete|enter|tab)$/.test(key);
                if (!isAllowedReadOnlyShortcut && (hasCommandModifier || isEditingKey)) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (key === 'v' || key === 'x') {
                        showStatus(wrapper, '請先點鎖頭解鎖程式碼');
                    }
                    return;
                }
            }

            // Let Ctrl/Cmd+A reach Monaco's keybinding handler on the editor container.
            if (hasCommandModifier && /^(c|v|x)$/.test(key)) {
                event.stopPropagation();
            }
        });
        textarea.addEventListener('beforeinput', function (event) {
            if (!isUnlocked(wrapper)) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }, true);
        textarea.addEventListener('copy', function (event) {
            event.stopPropagation();
        });
        textarea.addEventListener('cut', function (event) {
            event.stopPropagation();
            if (!isUnlocked(wrapper)) event.preventDefault();
        });
        textarea.addEventListener('paste', function (event) {
            event.stopPropagation();
            if (!isUnlocked(wrapper)) {
                event.preventDefault();
                showStatus(wrapper, '請先點鎖頭解鎖程式碼');
                return;
            }
            var text = event.clipboardData && event.clipboardData.getData('text/plain');
            if (typeof text === 'string') {
                event.preventDefault();
                pasteCode(textarea, wrapper, text);
            }
        }, true);
        textarea.addEventListener('drop', function (event) {
            if (!isUnlocked(wrapper)) {
                event.preventDefault();
                event.stopPropagation();
                showStatus(wrapper, '請先點鎖頭解鎖程式碼');
            }
        }, true);

        var lockButton = wrapper.querySelector('button[class*="lock-button"]');
        if (lockButton) {
            lockButton.addEventListener('click', function () {
                window.requestAnimationFrame(syncLockState);
                window.setTimeout(syncLockState, 50);
            });
            new MutationObserver(syncLockState).observe(lockButton, {
                attributes: true,
                attributeFilter: ['src'],
                childList: true,
                subtree: true
            });
        }
        syncLockState();
    }

    function scan() {
        var editors = document.querySelectorAll('.monaco-editor textarea.inputarea');
        Array.prototype.forEach.call(editors, install);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scan, {once: true});
    } else {
        scan();
    }

    new MutationObserver(scan).observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}());
