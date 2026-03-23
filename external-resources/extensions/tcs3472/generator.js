/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2tcs3472_set= function (block) {
        const ledpin = block.getFieldValue('LEDPIN');
        Blockly.Arduino.includes_.tubitv2tcs3472_set = `#include <Wire.h>\n#include "Adafruit_TCS34725.h"\n`;
        Blockly.Arduino.definitions_.tubitv2tcs3472_set = `float rgb[3] ={0,0,0};\nint tcsLED = ${ledpin};\nAdafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);\n`; 
        return`if (tcs.begin()) {\nSerial.println("Found sensor");\n} else {\nSerial.println("No TCS34725 found ... check your connections");\nwhile (1);\n}\nledcSetup(0, 490, 8);\nledcAttachPin(tcsLED, 0);\n`;
    };

    Blockly.Arduino.tubitv2tcs3472_readcolor= function (block) {
        return `tcs.getRGB(&rgb[0], &rgb[1], &rgb[2]);\n`;
    };

    Blockly.Arduino.tubitv2tcs3472_readrgb= function (block) {
        const rgb = block.getFieldValue('RGB');
        const code = `rgb[${rgb}]`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2tcs3472_readlux= function (block) {
        const code = `tcs.calculateLux(rgb[0], rgb[1], rgb[2])`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.tubitv2tcs3472_setlight= function (block) {
        const light = Blockly.Arduino.valueToCode(block, 'LIGHT', Blockly.Arduino.ORDER_ATOMIC);

        return `ledcWrite(0,${light});\n`;
    };

    return Blockly;
}

exports = registerGenerators;
