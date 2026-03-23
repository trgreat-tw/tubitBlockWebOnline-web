// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2m.name": "TUBIT V2 MOTOR",
            "tubitv2m.description": "For TUBIT V2 Control board."
        },
        "zh-cn": {
            "tubitv2m.name": "TUBIT V2 MOTOR",
            "tubitv2m.description": "For TUBIT V2 Control board."
        },
        "zh-tw": {
            "tubitv2m.name": "TUBIT V2 MOTOR",
            "tubitv2m.description": "For TUBIT V2 Control board."
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
            "TUBITV2_MOTOR_CATEGORY": "MOTOR",
            "TUBITV2_MOTOR_RUN": "motor %1 speed %2",
            "TUBITV2_MOTOR_STOP": "all motor stop",
            "TUBITV2_MOTOR_M1":"M1",
            "TUBITV2_MOTOR_M2":"M2",
            "TUBITV2_MOTOR_M3":"M3",
            "TUBITV2_MOTOR_M4":"M4",
            "TUBITV2_MOTOR_ALLRUN":"all motor run M1 %1 M2 %2 M3 %3 M4 %4",
            "TUBITV2_MOTOR_READENC":"read motor %1 encoder",
            "TUBITV2_MOTOR_RESETENC":"reset all motor encoder",
            "TUBITV2_MOTOR_SETENC":" set %1 motor encoder  %2",
            "TUBITV2_MOTOR_ENC":"Encoder"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_MOTOR_CATEGORY": "电机",
            "TUBITV2_MOTOR_RUN": "电机 %1 速度 %2",
            "TUBITV2_MOTOR_STOP": "停止所有电机",
            "TUBITV2_MOTOR_M1":"M1",
            "TUBITV2_MOTOR_M2":"M2",
            "TUBITV2_MOTOR_M3":"M3",
            "TUBITV2_MOTOR_M4":"M4",
            "TUBITV2_MOTOR_ALLRUN":"所有电机 M1 %1 M2 %2 M3 %3 M4 %4",
            "TUBITV2_MOTOR_READENC":"读取电机 %1 编码数",
            "TUBITV2_MOTOR_RESETENC":"重设所有电机编码器",
            "TUBITV2_MOTOR_SETENC":" 设定 %1 电机 编码数  %2",
            "TUBITV2_MOTOR_ENC":"编码器"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2_MOTOR_CATEGORY": "馬達",
            "TUBITV2_MOTOR_RUN": "馬達 %1 速度 %2",
            "TUBITV2_MOTOR_STOP": "停止所有馬達",
            "TUBITV2_MOTOR_M1":"M1",
            "TUBITV2_MOTOR_M2":"M2",
            "TUBITV2_MOTOR_M3":"M3",
            "TUBITV2_MOTOR_M4":"M4",
            "TUBITV2_MOTOR_ALLRUN":"控制馬達 M1 %1 M2 %2 M3 %3 M4 %4",
            "TUBITV2_MOTOR_READENC":"讀取馬達 %1 編碼器",
            "TUBITV2_MOTOR_RESETENC":"重設所有馬達編碼器",
            "TUBITV2_MOTOR_SETENC":" 設定 %1 馬達 編碼器 %2",
            "TUBITV2_MOTOR_ENC":"馬達編碼器"

        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;