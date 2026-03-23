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
            "lcd.name": "1602 LCD",
            "lcd.description": "1602 liquid crystal display which based on I2C bus."
        },
        "ru": {
            "lcd.name": "Символьный дисплей 1602 LCD",
            "lcd.description": "1602 символьный дисплей на шине I2C."
        },
        "zh-cn": {
            "lcd.name": "1602 液晶显示器",
            "lcd.description": "基于 I2C 总线的1602液晶显示器。"
        },
        "zh-tw": {
            "lcd.name": "1602 液晶顯示器",
            "lcd.description": "基於 I2C 總線的1602液晶顯示器。"
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
            "LCD_CATEGORY": "1602 LCD",
            "LCD_CLEAR": "clear lcd",
            "LCD_INIT": "init lcd I2C address %1",
            "LCD_PRINT": "lcd print %1",
            "LCD_SATE_DISPLAY": "display",
            "LCD_SATE_HIDE": "hide",
            "LCD_SATE_OFF": "off",
            "LCD_SATE_ON": "on",
            "LCD_SETBACKLIGHT": "set lcd back light %1",
            "LCD_SETCURSORPOSITION": "set lcd cursor position x: %1 y: %2",
            "LCD_SETCURSORSTYLE": "set lcd cursor %1 style %2",
            "LCD_STYLE_BLINK": "blink",
            "LCD_STYLE_NOBLINK": "no-blink"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "LCD_CATEGORY": "1602 LCD",
            "LCD_CLEAR": "Очистить ЖК-дисплей",
            "LCD_INIT": "Инициализировать ЖК-дисплей адрес I2C %1",
            "LCD_PRINT": "Напечатать %1 на ЖК-дисплее",
            "LCD_SATE_DISPLAY": "Дисплей",
            "LCD_SATE_HIDE": "Скрыть",
            "LCD_SATE_OFF": "Выключить",
            "LCD_SATE_ON": "Включить",
            "LCD_SETBACKLIGHT": "установить подсветку ЖК-дисплея в %1",
            "LCD_SETCURSORPOSITION": "установить позицию курсора ЖК-дисплея в (x: %1 y: %2)",
            "LCD_SETCURSORSTYLE": "установить курсор на ЖК-дисплее в %1 стиль %2",
            "LCD_STYLE_BLINK": "Мерцать",
            "LCD_STYLE_NOBLINK": "Не мерцать"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "LCD_CATEGORY": "1602 LCD",
            "LCD_CLEAR": "清空 lcd",
            "LCD_INIT": "初始化 lcd I2C 地址 %1",
            "LCD_PRINT": "lcd 打印 %1",
            "LCD_SATE_DISPLAY": "显示",
            "LCD_SATE_HIDE": "隐藏",
            "LCD_SATE_OFF": "关",
            "LCD_SATE_ON": "开",
            "LCD_SETBACKLIGHT": "设置 lcd 背光 %1",
            "LCD_SETCURSORPOSITION": "设置 lcd 光标位置 x: %1 y: %2",
            "LCD_SETCURSORSTYLE": "设置 lcd 光标 %1 样式 %2",
            "LCD_STYLE_BLINK": "闪烁",
            "LCD_STYLE_NOBLINK": "不闪烁"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "LCD_CATEGORY": "1602 液晶顯示器",
            "LCD_CLEAR": "清空 lcd",
            "LCD_INIT": "初始化 lcd I2C 地址 %1",
            "LCD_PRINT": "lcd 打印 %1",
            "LCD_SATE_DISPLAY": "顯示",
            "LCD_SATE_HIDE": "隱藏",
            "LCD_SATE_OFF": "關閉",
            "LCD_SATE_ON": "打開",
            "LCD_SETBACKLIGHT": "設置 lcd 背光 %1",
            "LCD_SETCURSORPOSITION": "設置 lcd 光標位置 x: %1 y: %2",
            "LCD_SETCURSORSTYLE": "設置 lcd 光標 %1 樣式 %2",
            "LCD_STYLE_BLINK": "閃爍",
            "LCD_STYLE_NOBLINK": "不閃爍"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
