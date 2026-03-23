/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2atarm_init= function (block) {
        const rosm = block.getFieldValue('ROTATE');
        const upsm = block.getFieldValue('UPDOWN');
        const shsm = block.getFieldValue('CLAW');
        Blockly.Arduino.includes_.tubitv2atarm_init_set = `#include <ATARM.h>`;
        return`ATARM_INIT(${rosm},${upsm},${shsm});\n`;
    };

    Blockly.Arduino.tubitv2atarm_clawset = function (block) {
        const op = Blockly.Arduino.valueToCode(block, 'CLAWOPDEG', Blockly.Arduino.ORDER_ATOMIC);
        const cl = Blockly.Arduino.valueToCode(block, 'CLAWCLDEG', Blockly.Arduino.ORDER_ATOMIC);
        return `ATARM_SetClawRange(${op},${cl});\n`;
    };
    
    Blockly.Arduino.tubitv2atarm_liftset = function (block) {
        const up = Blockly.Arduino.valueToCode(block, 'ATAUPDEG', Blockly.Arduino.ORDER_ATOMIC);
        const dw = Blockly.Arduino.valueToCode(block, 'ATADWDEG', Blockly.Arduino.ORDER_ATOMIC);
        return `ATARM_SetLiftRange(${dw},${up});\n`;
    };

        Blockly.Arduino.tubitv2atarm_panset = function (block) {
        const up = Blockly.Arduino.valueToCode(block, 'PANUPDEG', Blockly.Arduino.ORDER_ATOMIC);
        const dw = Blockly.Arduino.valueToCode(block, 'PANDWDEG', Blockly.Arduino.ORDER_ATOMIC);
        return `ATARM_SetPanRange(${dw},${up});\n`;
    };

    Blockly.Arduino.tubitv2atarm_claw = function (block) {
        const claw = block.getFieldValue('ACTION');
        const timer = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        return `ATARM_ClawCtrl(${claw},${timer});\n`;
    };

    Blockly.Arduino.tubitv2atarm_trcontroladd= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        return`ATARM_PanAdd(${deg});\n`;
    };
    
    Blockly.Arduino.tubitv2atarm_udcontroladd= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        return`ATARM_LiftAdd(${deg});\n`;
    };

    Blockly.Arduino.tubitv2atarm_trcontrol= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        const timer = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        return`ATARM_PanSet(${deg},${timer});\n`;
    };
    
    Blockly.Arduino.tubitv2atarm_udcontrol= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        const timer = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        return`ATARM_LiftSet(${deg},${timer});\n`;
    };


    return Blockly;
}

exports = registerGenerators;
