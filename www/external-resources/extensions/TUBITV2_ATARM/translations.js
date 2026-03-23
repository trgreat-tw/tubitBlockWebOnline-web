// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
return {
  "en": {
    "tubitv2atarm.name": "ROBOT ARM kit",
    "tubitv2atarm.description": "Robot Arm Control for TuBit V2 M/OTC Robot Kit."
  },
  "zh-tw": {
    "tubitv2atarm.name": "機械手臂套件",
    "tubitv2atarm.description": "適用於 TuBit V2 M/OTC 機器人套件的機械手臂控制"
  },
  "zh-cn": {
    "tubitv2atarm.name": "机械手臂套件",
    "tubitv2atarm.description": "适用于 TuBit V2 M/OTC 机器人套件的机械手臂控制"
  }
};


}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
        "TUBITV2ATARM_CATEGORY": "Robot Arm",
        "TUBITV2ATARM_INIT": "Initialize Robot Arm Horizontal gimbal (pan) motor %1 , Vertical gimbal (lift) motor %2 , Claw motor %3",
        "TUBITV2SM_0": "S0",
        "TUBITV2SM_1": "S1",
        "TUBITV2SM_2": "S2",
        "TUBITV2SM_3": "S3",
        "TUBITV2SM_4": "S4",
        "TUBITV2SM_5": "S5",
        "TUBITV2SM_6": "S6",
        "TUBITV2SM_7": "S7",
        "ATARM_CLAW": "Claw control",
        "TUBITV2ATARM_SET": "Arm motor parameter settings",
        "TUBITV2ATARM_CLAWSET":"Claw settings Grab at %1° ,Release at %2°",
        "TUBITV2ATARM_LIFTSET":"Lift settings Lower at %1° ,Raise at %2°",
        "TUBITV2ATARM_PANSET":"Pan settings  Left:%1,Right%2",
        "TUBITV2ATARM_CLAW":"Claw %1,%2s",
        "TUBITV2CLAW_OP":"Grab",
        "TUBITV2CLAW_CL":"Release",
        "TUBITV2ATARM_TRCONTROLADD": "Horizontal gimbal (pan) change %1°",
        "TUBITV2ATARM_UDCONTROLADD": "Vertical gimbal (lift) change %1°",
        "TUBITV2ATARM_TRCONTROL": "Horizontal gimbal (pan) to %1° in %2s",
        "TUBITV2ATARM_UDCONTROL": "Vertical gimbal (lift) to %1° in %2s",
        "ATARM_DEGADD": "Incremental angle control",
        "ATARM_DEGSET": "Direct angle setting (smooth movement)"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
        "TUBITV2ATARM_CATEGORY": "机械手臂",
        "TUBITV2ATARM_INIT": "初始化机械手臂 水平云台(转头)马达%1 , 垂直云台(抬臂)马达%2 , 夹爪马达 %3",
        "TUBITV2SM_0": "S0",
        "TUBITV2SM_1": "S1",
        "TUBITV2SM_2": "S2",
        "TUBITV2SM_3": "S3",
        "TUBITV2SM_4": "S4",
        "TUBITV2SM_5": "S5",
        "TUBITV2SM_6": "S6",
        "TUBITV2SM_7": "S7",
        "ATARM_CLAW": "夹爪控制",
        "TUBITV2ATARM_SET": "手臂马达参数设置",
        "TUBITV2ATARM_CLAWSET":"夹爪设置 抓取%1度,放开%2度",
        "TUBITV2ATARM_LIFTSET":"抬臂设置 放下%1度,抬起%2度",
        "TUBITV2ATARM_PANSET":"水平云台設定 最左邊%1,最右邊%2",
        "TUBITV2ATARM_CLAW":"夹爪%1,%2秒数",
        "TUBITV2CLAW_OP":"抓起",
        "TUBITV2CLAW_CL":"放开",
        "TUBITV2ATARM_TRCONTROLADD": "水平云台(转头)改变%1度",
        "TUBITV2ATARM_UDCONTROLADD": "垂直云台(抬臂)改变%1度",
        "TUBITV2ATARM_TRCONTROL": "水平云台(转头)至%1度,%2秒",
        "TUBITV2ATARM_UDCONTROL": "垂直云台(抬臂)至%1度,%2秒",
        "ATARM_DEGADD": "累加角度控制",
        "ATARM_DEGSET": "直接设置角度 (平滑转动)"
       }
    );
    

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2ATARM_CATEGORY": "機械手臂",
            "TUBITV2ATARM_INIT": "初始化機械手臂 水平雲台(轉頭)馬達%1 , 垂直雲台(抬頭)馬達%2 , 夾爪馬達 %3",
            "TUBITV2SM_0": "S0",
            "TUBITV2SM_1": "S1",
            "TUBITV2SM_2": "S2",
            "TUBITV2SM_3": "S3",
            "TUBITV2SM_4": "S4",
            "TUBITV2SM_5": "S5",
            "TUBITV2SM_6": "S6",
            "TUBITV2SM_7": "S7",
            "ATARM_CLAW": "夾爪控制",
            "TUBITV2ATARM_SET": "手臂馬達參數設定",
            "TUBITV2ATARM_CLAWSET":"夾爪設定 抓取角度%1,放開角度%2",
            "TUBITV2ATARM_LIFTSET":"抬臂設定 放下角度%1,抬起角度%2",
            "TUBITV2ATARM_PANSET":"轉軸設定 最左邊%1,最右邊%2",
            "TUBITV2ATARM_CLAW":"夾爪%1,%2秒",
            "TUBITV2CLAW_OP":"抓起",
            "TUBITV2CLAW_CL":"放開",
            "TUBITV2ATARM_TRCONTROLADD": "水平雲台(轉軸)改變%1度",
            "TUBITV2ATARM_UDCONTROLADD": "垂直雲台(抬臂)改變%1度",
            "TUBITV2ATARM_TRCONTROL": "水平雲台(轉軸)至%1度,%2秒",
            "TUBITV2ATARM_UDCONTROL": "垂直雲台(抬臂)至%1度,%2秒",
            "ATARM_DEGADD": "累加角度控制",
            "ATARM_DEGSET": "直接設定角度 (平滑轉動)"

        }
    );
    

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;