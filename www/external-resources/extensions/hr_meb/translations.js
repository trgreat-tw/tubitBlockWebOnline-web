// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "hrmeb.name": "HR_MEB",
            "hrmeb.description": "HR_MEB ESP32 Motor Expansion Board."
        },
        "zh-cn": {
            "hrmeb.name": "HR_MEB电机扩展板",
            "hrmeb.description": "HR_MEB ESP32 电机扩展板"
        },
        "zh-tw": {
            "hrmeb.name": "HR_MEB馬達擴展板",
            "hrmeb.description": "HR_MEB ESP32 馬達擴展板"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
        "HRMEB_CATEGORY": "HR_MEB",
	    "HRMEB_SET":"HR_MEB INIT motor freq %1Hz",
        "HRMEB_READBUTTON":" HR_MEB read button ",
        "HRMEB_MOTOR":"motor %1 speed %2",
        "HRMEB_MOTOR_ALLRUN":"all motor run M1 %1 M2 %2 M3 %3 M4 %4",
        "HRMEB_MOTOR_STOP":"all motor stop",
        "HRMEB_MOTOR_M1":"M1",
        "HRMEB_MOTOR_M2":"M2",
        "HRMEB_MOTOR_M3":"M3",
        "HRMEB_MOTOR_M4":"M4",
        "HRMEB_SET_MOTOR":"Set motor direction M1 %1 M2 %2 M3 %3 M4 %4",
        "HRMEB_MOTOR_TD":"Forward",
        "HRMEB_MOTOR_FD":"Reverse"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "HRMEB_CATEGORY": "HR_MEB",
            "HRMEB_SET": "HR_MEB 初始化 设置电机频率 %1Hz",
            "HRMEB_READBUTTON": "HR_MEB 读取按钮",
            "HRMEB_MOTOR": "电机 %1 速度 %2",
            "HRMEB_MOTOR_ALLRUN": "所有电机运行 M1 %1 M2 %2 M3 %3 M4 %4",
            "HRMEB_MOTOR_STOP": "所有电机停止",
            "HRMEB_MOTOR_M1": "M1",
            "HRMEB_MOTOR_M2": "M2",
            "HRMEB_MOTOR_M3": "M3",
            "HRMEB_MOTOR_M4": "M4",
            "HRMEB_SET_MOTOR":"设置电机 M1 %1 M2 %2 M3 %3 M4 %4",
            "HRMEB_MOTOR_TD":"正转",
            "HRMEB_MOTOR_FD":"反转"
		
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "HRMEB_CATEGORY": "HR_MEB",
            "HRMEB_SET": "HR_MEB 初始化 設定馬達頻率%1Hz",
            "HRMEB_READBUTTON": "HR_MEB 讀取按鈕",
            "HRMEB_MOTOR": "馬達 %1 速度 %2",
            "HRMEB_MOTOR_ALLRUN": "控制馬達 M1 %1 M2 %2 M3 %3 M4 %4",
            "HRMEB_MOTOR_STOP": "停止所有馬達",
            "HRMEB_MOTOR_M1": "M1",
            "HRMEB_MOTOR_M2": "M2",
            "HRMEB_MOTOR_M3": "M3",
            "HRMEB_MOTOR_M4": "M4",
            "HRMEB_SET_MOTOR":"設定馬達轉向 M1 %1 M2 %2 M3 %3 M4 %4",
            "HRMEB_MOTOR_TD":"正轉",
            "HRMEB_MOTOR_FD":"反轉"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;