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
            "dht.name": "DHT Sensor",
            "dht.description": "DHT Temperature and humidity sensor module."
        },
        "ru": {
            "dht.name": "Датчик DHT ",
            "dht.description": "Датчик температуры и влажности DHT "
        },
        "zh-cn": {
            "dht.name": "DHT 传感器",
            "dht.description": "DHT 温湿度传感器模块。"
        },
        "zh-tw": {
            "dht.name": "DHT 傳感器",
            "dht.description": "DHT 溫濕度傳感器模塊。"
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
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "init dht %1 pin %2 model %3",
            "DHT_READ_HUMIDITY": "dht %1 read humidity",
            "DHT_READ_TEMPERATURE": "dht %1 read temperature %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "DHT_CATEGORY": "датчик температуры и влажности DHT",
            "DHT_INIT": "инициализировать dht %1 пин %2 модель %3",
            "DHT_READ_HUMIDITY": "dht %1 считать влажность",
            "DHT_READ_TEMPERATURE": "dht %1 считать температуру %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "初始化 dht %1 引脚 %2 型号 %3",
            "DHT_READ_HUMIDITY": "dht %1 读取湿度",
            "DHT_READ_TEMPERATURE": "dht %1 读取温度 %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "初始化 dht %1 管腳 %2 型號 %3",
            "DHT_READ_HUMIDITY": "dht %1 讀取濕度",
            "DHT_READ_TEMPERATURE": "dht %1 讀取溫度 %2"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
