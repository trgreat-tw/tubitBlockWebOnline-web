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
            "tubitv2irprox.name": "Infrared Sensor",
            "tubitv2irprox.description": "Emit and receive infrared signals to detect distance"
        },
        "ru": {
            "tubitv2irprox.name": "Инфракрасный датчик",
            "tubitv2irprox.description": "Испускает и принимает инфракрасные сигналы для определения расстояния"
        },
        "zh-cn": {
            "tubitv2irprox.name": "红外线传感器",
            "tubitv2irprox.description": "发射与接收红外线反馈以检测距离"
        },
        "zh-tw": {
            "tubitv2irprox.name": "紅外線感測器",
            "tubitv2irprox.description": "發射與接收紅外線反饋以感測距離"
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
            "TUBITV2IRPROX_CATEGORY": "Infrared Sensor",
            "TUBITV2IRPROX_INIT": "Set infrared sensor pin %1",
            "TUBITV2IRPROX_READ": "Read %1 infrared sensor %2 signal",
            "TUBITV2IRPROX_TYPED":"digital",
            "TUBITV2IRPROX_TYPEA":"analog"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TUBITV2IRPROX_CATEGORY": "Инфракрасный датчик",
            "TUBITV2IRPROX_INIT": "Установить пин инфракрасного датчика %1",
            "TUBITV2IRPROX_READ": "Считать %1 сигнал инфракрасного датчика %2",
            "TUBITV2IRPROX_TYPED":"digital",
            "TUBITV2IRPROX_TYPEA":"analog"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2IRPROX_CATEGORY": "红外线传感器",
            "TUBITV2IRPROX_INIT": "设置红外线传感器引脚 %1",
            "TUBITV2IRPROX_READ": "读取%1红外线传感器%2信号",
            "TUBITV2IRPROX_TYPED":"数字",
            "TUBITV2IRPROX_TYPEA":"模拟"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2IRPROX_CATEGORY": "紅外線感測器",
            "TUBITV2IRPROX_INIT": "設定紅外線感測器腳位 %1",
            "TUBITV2IRPROX_READ": "讀取%1紅外線感測器%2訊號",
            "TUBITV2IRPROX_TYPED":"數位",
            "TUBITV2IRPROX_TYPEA":"類比"
        }
    );
    

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
