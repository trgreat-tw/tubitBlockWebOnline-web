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
            "rgbLedStrip.name": "RGB LED Strip",
            "rgbLedStrip.description": "Single-wire-based RGB LED pixels and strip."
        },
        "ru": {
            "rgbLedStrip.name": "RGB-светодиодная лента",
            "rgbLedStrip.description": "Светодиодные RGB-пиксели и лента на основе одножильных проводов."
        },
        "zh-cn": {
            "rgbLedStrip.name": "RGB LED 灯条",
            "rgbLedStrip.description": "基于单总线的 RGB LED 的单个像素或灯条。"
        },
        "zh-tw": {
            "rgbLedStrip.name": "RGB LED 燈條",
            "rgbLedStrip.description": "基於單總線的 RGB LED 的單個像素或燈條。"
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
            "RGBLEDSTRIP_CATEGORY": "RGB LED Strip",
            "RGBLEDSTRIP_CLEAR": "clear all rgb led",
            "RGBLEDSTRIP_COLOR": "rgb led strip color R %1 G %2 B %3",
            "RGBLEDSTRIP_FILL": "rgb led fill from pixel %1 count %2 with color %3",
            "RGBLEDSTRIP_INIT": "init rgb led strip length %1 pin %2",
            "RGBLEDSTRIP_SETBRIGHTNESS": "set rgb led brightness %1",
            "RGBLEDSTRIP_SETPIXELCOLOR": "rgb led set pixel %1 color %2",
            "RGBLEDSTRIP_SHOW": "refresh rgb led display"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "RGBLEDSTRIP_CATEGORY": "Светодиодная лента RGB",
            "RGBLEDSTRIP_CLEAR": "очистить все светодиоды rgb",
            "RGBLEDSTRIP_COLOR": "цвет RGB ленты R %1 G %2 B %3",
            "RGBLEDSTRIP_FILL": "заливка RGB от пикселя %1 длиной %2 цвет %3",
            "RGBLEDSTRIP_INIT": "инициализировать RGB ленту %1 пин %2",
            "RGBLEDSTRIP_SETBRIGHTNESS": "установить яркость светодиодной ленты в %1",
            "RGBLEDSTRIP_SETPIXELCOLOR": "установить пиксель RGB ленты %1 цвет %2",
            "RGBLEDSTRIP_SHOW": "обновить светодиодный rgb-дисплей"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "RGBLEDSTRIP_CATEGORY": "RGB LED灯条",
            "RGBLEDSTRIP_CLEAR": "清除所有 rgb led",
            "RGBLEDSTRIP_COLOR": "rgb led 灯条颜色 R %1 G %2 B %3",
            "RGBLEDSTRIP_FILL": "rgb led 从像素 %1 开始 共填充 %2 颜色 %3",
            "RGBLEDSTRIP_INIT": "初始化 rgb led 灯条长度 %1 引脚 %2",
            "RGBLEDSTRIP_SETBRIGHTNESS": "设置 rgb led 亮度 %1",
            "RGBLEDSTRIP_SETPIXELCOLOR": "rgb led 设置像素 %1 颜色 %2",
            "RGBLEDSTRIP_SHOW": "刷新 rgb led 显示"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "RGBLEDSTRIP_CATEGORY": "RGB LED 燈條",
            "RGBLEDSTRIP_CLEAR": "清除所有 rgb led",
            "RGBLEDSTRIP_COLOR": "rgb led 燈條顏色 R %1 G %2 B %3",
            "RGBLEDSTRIP_FILL": "rgb led 從像素 %1 開始 共填充 %2 顏色 %3",
            "RGBLEDSTRIP_INIT": "初始化 rgb led 燈條長度 %1 管腳 %2",
            "RGBLEDSTRIP_SETBRIGHTNESS": "設置 rgb led 亮度 %1",
            "RGBLEDSTRIP_SETPIXELCOLOR": "rgb led 設置像素 %1 顏色 %2",
            "RGBLEDSTRIP_SHOW": "刷新 rgb led 顯示"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
