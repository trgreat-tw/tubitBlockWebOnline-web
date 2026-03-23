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
            "insertSourceCode.name": "Insert Source Code",
            "insertSourceCode.description": "Insert the source code directly into the blocks, so that professional users can realize some more advanced functions."
        },
        "ru": {
            "insertSourceCode.name": "Вставьте исходный код",
            "insertSourceCode.description": "Вставьте исходный код непосредственно в блоки, чтобы профессиональные пользователи могли реализовать некоторые более продвинутые функции."
        },
        "zh-cn": {
            "insertSourceCode.name": "插入源代码",
            "insertSourceCode.description": "将源代码直接插入积木中，让专业用户可以实现一些更高级的功能。"
        },
        "zh-tw": {
            "insertSourceCode.name": "插入源代碼",
            "insertSourceCode.description": "將源代碼直接插入積木中，讓專業用戶可以實現一些更高級的功能。"
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
            "INSERTSOURCECODE_BOOLEANBLOCK": "insert source code %1",
            "INSERTSOURCECODE_CATEGORY": "Insert Source Code",
            "INSERTSOURCECODE_COMMANDBLOCK": "insert source code %1 %2",
            "INSERTSOURCECODE_DONTESCAPE": "don\"t escape newline",
            "INSERTSOURCECODE_ESCAPE": "escape newline",
            "INSERTSOURCECODE_INSERTINDEFINEAREA": "insert source code %1 in define area %2",
            "INSERTSOURCECODE_INSERTININCLUDEAREA": "insert source code %1 in include area %2",
            "INSERTSOURCECODE_ROUNDBLOCK": "insert source code %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "INSERTSOURCECODE_BOOLEANBLOCK": "вставить исходный код %1",
            "INSERTSOURCECODE_CATEGORY": "вставить исходный код",
            "INSERTSOURCECODE_COMMANDBLOCK": "вставить исходный код %1 %2",
            "INSERTSOURCECODE_DONTESCAPE": "не экранировать новую строку",
            "INSERTSOURCECODE_ESCAPE": "экранировать новую строку",
            "INSERTSOURCECODE_INSERTINDEFINEAREA": "вставить исходный код %1 в область определения %2",
            "INSERTSOURCECODE_INSERTININCLUDEAREA": "вставить исходный код %1 во включаемую область %2",
            "INSERTSOURCECODE_ROUNDBLOCK": "вставить исходный код %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "INSERTSOURCECODE_BOOLEANBLOCK": "插入源代码 %1",
            "INSERTSOURCECODE_CATEGORY": "插入源代码",
            "INSERTSOURCECODE_COMMANDBLOCK": "插入源代码 %1 %2",
            "INSERTSOURCECODE_DONTESCAPE": "不转译换行符",
            "INSERTSOURCECODE_ESCAPE": "转译换行符",
            "INSERTSOURCECODE_INSERTINDEFINEAREA": "在定义区插入源代码 %1 %2",
            "INSERTSOURCECODE_INSERTININCLUDEAREA": "在引用区插入源代码 %1 %2",
            "INSERTSOURCECODE_ROUNDBLOCK": "插入源代码 %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "INSERTSOURCECODE_BOOLEANBLOCK": "插入源代碼 %1",
            "INSERTSOURCECODE_CATEGORY": "插入源代碼",
            "INSERTSOURCECODE_COMMANDBLOCK": "插入源代碼 %1 %2",
            "INSERTSOURCECODE_DONTESCAPE": "不轉譯換行符",
            "INSERTSOURCECODE_ESCAPE": "轉譯換行符",
            "INSERTSOURCECODE_INSERTINDEFINEAREA": "在定義區插入源代碼 %1 %2",
            "INSERTSOURCECODE_INSERTININCLUDEAREA": "在引用區插入源代碼 %1 %2",
            "INSERTSOURCECODE_ROUNDBLOCK": "插入源代碼 %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
