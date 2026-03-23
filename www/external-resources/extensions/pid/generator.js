/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2pid_create= function (block) {
        const inputv = Blockly.Arduino.valueToCode(block, 'INPUT', Blockly.Arduino.ORDER_ATOMIC);
        const outputv = Blockly.Arduino.valueToCode(block, 'OUTPUT', Blockly.Arduino.ORDER_ATOMIC);
        const setpoint = Blockly.Arduino.valueToCode(block, 'SETPOINT', Blockly.Arduino.ORDER_ATOMIC);

        const KPV = Blockly.Arduino.valueToCode(block, 'kp', Blockly.Arduino.ORDER_ATOMIC);
        const KIV = Blockly.Arduino.valueToCode(block, 'ki', Blockly.Arduino.ORDER_ATOMIC);
        const KDV = Blockly.Arduino.valueToCode(block, 'kd', Blockly.Arduino.ORDER_ATOMIC);
        
        const pn = this.getFieldValue('SPID');
	    const code = `PID OPPID${pn}(&${inputv}, &${outputv}, &${setpoint}, ${KPV}, ${KIV}, ${KDV}, DIRECT); \n`;
        Blockly.Arduino.includes_.tubitv2pid_create = `#include <PID_v1.h>`;
	Blockly.Arduino.definitions_['tubitv2pid_create' + pn] = code;
        return``;
    };

    Blockly.Arduino.tubitv2pid_set= function (block) {
        const st = Blockly.Arduino.valueToCode(block, 'SampleTime', Blockly.Arduino.ORDER_ATOMIC);
        const min = Blockly.Arduino.valueToCode(block, 'OutputLimits_min', Blockly.Arduino.ORDER_ATOMIC);
        const max = Blockly.Arduino.valueToCode(block, 'OutputLimits_max', Blockly.Arduino.ORDER_ATOMIC);

        const pn = this.getFieldValue('SPID');

        const code = `OPPID${pn}.SetMode(AUTOMATIC);\n OPPID${pn}.SetSampleTime(${st});\n OPPID${pn}.SetOutputLimits(${min},${max});\n`;
        return code;
    };

    Blockly.Arduino.tubitv2pid_compute= function (block) {
        const pn = this.getFieldValue('SPID');
        const code = `OPPID${pn}.Compute();\n`;
        return code;
    };


    return Blockly;
}

exports = registerGenerators;
