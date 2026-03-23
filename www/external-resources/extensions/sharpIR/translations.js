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
            "sharpIR.name": "Sharp IR Sensor",
            "sharpIR.description": "Infrared distance sensor based on the principle of triangle ranging."
        },
        "ru": {
            "sharpIR.name": "Инфракрасный датчик Sharp ",
            "sharpIR.description": "Инфракрасный датчик расстояния, основанный на принципе треугольной дальности."
        },
        "zh-cn": {
            "sharpIR.name": "夏普红外传感器",
            "sharpIR.description": "基于三角测量原理的红外测距传感器。"
        },
        "zh-tw": {
            "sharpIR.name": "夏普紅外傳感器",
            "sharpIR.description": "基於三角測量原理的紅外測距傳感器。"
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
            "SHARPIR_CATEGORY": "Sharp IR",
            "SHARPIR_INIT": "init sharp IR sensor %1 pin %2 model %3",
            "SHARPIR_READDISTANCE": "sharp IR sensor %1 read distance"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "SHARPIR_CATEGORY": "ИК-дальномер Sharp ",
            "SHARPIR_INIT": "инициализировать ИК-датчик sharp %1 пин %2 модель %3",
            "SHARPIR_READDISTANCE": "считать расстояние с ИК-датчика sharp %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SHARPIR_CATEGORY": "夏普红外",
            "SHARPIR_INIT": "初始化夏普红外传感器 %1 引脚 %2 型号 %3",
            "SHARPIR_READDISTANCE": "夏普红外传感器 %1 读取距离"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "SHARPIR_CATEGORY": "夏普紅外",
            "SHARPIR_INIT": "初始化夏普紅外傳感器 %1 管腳 %2 型號 %3",
            "SHARPIR_READDISTANCE": "夏普紅外傳感器 %1 讀取距離"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
