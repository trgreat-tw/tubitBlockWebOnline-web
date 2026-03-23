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
            "ds18b20.name": "DS18B20 Sensor",
            "ds18b20.description": "Single bus digital temperature sensor based on DS18B20."
        },
        "ru": {
            "ds18b20.name": "Датчик DS18B20 ",
            "ds18b20.description": "Цифровой датчик температуры DS18B20"
        },
        "zh-cn": {
            "ds18b20.name": "DS18B20 传感器",
            "ds18b20.description": "基于 DS18B20 的单总线数字温度传感器。"
        },
        "zh-tw": {
            "ds18b20.name": "DS18B20 傳感器",
            "ds18b20.description": "基於 DS18B20 的單總線數字溫度傳感器。"
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
            "DS18B20_CATEGORY": "DS18B20",
            "DS18B20_GETTEMPERATURE": "ds18b20 %1 temperatures %2",
            "DS18B20_INIT": "init ds18b20 pin %1 quantity %2",
            "DS18B20_READALLTEMPERATURES": "ds18b20 read all temperatures"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "DS18B20_CATEGORY": "DS18B20",
            "DS18B20_GETTEMPERATURE": "ds18b20 %1 температуры %2",
            "DS18B20_INIT": "инициализировать ds18b20 пин %1 количество %2",
            "DS18B20_READALLTEMPERATURES": "ds18b20 считать все температуры"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DS18B20_CATEGORY": "DS18B20",
            "DS18B20_GETTEMPERATURE": "ds18b20 %1 温度 %2",
            "DS18B20_INIT": "初始化 ds18b20 引脚 %1 数量 %2",
            "DS18B20_READALLTEMPERATURES": "ds18b20 读取所有温度"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "DS18B20_CATEGORY": "DS18B20",
            "DS18B20_GETTEMPERATURE": "ds18b20 %1 溫度 %2",
            "DS18B20_INIT": "初始化 ds18b20 管腳 %1 數量 %2",
            "DS18B20_READALLTEMPERATURES": "ds18b20 讀取所有溫度"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
