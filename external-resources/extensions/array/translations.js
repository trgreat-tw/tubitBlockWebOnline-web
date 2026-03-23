// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2array.name": "Array",
            "tubitv2array.description": "Create more type arrays processing building blocks."
        },
        "zh-cn": {
            "tubitv2array.name": "数组",
            "tubitv2array.description": "创建更多用于处理各种类型数组的构建模块。"
        },
        "zh-tw": {
            "tubitv2array.name": "陣列",
            "tubitv2array.description": "建立用於處理各種型別陣列的積木。"
        }
    };
    
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"], {
        "TUBITV2_ARRAY_CATEGORY": "Array",
        "TUBITV2_ARRAY_CREATE": "Create %1%2 array %3, array size %4",
        "TUBITV2_ARRAY_GLOBAL": "global",
        "TUBITV2_ARRAY_STATIC": "static",
        "TUBITV2_ARRAY_INT": "integer",
        "TUBITV2_ARRAY_LONG": "long integer",
        "TUBITV2_ARRAY_DOUBLE": "double precision",
        "TUBITV2_ARRAY_STRING": "string",
        "TUBITV2_ARRAY_READ": "Read array %1 at index %2",
        "TUBITV2_ARRAY_SET": "Set array %1 at index %2 to %3",
        "TUBITV2_ARRAY_SIZE": "Array %1 length"
    });
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        "TUBITV2_ARRAY_CATEGORY": "数组",
        "TUBITV2_ARRAY_CREATE": "创建%1%2数组%3，数组大小%4",
        "TUBITV2_ARRAY_GLOBAL": "全局",
        "TUBITV2_ARRAY_STATIC": "静态",
        "TUBITV2_ARRAY_INT": "整数",
        "TUBITV2_ARRAY_LONG": "长整数",
        "TUBITV2_ARRAY_DOUBLE": "双精度浮点数",
        "TUBITV2_ARRAY_STRING": "字符串",
        "TUBITV2_ARRAY_READ": "读取数组%1的第%2项",
        "TUBITV2_ARRAY_SET": "将数组%1的第%2项设置为%3",
        "TUBITV2_ARRAY_SIZE": "数组%1的长度"
    });
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        "TUBITV2_ARRAY_CATEGORY": "陣列",
        "TUBITV2_ARRAY_CREATE": "建立%1%2陣列%3, 陣列大小%4",
        "TUBITV2_ARRAY_GLOBAL": "全域",
        "TUBITV2_ARRAY_STATIC": "靜態",
        "TUBITV2_ARRAY_INT": "整數",
        "TUBITV2_ARRAY_LONG": "長整數",
        "TUBITV2_ARRAY_DOUBLE": "雙精度浮點數",
        "TUBITV2_ARRAY_STRING": "字串",
        "TUBITV2_ARRAY_READ": "讀取陣列%1位置%2",
        "TUBITV2_ARRAY_SET": "陣列%1位置%2設為%3",
        "TUBITV2_ARRAY_SIZE": "陣列%1長度"
    });
    

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;