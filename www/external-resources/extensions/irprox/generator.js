/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2irprox_init = function (block){
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_[`tubitv2_module_init${pin}`]= `int IRPROX_${pin} = ${pin};`;
        return `pinMode(IRPROX_${pin}, INPUT);\n`;
    };

    Blockly.Arduino.tubitv2irprox_read = function (block) {
        const pin = this.getFieldValue('PIN');
        const type = this.getFieldValue('TYPE');
        return [`${type}Read(IRPROX_${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
