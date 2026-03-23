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
            "mfrc522.name": "MFRC-522 Module",
            "mfrc522.description": "13.56MHz radio frequency identification module using spi interface."
        },
        "ru": {
            "mfrc522.name": "Модуль MFRC-522",
            "mfrc522.description": "Модуль радиочастотной идентификации 13,56 МГц с использованием интерфейса spi."
        },
        "zh-cn": {
            "mfrc522.name": "MFRC-522 模块",
            "mfrc522.description": "使用 SPI 接口的 13.56MHz 射频识别模块。"
        },
        "zh-tw": {
            "mfrc522.name": "MFRC-522 模塊",
            "mfrc522.description": "使用 SPI 接口的 13.56MHz 射頻識別模塊。"
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
            "MFRC522_CATEGORY": "MFRC522",
            "MFRC522_DATATYPE_NUBMER": "number",
            "MFRC522_DATATYPE_STRING": "string",
            "MFRC522_GETBLOCKDATA": "mfrc522 block data (type %1)",
            "MFRC522_GETBLOCKDATA_TOOLTIP": "String length less than 16 byte.",
            "MFRC522_GETCARDTYPENAME": "mfrc522 get card type name",
            "MFRC522_GETCARDUID": "mfrc522 get card UID",
            "MFRC522_HALT": "mfrc522 halt",
            "MFRC522_INIT": "init mfrc522 pin CS %1 RST %2",
            "MFRC522_ISNEWCARDPRESENT": "new card present?",
            "MFRC522_NUMBERTOHEXSTRING": "mfrc522 %1 to hex string",
            "MFRC522_PRINTSECTORDATA": "mfrc522 print sector %1 data",
            "MFRC522_READBLOCKDATA": "mfrc522 read block %1",
            "MFRC522_READCARDSERIAL": "mfrc522 successfully read card serial number?",
            "MFRC522_SETKEY": "mfrc522 set secret key %1",
            "MFRC522_VERIFICATIONKEY": "mfrc522 verification block %1 key is correct?",
            "MFRC522_WRITEBLOCKDATA": "mfrc522 write %1 to block %2 (type %3)",
            "MFRC522_WRITEKEYTOSECTOR": "mfrc522 write key %1 to sector %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "MFRC522_CATEGORY": "MFRC522",
            "MFRC522_DATATYPE_NUBMER": "число",
            "MFRC522_DATATYPE_STRING": "строка",
            "MFRC522_GETBLOCKDATA": "данные блока mfrc522 (тип %1)",
            "MFRC522_GETBLOCKDATA_TOOLTIP": "Длина строки менее 16 байт.",
            "MFRC522_GETCARDTYPENAME": "mfrc522 получил название типа карты",
            "MFRC522_GETCARDUID": "mfrc522 получил UID карты",
            "MFRC522_HALT": "остановить mfrc522",
            "MFRC522_INIT": "инициализировать mfrc522 пины CS %1 RST %2",
            "MFRC522_ISNEWCARDPRESENT": "новая карта присутствует?",
            "MFRC522_NUMBERTOHEXSTRING": "mfrc522 %1 в шестнадцатеричный формат",
            "MFRC522_PRINTSECTORDATA": "mfrc522 печать данные в сектор %1",
            "MFRC522_READBLOCKDATA": "mfrc522 прочитать блок %1",
            "MFRC522_READCARDSERIAL": "mfrc522 успешно прочитал серийный номер карты?",
            "MFRC522_SETKEY": "mfrc522 установить секретный ключ %1",
            "MFRC522_VERIFICATIONKEY": "mfrc522 блок проверки %1 ключ правильный?",
            "MFRC522_WRITEBLOCKDATA": "mfrc522 записать %1 в блок %2 (тип %3)",
            "MFRC522_WRITEKEYTOSECTOR": "mfrc522 записать ключ %1 в сектор %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MFRC522_CATEGORY": "MFRC522",
            "MFRC522_DATATYPE_NUBMER": "数字",
            "MFRC522_DATATYPE_STRING": "字符串",
            "MFRC522_GETBLOCKDATA": "mfrc522 块数据 (类型 %1)",
            "MFRC522_GETBLOCKDATA_TOOLTIP": "字符串长度小于 16 字节。",
            "MFRC522_GETCARDTYPENAME": "mfrc522 获取卡类型名称",
            "MFRC522_GETCARDUID": "mfrc522 获取卡 UID",
            "MFRC522_HALT": "mfrc522 挂起",
            "MFRC522_INIT": "初始化 mfrc522 引脚 CS %1 RST %2",
            "MFRC522_ISNEWCARDPRESENT": "是否有新卡?",
            "MFRC522_NUMBERTOHEXSTRING": "mfrc522 %1 转为16进制字符串",
            "MFRC522_PRINTSECTORDATA": "mfrc522 打印扇区 %1 数据",
            "MFRC522_READBLOCKDATA": "mfrc522 读取块 %1",
            "MFRC522_READCARDSERIAL": "mfrc522 成功读取到卡序列号?",
            "MFRC522_SETKEY": "mfrc522 设置密钥 %1",
            "MFRC522_VERIFICATIONKEY": "mfrc522 验证块 %1 密码正确？",
            "MFRC522_WRITEBLOCKDATA": "mfrc522 写 %1 到块 %2 (类型 %3)",
            "MFRC522_WRITEKEYTOSECTOR": "mfrc522 写密码 %1 到扇区 %2"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "MFRC522_CATEGORY": "MFRC522",
            "MFRC522_DATATYPE_NUBMER": "數字",
            "MFRC522_DATATYPE_STRING": "字符串",
            "MFRC522_GETBLOCKDATA": "mfrc522 塊數據 (類型 %1)",
            "MFRC522_GETBLOCKDATA_TOOLTIP": "字符串長度小於 16 字節。",
            "MFRC522_GETCARDTYPENAME": "mfrc522 獲取卡類型名稱",
            "MFRC522_GETCARDUID": "mfrc522 獲取卡 UID",
            "MFRC522_HALT": "mfrc522 掛起",
            "MFRC522_INIT": "初始化 mfrc522 管腳 CS %1 RST %2",
            "MFRC522_ISNEWCARDPRESENT": "是否有新卡?",
            "MFRC522_NUMBERTOHEXSTRING": "mfrc522 %1 轉為16進製字符串",
            "MFRC522_PRINTSECTORDATA": "mfrc522 打印扇區 %1 數據",
            "MFRC522_READBLOCKDATA": "mfrc522 讀取塊 %1",
            "MFRC522_READCARDSERIAL": "mfrc522 成功讀取到卡序列號?",
            "MFRC522_SETKEY": "mfrc522 設置密鑰 %1",
            "MFRC522_VERIFICATIONKEY": "mfrc522 驗證塊 %1 密碼正確？",
            "MFRC522_WRITEBLOCKDATA": "mfrc522 寫 %1 到塊 %2 (類型 %3)",
            "MFRC522_WRITEKEYTOSECTOR": "mfrc522 寫密碼 %1 到扇區 %2"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
