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
            "max30102.name": "MAX30102 Sensor",
            "max30102.description": "Blood oxygen and heart rate detection module based on MAX30102."
        },
        "ru": {
            "max30102.name": "Датчик MAX30102 ",
            "max30102.description": "Модуль определения кислорода в крови и пульса на базе MAX30102."
        },
        "zh-cn": {
            "max30102.name": "MAX30102 传感器",
            "max30102.description": "基于 MAX30102 的血氧心跳探测模块。"
        },
        "zh-tw": {
            "max30102.name": "MAX30102 傳感器",
            "max30102.description": "基於 MAX30102 的血氧心跳探測模塊。"
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
            "MAX30102_CATEGORY": "MAX30102",
            "MAX30102_GETDATA": "max30102 get date",
            "MAX30102_HEARTBEAT": "max30102 heart beat value per minite",
            "MAX30102_INIT": "init max30102",
            "MAX30102_IRVALUE": "max30102 IR value",
            "MAX30102_ISTOUCHED": "max30102 is touched?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "MAX30102_CATEGORY": "MAX30102",
            "MAX30102_GETDATA": "получить дату с max30102",
            "MAX30102_HEARTBEAT": "max30102 количество ударов сердца в минуту",
            "MAX30102_INIT": "инициализировать max30102",
            "MAX30102_IRVALUE": "max30102 значение IR",
            "MAX30102_ISTOUCHED": "коснулся max30102?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MAX30102_CATEGORY": "MAX30102",
            "MAX30102_GETDATA": "max30102 获取数据",
            "MAX30102_HEARTBEAT": "max30102 每分钟心跳数",
            "MAX30102_INIT": "初始化 max30102",
            "MAX30102_IRVALUE": "max30102 IR 数值",
            "MAX30102_ISTOUCHED": "max30102 被触碰?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "MAX30102_CATEGORY": "MAX30102",
            "MAX30102_GETDATA": "max30102 獲取數據",
            "MAX30102_HEARTBEAT": "max30102 每分鐘心跳數",
            "MAX30102_INIT": "初始化 max30102",
            "MAX30102_IRVALUE": "max30102 IR 數值",
            "MAX30102_ISTOUCHED": "max30102 被觸碰?"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
