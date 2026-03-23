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
            "fourDigitClockDisplay.name": "4-Digit Clock Display",
            "fourDigitClockDisplay.description": "4-digit clock display module based on TM1637."
        },
        "ru": {
            "fourDigitClockDisplay.name": "4-разрядный индикатор для часов",
            "fourDigitClockDisplay.description": "4-разрядный индикатор для часов на базе TM1637."
        },
        "zh-cn": {
            "fourDigitClockDisplay.name": "4位时钟数码管",
            "fourDigitClockDisplay.description": "基于 TM1637 的4位时钟数码管。"
        },
        "zh-tw": {
            "fourDigitClockDisplay.name": "4位時鐘數碼管",
            "fourDigitClockDisplay.description": "基於 TM1637 的4位時鐘數碼管。"
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
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4-Digit Clock Display",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "clear 4-digit clock display",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "4-digit clock display show %1 at bit %2",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "4-digit clock display show number %1",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "4-digit clock display show string %1",
            "FOURDIGITCLOCKDISPLAY_INIT": "init 4-digit clock display pin DIO %1 CLK %2",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "set 4-digit clock display brightness %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "4-digit clock display set point %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "It will take effect after the next update of the display.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "off",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "on"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4-значный дисплей часов",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "Очистить 4-значный дисплей часов",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "Отобразить число %1 как бит %2 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "Отобразить число %1 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "Отобразить строку %1 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_INIT": "Инициализировать 4-разрядный дисплей часов DIO %1 CLK %2",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "установить яркость 4-разрядного дисплея часов в %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "Отобразить точку %1 на 4-разрядном дисплее часов",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "Это вступит в силу после следующего обновления дисплея.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "Выключить",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "Включить"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4位时钟数码管",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "清空4位时钟数码管",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "4位时钟数码管显示 %1 第 %2 位",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "4位时钟数码管显示数字 %1",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "4位时钟数码管显示字符 %1",
            "FOURDIGITCLOCKDISPLAY_INIT": "初始化4位时钟数码管引脚 DIO %1 CLK %2",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "设置4位时钟数码管亮度 %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "4位时钟数码管设置点 %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "将在下次更新显示后生效.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "关",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "开"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "FOURDIGITCLOCKDISPLAY_CATEGORY": "4位時鐘數碼管",
            "FOURDIGITCLOCKDISPLAY_CLEAR": "清空4位時鐘數碼管",
            "FOURDIGITCLOCKDISPLAY_DISPLAY": "4位時鐘數碼管顯示 %1 第 %2 位",
            "FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER": "4位時鐘數碼管顯示數字 %1",
            "FOURDIGITCLOCKDISPLAY_DISPLAYSTRING": "4位時鐘數碼管顯示字符 %1",
            "FOURDIGITCLOCKDISPLAY_INIT": "初始化4位時鐘數碼管管腳 DIO %1 CLK %2",
            "FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS": "設置4位時鐘數碼管亮度 %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT": "4位時鐘數碼管設置點 %1",
            "FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP": "將在下次更新顯示後生效.",
            "FOURDIGITCLOCKDISPLAY_STATE_OFF": "關閉",
            "FOURDIGITCLOCKDISPLAY_STATE_ON": "打開"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
