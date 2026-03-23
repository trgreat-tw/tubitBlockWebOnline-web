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
            "moreComments.name": "More Comments",
            "moreComments.description": "Allows you to add comments in the form of blocks to increase program readability."
        },
        "ru": {
            "moreComments.name": "Больше комментариев",
            "moreComments.description": "Позволяет добавлять комментарии в виде блоков для повышения читабельности программы."
        },
        "zh-cn": {
            "moreComments.name": "更多注释",
            "moreComments.description": "让你能够以积木块的形式添加注释来增加程序的可读性。"
        },
        "zh-tw": {
            "moreComments.name": "更多註釋",
            "moreComments.description": "讓你能夠以積木塊的形式添加註釋來增加程序的可讀性。"
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
            "MORECOMMENTS_BRANCHBLOCK": "comments: %1",
            "MORECOMMENTS_CATEGORY": "More Comments",
            "MORECOMMENTS_COMMANDBLOCK": "comments: %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "MORECOMMENTS_BRANCHBLOCK": "комментарии: %1",
            "MORECOMMENTS_CATEGORY": "Еще комментарии",
            "MORECOMMENTS_COMMANDBLOCK": "комментарии: %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MORECOMMENTS_BRANCHBLOCK": "注释：%1",
            "MORECOMMENTS_CATEGORY": "更多注释",
            "MORECOMMENTS_COMMANDBLOCK": "注释：%1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "MORECOMMENTS_BRANCHBLOCK": "註釋：%1",
            "MORECOMMENTS_CATEGORY": "更多註釋",
            "MORECOMMENTS_COMMANDBLOCK": "註釋：%1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
