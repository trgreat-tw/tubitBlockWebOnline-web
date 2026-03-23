// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2husky.name": "HuskyLens",
            "tubitv2husky.description": "HuskyLens AI machine vision module."
        },
        "zh-cn": {
            "tubitv2husky.name": "HuskyLens",
            "tubitv2husky.description": "HuskyLens 人工智能视觉模块。"
        },
        "zh-tw": {
            "tubitv2husky.name": "HuskyLens AI (哈士奇)",
            "tubitv2husky.description": "HuskyLens 人工智慧影像辨識模組。"
        }
    };
}


function registerScratchExtensionTranslations () {
    return {};
}
    

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2HUSKY_CATEGORY": "Huskylens AI",
            "TUBITV2HUSKY_LABEL_LEARN": "Huskylens: Learn",
            "TUBITV2HUSKY_LABEL_RECOGNITION": "Huskylens: Recognition",
            "TUBITV2HUSKY_LABEL_COUNT": "Huskylens: Count",
            "TUBITV2HUSKY_LABEL_RESULT": "Huskylens: Result",
            "TYPE_BLOCKS": "Blocks",
            "TYPE_ARROWS": "Arrows",
            "TYPE_BOTH": "Blocks or Arrows",
            "TUBITV2HUSKY_INIT": "Huskylens Initialize %1",
            "TYPE_IIC":"I2C",
            "TYPE_UART":"UART",
            "TUBITV2HUSKY_ISLEARNED": "Any learned record",
            "TUBITV2HUSKY_ISLEARNEDID": "Learned record with ID %1",
            "TUBITV2HUSKY_REQUESTLEARNED": "Learned %1",
            "TUBITV2HUSKY_REQUEST": "Detected %1",
            "TUBITV2HUSKY_REQUESTID": "Detected %2 with ID %1",
            "TUBITV2HUSKY_AVAILABLE": "Number of available results",
            "TUBITV2HUSKY_LEARNEDIDS": "Number of learned IDs",
            "TUBITV2HUSKY_COUNT": "Number of learned %1",
            "TUBITV2HUSKY_COUNTID": "Number of %2 with ID %1",
            "TUBITV2HUSKY_FRAMENUMBER": "Frame number",
            "TUBITV2HUSKY_GET": "Get the %1-th %2 result and store in %3",
            "TUBITV2HUSKY_GETID": "Get the %2-th %3 result with ID %1 and store in %4",
            "TUBITV2HUSKY_RESULTVARDECLARE": "Declare result variable %1",
            "TUBITV2HUSKY_RESULTVARREAD": "Result variable %1",
            "TUBITV2HUSKY_LABEL_DATA": "Huskylens: Data",
            "TUBITV2HUSKY_UPDATA": "Update Huskylens reading",
            "TUBITV2HUSKY_READDATA": "Huskylens read object %1",
            "TYPE_ID": "ID",
            "TYPE_XCENTER": "X Center",
            "TYPE_YCENTER": "Y Center",
            "TYPE_WIDTH": "(Block) Width",
            "TYPE_HIGHT": "(Block) Height",
            "TYPE_XORIGIN": "(Arrow) X Start",
            "TYPE_YORIGIN": "(Arrow) Y Start",
            "TYPE_XTARGET": "(Arrow) X End",
            "TYPE_YTARGET": "(Arrow) Y End",
            "TUBITV2HUSKY_SWITCHVISION": "Switch Mode %1",
            "TYPE_ALGORITHM_FACE_RECOGNITION":"Face Recognition",
            "TYPE_ALGORITHM_OBJECT_TRACKING":"Object Tracking",
            "TYPE_ALGORITHM_OBJECT_RECOGNITION":"Object Recognition",
            "TYPE_ALGORITHM_LINE_TRACKING":"Line Tracking",
            "TYPE_ALGORITHM_TAG_RECOGNITION":"Tag Recognition",
            "TYPE_ALGORITHM_COLOR_RECOGNITION":"Color Recognition",
            "TYPE_ALGORITHM_OBJECT_CLASSIFICATION":"Object Classification",
            "TUBITV2HUSKY_VISIONTO": "Select Recognition ID %1"

        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2HUSKY_CATEGORY": "Huskylens AI",
            "TUBITV2HUSKY_LABEL_LEARN": "Huskylens: 学习",
            "TUBITV2HUSKY_LABEL_RECOGNITION": "Huskylens: 识别",
            "TUBITV2HUSKY_LABEL_COUNT": "Huskylens: 计数",
            "TUBITV2HUSKY_LABEL_RESULT": "Huskylens: 结果",
            "TYPE_BLOCKS": "方块",
            "TYPE_ARROWS": "箭头",
            "TYPE_BOTH": "方块或箭头",
            "TUBITV2HUSKY_INIT": "Huskylens 初始化 %1",
            "TYPE_IIC":"I2C",
            "TYPE_UART":"UART",
            "TUBITV2HUSKY_ISLEARNED": "有任何学习记录",
            "TUBITV2HUSKY_ISLEARNEDID": "有 ID 为 %1 的学习记录",
            "TUBITV2HUSKY_REQUESTLEARNED": "已学习的 %1",
            "TUBITV2HUSKY_REQUEST": "检测到 %1",
            "TUBITV2HUSKY_REQUESTID": "检测到 ID 为 %1 的 %2",
            "TUBITV2HUSKY_AVAILABLE": "可读取结果数",
            "TUBITV2HUSKY_LEARNEDIDS": "已学习的 ID 数量",
            "TUBITV2HUSKY_COUNT": "已学习的 %1 数量",
            "TUBITV2HUSKY_COUNTID": "ID %1 的数量的 %2",
            "TUBITV2HUSKY_FRAMENUMBER": "帧编号",
            "TUBITV2HUSKY_GET": "获取第 %1 条 %2 结果并存于 %3",
            "TUBITV2HUSKY_GETID": "获取 ID 为 %1 的第 %2 条 %3 结果并存于 %4",
            "TUBITV2HUSKY_RESULTVARDECLARE": "声明结果变量 %1",
            "TUBITV2HUSKY_RESULTVARREAD": "结果变量 %1",
            "TUBITV2HUSKY_LABEL_DATA": "Huskylens：数据",
            "TUBITV2HUSKY_UPDATA": "更新 Huskylens 读取数据",
            "TUBITV2HUSKY_READDATA": "Huskylens 读取对象 %1",
            "TYPE_ID": "ID",
            "TYPE_XCENTER": "X",
            "TYPE_YCENTER": "Y",
            "TYPE_WIDTH": "(方块)宽",
            "TYPE_HIGHT": "(方块)高",
            "TYPE_XORIGIN": "(箭头)X起点",
            "TYPE_YORIGIN": "(箭头)Y起点",
            "TYPE_XTARGET": "(箭头)X终点",
            "TYPE_YTARGET": "(箭头)Y终点",
            "TUBITV2HUSKY_SWITCHVISION": "切换模式 %1",
            "TYPE_ALGORITHM_FACE_RECOGNITION":"人脸识别",
            "TYPE_ALGORITHM_OBJECT_TRACKING":"物体追踪",
            "TYPE_ALGORITHM_OBJECT_RECOGNITION":"物体识别",
            "TYPE_ALGORITHM_LINE_TRACKING":"循线检测",
            "TYPE_ALGORITHM_TAG_RECOGNITION":"标签识别",
            "TYPE_ALGORITHM_COLOR_RECOGNITION":"颜色识别",
            "TYPE_ALGORITHM_OBJECT_CLASSIFICATION":"物体分类",
            "TUBITV2HUSKY_VISIONTO": "选择识别 ID %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2HUSKY_CATEGORY": "Huskylens AI",
            "TUBITV2HUSKY_LABEL_LEARN": "Huskylens: 學習",
            "TUBITV2HUSKY_LABEL_RECOGNITION": "Huskylens: 辨識",
            "TUBITV2HUSKY_LABEL_COUNT": "Huskylens: 計數",
            "TUBITV2HUSKY_LABEL_RESULT": "Huskylens: 結果",
            "TYPE_BLOCKS": "方塊",
            "TYPE_ARROWS": "箭頭",
            "TYPE_BOTH": "方塊或箭頭",
            "TUBITV2HUSKY_INIT":"Huskylens 初始化%1",
            "TYPE_IIC":"I2C",
            "TYPE_UART":"UART",
            "TUBITV2HUSKY_ISLEARNED": "有任何學習紀錄",
            "TUBITV2HUSKY_ISLEARNEDID": "有 ID 為 %1 的學習紀錄",
            "TUBITV2HUSKY_REQUESTLEARNED": "已學習的 %1",
            "TUBITV2HUSKY_REQUEST": "偵測到 %1",
            "TUBITV2HUSKY_REQUESTID": "偵測到 ID 為 %1 的 %2",
            "TUBITV2HUSKY_AVAILABLE": "可讀取結果數",
            "TUBITV2HUSKY_LEARNEDIDS": "已學習的 ID 數量",
            "TUBITV2HUSKY_COUNT": "已學習的 %1 數量",
            "TUBITV2HUSKY_COUNTID": "ID %1 的數量的 %2",
            "TUBITV2HUSKY_FRAMENUMBER": "幀編號",
            "TUBITV2HUSKY_GET": "取得第 %1 筆 %2 結果並存於 %3",
            "TUBITV2HUSKY_GETID": "取得 ID 為 %1 的第 %2 筆 %3 結果並存於 %4",
            "TUBITV2HUSKY_RESULTVARDECLARE": "宣告結果變數 %1",
            "TUBITV2HUSKY_RESULTVARREAD": "結果變數 %1",
            "TUBITV2HUSKY_LABEL_DATA":"Huskylens: 資料",
            "TUBITV2HUSKY_UPDATA":"更新Huskylens讀取資料",
            "TUBITV2HUSKY_READDATA":"Huskylens讀取物件%1",
            "TYPE_ID":"ID",
            "TYPE_XCENTER":"X",
            "TYPE_YCENTER":"Y",
            "TYPE_WIDTH":"(方塊)寬",
            "TYPE_HIGHT":"(方塊)高",
            "TYPE_XORIGIN":"(箭頭)X起點",
            "TYPE_YORIGIN":"(箭頭)Y起點",
            "TYPE_XTARGET":"(箭頭)X終點",
            "TYPE_YTARGET":"(箭頭)Y終點",
            "TUBITV2HUSKY_SWITCHVISION":"切換模式%1",
            "TYPE_ALGORITHM_FACE_RECOGNITION":"人臉辨識",
            "TYPE_ALGORITHM_OBJECT_TRACKING":"物體追蹤",
            "TYPE_ALGORITHM_OBJECT_RECOGNITION":"物體辨識",
            "TYPE_ALGORITHM_LINE_TRACKING":"循線偵測",
            "TYPE_ALGORITHM_TAG_RECOGNITION":"標籤辨識",
            "TYPE_ALGORITHM_COLOR_RECOGNITION":"顏色辨識",
            "TYPE_ALGORITHM_OBJECT_CLASSIFICATION":"物體分類",
            "TUBITV2HUSKY_VISIONTO":"選擇辨識 ID %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;