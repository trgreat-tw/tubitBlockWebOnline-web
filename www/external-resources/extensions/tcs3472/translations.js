// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2tcs3472.name": "TCS3472 RGB Sensor",
            "tubitv2tcs3472.description": "RGB Sensor."
        },
        "zh-cn": {
            "tubitv2tcs3472.name": "TCS3472 RGB顏色感測模組",
            "tubitv2tcs3472.description": "RGB Sensor."
        },
        "zh-tw": {
            "tubitv2tcs3472.name": "TCS3472 RGB顏色感測模組",
            "tubitv2tcs3472.description": "RGB顏色感測模組.."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
        "TUBITV2TCS3472_CATEGORY":"TCS3472 RGB Sensor",
	    "TUBITV2TCS3472_SET":"TCS3472 init , led pin %1 ",
        "TUBITV2TCS3472_READCOLOR":"TCS3472 get data",
        "TUBITV2TCS3472_READRGB":"get %1 data",
        "TUBITV2TCS3472_SETLIGHT":"set led brightness %1",
        "TUBITV2TCS3472_READLUX":"TCS3472 get lux value",
        "TUBITV2TCS3472_23":"23",
        "TUBITV2TCS3472_15":"15",
        "TUBITV2TCS3472_12":"12",
        "TUBITV2TCS3472_5":"5",
        "TUBITV2TCS3472_2":"2",
        "TUBITV2TCS3472_0":"0",
        "TUBITV2TCS3472_33":"33",
        "TUBITV2TCS3472_32":"32",
        "TUBITV2TCS3472_R":"R",
        "TUBITV2TCS3472_G":"G",
        "TUBITV2TCS3472_B":"B"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2TCS3472_CATEGORY":"TCS3472 RGB顏色感測模組",
            "TUBITV2TCS3472_SET":"初始化 TCS3472，LED 引脚 %1",
            "TUBITV2TCS3472_READCOLOR":"获取 TCS3472 数据",
            "TUBITV2TCS3472_READRGB":"获取 %1 数据",
            "TUBITV2TCS3472_SETLIGHT":"设置 LED 亮度 %1",
            "TUBITV2TCS3472_READLUX":"获取 TCS3472 光照值",
            "TUBITV2TCS3472_23":"23",
            "TUBITV2TCS3472_15":"15",
            "TUBITV2TCS3472_12":"12",
            "TUBITV2TCS3472_5":"5",
            "TUBITV2TCS3472_2":"2",
            "TUBITV2TCS3472_0":"0",
            "TUBITV2TCS3472_33":"33",
            "TUBITV2TCS3472_32":"32",
            "TUBITV2TCS3472_R":"R",
            "TUBITV2TCS3472_G":"G",
            "TUBITV2TCS3472_B":"B"
		
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2TCS3472_CATEGORY": "TCS3472 RGB顏色感測模組",
            "TUBITV2TCS3472_SET": "TCS3472初始化 , LED 腳位 %1",
            "TUBITV2TCS3472_READCOLOR": "讀取 TCS3472 RGB資料",
            "TUBITV2TCS3472_READRGB": "讀取 %1",
            "TUBITV2TCS3472_SETLIGHT": "設定 LED 亮度 %1",
            "TUBITV2TCS3472_READLUX": "讀取 TCS3472 光照值",
            "TUBITV2TCS3472_23": "23",
            "TUBITV2TCS3472_15": "15",
            "TUBITV2TCS3472_12": "12",
            "TUBITV2TCS3472_5": "5",
            "TUBITV2TCS3472_2": "2",
            "TUBITV2TCS3472_0": "0",
            "TUBITV2TCS3472_33": "33",
            "TUBITV2TCS3472_32": "32",
            "TUBITV2TCS3472_R": "R",
            "TUBITV2TCS3472_G": "G",
            "TUBITV2TCS3472_B": "B"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;