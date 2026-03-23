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
            "nrf24l01.description": "2.4G RF transceiver module."
        },
        "ru": {
            "nrf24l01.description": "Модуль приемопередатчика 2,4 ГГц."
        },
        "zh-cn": {
            "nrf24l01.description": "2.4G 无线射频传输模块。"
        },
        "zh-tw": {
            "nrf24l01.description": "2.4G 無線射頻傳輸模塊。"
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
            "NRF24L01_CATEGORY": "NRF24l01",
            "NRF24L01_HASDATA": "nrf24l01 received data?",
            "NRF24L01_INIT": "init nrf24l01 pin CE %1 CSN %2 id %3",
            "NRF24L01_PARSENUMBER": "nrf24l01 parse number",
            "NRF24L01_PARSESTRING": "nrf24l01 parse string",
            "NRF24L01_PARSEVALUE": "nrf24l01 parse value %1",
            "NRF24L01_READDATA": "nrf24l01 read data",
            "NRF24L01_SENDNUMBER": "nrf24l01 send number %1 to id %2",
            "NRF24L01_SENDSTRING": "nrf24l01 send string %1 to id %2",
            "NRF24L01_SENDVALUE": "nrf24l01 send value %1 = %2 to id %3",
            "NRF24L01_VALUEAVAILABLE": "nrf24l01 value %1 available?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "NRF24L01_CATEGORY": "NRF24l01",
            "NRF24L01_HASDATA": "nrf24l01 получены данные?",
            "NRF24L01_INIT": "Инициализировать nrf24l01 на пинах CE %1 CSN %2 id %3",
            "NRF24L01_PARSENUMBER": "nrf24l01 парсить номер",
            "NRF24L01_PARSESTRING": "nrf24l01 парсить строку",
            "NRF24L01_PARSEVALUE": "nrf24l01 парсить значение %1",
            "NRF24L01_READDATA": "nrf24l01  читать данные",
            "NRF24L01_SENDNUMBER": "nrf24l01 отправить номер %1 на id %2",
            "NRF24L01_SENDSTRING": "nrf24l01 отправить строку %1 to id %2",
            "NRF24L01_SENDVALUE": "nrf24l01 отправить значение %1 = %2 на id %3",
            "NRF24L01_VALUEAVAILABLE": "nrf24l01 значение %1 доступно?"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "NRF24L01_CATEGORY": "NRF24l01",
            "NRF24L01_HASDATA": "nrf24l01 接收到数据？",
            "NRF24L01_INIT": "初始化 nrf24l01 引脚 CE %1 CSN %2 id %3",
            "NRF24L01_PARSENUMBER": "nrf24l01 解析数字",
            "NRF24L01_PARSESTRING": "nrf24l01 解析字符串",
            "NRF24L01_PARSEVALUE": "nrf24l01 解析数值 %1",
            "NRF24L01_READDATA": "nrf24l01 读取数据",
            "NRF24L01_SENDNUMBER": "nrf24l01 发送数字 %1 到 id %2",
            "NRF24L01_SENDSTRING": "nrf24l01 发送字符串 %1 到 id %2",
            "NRF24L01_SENDVALUE": "nrf24l01 发送数值 %1 = %2 到 id %3",
            "NRF24L01_VALUEAVAILABLE": "nrf24l01 数值 %1 可用？"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "NRF24L01_CATEGORY": "NRF24l01",
            "NRF24L01_HASDATA": "nrf24l01 接收到數據？",
            "NRF24L01_INIT": "初始化 nrf24l01 管腳 CE %1 CSN %2 id %3",
            "NRF24L01_PARSENUMBER": "nrf24l01 解析數字",
            "NRF24L01_PARSESTRING": "nrf24l01 解析字符串",
            "NRF24L01_PARSEVALUE": "nrf24l01 解析數值 %1",
            "NRF24L01_READDATA": "nrf24l01 讀取數據",
            "NRF24L01_SENDNUMBER": "nrf24l01 發送數字 %1 到 id %2",
            "NRF24L01_SENDSTRING": "nrf24l01 發送字符串 %1 到 id %2",
            "NRF24L01_SENDVALUE": "nrf24l01 發送數值 %1 = %2 到 id %3",
            "NRF24L01_VALUEAVAILABLE": "nrf24l01 數值 %1 可用？"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
