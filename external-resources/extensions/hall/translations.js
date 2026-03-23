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
            "tubitv2hallsensor.name": "Hall Sensor",
            "tubitv2hallsensor.description": "Detect changes in the surrounding magnetic field"
        },
        "ru": {
            "tubitv2hallsensor.name": "Датчик Холла",
            "tubitv2hallsensor.description": "Обнаруживает изменения в окружающем магнитном поле"
        },
        "zh-cn": {
            "tubitv2hallsensor.name": "霍尔传感器",
            "tubitv2hallsensor.description": "感测周围的磁场变化"
        },
        "zh-tw": {
            "tubitv2hallsensor.name": "霍爾感測器",
            "tubitv2hallsensor.description": "感測周遭的磁場變化"
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
            "TUBITV2HALLSENSOR_CATEGORY": "Hall Sensor",
            "TUBITV2HALLSENSOR_INIT": "Set Hall Sensor pin %1",
            "TUBITV2HALLSENSOR_READ": "Read %1 Hall Sensor data"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TUBITV2HALLSENSOR_CATEGORY": "Датчик Холла",
            "TUBITV2HALLSENSOR_INIT": "Установить пин датчика Холла %1",
            "TUBITV2HALLSENSOR_READ": "Считать данные с датчика Холла %1"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2HALLSENSOR_CATEGORY": "霍尔传感器",
            "TUBITV2HALLSENSOR_INIT": "设置霍尔传感器引脚 %1",
            "TUBITV2HALLSENSOR_READ": "读取%1霍尔传感器数据"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2HALLSENSOR_CATEGORY": "霍爾感測器",
            "TUBITV2HALLSENSOR_INIT": "設定霍爾感測器腳位 %1",
            "TUBITV2HALLSENSOR_READ": "讀取%1霍爾感測器資料"
        }
    );
    

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
