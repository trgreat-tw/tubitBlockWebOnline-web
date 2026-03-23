/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
    return {
        "en": {
            "tubitv2o.name": "TUBIT V2 OLED",
            "tubitv2o.description": "For TU:bit V2 Control board."
        },
        "zh-cn": {
            "tubitv2o.name": "TUBIT V2 OLED",
            "tubitv2o.description": "For TU:bit V2 Control board."
        },
        "zh-tw": {
            "tubitv2o.name": "TUBIT V2 OLED",
            "tubitv2o.description": "For TU:bit V2 Control board."
        }
    };
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "TUBITV2_OLED_CATEGORY": "OLED",
            "TUBITV2_OLED_START": "oled start",
            "TUBITV2_OLED_UPDATE": "update display",
            "TUBITV2_OLED_CLEAR": "clear display",
            "TUBITV2_OLED_DRAWRLINE":"draw line x: %1 y: %2 x1: %3 y1: %4",
            "TUBITV2_OLED_DRAWAXISALIGNEDLINE": "draw axis-aligned line x: %1 y: %2 length %3 , %4",
            "TUBITV2_OLED_DRAWRECTANGLE":"draw rectangle x: %1 y: %2 width %3 height %4 rounded corners %5 , %6",
            "TUBITV2_OLED_DRAWRCIRCLE":"draw circle x: %1 y: %2 radius %3 , %4",
            "TUBITV2_OLED_DRAWRTRIANGLE":"draw triangle x: %1 y: %2 x1: %3 y1: %4 x2: %5 y2: %6 , %7",
            "TUBITV2_OLED_DRAWSTRING":"draw string x: %1 y: %2 %3",
            "TUBITV2_OLED_FILLED":"Filled",
            "TUBITV2_OLED_HOLLOW":"Hollow",
            "TUBITV2_OLED_VERTICAL":"Vertical",
            "TUBITV2_OLED_HORIZONTAL":"Horizontal",
            "TUBITV2_OLED_LABEL_ADVANCE_A": "OLED: Draw Shapes",
            "TUBITV2_OLED_LABEL_ADVANCE_B": "OLED: Draw String",
            "TUBITV2_OLED_LABEL_ADVANCE_C": "OLED: Draw Chart",
            "TUBITV2_OLED_LABEL_ADVANCE_D": "OLED: Animations",
            "TUBITV2_OLED_RIGHT": "Right",
            "TUBITV2_OLED_LEFT": "Left",
            "TUBITV2_OLED_UP": "Up",
            "TUBITV2_OLED_DOWN": "Down",
            "TUBITV2_OLED_ANIMUPDATE": "update display",
            "TUBITV2_OLED_ANIMDONTUPDATE": "don't update display",
            "TUBITV2_OLED_ANIMDRAWEYES": "draw eyes, %1",
            "TUBITV2_OLED_ANIMRESETEYES": "reset eyes, %1",
            "TUBITV2_OLED_ANIMWAKEUP": "wakeup ",
            "TUBITV2_OLED_ANIMBLINK": "blink, speed: %1",
            "TUBITV2_OLED_ANIMHAPPYEYE": "happy eye",
            "TUBITV2_OLED_ANIMANGRYEYE": "angry eye",
            "TUBITV2_OLED_ANIMTIREDEYE": "tired eye",
            "TUBITV2_OLED_ANIMLEFTWINKEYE": "left wink",
            "TUBITV2_OLED_ANIMMOVEBIGEYE": "move big eye, direction: %1",
            "TUBITV2_OLED_ANIMSACCADE": "saccade, direction x: %1 y: %2",
            "TUBITV2_OLED_ANIMLAUNCHANIMATIONWITHINDEX": "play animation: %1",
            "TUBITV2_OLED_DRAWCHART": "chart data: %1 chart type: %2 start from: %3",
            "TUBITV2_OLED_CHART_BAR": "Bar",
            "TUBITV2_OLED_CHART_LINE": "Line",
            "TUBITV2_OLED_SAVEBITMAP": "add bitmap %1",
            "TUBITV2_OLED_DRAWBITMAP": "draw bitmap x: %1 y: %2 width %3 height %4",
            "TUBITV2_OLED_WAKEUP": "Wake up eyes",
            "TUBITV2_OLED_RESETEYE": "Reset eyes",
            "TUBITV2_OLED_MBE_RIGHT": "Move big eye right",
            "TUBITV2_OLED_MBE_LEFT": "Move big eye left",
            "TUBITV2_OLED_BLINK_WAIT": "Blink (with pause)",
            "TUBITV2_OLED_HAPPY": "Happy eyes",
            "TUBITV2_OLED_BLINK": "Blink",
            "TUBITV2_OLED_LEFTWINK": "Left wink",
            "TUBITV2_OLED_ANGRY": "Angry eyes",
            "TUBITV2_OLED_SACCADE": "Random saccade",
            "TUBITV2_OLED_CREATEIMAGE": "create image %1 , BMP = %2",
            "TUBITV2_OLED_DISPLAYIMAGE": "display image %5 , x: %1 y: %2 width %3 height %4",
            "TUBITV2_OLED_LABEL_ADVANCE_BA": "OLED: Image",
            "TUBITV2_OLED_FONT": "Font %1 , x: %2 y: %3 print: %4",
            "TUBITV2_OLED_CHINESE": "Chinese",
            "TUBITV2_OLED_EN": "English",
            "TUBITV2_OLED_SETFONT": "Set Font %1",
            "TUBITV2_OLED_EN": "English",
            "TUBITV2_OLED_CHINESE": "Chinese",
            "TUBITV2_OLED_MATRIX": "draw %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_OLED_CATEGORY": "OLED",
            "TUBITV2_OLED_START": "OLED 开始绘制",
            "TUBITV2_OLED_UPDATE": "刷新显示屛",
            "TUBITV2_OLED_CLEAR": "清空显示屛",
            "TUBITV2_OLED_DRAWRLINE": "绘制直线 x: %1 y: %2 x1: %3 y1: %4",
            "TUBITV2_OLED_DRAWAXISALIGNEDLINE": "绘制 %1 线在 x: %2 y: %3 长: %4",
            "TUBITV2_OLED_DRAWRECTANGLE": "绘制矩形 x: %1 y: %2 宽: %3 高: %4 圆角: %5 , %6",
            "TUBITV2_OLED_DRAWRCIRCLE": "绘制圆形 x: %1 y: %2 半径: %3 , %4",
            "TUBITV2_OLED_DRAWRTRIANGLE": "绘制三角形 x: %1 y: %2 x1: %3 y1: %4 x2: %5 y2: %6 , %7",
            "TUBITV2_OLED_DRAWSTRING": "绘制字符串 x: %1 y: %2 %3",
            "TUBITV2_OLED_FILLED": "填充",
            "TUBITV2_OLED_HOLLOW": "中空",
            "TUBITV2_OLED_VERTICAL": "竖直",
            "TUBITV2_OLED_HORIZONTAL": "水平",
            "TUBITV2_OLED_LABEL_ADVANCE_A": "OLED: 图形",
            "TUBITV2_OLED_LABEL_ADVANCE_B": "OLED: 字符串",
            "TUBITV2_OLED_LABEL_ADVANCE_C": "OLED: 图表",
            "TUBITV2_OLED_LABEL_ADVANCE_D": "OLED: 动画",
            "TUBITV2_OLED_RIGHT": "右",
            "TUBITV2_OLED_LEFT": "左",
            "TUBITV2_OLED_UP": "上",
            "TUBITV2_OLED_DOWN": "下",
            "TUBITV2_OLED_ANIMUPDATE": "刷新显示屛",
            "TUBITV2_OLED_ANIMDONTUPDATE": "不刷新显示屛",
            "TUBITV2_OLED_ANIMDRAWEYES": "绘制双眼, %1",
            "TUBITV2_OLED_ANIMRESETEYES": "重置双眼, %1",
            "TUBITV2_OLED_ANIMWAKEUP": "睁眼",
            "TUBITV2_OLED_ANIMBLINK": "眨眼, 速度: %1",
            "TUBITV2_OLED_ANIMHAPPYEYE": "开心",
            "TUBITV2_OLED_ANIMANGRYEYE": "生气",
            "TUBITV2_OLED_ANIMTIREDEYE": "疲倦",
            "TUBITV2_OLED_ANIMLEFTWINKEYE": "眨左眼",
            "TUBITV2_OLED_ANIMMOVEBIGEYE": "移动眼睛向: %1",
            "TUBITV2_OLED_ANIMSACCADE": "扫视方向 x: %1 y: %2",
            "TUBITV2_OLED_ANIMLAUNCHANIMATIONWITHINDEX": "播放: %1",
            "TUBITV2_OLED_DRAWCHART": "绘制单笔数据: %1 图表类型: %2 起始方向: %3",
            "TUBITV2_OLED_CHART_BAR": "条形图",
            "TUBITV2_OLED_CHART_LINE": "折线图",
            "TUBITV2_OLED_SAVEBITMAP": "建立点阵图 %1",
            "TUBITV2_OLED_DRAWBITMAP": "绘制点阵图 x: %1 y: %2 宽度 %3 高度 %4",
            "TUBITV2_OLED_WAKEUP": "睁开眼睛",
            "TUBITV2_OLED_RESETEYE": "重置眼睛",
            "TUBITV2_OLED_MBE_RIGHT": "大眼睛右移",
            "TUBITV2_OLED_MBE_LEFT": "大眼睛左移",
            "TUBITV2_OLED_BLINK_WAIT": "眨眼(停顿)",
            "TUBITV2_OLED_HAPPY": "开心眼睛",
            "TUBITV2_OLED_BLINK": "眨眼",
            "TUBITV2_OLED_LEFTWINK": "左眨眼",
            "TUBITV2_OLED_ANGRY": "生气眼睛",
            "TUBITV2_OLED_SACCADE": "随机晃动",
            "TUBITV2_OLED_CREATEIMAGE": "创建图片 %1 , BMP = %2",
            "TUBITV2_OLED_DISPLAYIMAGE": "显示图片 %5 , x: %1 y: %2 宽度 %3 高度 %4",
            "TUBITV2_OLED_LABEL_ADVANCE_BA": "OLED: 图片",
            "TUBITV2_OLED_FONT": "字体 %1 , x: %2 y: %3 print: %4",
            "TUBITV2_OLED_EN": "英文",
            "TUBITV2_OLED_CHINESE": "中文",
            "TUBITV2_OLED_MATRIX": "绘制 %1"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2_OLED_CATEGORY": "OLED",
            "TUBITV2_OLED_START": "OLED 開始繪圖",
            "TUBITV2_OLED_UPDATE": "更新顯示器",
            "TUBITV2_OLED_CLEAR": "清空顯示器",
            "TUBITV2_OLED_DRAWRLINE":"繪製直線 x: %1 y: %2 x1: %3 y1: %4",
            "TUBITV2_OLED_DRAWAXISALIGNEDLINE": "繪製 %1 線在 x: %2 y: %3 長: %4",
            "TUBITV2_OLED_DRAWRECTANGLE":"繪製矩形 x: %1 y: %2 寬: %3 高: %4 圓角: %5 , %6",
            "TUBITV2_OLED_DRAWRCIRCLE":"繪製圓形 x: %1 y: %2 半徑: %3 , %4",
            "TUBITV2_OLED_DRAWRTRIANGLE":"繪製三角形 x: %1 y: %2 x1: %3 y1: %4 x2: %5 y2: %6 , %7",
            "TUBITV2_OLED_DRAWSTRING":"繪製字串 x: %1 y: %2 %3",
            "TUBITV2_OLED_FILLED":"填滿",
            "TUBITV2_OLED_HOLLOW":"中空",
            "TUBITV2_OLED_VERTICAL":"鉛直",
            "TUBITV2_OLED_HORIZONTAL":"水平",
            "TUBITV2_OLED_LABEL_ADVANCE_A": "OLED: 圖形",
            "TUBITV2_OLED_LABEL_ADVANCE_B": "OLED: 字串",
            "TUBITV2_OLED_LABEL_ADVANCE_C": "OLED: 圖表",
            "TUBITV2_OLED_LABEL_ADVANCE_D": "OLED: 動畫",
            "TUBITV2_OLED_RIGHT": "右",
            "TUBITV2_OLED_LEFT": "左",
            "TUBITV2_OLED_UP": "上",
            "TUBITV2_OLED_DOWN": "下",
            "TUBITV2_OLED_ANIMUPDATE": "更新顯示器",
            "TUBITV2_OLED_ANIMDONTUPDATE": "不更新顯示器",
            "TUBITV2_OLED_ANIMDRAWEYES": "繪製兩眼, %1",
            "TUBITV2_OLED_ANIMRESETEYES": "重置兩眼, %1",
            "TUBITV2_OLED_ANIMWAKEUP": "睜眼",
            "TUBITV2_OLED_ANIMBLINK": "眨眼, 速度: %1",
            "TUBITV2_OLED_ANIMHAPPYEYE": "開心",
            "TUBITV2_OLED_ANIMANGRYEYE": "生氣",
            "TUBITV2_OLED_ANIMTIREDEYE": "疲倦",
            "TUBITV2_OLED_ANIMLEFTWINKEYE": "眨左眼",
            "TUBITV2_OLED_ANIMMOVEBIGEYE": "移動眼睛向: %1",
            "TUBITV2_OLED_ANIMSACCADE": "掃視方向 x: %1 y: %2",
            "TUBITV2_OLED_ANIMLAUNCHANIMATIONWITHINDEX": "播放: %1",
            "TUBITV2_OLED_DRAWCHART": "繪製單筆資料: %1 圖表類型: %2 起始方向: %3",
            "TUBITV2_OLED_CHART_BAR": "長條圖",
            "TUBITV2_OLED_CHART_LINE": "折線圖",
            "TUBITV2_OLED_SAVEBITMAP": "建立點陣圖 %1",
            "TUBITV2_OLED_DRAWBITMAP": "繪製點陣圖 x: %1 y: %2 width %3 height %4",
            "TUBITV2_OLED_WAKEUP": "睜開眼睛",
            "TUBITV2_OLED_RESETEYE": "重置眼睛",
            "TUBITV2_OLED_MBE_RIGHT": "大眼睛右移",
            "TUBITV2_OLED_MBE_LEFT": "大眼睛左移",
            "TUBITV2_OLED_BLINK_WAIT": "眨眼(停頓)",
            "TUBITV2_OLED_HAPPY": "開心眼睛",
            "TUBITV2_OLED_BLINK": "眨眼",
            "TUBITV2_OLED_LEFTWINK": "左眨眼",
            "TUBITV2_OLED_ANGRY": "生氣眼睛",
            "TUBITV2_OLED_SACCADE": "隨機晃動",
            "TUBITV2_OLED_CREATEIMAGE":"建立圖片 %1 , BMP = %2",
            "TUBITV2_OLED_DISPLAYIMAGE":"顯示圖片 %5 , x: %1 y: %2 寬度 %3 高度 %4",
            "TUBITV2_OLED_LABEL_ADVANCE_BA": "OLED: 圖片",
            "TUBITV2_OLED_FONT": "字型 %1 , x: %2 y: %3 列印: %4",
            "TUBITV2_OLED_EN": "英文",
            "TUBITV2_OLED_CHINESE": "中文",
            "TUBITV2_OLED_MATRIX": "繪製 %1"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;