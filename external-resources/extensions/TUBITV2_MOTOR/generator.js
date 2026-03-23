/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    
    Blockly.Arduino.tubitv2motor_run = function (block) {
        const mn = this.getFieldValue('NMOTOR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `tubit.setMotorPwm(${mn}, ${speed});\n`;
    };

    Blockly.Arduino.tubitv2motor_allrun = function (block) {
        const m1s = Blockly.Arduino.valueToCode(block, 'M1S', Blockly.Arduino.ORDER_ATOMIC);
        const m2s = Blockly.Arduino.valueToCode(block, 'M2S', Blockly.Arduino.ORDER_ATOMIC);
        const m3s = Blockly.Arduino.valueToCode(block, 'M3S', Blockly.Arduino.ORDER_ATOMIC);
        const m4s = Blockly.Arduino.valueToCode(block, 'M4S', Blockly.Arduino.ORDER_ATOMIC);

        return `tubit.setMotorsPwm(${m1s},${m2s},${m3s},${m4s});\n`;
    };

    Blockly.Arduino.tubitv2motor_stopm = function (block) {
        

        return `tubit.stopAllMotors();\n`;
    };

    Blockly.Arduino.tubitv2motor_readenc = function (block) {
        const me = this.getFieldValue('NMOTOR_1');
        const code = `tubit.readMotorEnc(${me})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2motor_setenc = function (block) {
        const mn = this.getFieldValue('NMOTOR');
        const enc = Blockly.Arduino.valueToCode(block, 'ENCODER', Blockly.Arduino.ORDER_ATOMIC);

        return `tubit.setMotorEnc(${mn}, ${enc});\n`;
    };


    return Blockly;
}

exports = registerGenerators;
