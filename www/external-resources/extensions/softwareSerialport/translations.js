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
            "softwareSerial.name": "Software Serial",
            "softwareSerial.description": "Allow serial communication on other digital pins of the Arduino."
        },
        "ru": {
            "softwareSerial.name": "Серийный номер программного обеспечения",
            "softwareSerial.description": "Разрешите последовательную связь на других цифровых выводах Arduino."
        },
        "zh-cn": {
            "softwareSerial.name": "软件串口",
            "softwareSerial.description": "使 Arduino 可以使用其他数字口进行串口通信。"
        },
        "zh-tw": {
            "softwareSerial.name": "軟件串口",
            "softwareSerial.description": "使 Arduino 可以使用其他數字口進行串口通信。"
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
            "SOFTWARESERIAL_AVAILABLE": "software serial %1 available data length",
            "SOFTWARESERIAL_BEGIN": "software serial %1 RX pin %2 TX pin %3 begin baudrate %4",
            "SOFTWARESERIAL_CATEGORY": "software serial",
            "SOFTWARESERIAL_NOWARP": "no-warp",
            "SOFTWARESERIAL_PRINT": "software serial %1 print %2 %3",
            "SOFTWARESERIAL_READABYTE": "software serial %1 read a byte",
            "SOFTWARESERIAL_WARP": "warp"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "SOFTWARESERIAL_AVAILABLE": "доступная длина данных в последовательном порту %1",
            "SOFTWARESERIAL_BEGIN": "последовательный порт %1 пины RX %2 TX %3 скорость передачи %4",
            "SOFTWARESERIAL_CATEGORY": "последовательный порт",
            "SOFTWARESERIAL_NOWARP": "не деформировать",
            "SOFTWARESERIAL_PRINT": "В последовательный порт %1 печатать %2 %3",
            "SOFTWARESERIAL_READABYTE": "Считать байт из последовательного порта %1",
            "SOFTWARESERIAL_WARP": "деформировать"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "SOFTWARESERIAL_AVAILABLE": "软件串口 %1 可用数据长度",
            "SOFTWARESERIAL_BEGIN": "软件串口 %1 RX 引脚 %2 TX 引脚 %3 开启波特率 %4",
            "SOFTWARESERIAL_CATEGORY": "软件串口",
            "SOFTWARESERIAL_NOWARP": "不换行",
            "SOFTWARESERIAL_PRINT": "软件串口  %1 打印 %2 %3",
            "SOFTWARESERIAL_READABYTE": "软件串口 %1 读取一个字节",
            "SOFTWARESERIAL_WARP": "换行"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "SOFTWARESERIAL_AVAILABLE": "軟件串口 %1 可用數據長度",
            "SOFTWARESERIAL_BEGIN": "軟件串口 %1 RX 管腳 %2 TX 管腳 %3 開啟波特率 %4",
            "SOFTWARESERIAL_CATEGORY": "軟件串口",
            "SOFTWARESERIAL_NOWARP": "不換行",
            "SOFTWARESERIAL_PRINT": "軟件串口 %1 打印 %2 %3",
            "SOFTWARESERIAL_READABYTE": "軟件串口 %1 讀取一個字節",
            "SOFTWARESERIAL_WARP": "換行"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
