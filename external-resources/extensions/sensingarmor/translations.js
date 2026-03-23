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
            "sensorarmor.name": "Sensing Armor",
            "sensorarmor.description": "Detect gas levels, sensing touch force, sensing table tennis shooting"
        },
        "ru": {
            "sensorarmor.name": "Sensing Armor",
            "sensorarmor.description": "Обнаружение уровня газа, определение силы нажатия, обнаружение выстрелов шарика для настольного тенниса"
        },
        "zh-cn": {
            "sensorarmor.name": "传感装甲",
            "sensorarmor.description": "检测触摸力度，检测乒乓球发射"
        },
        "zh-tw": {
            "sensorarmor.name": "感測裝甲",
            "sensorarmor.description": "偵測觸碰力道、偵測乒乓球射擊"
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
            "SENSORARMOR_CATEGORY": "Sensing Armor",
            "SENSINGARMOR_INIT": "Sensing Armor Init pin %1",
            "SENSINGARMOR_READ": "Read %1 Sensing Armor",
            "SENSINGARMOR_SETRANGE": "Set %1 Sensing Armor range %2",
            "SENSINGARMOR_READPPSTRIKE": "%1 Sensing Armor hit?"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "SENSORARMOR_CATEGORY": "Sensing Armor",
            "SENSINGARMOR_INIT": "Инициализация Sensing Armor пин %1",
            "SENSINGARMOR_READ": "Считать %1 Sensing Armor",
            "SENSINGARMOR_SETRANGE": "Установить %1 диапазон Sensing Armor %2",
            "SENSINGARMOR_READPPSTRIKE": "%1 удар по Sensing Armor?"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SENSORARMOR_CATEGORY": "传感装甲",
            "SENSINGARMOR_INIT": "初始化传感装甲引脚 %1",
            "SENSINGARMOR_READ": "读取%1传感装甲",
            "SENSINGARMOR_SETRANGE": "设置%1传感装甲范围%2",
            "SENSINGARMOR_READPPSTRIKE": "%1传感装甲被击中？"
        }
    );
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "SENSORARMOR_CATEGORY": "感測裝甲",
            "SENSINGARMOR_INIT": "初始化感測裝甲腳位 %1",
            "SENSINGARMOR_READ": "讀取%1感測裝甲數值",
            "SENSINGARMOR_SETRANGE": "設定%1感測裝甲範圍%2",
            "SENSINGARMOR_READPPSTRIKE": "%1感測裝甲被擊中？"
        }
    );
    
    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
