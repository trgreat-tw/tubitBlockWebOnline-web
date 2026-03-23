// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */
function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2pid.name": "PID Control",
            "tubitv2pid.description": "PID Control."
        },
        "zh-cn": {
            "tubitv2pid.name": "PID Control",
            "tubitv2pid.description": "PID Control."
        },
        "zh-tw": {
            "tubitv2pid.name": "PID Control",
            "tubitv2pid.description": "PID Control."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
        "TUBITV2PID_CATEGORY": "PID",
	    "TUBITV2PID_CREATE":"myPID%1 input:%2 output:%3 setpoint:%4 , P:%5 I:%6 D:%7 ",
        "TUBITV2PID_SET":"myPID%1 set , SampleTime %2 , OutputLimits %3 ~ %4 ",
        "TUBITV2PID_COMPUTE":"myPID%1 compute",
        "TUBITV2_PID_1":"1",
        "TUBITV2_PID_2":"2",
        "TUBITV2_PID_3":"3",
        "TUBITV2_PID_4":"4",
        "TUBITV2_PID_5":"5",
        "TUBITV2_PID_6":"6",
        "TUBITV2_PID_7":"7",
        "TUBITV2_PID_8":"8"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2PID_CATEGORY": "PID",
            "TUBITV2PID_CREATE":"myPID%1 输入：%2 输出：%3 设定值：%4，P：%5 I：%6 D：%7 ",
            "TUBITV2PID_SET":"myPID%1 设置，采样时间 %2，输出限制 %3 ~ %4",
            "TUBITV2PID_COMPUTE":"myPID%1 计算",
            "TUBITV2_PID_1":"1",
            "TUBITV2_PID_2":"2",
            "TUBITV2_PID_3":"3",
            "TUBITV2_PID_4":"4",
            "TUBITV2_PID_5":"5",
            "TUBITV2_PID_6":"6",
            "TUBITV2_PID_7":"7",
            "TUBITV2_PID_8":"8"
		
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2PID_CATEGORY": "PID",
            "TUBITV2PID_CREATE":"myPID%1 輸入：%2 輸出：%3 設定值：%4，P：%5 I：%6 D：%7 ",
            "TUBITV2PID_SET":"myPID%1 設定，更新時間 %2(ms)，輸出限制 %3 ~ %4",
            "TUBITV2PID_COMPUTE":"myPID%1 更新",
            "TUBITV2_PID_1":"1",
            "TUBITV2_PID_2":"2",
            "TUBITV2_PID_3":"3",
            "TUBITV2_PID_4":"4",
            "TUBITV2_PID_5":"5",
            "TUBITV2_PID_6":"6",
            "TUBITV2_PID_7":"7",
            "TUBITV2_PID_8":"8"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;