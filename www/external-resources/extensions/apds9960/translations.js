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
            "apds9960.description": "Proximity, Light, RGB, and Gesture Sensor which uses an I2C interface."
        },
        "ru": {
            "apds9960.description": "Датчик приближения, света, RGB и жестов, использующий интерфейс I2C."
        },
        "zh-cn": {
            "apds9960.description": "使用 I2C 接口的接近、灯光、RGB和手势传感器。"
        },
        "zh-tw": {
            "apds9960.description": "使用 I2C 接口的接近、燈光、RGB和手勢傳感器。"
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
            "APDS9960_CATEGORY": "APDS9960",
            "APDS9960_GESTURE_DOWN": "down",
            "APDS9960_GESTURE_LEFT": "left",
            "APDS9960_GESTURE_RIGHT": "right",
            "APDS9960_GESTURE_UP": "up",
            "APDS9960_INIT": "init apds9960",
            "APDS9960_ISGESTURE": "apds9960 read gesture %1?",
            "APDS9960_ISGESTUREAVAILABLE": "apds9960 gesture data ready?",
            "APDS9960_ISPROXIMITYAVAILABLE": "apds9960 color data available?",
            "APDS9960_READGESTURE": "apds9960 read gesture",
            "APDS9960_READPROXIMITY": "apds9960 read proximity"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "APDS9960_CATEGORY": "APDS9960",
            "APDS9960_GESTURE_DOWN": "вниз",
            "APDS9960_GESTURE_LEFT": "налево",
            "APDS9960_GESTURE_RIGHT": "направо",
            "APDS9960_GESTURE_UP": "вверх",
            "APDS9960_INIT": "инициализировать apds9960",
            "APDS9960_ISGESTURE": "apds9960 прочитать жест %1",
            "APDS9960_ISGESTUREAVAILABLE": "Данные датчика жестов apds9960 готовы?",
            "APDS9960_ISPROXIMITYAVAILABLE": "apds9960 доступны данные о цвете?",
            "APDS9960_READGESTURE": "apds9960 прочитать жест",
            "APDS9960_READPROXIMITY": "apds9960 определить расстояние"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "APDS9960_CATEGORY": "APDS9960",
            "APDS9960_GESTURE_DOWN": "下",
            "APDS9960_GESTURE_LEFT": "左",
            "APDS9960_GESTURE_RIGHT": "右",
            "APDS9960_GESTURE_UP": "上",
            "APDS9960_INIT": "初始化 apds9960",
            "APDS9960_ISGESTURE": "apds9960 读取到手势 %1？",
            "APDS9960_ISGESTUREAVAILABLE": "apds9960 手势数据准备就绪？",
            "APDS9960_ISPROXIMITYAVAILABLE": "apds9960 接近值可用？",
            "APDS9960_READGESTURE": "apds9960 读取手势",
            "APDS9960_READPROXIMITY": "apds9960 读取接近值"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "APDS9960_CATEGORY": "APDS9960",
            "APDS9960_GESTURE_DOWN": "下",
            "APDS9960_GESTURE_LEFT": "左",
            "APDS9960_GESTURE_RIGHT": "右",
            "APDS9960_GESTURE_UP": "上",
            "APDS9960_INIT": "初始化 apds9960",
            "APDS9960_ISGESTURE": "apds9960 讀取到手勢 %1？",
            "APDS9960_ISGESTUREAVAILABLE": "apds9960 手勢數據準備就緒？",
            "APDS9960_ISPROXIMITYAVAILABLE": "apds9960 接近值可用？",
            "APDS9960_READGESTURE": "apds9960 讀取手勢",
            "APDS9960_READPROXIMITY": "apds9960 讀取接近值"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
