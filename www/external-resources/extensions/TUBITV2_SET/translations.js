// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2.name": "TUBIT V2 SET",
            "tubitv2.description": "For TU:bit V2 Control board."
        },
        "zh-cn": {
            "tubitv2.name": "TUBIT V2 SET",
            "tubitv2.description": "For TU:bit V2 Control board."
        },
        "zh-tw": {
            "tubitv2.name": "TUBIT V2 SET",
            "tubitv2.description": "For TU:bit V2 Control board."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2_Set_CATEGORY": "TUBITV2_Set",
	    "TUBITV2_SET":"TUBIT SET"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_Set_CATEGORY": "TUBITV2_Set",
	    "TUBITV2_SET":"TUBIT 初始化"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
           "TUBITV2_Set_CATEGORY": "TUBITV2_Set",
	    "TUBITV2_SET":"TUBIT 初始化"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;