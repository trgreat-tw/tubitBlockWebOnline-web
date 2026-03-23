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
            "tubitv2pyro.name": "Human Infrared Sensor",
            "tubitv2pyro.description": "Detects infrared radiation emitted by the human body"
        },
        "ru": {
            "tubitv2pyro.name": "Датчик инфракрасного излучения человека",
            "tubitv2pyro.description": "Обнаруживает инфракрасное излучение, испускаемое человеческим телом"
        },
        "zh-cn": {
            "tubitv2pyro.name": "人体红外线传感器",
            "tubitv2pyro.description": "侦测人体放出的红外线"
        },
        "zh-tw": {
            "tubitv2pyro.name": "人體紅外線感測器",
            "tubitv2pyro.description": "偵測人體放出的紅外線"
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
            "TUBITV2PYRO_CATEGORY": "Human Infrared Sensor",
            "TUBITV2PYRO_INIT": "Set Human Infrared Sensor pin %1",
            "TUBITV2PYRO_READ": "Read %1 Human Infrared Sensor data"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TUBITV2PYRO_CATEGORY": "Датчик инфракрасного излучения человека",
            "TUBITV2PYRO_INIT": "Установить пин датчика инфракрасного излучения человека %1",
            "TUBITV2PYRO_READ": "Считать данные с датчика инфракрасного излучения человека %1"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2PYRO_CATEGORY": "人体红外线传感器",
            "TUBITV2PYRO_INIT": "设置人体红外线传感器 %1 引脚",
            "TUBITV2PYRO_READ": "读取%1 人体红外线传感器数据"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2PYRO_CATEGORY": "人體紅外線感測器",
            "TUBITV2PYRO_INIT": "設定人體紅外線感測器 %1 腳位",
            "TUBITV2PYRO_READ": "讀取%1 人體紅外線感測器資料"
        }
    );
    

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
