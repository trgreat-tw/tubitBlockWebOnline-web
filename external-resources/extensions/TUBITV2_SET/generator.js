/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    Blockly.Arduino.tubitv2_set = function (block) {
        Blockly.Arduino.includes_.tubitv2_set = `#include <TuBitCore.h>\n#include <Wire.h>`;
	Blockly.Arduino.definitions_.tubitv2_set = `TuBitCore tubit;`; 
    Blockly.Arduino.setups_['TUBITV2_SET']= `tubit.init();`; 
        return '';
    };

    return Blockly;
}

exports = registerGenerators;
