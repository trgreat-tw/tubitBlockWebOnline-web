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
            "max6675.name": "MAX6675 Module",
            "max6675.description": "K-type thermocouple temperature measurement module based on MAX6675, the measurement range is 0 ~ 1024 ℃"
        },
        "ru": {
            "max6675.name": "Модуль MAX6675 ",
            "max6675.description": "Модуль измерения температуры на основе термопары и  MAX6675, диапазон измерения 0 ~ 1024 ℃"
        },
        "zh-cn": {
            "max6675.name": "MAX6675 模块",
            "max6675.description": "基于 MAX6675 的 K 型热电偶温度测量模块，可测量范围为 0 ~ 1024℃"
        },
        "zh-tw": {
            "max6675.name": "MAX6675 模塊",
            "max6675.description": "基於 MAX6675 的 K 型熱電偶溫度測量模塊，可測量範圍為 0 ~ 1024℃"
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
            "MAX6675_CATEGORY": "MAX6675",
            "MAX6675_INIT": "init max6675 pin DO %1 CLK %2 CS %3",
            "MAX6675_READTEMPERATURE": "max6675 read temperature %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "MAX6675_CATEGORY": "MAX6675",
            "MAX6675_INIT": "инициализировать max6675 пины DO %1 CLK %2 CS %3",
            "MAX6675_READTEMPERATURE": "max6675 считать температуру %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MAX6675_CATEGORY": "MAX6675",
            "MAX6675_INIT": "初始化 max6675 引脚 DO %1 CLK %2 CS %3",
            "MAX6675_READTEMPERATURE": "max6675 读取温度 %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "MAX6675_CATEGORY": "MAX6675",
            "MAX6675_INIT": "初始化 max6675 管腳 DO %1 CLK %2 CS %3",
            "MAX6675_READTEMPERATURE": "max6675 讀取溫度 %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
