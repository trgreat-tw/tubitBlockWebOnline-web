// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubittask.name": "ESP32 task",
            "tubittask.description": "ESP32 multitasking."
        },
        "zh-cn": {
            "tubittask.name": "ESP32任务",
            "tubittask.description": "实现ESP32的多任务管理与功能并行处理。"
        },
        "zh-tw": {
            "tubittask.name": "ESP32多工任務",
            "tubittask.description": "實現ESP32的多任務管理與功能平行處理。"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITTASK_CATEGORY": "ESP32 Task",
            "TUBITTASK_INIT": "ESP32 Task Init %1 Core: %2",
            "TUBITTASKCODERUN": "Task Code: %1 %2",
            "TUBITV2_CORE0":"0",
            "TUBITV2_CORE1":"1"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITTASK_CATEGORY": "ESP32任务",
            "TUBITTASK_INIT": "初始化ESP32任务 %1 核心: %2",
            "TUBITTASKCODERUN": "任务代码: %1 %2",
            "TUBITV2_CORE0":"0",
            "TUBITV2_CORE1":"1"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITTASK_CATEGORY": "ESP32 多工處理",
            "TUBITTASK_INIT": "初始化ESP32任務 %1 核心: %2",
            "TUBITTASKCODERUN": "任務: %1 %2",
            "TUBITV2_CORE0":"0",
            "TUBITV2_CORE1":"1"
        }
    );
    
    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;