/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2_espnow_init = function (block) {
        Blockly.Arduino.includes_.tubitv2_espnow_init = `#include "TubitESPNow.h"`;
        Blockly.Arduino.definitions_.tubitv2_espnow_init = `TubitESPNow tubit_esp_now;`;
        Blockly.Arduino.setups_.tubitv2_espnow_init = `tubit_esp_now.init();`;
        return '';
    }

    Blockly.Arduino.tubitv2_espnow_add_peer = function (block) {
        const peer_addr = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC);
        const channel = Blockly.Arduino.valueToCode(block, 'CHANNEL', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit_esp_now.add_peer(${peer_addr}, ${channel});\n`;
    }

    Blockly.Arduino.tubitv2_espnow_send = function (block) {
        const peer_addr = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC);
        const message = Blockly.Arduino.valueToCode(block, 'MSG', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit_esp_now.send(${peer_addr}, ${message});\n`;
    }

    Blockly.Arduino.tubitv2_espnow_broadcast = function (block) {
        const message = Blockly.Arduino.valueToCode(block, 'MSG', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit_esp_now.broadcast(${message});\n`;
    }

    Blockly.Arduino.tubitv2_espnow_device_mac_addr = function () {
        return [`tubit_esp_now.device_mac_addr()`, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.tubitv2_espnow_get_recv_data = function () {
        return [`tubit_esp_now.get_recv_data()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // callbacks
    Blockly.Arduino.tubitv2_espnow_on_send = function (block) {
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        let code = `void onSend(const uint8_t *mac, esp_now_send_status_t status) {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_.tubitv2_espnow_on_send = code;
        Blockly.Arduino.setups_.tubitv2_espnow_on_send = 'tubit_esp_now.user_send_cb_attach(onSend);';
        return '';
    };
    
    Blockly.Arduino.tubitv2_espnow_on_recv = function (block) {
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        let code = `void onRecv(const uint8_t *mac, const uint8_t *data, int len) {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_.tubitv2_espnow_on_recv = code;
        Blockly.Arduino.setups_.tubitv2_espnow_on_recv = 'tubit_esp_now.user_recv_cb_attach(onRecv);';
        return '';
    };

    return Blockly;
}

exports = registerGenerators;
