/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.hrmeb_set= function (block) {
        
        Blockly.Arduino.includes_.hrmeb_set = `#include <HR_MEB.h>`;
        Blockly.Arduino.definitions_.hrmeb_set = `HR_MEB meb;`; 
        const fr = Blockly.Arduino.valueToCode(block, 'FR', Blockly.Arduino.ORDER_ATOMIC);
        return`meb.Init(${fr});\n`;
    };
    Blockly.Arduino.hrmeb_set_motordir= function (block) {
        const m1d = this.getFieldValue('M1S');
        const m2d = this.getFieldValue('M2S');
        const m3d = this.getFieldValue('M3S');
        const m4d = this.getFieldValue('M4S');
        return`meb.SetMotorDir(${m1d},${m2d},${m3d},${m4d});\n`;
    };

    Blockly.Arduino.hrmeb_readbutton= function (block) {
        const code = `meb.readButton()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.hrmeb_motor = function (block) {
        const mn = this.getFieldValue('NMOTOR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `meb.MotorRun(${mn}, ${speed});\n`;
    };

    Blockly.Arduino.hrmeb_allrun = function (block) {
        const m1s = Blockly.Arduino.valueToCode(block, 'M1S', Blockly.Arduino.ORDER_ATOMIC);
        const m2s = Blockly.Arduino.valueToCode(block, 'M2S', Blockly.Arduino.ORDER_ATOMIC);
        const m3s = Blockly.Arduino.valueToCode(block, 'M3S', Blockly.Arduino.ORDER_ATOMIC);
        const m4s = Blockly.Arduino.valueToCode(block, 'M4S', Blockly.Arduino.ORDER_ATOMIC);

        return `meb.ALLMotorControl(${m1s},${m2s},${m3s},${m4s});\n`;
    };

    Blockly.Arduino.hrmeb_stopm = function (block) {
        

        return `meb.StopAllMotor();\n`;
    };


    return Blockly;
}

exports = registerGenerators;
