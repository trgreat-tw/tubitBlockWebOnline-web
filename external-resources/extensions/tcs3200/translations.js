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
            "tcs3200.description": "Color sensor module based on TCS3200."
        },
        "ru": {
            "tcs3200.description": "Модуль датчика цвета на базе TCS3200."
        },
        "zh-cn": {
            "tcs3200.description": "基于 TCS3200 的颜色传感器模块。"
        },
        "zh-tw": {
            "tcs3200.description": "基於 TCS3200 的顏色傳感器模塊。"
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
            "TCS3200_CALIBRATEBLACK": "tcs3200 calibrate black",
            "TCS3200_CALIBRATEWHITE": "tcs3200 calibrate white",
            "TCS3200_CATEGORY": "TCS3200",
            "TCS3200_COLOR_BLUE": "blue",
            "TCS3200_COLOR_GREEN": "green",
            "TCS3200_COLOR_RED": "red",
            "TCS3200_GETCOLORVALUE": "tcs3200 get %1 value",
            "TCS3200_INIT": "init tcs3200 pin S0 %1 S1 %2 S2 %3 S3 %4 S5 %5",
            "TCS3200_INIT_TOOLTIP": "The out pin is fixed: Arduino Uno pin 5, Arduino Leonardo pin 12, Arduino Mega pin 47",
            "TCS3200_MEASURECOLOR": "tcs3200 measure color"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TCS3200_CALIBRATEBLACK": "tcs3200 калибровать черный",
            "TCS3200_CALIBRATEWHITE": "tcs3200 калибровать белый",
            "TCS3200_CATEGORY": "TCS3200",
            "TCS3200_COLOR_BLUE": "синий",
            "TCS3200_COLOR_GREEN": "зеленый",
            "TCS3200_COLOR_RED": "красный",
            "TCS3200_GETCOLORVALUE": "tcs3200 получить %1  значение",
            "TCS3200_INIT": "инициализировать tcs3200 пины S0 %1 S1 %2 S2 %3 S3 %4 S5 %5",
            "TCS3200_INIT_TOOLTIP": "Выходной контакт фиксирован: Arduino Uno, контакт 5, Arduino Leonardo, контакт 12, Arduino Mega, контакт 47.",
            "TCS3200_MEASURECOLOR": "tcs3200 измерить цвет"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TCS3200_CALIBRATEBLACK": "tcs3200 校准黑色",
            "TCS3200_CALIBRATEWHITE": "tcs3200 校准白色",
            "TCS3200_CATEGORY": "TCS3200",
            "TCS3200_COLOR_BLUE": "蓝色",
            "TCS3200_COLOR_GREEN": "绿色",
            "TCS3200_COLOR_RED": "红色",
            "TCS3200_GETCOLORVALUE": "tcs3200 获取 %1 数值",
            "TCS3200_INIT": "初始化 tcs3200 引脚 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5",
            "TCS3200_INIT_TOOLTIP": "OUT 引脚是固定的: Arduino Uno 引脚 5, Arduino Leonardo 引脚 12, Arduino Mega 引脚 47",
            "TCS3200_MEASURECOLOR": "tcs3200 测量颜色"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TCS3200_CALIBRATEBLACK": "tcs3200 校準黑色",
            "TCS3200_CALIBRATEWHITE": "tcs3200 校準白色",
            "TCS3200_CATEGORY": "TCS3200",
            "TCS3200_COLOR_BLUE": "藍色",
            "TCS3200_COLOR_GREEN": "綠色",
            "TCS3200_COLOR_RED": "紅色",
            "TCS3200_GETCOLORVALUE": "tcs3200 獲取 %1 數值",
            "TCS3200_INIT": "初始化 tcs3200 管腳 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5",
            "TCS3200_INIT_TOOLTIP": "OUT 管腳是固定的: Arduino Uno 管腳 5, Arduino Leonardo 管腳 12, Arduino Mega 管腳 47",
            "TCS3200_MEASURECOLOR": "tcs3200 測量顏色"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
