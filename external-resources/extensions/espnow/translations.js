// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */

function getInterfaceTranslations () {
        return {
            "en": {
                "tubitv2_espnow.name": "ESP-NOW",
                "tubitv2_espnow.description": "Communicate with other ESP32 devices"
            },
            "zh-cn": {
                "tubitv2_espnow.name": "ESP-NOW",
                "tubitv2_espnow.description": "与其他 ESP32 通信"
            },
            "zh-tw": {
                "tubitv2_espnow.name": "ESP-NOW",
                "tubitv2_espnow.description": "與其他 EPS32 通訊"
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
            "TUBITV2_ESPNOW_CATEGORY": "ESP-NOW",
            "TUBITV2_ESPNOW_INIT": "Initialize ESP-NOW",
            "TUBITV2_ESPNOW_DEVICE_MAC_ADDR": "This device's MAC address",
            "TUBITV2_ESPNOW_ADD_PEER": "Add to peer list: MAC %1, Channel %2",
            "TUBITV2_ESPNOW_SEND": "Send to MAC %1: Data %2",
            "TUBITV2_ESPNOW_BROADCAST": "Broadcast data to all devices: %1",
            "TUBITV2_ESPNOW_ON_RECV": "on packet received",
            "TUBITV2_ESPNOW_ON_SEND": "on packet sent",
            "TUBITV2_ESPNOW_GET_RECV_DATA": "Received data"
        }
    );
    

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "TUBITV2_ESPNOW_CATEGORY": "ESP-NOW",
            "TUBITV2_ESPNOW_INIT": "ESP-NOW 初始化",
            "TUBITV2_ESPNOW_DEVICE_MAC_ADDR": "本设备的 MAC 地址",
            "TUBITV2_ESPNOW_ADD_PEER": "添加通信列表中的 MAC : %1 频道 : %2",
            "TUBITV2_ESPNOW_SEND": "发送到 MAC : %1 数据 : %2",
            "TUBITV2_ESPNOW_BROADCAST": "广播数据给所有设备 : %1",
            "TUBITV2_ESPNOW_ON_RECV": "收到数据包时执行",
            "TUBITV2_ESPNOW_ON_SEND": "发送数据包时执行",
            "TUBITV2_ESPNOW_GET_RECV_DATA": "接收到的数据"
        }
    );
    

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "TUBITV2_ESPNOW_CATEGORY": "ESP-NOW",
            "TUBITV2_ESPNOW_INIT": "ESP-NOW 初始化",
            "TUBITV2_ESPNOW_DEVICE_MAC_ADDR": "此裝置的 MAC 地址",
            "TUBITV2_ESPNOW_ADD_PEER": "在通訊清單中加入 MAC : %1 頻道 : %2",
            "TUBITV2_ESPNOW_SEND": "傳送到 MAC : %1 資料 : %2",
            "TUBITV2_ESPNOW_BROADCAST": "向所有設備廣播資料 : %1",
            "TUBITV2_ESPNOW_ON_RECV": "收到封包時執行",
            "TUBITV2_ESPNOW_ON_SEND": "傳送封包時執行",
            "TUBITV2_ESPNOW_GET_RECV_DATA": "接收到的資料"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;