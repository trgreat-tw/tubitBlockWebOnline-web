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
            "eightDigitDisplay.name": "8-Digit Display",
            "eightDigitDisplay.description": "8-digit display module based on MAX7219."
        },
        "ru": {
            "eightDigitDisplay.name": "8-разрядный дисплей",
            "eightDigitDisplay.description": "8-разрядный дисплейный модуль на базе MAX7219."
        },
        "zh-cn": {
            "eightDigitDisplay.name": "8位数码管",
            "eightDigitDisplay.description": "基于 MAX7219 的8位数码管。"
        },
        "zh-tw": {
            "eightDigitDisplay.name": "8位數碼管",
            "eightDigitDisplay.description": "基於 MAX7219 的8位數碼管。"
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
            "EIGHTDIGITDISPLAY_CATEGORY": "8-Digit Display",
            "EIGHTDIGITDISPLAY_CLEAR": "clear 8-digit display",
            "EIGHTDIGITDISPLAY_DISPLAYNUMBER": "8-digit display show number %1 decimal %2",
            "EIGHTDIGITDISPLAY_INIT": "init 8-digit display pin DIN %1 CS %2 CLK %3",
            "EIGHTDIGITDISPLAY_SETBRIGHTNESS": "set 8-digit display brightness %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "EIGHTDIGITDISPLAY_CATEGORY": "8-разрядный дисплей",
            "EIGHTDIGITDISPLAY_CLEAR": "Очистить 8-разрядный дисплей",
            "EIGHTDIGITDISPLAY_DISPLAYNUMBER": "8-разрядный дисплей показывает число %1 десятичный %2",
            "EIGHTDIGITDISPLAY_INIT": "init 8-разрядный контакт дисплея DIN %1 CS %2 CLK %3",
            "EIGHTDIGITDISPLAY_SETBRIGHTNESS": "установить яркость 8-разрядного дисплея %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "EIGHTDIGITDISPLAY_CATEGORY": "8位数码管",
            "EIGHTDIGITDISPLAY_CLEAR": "清空8位数码管",
            "EIGHTDIGITDISPLAY_DISPLAYNUMBER": "8位数码管显示数字 %1 保留小数点后 %2 位",
            "EIGHTDIGITDISPLAY_INIT": "初始化 8位数码管引脚 DIN %1 CS %2 CLK %3",
            "EIGHTDIGITDISPLAY_SETBRIGHTNESS": "设置8位数码管亮度 %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "EIGHTDIGITDISPLAY_CATEGORY": "8位數碼管",
            "EIGHTDIGITDISPLAY_CLEAR": "清空8位數碼管",
            "EIGHTDIGITDISPLAY_DISPLAYNUMBER": "8位數碼管顯示數字 %1 保留小數點後 %2 位",
            "EIGHTDIGITDISPLAY_INIT": "初始化 8位數碼管管腳 DIN %1 CS %2 CLK %3",
            "EIGHTDIGITDISPLAY_SETBRIGHTNESS": "設置8位數碼管亮度 %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
