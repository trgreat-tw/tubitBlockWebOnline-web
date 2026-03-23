// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */
function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2sm.name": "TUBIT V2 SERVO MOTOR",
            "tubitv2sm.description": "For TU:bit V2 Control board."
        },
        "zh-cn": {
            "tubitv2sm.name": "TUBIT V2 SERVO MOTOR",
            "tubitv2sm.description": "For TU:bit V2 Control board."
        },
        "zh-tw": {
            "tubitv2sm.name": "TUBIT V2 SERVO MOTOR",
            "tubitv2sm.description": "For TU:bit V2 Control board."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2_SERVOMOTOR_CATEGORY": "SERVOMOTOR",
            "TUBITV2_SERVOMOTOR_RUN": "servo motor %1 to %2 deg",
            "TUBITV2_SERVOMOTOR_S0":"S0",
            "TUBITV2_SERVOMOTOR_S1":"S1",
            "TUBITV2_SERVOMOTOR_S2":"S2",
            "TUBITV2_SERVOMOTOR_S3":"S3",
            "TUBITV2_SERVOMOTOR_S4":"S4",
            "TUBITV2_SERVOMOTOR_S5":"S5",
            "TUBITV2_SERVOMOTOR_S6":"S6",
            "TUBITV2_SERVOMOTOR_S7":"S7",
            "TUBITV2_SERVOMOTOR_MS": "servo motor %1 PWM pulse %2 ms"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_SERVOMOTOR_CATEGORY": "伺服电机",
            "TUBITV2_SERVOMOTOR_RUN": "伺服电机 %1 转到 %2 度",
            "TUBITV2_SERVOMOTOR_S0":"S0",
            "TUBITV2_SERVOMOTOR_S1":"S1",
            "TUBITV2_SERVOMOTOR_S2":"S2",
            "TUBITV2_SERVOMOTOR_S3":"S3",
            "TUBITV2_SERVOMOTOR_S4":"S4",
            "TUBITV2_SERVOMOTOR_S5":"S5",
            "TUBITV2_SERVOMOTOR_S6":"S6",
            "TUBITV2_SERVOMOTOR_S7":"S7",
            "TUBITV2_SERVOMOTOR_MS": "伺服电机 %1 PWM 脉冲 %2 ms"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2_SERVOMOTOR_CATEGORY": "伺服馬達",
            "TUBITV2_SERVOMOTOR_RUN": "伺服馬達 %1 轉到 %2 度",
            "TUBITV2_SERVOMOTOR_S0":"S0",
            "TUBITV2_SERVOMOTOR_S1":"S1",
            "TUBITV2_SERVOMOTOR_S2":"S2",
            "TUBITV2_SERVOMOTOR_S3":"S3",
            "TUBITV2_SERVOMOTOR_S4":"S4",
            "TUBITV2_SERVOMOTOR_S5":"S5",
            "TUBITV2_SERVOMOTOR_S6":"S6",
            "TUBITV2_SERVOMOTOR_S7":"S7",
            "TUBITV2_SERVOMOTOR_MS": "伺服馬達 %1 PWM 脈衝訊號 %2 ms"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;