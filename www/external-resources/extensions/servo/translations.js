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
            "servo.name": "Servo",
            "servo.description": "Classic servo support for microbit."
        },
        "ru": {
            "servo.name": "Сервомотор",
            "servo.description": "Классическая поддержка сервопривода для microbit."
        },
        "zh-cn": {
            "servo.name": "舵机",
            "servo.description": "让 Microbit 可以控制普通的舵机。"
        },
        "zh-tw": {
            "servo.name": "舵機",
            "servo.description": "讓 Microbit 可以控制普通的舵機。"
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
            "SERVO_CATEGORY": "Servo",
            "SERVO_WRITE": "set servo pin %1 out %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "SERVO_CATEGORY": "Сервопривод",
            "SERVO_WRITE": "установить сервопривод в %1 вне %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SERVO_CATEGORY": "舵机",
            "SERVO_WRITE": "设置引脚 %1 舵机为 %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "SERVO_CATEGORY": "舵機",
            "SERVO_WRITE": "設置管腳 %1 舵機為 %2"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
