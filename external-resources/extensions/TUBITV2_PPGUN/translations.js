// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
return {
    "en": {
        "tubitv2ppgun.name": "PPGUN kit",
        "tubitv2ppgun.description": "Ping Pong Launcher Control for TuBit V2 MTC Robot Kit."
    },
    "zh-tw": {
        "tubitv2ppgun.name": "乒乓球發射器套件",
        "tubitv2ppgun.description": "適用於 TuBit V2 M/OTC 機器人套件的乒乓球發射器控制"
    },
    "zh-cn": {
        "tubitv2ppgun.name": "乒乓球发射器套件",
        "tubitv2ppgun.description": "适用于 TuBit V2 M/OTC 机器人套件的乒乓球发射器控制"
    }
};

}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2PPGUN_CATEGORY": "Ping Pong Launcher",
            "TUBITV2PPGUN_INIT": "Initialize Ping Pong Launcher Pan Servo %1, Tilt Servo %2, Launch Servo %3",
            "TUBITV2SM_0": "S0",
            "TUBITV2SM_1": "S1",
            "TUBITV2SM_2": "S2",
            "TUBITV2SM_3": "S3",
            "TUBITV2SM_4": "S4",
            "TUBITV2SM_5": "S5",
            "TUBITV2SM_6": "S6",
            "TUBITV2SM_7": "S7",
            "TUBITV2PPGUN_LAUNCH": "Launch Ping Pong Ball",
            "TUBITV2PPGUN_TRCONTROLADD": "Rotate pan by %1 degrees",
            "TUBITV2PPGUN_UDCONTROLADD": "Tilt up/down by %1 degrees",
            "TUBITV2PPGUN_TRCONTROL": "Rotate pan to %1 degrees,%2s",
            "TUBITV2PPGUN_UDCONTROL": "Tilt to %1 degrees,%2s",
            "PPGUN_DEGADD": "Increment Angle Control",
            "PPGUN_DEGSET": "Set Angle (Smooth Motion)"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
        "TUBITV2PPGUN_CATEGORY": "乒乓球发射器",
        "TUBITV2PPGUN_INIT": "初始化乒乓球发射器 旋转马达%1 , 抬头马达%2 , 发射马达 %3",
        "TUBITV2SM_0": "S0",
        "TUBITV2SM_1": "S1",
        "TUBITV2SM_2": "S2",
        "TUBITV2SM_3": "S3",
        "TUBITV2SM_4": "S4",
        "TUBITV2SM_5": "S5",
        "TUBITV2SM_6": "S6",
        "TUBITV2SM_7": "S7",
        "TUBITV2PPGUN_LAUNCH": "发射乒乓球",
        "TUBITV2PPGUN_TRCONTROLADD": "控制转头改变%1度",
        "TUBITV2PPGUN_UDCONTROLADD": "控制抬头改变%1度",
        "TUBITV2PPGUN_TRCONTROL": "控制转头转至%1度,%2秒",
        "TUBITV2PPGUN_UDCONTROL": "控制抬头转至%1度,%2秒",
        "PPGUN_DEGADD": "累加角度控制",
        "PPGUN_DEGSET": "直接设定角度 (平滑转动)"
       }
    );
    

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2PPGUN_CATEGORY": "乒乓球發射器",
            "TUBITV2PPGUN_INIT": "初始化乒乓球發射器 水平雲台(轉頭)馬達%1 , 垂直雲台(抬頭)馬達%2 , 發射馬達 %3",
            "TUBITV2SM_0": "S0",
            "TUBITV2SM_1": "S1",
            "TUBITV2SM_2": "S2",
            "TUBITV2SM_3": "S3",
            "TUBITV2SM_4": "S4",
            "TUBITV2SM_5": "S5",
            "TUBITV2SM_6": "S6",
            "TUBITV2SM_7": "S7",
            "TUBITV2PPGUN_LAUNCH": "發射乒乓球",
            "TUBITV2PPGUN_TRCONTROLADD": "水平雲台(轉頭)改變%1度",
            "TUBITV2PPGUN_UDCONTROLADD": "垂直雲台(抬頭)改變%1度",
            "TUBITV2PPGUN_TRCONTROL": "水平雲台(轉頭)至%1度,%2秒",
            "TUBITV2PPGUN_UDCONTROL": "垂直雲台(抬頭)至%1度,%2秒",
            "PPGUN_DEGADD": "累加角度控制",
            "PPGUN_DEGSET": "直接設定角度 (平滑轉動)"

        }
    );
    

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;