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
            "tubitv2mq2.name": "MQ2 Sensor",
            "tubitv2mq2.description": "Detect gas levels"
        },
        "ru": {
            "tubitv2mq2.name": "Датчик MQ2",
            "tubitv2mq2.description": "Обнаружение уровня газа"
        },
        "zh-cn": {
            "tubitv2mq2.name": "MQ2传感器",
            "tubitv2mq2.description": "检测气体水平"
        },
        "zh-tw": {
            "tubitv2mq2.name": "MQ2感測器",
            "tubitv2mq2.description": "偵測氣體濃度"
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
            "TUBITV2MQ2_CATEGORY": "MQ2 Sensor",
            "TUBITV2MQ2_INIT": "Set MQ2 sensor pin %1",
            "TUBITV2MQ2_READ": "Read %1 MQ2 sensor %2 signal",
            "TUBITV2MQ2_TYPED": "Digital",
            "TUBITV2MQ2_TYPEA": "Analog"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TUBITV2MQ2_CATEGORY": "Датчик MQ2",
            "TUBITV2MQ2_INIT": "Установить пин датчика MQ2 %1",
            "TUBITV2MQ2_READ": "Считать %1 сигнал датчика MQ2 %2",
            "TUBITV2MQ2_TYPED": "Цифровой",
            "TUBITV2MQ2_TYPEA": "Аналоговый"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2MQ2_CATEGORY": "MQ2传感器",
            "TUBITV2MQ2_INIT": "设置MQ2传感器引脚 %1",
            "TUBITV2MQ2_READ": "读取%1 MQ2传感器 %2信号",
            "TUBITV2MQ2_TYPED": "数字",
            "TUBITV2MQ2_TYPEA": "模拟"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2MQ2_CATEGORY": "MQ2感測器",
            "TUBITV2MQ2_INIT": "設定MQ2感測器腳位 %1",
            "TUBITV2MQ2_READ": "讀取%1 MQ2感測器 %2訊號",
            "TUBITV2MQ2_TYPED": "數位",
            "TUBITV2MQ2_TYPEA": "類比"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
