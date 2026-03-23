// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {
        "en": {
            "chineseTTS.name": "Chinese TTS",
            "chineseTTS.description": "Text to speech module based on SYN6288, support Chinese and English letters and numbers."
        },
        "ru": {
            "chineseTTS.name": "Перевод текста в речь на китайском",
            "chineseTTS.description": "Модуль преобразования текста в речь на основе SYN6288, поддерживает китайские и английские буквы и цифры."
        },
        "zh-cn": {
            "chineseTTS.name": "中文 TTS",
            "chineseTTS.description": "基于 SYN6288 的语音合成模块, 支持中文、英文字母以及数字。"
        },
        "zh-tw": {
            "chineseTTS.name": "中文 TTS",
            "chineseTTS.description": "基於 SYN6288 的語音合成模塊, 支持中文、英文字母以及數字。"
        }
    }
    ;
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "CHINESETTS_CATEGORY": "Chinese TTS",
            "CHINESETTS_INIT": "init chinese TTS module pin RX %1 TX %2",
            "CHINESETTS_PLAYSOUND": "chinese TTS module play sound %1",
            "CHINESETTS_PLAYSOUNDUNTILLFINISH": "chinese TTS module play sound %1 untill finish",
            "CHINESETTS_SAY": "chinese TTS module say %1",
            "CHINESETTS_SAYUNTILLFINISH": "chinese TTS module say %1 untill finish",
            "CHINESETTS_SETPOWERONPROMPT": "chinese TTS module set sound of power on prompt %1",
            "CHINESETTS_SETSPEECHRATE": "chinese TTS module set speech rate %1",
            "CHINESETTS_SETVOLUME": "chinese TTS module set volume %1",
            "CHINESETTS_STATE_OFF": "off"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "CHINESETTS_CATEGORY": "Модуль текст-в-речь на китайском",
            "CHINESETTS_INIT": "Инициализировать модуль текст-в-речь на китайском пины RX %1 TX %2",
            "CHINESETTS_PLAYSOUND": "Модуль текст-в-речь на китайском проиграет звук %1",
            "CHINESETTS_PLAYSOUNDUNTILLFINISH": "Модуль текст-в-речь на китайском проиграет звук %1 до конца",
            "CHINESETTS_SAY": "Модуль текст-в-речь на китайском скажет %1",
            "CHINESETTS_SAYUNTILLFINISH": "Модуль текст-в-речь на китайском скажет %1 до конка",
            "CHINESETTS_SETPOWERONPROMPT": "Модулю текст-в-речь на китайском установить звук включения подсказки %1",
            "CHINESETTS_SETSPEECHRATE": "Модулю текст-в-речь на китайском установить скорость речи %1",
            "CHINESETTS_SETVOLUME": "Модулю текст-в-речь на китайском установить громкость %1",
            "CHINESETTS_STATE_OFF": "Выключить"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "CHINESETTS_CATEGORY": "中文 TTS",
            "CHINESETTS_INIT": "初始化中文 TTS 模块引脚 RX %1 TX %2",
            "CHINESETTS_PLAYSOUND": "中文 TTS 模块播放音效 %1",
            "CHINESETTS_PLAYSOUNDUNTILLFINISH": "中文 TTS 模块播放音效 %1 直到完成",
            "CHINESETTS_SAY": "中文 TTS 模块说 %1",
            "CHINESETTS_SAYUNTILLFINISH": "中文 TTS 模块说 %1 直到完成",
            "CHINESETTS_SETPOWERONPROMPT": "中文 TTS 模块设置上电提示音效 %1",
            "CHINESETTS_SETSPEECHRATE": "中文 TTS 模块设置语速 %1",
            "CHINESETTS_SETVOLUME": "中文 TTS 模块设置音量 %1",
            "CHINESETTS_STATE_OFF": "关闭"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "CHINESETTS_CATEGORY": "中文 TTS",
            "CHINESETTS_INIT": "初始化中文 TTS 模塊管腳 RX %1 TX %2",
            "CHINESETTS_PLAYSOUND": "中文 TTS 模塊播放音效 %1",
            "CHINESETTS_PLAYSOUNDUNTILLFINISH": "中文 TTS 模塊播放音效 %1 直到完成",
            "CHINESETTS_SAY": "中文 TTS 模塊說 %1",
            "CHINESETTS_SAYUNTILLFINISH": "中文 TTS 模塊說 %1 直到完成",
            "CHINESETTS_SETPOWERONPROMPT": "中文 TTS 模塊設置上電提示音效 %1",
            "CHINESETTS_SETSPEECHRATE": "中文 TTS 模塊設置語速 %1",
            "CHINESETTS_SETVOLUME": "中文 TTS 模塊設置音量 %1",
            "CHINESETTS_STATE_OFF": "關閉"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
