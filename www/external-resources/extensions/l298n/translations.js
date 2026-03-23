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
            "l298n.description": "Common high power dual motor drive module."
        },
        "ru": {
            "l298n.description": "Общий модуль привода с двумя двигателями высокой мощности."
        },
        "zh-cn": {
            "l298n.description": "常见的高功率双路电机驱动模块。"
        },
        "zh-tw": {
            "l298n.description": "常見的高功率雙路電機驅動模塊。"
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
            "L298N_BACK": "back",
            "L298N_CATEGORY": "L298N",
            "L298N_FORWARD": "foward",
            "L298N_INIT": "init channel %1 pin IN1 %2 IN2 %3 EN %4",
            "L298N_RUN": "channel %1 run %2 speed %3",
            "L298N_STOP": "channel %1 stop"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "L298N_BACK": "Назад",
            "L298N_CATEGORY": "L298N",
            "L298N_FORWARD": "Вперед",
            "L298N_INIT": "Инициализировать канал %1 на пинах IN1 %2 IN2 %3 EN %4",
            "L298N_RUN": "Канал %1 включить %2 скорость %3",
            "L298N_STOP": "Канал %1 остановить"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "L298N_BACK": "后",
            "L298N_CATEGORY": "L298N",
            "L298N_FORWARD": "前",
            "L298N_INIT": "初始化通道 %1 引脚 IN1 %2 IN2 %3 EN %4",
            "L298N_RUN": "通道 %1 向 %2 速度 %3",
            "L298N_STOP": "通道 %1 停止"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "L298N_BACK": "後",
            "L298N_CATEGORY": "L298N",
            "L298N_FORWARD": "前",
            "L298N_INIT": "初始化通道 %1 管腳 IN1 %2 IN2 %3 EN %4",
            "L298N_RUN": "通道 %1 向 %2 速度 %3",
            "L298N_STOP": "通道 %1 停止"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
