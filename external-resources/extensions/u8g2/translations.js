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
            "u8g2.description": "U8g2 is a general graphics library for multiple screens, which is suitable for LCD (base on ST7920) or OLED (base on SSD1306) screens."
        },
        "ru": {
            "u8g2.description": "U8g2 — это общая графическая библиотека для нескольких экранов, которая подходит для ЖК-экранов (на базе ST7920) или OLED (на базе SSD1306)."
        },
        "zh-cn": {
            "u8g2.description": "U8g2 是一个适配多种屏幕的通用图形库，适用于 LCD（基于ST7920）或 OLED（基于SSD1306）屏幕。"
        },
        "zh-tw": {
            "u8g2.description": "U8g2 是一個適配多種屏幕的通用圖形庫，適用於 LCD（基於ST7920）或 OLED（基於SSD1306）屏幕。"
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
            "U8G2_12832OLED_INIT": "init u8g2 128x32 oled pin SCL %1 SDA %2",
            "U8G2_12864LCD_INIT": "init u8g2 128x64 lcd pin RS (CS) %1 R/W (DATA) %2 E (CLK) %3",
            "U8G2_12864LCD_INIT_TOOLTIP": "Only support for ST7920 lcd controller",
            "U8G2_12864OLED_INIT": "init u8g2 128x64 oled pin SCL %1 SDA %2",
            "U8G2_CATEGORY": "U8G2",
            "U8G2_CLEAR": "u8g2 clear display",
            "U8G2_COLOR_COLORED": "colored",
            "U8G2_COLOR_NOCOLORED": "no-colored",
            "U8G2_DISPLAYROTATION_MIRROR": "mirror",
            "U8G2_DRAWCIRCLE": "u8g2 draw %1 circle x: %2 y: %3 radius %4 part %5",
            "U8G2_DRAWELLIPSE": "u8g2 draw %1 ellipse x: %2 y: %3 width %4 height %5 part %6",
            "U8G2_DRAWLINE": "u8g2 draw line x0: %1 y0: %2, x1: %3 y1: %4",
            "U8G2_DRAWPIXEL": "u8g2 draw pixel x: %1 y: %2",
            "U8G2_DRAWRECTANGLE": "u8g2 draw %1 rectangle x: %2 y: %3 width %4 height %5",
            "U8G2_DRAWROUNDRECTANGLE": "u8g2 draw %1 round rectangle x: %2 y: %3 width %4 height %5 radius %6",
            "U8G2_DRAWSTRING": "u8g2 draw string %1 x: %2 y: %3",
            "U8G2_DRAWTRIANGLE": "u8g2 draw triangle  x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6",
            "U8G2_DRAWVHLINE": "u8g2 draw %1 line x: %2 y: %3 length %4",
            "U8G2_FONT_10X20": "X11 10x20",
            "U8G2_FONT_11X11C": "WQY 11x11 (support chinese)",
            "U8G2_FONT_13X13C": "WQY 13x13 (support chinese)",
            "U8G2_FONT_14X14C": "WQY 14x14 (support chinese)",
            "U8G2_FONT_15X15C": "WQY 15x15 (support chinese)",
            "U8G2_FONT_16X16C": "WQY 16x16 (support chinese)",
            "U8G2_FONT_4X6": "X11 4x6",
            "U8G2_FONT_5X7": "X11 5x7",
            "U8G2_FONT_5X8": "X11 5x8",
            "U8G2_FONT_6X10": "X11 3x10",
            "U8G2_FONT_6X12": "X11 6x12",
            "U8G2_FONT_6X13": "X11 6x13",
            "U8G2_FONT_7X13": "X11 7x13",
            "U8G2_FONT_7X14": "X11 7x14",
            "U8G2_FONT_8X13": "X11 8x13",
            "U8G2_FONT_9X15": "X11 9x15",
            "U8G2_FONT_9X18": "X11 9x18",
            "U8G2_OLED_INIT_TOOLTIP": "Only support for SSD1306 oled controller",
            "U8G2_PART_ALL": "all",
            "U8G2_PART_LOWER_LEFT": "lower left",
            "U8G2_PART_LOWER_RIGHT": "lower right",
            "U8G2_PART_UPPER_LEFT": "upper left",
            "U8G2_PART_UPPER_RIGHT": "upper right",
            "U8G2_PRINT": "u8g2 print %1",
            "U8G2_REFRESH": "u8g2 refresh display",
            "U8G2_SETCURSOR": "u8g2 set cursor position x: %1 y: %2",
            "U8G2_SETDISPLAYROTATION": "u8g2 set display rotation %1",
            "U8G2_SETDRAWCOLOR": "u8g2 set draw color %1",
            "U8G2_SETFONT": "u8g2 set font %1 direction %2",
            "U8G2_SETFONT_TOOLTIP": "Limited by ROM size, only some Chinese characters are supported. You can try to input them. If not support, they will not be displayed",
            "U8G2_STYLE_FILLED": "filled",
            "U8G2_STYLE_HORIZONTAL": "horizontal",
            "U8G2_STYLE_NOFILLED": "no-filled",
            "U8G2_STYLE_VERTICAL": "vertical"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "U8G2_12832OLED_INIT": "инициализировать u8g2 128x32 oled дисплей пины SCL %1 SDA %2",
            "U8G2_12864LCD_INIT": "инициализировать u8g2 128x64 ЖК дисплей пины RS (CS) %1 R/W (DATA) %2 E (CLK) %3",
            "U8G2_12864LCD_INIT_TOOLTIP": "Поддерживается только ST7920 контроллер ЖК дисплея",
            "U8G2_12864OLED_INIT": "инициализировать u8g2 128x64 oled дисплей пины SCL %1 SDA %2",
            "U8G2_CATEGORY": "U8G2",
            "U8G2_CLEAR": "очистить дисплей u8g2",
            "U8G2_COLOR_COLORED": "Цветной",
            "U8G2_COLOR_NOCOLORED": "Не цветной",
            "U8G2_DISPLAYROTATION_MIRROR": "зеркало",
            "U8G2_DRAWCIRCLE": "на дисплее u8g2 нарисовать %1 окружность из точки x: %2 y: %3 радиус %4 часть %5",
            "U8G2_DRAWELLIPSE": "на дисплее u8g2 нарисовать %1 эллипс x: %2 y: %3 шириной %4 высотой %5 часть %6",
            "U8G2_DRAWLINE": "на дисплее u8g2 нарисовать линию из точки x0: %1 y0: %2 в точку x1: %3 y1: %4",
            "U8G2_DRAWPIXEL": "на дисплее u8g2 нарисовать пиксель в точке x: %1 y: %2",
            "U8G2_DRAWRECTANGLE": "на дисплее u8g2 нарисовать %1 прямоугольник из точки  x: %2 y: %3 шириной %4 высотой %5",
            "U8G2_DRAWROUNDRECTANGLE": "на дисплее u8g2 нарисовать %1 закругленный прямоугольник из точки x: %2 y: %3 шириной %4 высотой %5 радиус закругления %6",
            "U8G2_DRAWSTRING": "на дисплее u8g2 написать строку %1  из точки x: %2 y: %3",
            "U8G2_DRAWTRIANGLE": "на дисплее u8g2 нарисовать треугольник по точкам x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6",
            "U8G2_DRAWVHLINE": "на дисплее u8g2 нарисовать %1 линию из точки x: %2 y: %3 длиной %4",
            "U8G2_FONT_10X20": "X11 10x20",
            "U8G2_FONT_11X11C": "WQY 11x11 (с поддержкой китайского языка)",
            "U8G2_FONT_13X13C": "WQY 13x13 (с поддержкой китайского языка)",
            "U8G2_FONT_14X14C": "WQY 14x14 (с поддержкой китайского языка)",
            "U8G2_FONT_15X15C": "WQY 15x15 (с поддержкой китайского языка)",
            "U8G2_FONT_16X16C": "WQY 16x16 (с поддержкой китайского языка)",
            "U8G2_FONT_4X6": "X11 4x6",
            "U8G2_FONT_5X7": "X11 5x7",
            "U8G2_FONT_5X8": "X11 5x8",
            "U8G2_FONT_6X10": "X11 3x10",
            "U8G2_FONT_6X12": "X11 6x12",
            "U8G2_FONT_6X13": "X11 6x13",
            "U8G2_FONT_7X13": "X11 7x13",
            "U8G2_FONT_7X14": "X11 7x14",
            "U8G2_FONT_8X13": "X11 8x13",
            "U8G2_FONT_9X15": "X11 9x15",
            "U8G2_FONT_9X18": "X11 9x18",
            "U8G2_OLED_INIT_TOOLTIP": "поддерживается только SSD1306 контроллер oled дисплея ",
            "U8G2_PART_ALL": "все",
            "U8G2_PART_LOWER_LEFT": "нижний левый",
            "U8G2_PART_LOWER_RIGHT": "нижний правый",
            "U8G2_PART_UPPER_LEFT": "верхний левый",
            "U8G2_PART_UPPER_RIGHT": "верхний правый",
            "U8G2_PRINT": "на дисплее u8g2 напечатать %1",
            "U8G2_REFRESH": "обновить дисплей u8g2",
            "U8G2_SETCURSOR": "на дисплее u8g2 установить курсор в позицию x: %1 y: %2",
            "U8G2_SETDISPLAYROTATION": "установить угол поворота дисплея u8g2 в %1",
            "U8G2_SETDRAWCOLOR": "дисплею u8g2 установить цвет рисования %1",
            "U8G2_SETFONT": "на дисплее u8g2 установить шрифт %1 направление %2",
            "U8G2_SETFONT_TOOLTIP": "Ограничено размером ПЗУ, поддерживаются только некоторые китайские символы. Вы можете попробовать ввести их. Если не поддерживает, они не будут отображаться",
            "U8G2_STYLE_FILLED": "заполненный",
            "U8G2_STYLE_HORIZONTAL": "горизонтально",
            "U8G2_STYLE_NOFILLED": "незаполненный",
            "U8G2_STYLE_VERTICAL": "Вертикальный"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "U8G2_12832OLED_INIT": "初始化 u8g2 128x32 oled 引脚 SCL %1 SDA %2",
            "U8G2_12864LCD_INIT": "初始化 u8g2 128x64 lcd 引脚 RS (CS) %1 R/W (DATA) %2 E (CLK) %3",
            "U8G2_12864LCD_INIT_TOOLTIP": "仅支持 ST7920 lcd 控制器",
            "U8G2_12864OLED_INIT": "初始化 u8g2 128x64 oled 引脚 SCL %1 SDA %2",
            "U8G2_CATEGORY": "U8G2",
            "U8G2_CLEAR": "u8g2 清空屏幕",
            "U8G2_COLOR_COLORED": "有色",
            "U8G2_COLOR_NOCOLORED": "无色",
            "U8G2_DISPLAYROTATION_MIRROR": "镜像",
            "U8G2_DRAWCIRCLE": "u8g2 绘制 %1 圆形 x: %2 y: %3 半径 %4 部位 %5",
            "U8G2_DRAWELLIPSE": "u8g2 绘制 %1 椭圆 x: %2 y: %3 宽度 %4 高度 %5 部位 %6",
            "U8G2_DRAWLINE": "u8g2 绘制直线 x0: %1 y0: %2, x1: %3 y1: %4",
            "U8G2_DRAWPIXEL": "u8g2 绘制像素 x: %1 y: %2",
            "U8G2_DRAWRECTANGLE": "u8g2 绘制 %1 矩形 x: %2 y: %3 宽度 %4 高度 %5",
            "U8G2_DRAWROUNDRECTANGLE": "u8g2 绘制 %1 圆角矩形 x: %2 y: %3 宽度 %4 高度 %5 半径 %6",
            "U8G2_DRAWSTRING": "u8g2 绘制字符串 %1 x: %2 y: %3",
            "U8G2_DRAWTRIANGLE": "u8g2 绘制实心三角形  x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6",
            "U8G2_DRAWVHLINE": "u8g2 绘制 %1 直线 x: %2 y: %3 长度 %4",
            "U8G2_FONT_10X20": "X11 10x20",
            "U8G2_FONT_11X11C": "WQY 11x11 (支持中文)",
            "U8G2_FONT_13X13C": "WQY 13x13 (支持中文)",
            "U8G2_FONT_14X14C": "WQY 14x14 (支持中文)",
            "U8G2_FONT_15X15C": "WQY 15x15 (支持中文)",
            "U8G2_FONT_16X16C": "WQY 16x16 (支持中文)",
            "U8G2_FONT_4X6": "X11 4x6",
            "U8G2_FONT_5X7": "X11 5x7",
            "U8G2_FONT_5X8": "X11 5x8",
            "U8G2_FONT_6X10": "X11 3x10",
            "U8G2_FONT_6X12": "X11 6x12",
            "U8G2_FONT_6X13": "X11 6x13",
            "U8G2_FONT_7X13": "X11 7x13",
            "U8G2_FONT_7X14": "X11 7x14",
            "U8G2_FONT_8X13": "X11 8x13",
            "U8G2_FONT_9X15": "X11 9x15",
            "U8G2_FONT_9X18": "X11 9x18",
            "U8G2_OLED_INIT_TOOLTIP": "仅支持 SSD1306 oled 控制器",
            "U8G2_PART_ALL": "全部",
            "U8G2_PART_LOWER_LEFT": "左下",
            "U8G2_PART_LOWER_RIGHT": "右下",
            "U8G2_PART_UPPER_LEFT": "左上",
            "U8G2_PART_UPPER_RIGHT": "右上",
            "U8G2_PRINT": "u8g2 打印 %1",
            "U8G2_REFRESH": "u8g2 刷新屏幕",
            "U8G2_SETCURSOR": "u8g2 设置光标位置 x: %1 y: %2",
            "U8G2_SETDISPLAYROTATION": "u8g2 设置屏幕旋转 %1",
            "U8G2_SETDRAWCOLOR": "u8g2 设置绘制颜色 %1",
            "U8G2_SETFONT": "u8g2 设置字体 %1 方向 %2",
            "U8G2_SETFONT_TOOLTIP": "受限于 ROM 大小仅支持部分汉字, 具体可以尝试输入，如果不支持则不会显示。",
            "U8G2_STYLE_FILLED": "实心",
            "U8G2_STYLE_HORIZONTAL": "水平",
            "U8G2_STYLE_NOFILLED": "空",
            "U8G2_STYLE_VERTICAL": "垂直"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "U8G2_12832OLED_INIT": "初始化 u8g2 128x32 oled 管腳 SCL %1 SDA %2",
            "U8G2_12864LCD_INIT": "初始化 u8g2 128x64 lcd 管腳 RS (CS) %1 R/W (DATA) %2 E (CLK) %3",
            "U8G2_12864LCD_INIT_TOOLTIP": "僅支持 ST7920 lcd 控制器",
            "U8G2_12864OLED_INIT": "初始化 u8g2 128x64 oled 管腳 SCL %1 SDA %2",
            "U8G2_CATEGORY": "U8G2",
            "U8G2_CLEAR": "u8g2 清空屏幕",
            "U8G2_COLOR_COLORED": "有色",
            "U8G2_COLOR_NOCOLORED": "無色",
            "U8G2_DISPLAYROTATION_MIRROR": "鏡像",
            "U8G2_DRAWCIRCLE": "u8g2 繪製 %1 圓形 x: %2 y: %3 半徑 %4 部位 %5",
            "U8G2_DRAWELLIPSE": "u8g2 繪製 %1 橢圓 x: %2 y: %3 寬度 %4 高度 %5 部位 %6",
            "U8G2_DRAWLINE": "u8g2 繪製直線 x0: %1 y0: %2, x1: %3 y1: %4",
            "U8G2_DRAWPIXEL": "u8g2 繪製像素 x: %1 y: %2",
            "U8G2_DRAWRECTANGLE": "u8g2 繪製 %1 矩形 x: %2 y: %3 寬度 %4 高度 %5",
            "U8G2_DRAWROUNDRECTANGLE": "u8g2 繪製 %1 圓角矩形 x: %2 y: %3 寬度 %4 高度 %5 半徑 %6",
            "U8G2_DRAWSTRING": "u8g2 繪製字符串 %1 x: %2 y: %3",
            "U8G2_DRAWTRIANGLE": "u8g2 繪製實心三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6",
            "U8G2_DRAWVHLINE": "u8g2 繪製 %1 直線 x: %2 y: %3 長度 %4",
            "U8G2_FONT_10X20": "X11 10x20",
            "U8G2_FONT_11X11C": "WQY 11x11 (支持中文)",
            "U8G2_FONT_13X13C": "WQY 13x13 (支持中文)",
            "U8G2_FONT_14X14C": "WQY 14x14 (支持中文)",
            "U8G2_FONT_15X15C": "WQY 15x15 (支持中文)",
            "U8G2_FONT_16X16C": "WQY 16x16 (支持中文)",
            "U8G2_FONT_4X6": "X11 4x6",
            "U8G2_FONT_5X7": "X11 5x7",
            "U8G2_FONT_5X8": "X11 5x8",
            "U8G2_FONT_6X10": "X11 3x10",
            "U8G2_FONT_6X12": "X11 6x12",
            "U8G2_FONT_6X13": "X11 6x13",
            "U8G2_FONT_7X13": "X11 7x13",
            "U8G2_FONT_7X14": "X11 7x14",
            "U8G2_FONT_8X13": "X11 8x13",
            "U8G2_FONT_9X15": "X11 9x15",
            "U8G2_FONT_9X18": "X11 9x18",
            "U8G2_OLED_INIT_TOOLTIP": "僅支持 SSD1306 oled 控制器",
            "U8G2_PART_ALL": "全部",
            "U8G2_PART_LOWER_LEFT": "左下",
            "U8G2_PART_LOWER_RIGHT": "右下",
            "U8G2_PART_UPPER_LEFT": "左上",
            "U8G2_PART_UPPER_RIGHT": "右上",
            "U8G2_PRINT": "u8g2 打印 %1",
            "U8G2_REFRESH": "u8g2 刷新屏幕",
            "U8G2_SETCURSOR": "u8g2 設置光標位置 x: %1 y: %2",
            "U8G2_SETDISPLAYROTATION": "u8g2 設置屏幕旋轉 %1",
            "U8G2_SETDRAWCOLOR": "u8g2 設置繪製顏色 %1",
            "U8G2_SETFONT": "u8g2 設置字體 %1 方向 %2",
            "U8G2_SETFONT_TOOLTIP": "受限於 ROM 大小僅支持部分漢字, 具體可以嘗試輸入，如果不支持則不會顯示。",
            "U8G2_STYLE_FILLED": "實心",
            "U8G2_STYLE_HORIZONTAL": "水平",
            "U8G2_STYLE_NOFILLED": "空",
            "U8G2_STYLE_VERTICAL": "垂直"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
