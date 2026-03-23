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
            "shiftDigitDisplay.name": "Shift Digit Display",
            "shiftDigitDisplay.description": "Digital dislapy based on 74HC595 with dynamic scanning display."
        },
        "ru": {
            "shiftDigitDisplay.name": "Цифровой дисплей со сдвигом",
            "shiftDigitDisplay.description": "Цифровой дисплей на базе 74HC595 с динамической разверткой дисплея."
        },
        "zh-cn": {
            "shiftDigitDisplay.name": "七段顯示器",
            "shiftDigitDisplay.description": "使用动态扫描方式显示的基于 74HC595 的顯示器。"
        },
        "zh-tw": {
            "shiftDigitDisplay.name": "七段顯示器",
            "shiftDigitDisplay.description": "使用動態掃描方式顯示的基於 74HC595 的顯示器。"
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
            "SHIFTDIGITDISPLAY_CATEGORY": "Shift Digit Display",
            "SHIFTDIGITDISPLAY_DISPLAYNUMBER": "shift digit display display number %1 decimal %2",
            "SHIFTDIGITDISPLAY_DISPLAYSTRING": "shift digit display display string %1",
            "SHIFTDIGITDISPLAY_INIT": "init shift digit display length %1 pin SCLK %2 RCLK %3 DIO %4",
            "SHIFTDIGITDISPLAY_REFRESH_TOOLTIP": "This command will block the program.",
            "SHIFTDIGITDISPLAY_SHOW": "shift digit display show for %1 ms"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "SHIFTDIGITDISPLAY_CATEGORY": "Цифровой дисплей со сдвигом\n ",
            "SHIFTDIGITDISPLAY_DISPLAYNUMBER": "цифровому индикатору отобразить число %1 десятичное %2",
            "SHIFTDIGITDISPLAY_DISPLAYSTRING": "цифровому индикатору отобразить строку %1",
            "SHIFTDIGITDISPLAY_INIT": "инициализировать сдвиговый дисплей %1 пин SCLK %2 RCLK %3 DIO %4",
            "SHIFTDIGITDISPLAY_REFRESH_TOOLTIP": "Эта команда заблокирует программу.",
            "SHIFTDIGITDISPLAY_SHOW": "цифровому индикатору отобразить на %1 мс"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SHIFTDIGITDISPLAY_CATEGORY": "七段顯示器",
            "SHIFTDIGITDISPLAY_DISPLAYNUMBER": "七段顯示器显示数字 %1 保留小数点后 %2 位",
            "SHIFTDIGITDISPLAY_DISPLAYSTRING": "七段顯示器显示字符串 %1",
            "SHIFTDIGITDISPLAY_INIT": "初始化七段顯示器 长度 %1 引脚 SCLK %2 RCLK %3 DIO %4",
            "SHIFTDIGITDISPLAY_REFRESH_TOOLTIP": "这条指令将会阻塞程序。",
            "SHIFTDIGITDISPLAY_SHOW": "七段顯示器显示 %1 ms"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "SHIFTDIGITDISPLAY_CATEGORY": "七段顯示器",
            "SHIFTDIGITDISPLAY_DISPLAYNUMBER": "七段顯示器顯示數字 %1 保留小數點後 %2 位",
            "SHIFTDIGITDISPLAY_DISPLAYSTRING": "七段顯示器顯示字符串 %1",
            "SHIFTDIGITDISPLAY_INIT": "初始化七段顯示器 長度 %1 管腳 SCLK %2 RCLK %3 DIO %4",
            "SHIFTDIGITDISPLAY_REFRESH_TOOLTIP": "這條指令將會阻塞程序。",
            "SHIFTDIGITDISPLAY_SHOW": "七段顯示器顯示 %1 ms"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
