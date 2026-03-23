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
            "ps2.name": "PS2 Remote Control",
            "ps2.description": "PS2 wireless remote controller with 4 signal lines."
        },
        "ru": {
            "ps2.name": "Пульт дистанционного управления PS2",
            "ps2.description": "Беспроводной пульт дистанционного управления PS2 с 4 сигнальными линиями."
        },
        "zh-cn": {
            "ps2.name": "PS2 无线遥控器",
            "ps2.description": "使用4根信号线的 PS2 无线遥控器。"
        },
        "zh-tw": {
            "ps2.name": "PS2 無線手把",
            "ps2.description": "使用4根信號線的 PS2 無線手把。"
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
            "PS2_CATEGORY": "PS2",
            "PS2_CIRCLE": "circle",
            "PS2_CROSS": "cross",
            "PS2_DOWN": "down",
            "PS2_GETBUTTON": "PS2 %1 button is pressed?",
            "PS2_GETJOYSTICK": "PS2 get joystick %1",
            "PS2_INIT": "init ps2 receiver pin DIN %1 DOUT %2 CS %3 CLK %4",
            "PS2_LEFT": "left",
            "PS2_READDATA": "read PS2 receiver data",
            "PS2_RIGHT": "right",
            "PS2_SELECT": "select",
            "PS2_SQUARE": "square",
            "PS2_START": "start",
            "PS2_TRIANGLE": "triangle",
            "PS2_UP": "up"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "PS2_CATEGORY": "PS2",
            "PS2_CIRCLE": "Окружность",
            "PS2_CROSS": "Крест",
            "PS2_DOWN": "Вниз",
            "PS2_GETBUTTON": "PS2 %1 кнопка нажата?",
            "PS2_GETJOYSTICK": "PS2 получить с джойстика %1",
            "PS2_INIT": "init приемник ps2 DIN %1 DOUT %2 CS %3 CLK %4",
            "PS2_LEFT": "Налево",
            "PS2_READDATA": "читать данные приемника PS2",
            "PS2_RIGHT": "Направо",
            "PS2_SELECT": "Выбор",
            "PS2_SQUARE": "Квадрат",
            "PS2_START": "Старт",
            "PS2_TRIANGLE": "Треугольник",
            "PS2_UP": "Вверх"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "PS2_CATEGORY": "PS2",
            "PS2_CIRCLE": "圆",
            "PS2_CROSS": "叉号",
            "PS2_DOWN": "下",
            "PS2_GETBUTTON": "PS2 %1 按键被按下?",
            "PS2_GETJOYSTICK": "PS2获取摇杆 %1",
            "PS2_INIT": "初始化 ps2 接收器引脚 DIN %1 DOUT %2 CS %3 CLK %4",
            "PS2_LEFT": "左",
            "PS2_READDATA": "读取 PS2 接收器数据",
            "PS2_RIGHT": "右",
            "PS2_SELECT": "选择",
            "PS2_SQUARE": "方块",
            "PS2_START": "开始",
            "PS2_TRIANGLE": "三角",
            "PS2_UP": "上"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "PS2_CATEGORY": "PS2",
            "PS2_CIRCLE": "圓",
            "PS2_CROSS": "叉號",
            "PS2_DOWN": "下",
            "PS2_GETBUTTON": "PS2 %1 按鍵被按下?",
            "PS2_GETJOYSTICK": "PS2獲取搖桿 %1",
            "PS2_INIT": "初始化 ps2 接收器管腳 DIN %1 DOUT %2 CS %3 CLK %4",
            "PS2_LEFT": "左",
            "PS2_READDATA": "讀取 PS2 接收器數據",
            "PS2_RIGHT": "右",
            "PS2_SELECT": "選擇",
            "PS2_SQUARE": "方塊",
            "PS2_START": "開始",
            "PS2_TRIANGLE": "三角",
            "PS2_UP": "上"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
