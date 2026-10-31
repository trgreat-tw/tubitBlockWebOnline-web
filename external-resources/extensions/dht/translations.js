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
            "dht.name": "DHT Sensor",
            "dht.description": "DHT Temperature and humidity sensor module."
        },
        "ru": {
            "dht.name": "Датчик DHT ",
            "dht.description": "Датчик температуры и влажности DHT "
        },
        "zh-cn": {
            "dht.name": "DHT 传感器",
            "dht.description": "DHT 温湿度传感器模块。"
        },
        "zh-tw": {
            "dht.name": "DHT 傳感器",
            "dht.description": "DHT 溫濕度傳感器模塊。"
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
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "init dht %1 pin %2 model %3",
            "DHT_READ_HUMIDITY": "dht %1 read humidity",
            "DHT_READ_TEMPERATURE": "dht %1 read temperature %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "DHT_CATEGORY": "датчик температуры и влажности DHT",
            "DHT_INIT": "инициализировать dht %1 пин %2 модель %3",
            "DHT_READ_HUMIDITY": "dht %1 считать влажность",
            "DHT_READ_TEMPERATURE": "dht %1 считать температуру %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "初始化 dht %1 引脚 %2 型号 %3",
            "DHT_READ_HUMIDITY": "dht %1 读取湿度",
            "DHT_READ_TEMPERATURE": "dht %1 读取温度 %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "DHT_CATEGORY": "DHT",
            "DHT_INIT": "初始化 dht %1 管腳 %2 型號 %3",
            "DHT_READ_HUMIDITY": "dht %1 讀取濕度",
            "DHT_READ_TEMPERATURE": "dht %1 讀取溫度 %2"
        }
    );

    return Blockly;
    if (!Blockly.ScratchMsgs.locales["en"]) Blockly.ScratchMsgs.locales["en"] = {};
    Object.assign(Blockly.ScratchMsgs.locales["en"], {
    "INIT_GUARD_TUBIT_REQUIRED": "Place the \"TUBIT initialization\" block under the \"when Arduino starts\" block.",
    "INIT_GUARD_SENSOR_REQUIRED": "Place the \"%1 %2 initialization\" block under \"when Arduino starts\", before any blocks that read or use the module.",
    "INIT_GUARD_INIT_PLACEMENT": "Place the \"%1 %2 initialization\" block directly under \"when Arduino starts\", before loops or conditions.",
    "INIT_GUARD_OLED_REQUIRED": "First add an OLED display block and put the drawing blocks inside it, or place a clear/update display block before them.",
    "INIT_GUARD_PIN_SUFFIX": "pin %1",
    "INIT_GUARD_INVALID_ID": "Enter a non-negative whole-number module ID.",
    "INIT_GUARD_LABEL_DHT": "DHT Sensor"
});
    if (!Blockly.ScratchMsgs.locales["ru"]) Blockly.ScratchMsgs.locales["ru"] = {};
    Object.assign(Blockly.ScratchMsgs.locales["ru"], {
    "INIT_GUARD_TUBIT_REQUIRED": "Поместите блок «Инициализация TUBIT» под блоком «когда Arduino запускается».",
    "INIT_GUARD_SENSOR_REQUIRED": "Поместите блок «Инициализация: %1 %2» под блоком «когда Arduino запускается» перед блоками чтения или использования модуля.",
    "INIT_GUARD_INIT_PLACEMENT": "Поместите блок «Инициализация: %1 %2» непосредственно под блоком «когда Arduino запускается», перед циклами и условиями.",
    "INIT_GUARD_OLED_REQUIRED": "Сначала добавьте блок вывода на OLED и поместите блоки рисования внутрь него либо разместите перед ними блок очистки или обновления дисплея.",
    "INIT_GUARD_PIN_SUFFIX": "контакт %1",
    "INIT_GUARD_INVALID_ID": "Введите неотрицательный целый номер модуля.",
    "INIT_GUARD_LABEL_DHT": "Датчик DHT"
});
    if (!Blockly.ScratchMsgs.locales["zh-cn"]) Blockly.ScratchMsgs.locales["zh-cn"] = {};
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
    "INIT_GUARD_TUBIT_REQUIRED": "请在Arduino启动的积木底下放置\"TUBIT初始化\"积木",
    "INIT_GUARD_SENSOR_REQUIRED": "请在Arduino启动的积木底下放置\"%1%2初始化\"积木，并放在读取／使用积木之前。",
    "INIT_GUARD_INIT_PLACEMENT": "请将\"%1%2初始化\"积木直接放在Arduino启动底下，且放在重复执行或条件判断之前。",
    "INIT_GUARD_OLED_REQUIRED": "请先放置OLED显示积木，并将绘图积木放在其内，或先放清除／更新显示积木。",
    "INIT_GUARD_PIN_SUFFIX": "引脚%1",
    "INIT_GUARD_INVALID_ID": "模组编号请输入非负整数。",
    "INIT_GUARD_LABEL_DHT": "DHT 传感器"
});
    if (!Blockly.ScratchMsgs.locales["zh-tw"]) Blockly.ScratchMsgs.locales["zh-tw"] = {};
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
    "INIT_GUARD_TUBIT_REQUIRED": "請在Arduino啟動的積木底下放置\"TUBIT初始化\"積木",
    "INIT_GUARD_SENSOR_REQUIRED": "請在Arduino啟動的積木底下放置\"%1%2初始化\"積木，並放在讀取／使用積木之前。",
    "INIT_GUARD_INIT_PLACEMENT": "請將\"%1%2初始化\"積木直接放在Arduino啟動底下，且放在重複執行或條件判斷之前。",
    "INIT_GUARD_OLED_REQUIRED": "請先放置OLED顯示積木，並將繪圖積木放在其內，或先放清除／更新顯示積木。",
    "INIT_GUARD_PIN_SUFFIX": "腳位%1",
    "INIT_GUARD_INVALID_ID": "模組編號請輸入非負整數。",
    "INIT_GUARD_LABEL_DHT": "DHT 傳感器"
});
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
