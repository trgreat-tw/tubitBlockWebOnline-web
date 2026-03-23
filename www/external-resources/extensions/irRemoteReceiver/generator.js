/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.irRemoteReceiver_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.irRemoteReceiver_init = '#include <IRremote.h>';

        return `IrReceiver.begin(${pin}, ENABLE_LED_FEEDBACK);\n`;
    };

    Blockly.Arduino.irRemoteReceiver_dataAvailable = function () {
        return ['IrReceiver.decode()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.irRemoteReceiver_recivedCommand = function () {
        return ['String(IrReceiver.decodedIRData.command, HEX)', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.irRemoteReceiver_resume = function () {
        return 'IrReceiver.resume();\n';
    };

    return Blockly;
}

exports = registerGenerators;
