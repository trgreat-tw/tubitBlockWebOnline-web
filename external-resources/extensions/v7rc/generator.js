/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2v7rc_init= function (block) {
        const modes = block.getFieldValue('MODESET');
        Blockly.Arduino.includes_.tubitv2v7rc_set = `#include <V7RC_${modes}.h>`;
        Blockly.Arduino.definitions_.tubitv2v7rc_set = `V7RC_${modes} v7rc;`; 
        return``;
    };

    Blockly.Arduino.tubitv2v7rc_bleset= function (block) {
        const blename = Blockly.Arduino.valueToCode(block, 'BLENAME', Blockly.Arduino.ORDER_ATOMIC);
        return`v7rc.setupBLE(${blename});\n`;
    };

    Blockly.Arduino.tubitv2v7rc_wifiset= function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
        const psd = Blockly.Arduino.valueToCode(block, 'PSD', Blockly.Arduino.ORDER_ATOMIC);
        const channel = block.getFieldValue('CHANNEL');
        Blockly.Arduino.definitions_.tubitv2v7rc_set +=  `\nconst char* ssid = ${ssid} ;\nconst char* password = ${psd};\nconst int channel = ${channel};\n`; 
        return`v7rc.setupWIFI(ssid, password, channel);\n`;
    };

    Blockly.Arduino.tubitv2v7rc_Connect= function (block) {
        const code = `v7rc.connect()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.tubitv2v7rc_ADVXY = function (block) {
    var dropdown = block.getFieldValue('DATA'); 
    var code = '';
    if (dropdown === '1') {
        code = '( (v7rc.readSRTdata(1) - 1500) / 2 )';
    } else if (dropdown === '2') {
        code = '( (v7rc.readSRTdata(2) - 1500) / 2 )';
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
    };



Blockly.Arduino.tubitv2v7rc_ADVBUT = function (block) {
    var dropdown = block.getFieldValue('DATA');
    var code = '';

    if (dropdown === '1') {
        // U
        code = '(v7rc.readSRTdata(3) == 2000 && v7rc.readSRTdata(4) == 1500)';
    } else if (dropdown === '2') {
        // D
        code = '(v7rc.readSRTdata(3) == 1000 && v7rc.readSRTdata(4) == 1500)';
    } else if (dropdown === '3') {
        // L
        code = '(v7rc.readSRTdata(3) == 1500 && v7rc.readSRTdata(4) == 1000)';
    } else if (dropdown === '4') {
        // R
        code = '(v7rc.readSRTdata(3) == 1500 && v7rc.readSRTdata(4) == 2000)';
    } else if (dropdown === '5') {
        // UL
        code = '(v7rc.readSRTdata(3) == 2000 && v7rc.readSRTdata(4) == 1000)';
    } else if (dropdown === '6') {
        // DL
        code = '(v7rc.readSRTdata(3) == 1000 && v7rc.readSRTdata(4) == 1000)';
    } else if (dropdown === '7') {
        // UR
        code = '(v7rc.readSRTdata(3) == 2000 && v7rc.readSRTdata(4) == 2000)';
    } else if (dropdown === '8') {
        // DR
        code = '(v7rc.readSRTdata(3) == 1000 && v7rc.readSRTdata(4) == 2000)';
    }

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};



    Blockly.Arduino.tubitv2v7rc_readalldata= function (block) {
        const code = `v7rc.readdata()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2v7rc_mode= function (block) {
        const mode = Blockly.Arduino.valueToCode(block, 'MODE', Blockly.Arduino.ORDER_ATOMIC);
        const code = `v7rc.setMode(${mode})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2v7rc_readdata= function (block) {
        const data = block.getFieldValue('DATA');
        const code = `v7rc.readSRTdata(${data})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };



    return Blockly;
}

exports = registerGenerators;
