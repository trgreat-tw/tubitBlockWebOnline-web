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
            "tubitv2lightsensor.name": "光照感測器",
            "tubitv2lightsensor.description": "感測周圍的光線"
        },
        "ru": {
            "tubitv2lightsensor.name": "光照感測器",
            "tubitv2lightsensor.description": "感測周圍的光線"
        },
        "zh-cn": {
            "tubitv2lightsensor.name": "光照感測器",
            "tubitv2lightsensor.description": "感測周圍的光線"
        },
        "zh-tw": {
            "tubitv2lightsensor.name": "光照感測器",
            "tubitv2lightsensor.description": "感測周圍的光線"
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
            "TUBITV2LIGHTSENSOR_CATEGORY": "光照感測器",
            "TUBITV2LIGHTSENSOR_INIT": "光照感測器初始化",
            "TUBITV2LIGHTSENSOR_READ": "讀取光照"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "TUBITV2LIGHTSENSOR_CATEGORY": "光照感測器",
            "TUBITV2LIGHTSENSOR_INIT": "光照感測器初始化",
            "TUBITV2LIGHTSENSOR_READ": "讀取光照"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2LIGHTSENSOR_CATEGORY": "光照感測器",
            "TUBITV2LIGHTSENSOR_INIT": "光照感測器初始化",
            "TUBITV2LIGHTSENSOR_READ": "讀取光照"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2LIGHTSENSOR_CATEGORY": "光照感測器",
            "TUBITV2LIGHTSENSOR_INIT": "光照感測器初始化",
            "TUBITV2LIGHTSENSOR_READ": "讀取光照"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
