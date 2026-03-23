/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2ppgun_init= function (block) {
        const rosm = block.getFieldValue('ROTATE');
        const upsm = block.getFieldValue('UPDOWN');
        const shsm = block.getFieldValue('SHOOT');
        Blockly.Arduino.includes_.tubitv2ppgun_init_set = `#include <PPGUN.h>`;
        return`PPGUN_INIT(${rosm},${upsm},${shsm});\n`;
    };

    Blockly.Arduino.tubitv2ppgun_launch = function (block) {
        return `PPGUN_launch();\n`;
    };

    Blockly.Arduino.tubitv2ppgun_trcontroladd= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        return`PPGUN_PanAdd(${deg});\n`;
    };
    
    Blockly.Arduino.tubitv2ppgun_udcontroladd= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        return`PPGUN_HeadAdd(${deg});\n`;
    };

    Blockly.Arduino.tubitv2ppgun_trcontrol= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        const timer = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        return`PPGUN_PanSet(${deg},${timer});\n`;
    };
    
    Blockly.Arduino.tubitv2ppgun_udcontrol= function (block) {
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        const timer = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        return`PPGUN_HeadSet(${deg},${timer});\n`;
    };


    return Blockly;
}

exports = registerGenerators;
