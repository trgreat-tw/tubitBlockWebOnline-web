/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2servomotor_run = function (block) {
        const mn = this.getFieldValue('SMOTOR');
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);

        return `tubit.setServoAngle(${mn}, ${deg});\n`;
    };

    Blockly.Arduino.tubitv2servomotor_ms = function (block) {
        const mn = this.getFieldValue('SMOTOR');
        const ms = Blockly.Arduino.valueToCode(block, 'MS', Blockly.Arduino.ORDER_ATOMIC);

        return `tubit.setServoPulseMs(${mn}, ${ms});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
