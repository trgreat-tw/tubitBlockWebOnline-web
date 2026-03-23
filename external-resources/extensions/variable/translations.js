// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2var.name": "VARIABLES",
            "tubitv2var.description": "Create more type variables and string processing building blocks."
        },
        "zh-cn": {
            "tubitv2var.name": "多变量型别",
            "tubitv2var.description": "创建更多类型的变量与字符串转换、分割等功能。"
        },
        "zh-tw": {
            "tubitv2var.name": "多變數型別",
            "tubitv2var.description": "建立更多型別變數與字串轉換、分割等。"
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2_VARIABLE_CATEGORY": "VARIABLE",
            "TUBITV2_VARIABLE_INCLUDE": "Init TUBIT VARIABLE",
            "TUBITV2_VARIABLE_STR2TYPE": "StringTo %1 %2",
            "TUBITV2_VARIABLE_TOINT": "Integer",
            "TUBITV2_VARIABLE_TODOUBLE": "Double",
            "TUBITV2_VARIABLE_SUBSTRING": "SubString String %1 From %2",
            "TUBITV2_VARIABLE_SUBSTRING2": "SubString String %1 From %2 To %3",
	        "TUBITV2_VARIABLE":"TUBIT VARIABLE",
            "TUBITV2_VARIABLE_CREATE":"create %1 %2 %3 = %4",
            "TUBITV2_VARIABLE_CREATE_STINRG":"create %1 string %2 為 %3",
            "TUBITV2_VARIABLE_GLOBAL":"global",
            "TUBITV2_VARIABLE_STATIC":"static",
            "TUBITV2_VARIABLE_INT":"integer",
            "TUBITV2_VARIABLE_LONG":"long",
            "TUBITV2_VARIABLE_DOUBLE":"double",
            "TUBITV2_VARIABLE_STRING":"String",
            "TUBITV2_VARIABLE_READ":"%1",
            "TUBITV2_VARIABLE_SET":"set %1 to %2",
            "TUBITV2_VARIABLE_CHANGE":"change %1 by %2",
	        "TUBITV2_VARIABLE_UNBOXING":"unboxing %1 by %2"
           
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_VARIABLE_CATEGORY": "多变量",
            "TUBITV2_VARIABLE_INCLUDE": "初始化 TUBIT 多变量",
            "TUBITV2_VARIABLE_STR2TYPE": "字符串 %1 轉 %2 ",
            "TUBITV2_VARIABLE_TOINT": "整数",
            "TUBITV2_VARIABLE_TODOUBLE": "双精度浮点型",
            "TUBITV2_VARIABLE_SUBSTRING": "字符串 %1 從 %2",
            "TUBITV2_VARIABLE_SUBSTRING2": "字符串 %1 從 %2 到 %3",
	        "TUBITV2_VARIABLE":"TUBIT 多变量",
            "TUBITV2_VARIABLE_CREATE":"建立 %1 %2 %3 为 %4",
            "TUBITV2_VARIABLE_CREATE_STINRG":"建立 %1 字符串 %2 為 %3",
            "TUBITV2_VARIABLE_GLOBAL":"全域",
            "TUBITV2_VARIABLE_STATIC":"静态",
            "TUBITV2_VARIABLE_INT":"整数",
            "TUBITV2_VARIABLE_LONG":"长整数",
            "TUBITV2_VARIABLE_DOUBLE":"双精度浮点型",
            "TUBITV2_VARIABLE_STRING":"字符串",
            "TUBITV2_VARIABLE_READ":"%1变量",
            "TUBITV2_VARIABLE_SET":"将 %1 设为 %2",
            "TUBITV2_VARIABLE_CHANGE":"将 %1 增加 %2",
	        "TUBITV2_VARIABLE_UNBOXING":"转型 %1 %2"
		
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2_VARIABLE_CATEGORY": "多變數",
            "TUBITV2_VARIABLE_INCLUDE": "初始化 TUBIT 多變數",
            "TUBITV2_VARIABLE_STR2TYPE": "字串 %1 轉 %2 ",
            "TUBITV2_VARIABLE_TOINT": "整數",
            "TUBITV2_VARIABLE_TODOUBLE": "雙精度浮點數",
            "TUBITV2_VARIABLE_SUBSTRING": "子字串 %1 從 %2",
            "TUBITV2_VARIABLE_SUBSTRING2": "子字串 %1 從 %2 到 %3",
	        "TUBITV2_VARIABLE":"TUBIT 多變數",
            "TUBITV2_VARIABLE_CREATE":"建立 %1 %2 %3 為 %4",
            "TUBITV2_VARIABLE_CREATE_STINRG":"建立 %1 字串 %2 為 %3",
            "TUBITV2_VARIABLE_GLOBAL":"全域",
            "TUBITV2_VARIABLE_STATIC":"靜態",
            "TUBITV2_VARIABLE_INT":"整數",
            "TUBITV2_VARIABLE_LONG":"長整數",
            "TUBITV2_VARIABLE_DOUBLE":"雙精度浮點數",
            "TUBITV2_VARIABLE_STRING":"字串",
            "TUBITV2_VARIABLE_READ":"%1變數",
            "TUBITV2_VARIABLE_SET":"變數 %1 設為 %2",
            "TUBITV2_VARIABLE_CHANGE":"變數 %1 改變 %2",
	        "TUBITV2_VARIABLE_UNBOXING":"轉型 %1 %2"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;