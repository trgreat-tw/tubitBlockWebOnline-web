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
            "tubitv2bno055.name": "BNO055 Sensor",
            "tubitv2bno055.description": "Orientation sensor providing roll, pitch, and yaw readings"
        },
        "zh-cn": {
            "tubitv2bno055.name": "BNO055 传感器",
            "tubitv2bno055.description": "提供翻滚、俯仰与偏航角度的姿态感测器"
        },
        "zh-tw": {
            "tubitv2bno055.name": "BNO055 感測器",
            "tubitv2bno055.description": "提供翻滾、俯仰與偏航角的姿態感測器"
        }
    };
}


function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2BNO055_CATEGORY": "BNO055 Sensor",
            "TUBITV2BNO055_INIT": "Initialize BNO055 sensor",
            "TUBITV2BNO055_OIU": "Define other I2C update block",
            "TUBITV2BNO055_READ": "Read BNO055 %1 angle",
            "TUBITV2BNO055_X": "X (roll)",
            "TUBITV2BNO055_Y": "Y (pitch)",
            "TUBITV2BNO055_Z": "Z (yaw)"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2BNO055_CATEGORY": "BNO055 传感器",
            "TUBITV2BNO055_INIT": "初始化 BNO055 传感器",
            "TUBITV2BNO055_OIU": "定义其他 I2C 更新区块",
            "TUBITV2BNO055_READ": "读取 BNO055 %1 角度",
            "TUBITV2BNO055_X": "X（翻滚）",
            "TUBITV2BNO055_Y": "Y（俯仰）",
            "TUBITV2BNO055_Z": "Z（偏航）"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            
            "TUBITV2BNO055_CATEGORY": "BNO055 感測器",
            "TUBITV2BNO055_INIT": "初始化 BNO055 感測器",
            "TUBITV2BNO055_OIU": "定義其他 I2C 更新區塊",
            "TUBITV2BNO055_READ": "讀取 BNO055 %1 角度",
            "TUBITV2BNO055_X": "X（翻滾）",
            "TUBITV2BNO055_Y": "Y（俯仰）",
            "TUBITV2BNO055_Z": "Z（偏航）"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;