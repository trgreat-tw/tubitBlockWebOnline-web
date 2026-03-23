/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2pyro_init = function (block){
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_[`tubitv2pyro_init_${pin}`] = `int PIR_${pin} = ${pin}`;
        return `pinMode(PIR_${pin}, INPUT);\n`;
    };

    Blockly.Arduino.tubitv2pyro_read = function (block) {
        const pin = this.getFieldValue('PIN');
        return [`digitalRead(PIR_${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
