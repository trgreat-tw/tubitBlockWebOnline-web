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
            "irRemoteReceiver.name": "IR Remote Receiver",
            "irRemoteReceiver.description": "Receiving and decoding data in infrared carrier."
        },
        "ru": {
            "irRemoteReceiver.name": "ИК-пульт дистанционного управления",
            "irRemoteReceiver.description": "Прием и декодирование данных в инфракрасном носителе."
        },
        "zh-cn": {
            "irRemoteReceiver.name": "红外遥控接收器",
            "irRemoteReceiver.description": "接收并解码红外载波中的数据。"
        },
        "zh-tw": {
            "irRemoteReceiver.name": "紅外遙控接收器",
            "irRemoteReceiver.description": "接收並解碼紅外載波中的數據。"
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
            "IRREMOTERECEIVER_CATEGORY": "IR Remote Receiver",
            "IRREMOTERECEIVER_DATAAVAILABLE": "IR remote receiver data available?",
            "IRREMOTERECEIVER_INIT": "init IR remote receiver pin %1",
            "IRREMOTERECEIVER_RECIVEDCOMMAND": "IR remote recived command",
            "IRREMOTERECEIVER_RESUME": "IR remote resume recive"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "IRREMOTERECEIVER_CATEGORY": "ИК-пульт",
            "IRREMOTERECEIVER_DATAAVAILABLE": "Доступны данные ИК-пульта?",
            "IRREMOTERECEIVER_INIT": "Инициализировать ИК-пульт на пине %1",
            "IRREMOTERECEIVER_RECIVEDCOMMAND": "Полученная команда с ИК-пульта",
            "IRREMOTERECEIVER_RESUME": "Получена команда с ИК-пульта"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "IRREMOTERECEIVER_CATEGORY": "红外遥控接收器",
            "IRREMOTERECEIVER_DATAAVAILABLE": "红外遥控接收器数据可用？",
            "IRREMOTERECEIVER_INIT": "初始化红外遥控接收器引脚 %1",
            "IRREMOTERECEIVER_RECIVEDCOMMAND": "红外遥控接收器收到的指令",
            "IRREMOTERECEIVER_RESUME": "红外遥控接收器继续接收"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "IRREMOTERECEIVER_CATEGORY": "紅外遙控接收器",
            "IRREMOTERECEIVER_DATAAVAILABLE": "紅外遙控接收器數據可用？",
            "IRREMOTERECEIVER_INIT": "初始化紅外遙控接收器管腳 %1",
            "IRREMOTERECEIVER_RECIVEDCOMMAND": "紅外遙控接收器收到的指令",
            "IRREMOTERECEIVER_RESUME": "紅外遙控接收器繼續接收"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
