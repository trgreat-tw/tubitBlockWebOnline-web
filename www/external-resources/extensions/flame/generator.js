/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2flamesensor_init = function (block){
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_[`tubitv2flamesensor_init_${pin}`] = `int flame_${pin} = ${pin};`;
        return `pinMode(flame_${pin}, INPUT);\n`;
    };

    Blockly.Arduino.tubitv2flamesensor_read = function (block) {
        const pin = this.getFieldValue('PIN');
        return [`digitalRead(flame_${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
