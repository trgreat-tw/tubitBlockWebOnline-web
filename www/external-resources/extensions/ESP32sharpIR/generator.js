/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.sharpIR_inita = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');
        const model = this.getFieldValue('MODEL');

        Blockly.Arduino.includes_.sharpIR_init = `#include <ESP32SharpIR.h>`;
        Blockly.Arduino.definitions_[`sharpIR_init_${no}`] = `ESP32SharpIR sharpIR_${no}(ESP32SharpIR::GP2Y0A21YK0F, ${pin});`;
        return `sharpIR_${no}.setFilterRate(0.1f);\n`;
    };

    Blockly.Arduino.sharpIR_readDistancea = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        return [`sharpIR_${no}.getDistanceFloat()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
