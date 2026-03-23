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
            "tubitv2sonudsensor.name": "Sound Sensor",
            "tubitv2sonudsensor.description": "Detect ambient sound"
        },
        "ru": {
            "tubitv2sonudsensor.name": "Звуковой датчик",
            "tubitv2sonudsensor.description": "Обнаружение окружающего звука"
        },
        "zh-cn": {
            "tubitv2sonudsensor.name": "声音传感器",
            "tubitv2sonudsensor.description": "感测周围的声音"
        },
        "zh-tw": {
            "tubitv2sonudsensor.name": "聲音感測器",
            "tubitv2sonudsensor.description": "感測周遭的聲音"
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
            "TUBITV2SOUNDSENSOR_CATEGORY": "Sound Sensor",
            "TUBITV2SOUNDSENSOR_INIT": "Set sound sensor pin %1",
            "TUBITV2SOUNDSENSOR_READ": "Read %1 sound sensor %2 signal",
            "TUBITV2SOUNDSENSOR_TYPED": "Digital",
            "TUBITV2SOUNDSENSOR_TYPEA": "Analog"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TUBITV2SOUNDSENSOR_CATEGORY": "Звуковой датчик",
            "TUBITV2SOUNDSENSOR_INIT": "Установить пин звукового датчика %1",
            "TUBITV2SOUNDSENSOR_READ": "Считать %1 сигнал звукового датчика %2",
            "TUBITV2SOUNDSENSOR_TYPED": "Цифровой",
            "TUBITV2SOUNDSENSOR_TYPEA": "Аналоговый"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2SOUNDSENSOR_CATEGORY": "声音传感器",
            "TUBITV2SOUNDSENSOR_INIT": "设置声音传感器引脚 %1",
            "TUBITV2SOUNDSENSOR_READ": "读取%1声音传感器 %2信号",
            "TUBITV2SOUNDSENSOR_TYPED": "数字",
            "TUBITV2SOUNDSENSOR_TYPEA": "模拟"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2SOUNDSENSOR_CATEGORY": "聲音感測器",
            "TUBITV2SOUNDSENSOR_INIT": "設定聲音感測器腳位 %1",
            "TUBITV2SOUNDSENSOR_READ": "讀取%1聲音感測器 %2訊號",
            "TUBITV2SOUNDSENSOR_TYPED": "數位",
            "TUBITV2SOUNDSENSOR_TYPEA": "類比"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
