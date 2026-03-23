/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2hallsensor_init = function (block){
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_[`tubitv2hallsensor_init_${pin}`] = `int HALL_${pin} = ${pin};`;
        return `pinMode(HALL_${pin}, INPUT);\n`;
    };

    Blockly.Arduino.tubitv2hallsensor_read = function (block) {
        const pin = this.getFieldValue('PIN');
        return [`digitalRead(HALL_${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
