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
            "cooperativeScheduler.name": "Cooperative Scheduler",
            "cooperativeScheduler.description": "Allow Arduino run multiple tasks."
        },
        "ru": {
            "cooperativeScheduler.name": "Совместный планировщик",
            "cooperativeScheduler.description": "Разрешить Arduino выполнять несколько задач."
        },
        "zh-cn": {
            "cooperativeScheduler.name": "多任务调度器",
            "cooperativeScheduler.description": "使 Arduino 可以运行多个任务。"
        },
        "zh-tw": {
            "cooperativeScheduler.name": "多任務調度器",
            "cooperativeScheduler.description": "使 Arduino 可以運行多個任務。"
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
            "COOPERATIVESCHEDULER_CATEGORY": "Cooperative scheduler",
            "COOPERATIVESCHEDULER_SETUP": "task %1 setup",
            "COOPERATIVESCHEDULER_SLEEP": "task delay %1 ms",
            "COOPERATIVESCHEDULER_START": "start cooperative scheduler"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "COOPERATIVESCHEDULER_CATEGORY": "Совместный планировщик",
            "COOPERATIVESCHEDULER_SETUP": "настройка задачи %1",
            "COOPERATIVESCHEDULER_SLEEP": "задержка задачи %1 мс",
            "COOPERATIVESCHEDULER_START": "запустить совместный планировщик"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "COOPERATIVESCHEDULER_CATEGORY": "多任务调度器",
            "COOPERATIVESCHEDULER_SETUP": "任务 %1 setup",
            "COOPERATIVESCHEDULER_SLEEP": "任务延时 %1 ms",
            "COOPERATIVESCHEDULER_START": "启动多任务调度器"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "COOPERATIVESCHEDULER_CATEGORY": "多任務調度器",
            "COOPERATIVESCHEDULER_SETUP": "任務 %1 setup",
            "COOPERATIVESCHEDULER_SLEEP": "任務延時 %1 ms",
            "COOPERATIVESCHEDULER_START": "啟動多任務調度器"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
