/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.tubitv2_button = function (block) {
        const tubitbutton = block.getFieldValue('TUBIT_BUTTON'); 
        const code = `tubit.readButton(${tubitbutton})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.tubitv2_buttonts = function (block) {
        const tubitbutton = block.getFieldValue('TUBIT_BUTTON'); 
        const tubitbuttonts = block.getFieldValue('TUBIT_BUTTONTS'); 
        const code = `tubit.readButtonEdge(${tubitbutton},${tubitbuttonts})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = registerGenerators;
