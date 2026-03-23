// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2b.name": "TUBIT V2 BUTTON",
            "tubitv2b.description": "For TU:bit V2 Control board."
        },
        "zh-cn": {
            "tubitv2b.name": "TUBIT V2 BUTTON",
            "tubitv2b.description": "For TU:bit V2 Control board."
        },
        "zh-tw": {
            "tubitv2b.name": "TUBIT V2 BUTTON",
            "tubitv2b.description": "For TU:bit V2 Control board."
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
            "TUBITV2_BUTTON_CATEGORY": "Button",
            "TUBITV2_BUTTON": "TUBIT ReadButton %1",
            "TUBITV2_BUTTON_A": "A",
            "TUBITV2_BUTTON_B": "B",
            "TUBITV2_BUTTONTS": "ReadButton%1 when %2",
            "TUBITV2_BUTTON_TSA":"On pressed",
            "TUBITV2_BUTTON_TSB":"On release"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_BUTTON_CATEGORY": "按键",
            "TUBITV2_BUTTON": "TUBIT 读取按键 %1",
            "TUBITV2_BUTTON_A": "A",
            "TUBITV2_BUTTON_B": "B",
            "TUBITV2_BUTTONTS": "读取按钮%1当%2",
            "TUBITV2_BUTTON_TSA": "按下瞬间",
            "TUBITV2_BUTTON_TSB": "松开瞬间"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2_BUTTON_CATEGORY": "按鈕",
            "TUBITV2_BUTTON": "TUBIT 讀取按鈕 %1",
            "TUBITV2_BUTTON_A": "A",
            "TUBITV2_BUTTON_B": "B",
            "TUBITV2_BUTTONTS": "讀取按鈕%1當 %2",
            "TUBITV2_BUTTON_TSA":"按下瞬間",
            "TUBITV2_BUTTON_TSB":"放開瞬間"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;