/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2lightsensor_init = function (block){
        let module_definitions = `#include <Wire.h>\n`;
        module_definitions += `#include <BH1750.h>\n`;
        module_definitions += `BH1750 LightMeter;\n`;
        let code = `Wire.begin();\n`;
        code += `LightMeter.begin();\n`;
        Blockly.Arduino.definitions_.tubitv2_module_init = module_definitions;
        return code;
    };

    Blockly.Arduino.tubitv2lightsensor_read = function (block) {
        return [`LightMeter.readLightLevel()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
