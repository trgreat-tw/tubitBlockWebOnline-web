/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2mq2_init = function (block){
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_[`tubitv2mq2_init${pin}`]= `int MQ2_${pin} = ${pin};`
        return `pinMode(MQ2_${pin}, INPUT);\n`;
    };

    Blockly.Arduino.tubitv2mq2_read = function (block) {
        const pin = this.getFieldValue('PIN');
        const type = this.getFieldValue('TYPE');
        return [`${type}Read(MQ2_${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
