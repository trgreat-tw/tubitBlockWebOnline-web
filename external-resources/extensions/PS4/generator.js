/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    
    Blockly.Arduino.ps4_controller_init = function (block) {
        // Blockly.Arduino.includes_.tubitv2_set = `#include <TUBIT_V2.h>`;
        Blockly.Arduino.includes_.esp32_ps4 = `#include <PS4Controller.h>`;
        const mac = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC) || '"00:00:00:00:00:00"';
        if (mac === '"00:00:00:00:00:00"') Blockly.Arduino.setups_.begin = 'PS4.begin();';
        else Blockly.Arduino.setups_.begin = `PS4.begin(${mac});`;
        return '';
    }
    
    Blockly.Arduino.ps4_controller_isConnected = function (block) {
        const code = 'PS4.isConnected()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }


    Blockly.Arduino.ps4_controller_getJoystick = function (block) {
        const joystick = this.getFieldValue('JOYSTICK');
        const code = `PS4.${joystick}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.ps4_controller_isPressed = function (block) {
        const button = this.getFieldValue('BUTTON');
        const code = `PS4.${button}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.ps4_controller_setLED = function (block) {
        const led_red = Blockly.Arduino.valueToCode(block, 'LED_RED', Blockly.Arduino.ORDER_ATOMIC) || '255';
        const led_green = Blockly.Arduino.valueToCode(block, 'LED_GREEN', Blockly.Arduino.ORDER_ATOMIC) || '255';
        const led_blue = Blockly.Arduino.valueToCode(block, 'LED_BLUE', Blockly.Arduino.ORDER_ATOMIC) || '255';
        const code = `PS4.setLed(${led_red}, ${led_green}, ${led_blue});\nPS4.sendToController();\ndelay(10);\n`;

        return code;
    }

    Blockly.Arduino.ps4_controller_setRumble = function (block) {
        const rumble = Blockly.Arduino.valueToCode(block, 'RUMBLE', Blockly.Arduino.ORDER_ATOMIC) || '255';
        const code = `PS4.setRumble(0, ${rumble});\nPS4.sendToController();\ndelay(10);\nPS4.setRumble(0, 0);\nPS4.sendToController();\ndelay(10);\n`;
        return code;
    }

    Blockly.Arduino.ps4_controller_getAddress = function (block) {
        const code = `PS4.getAddress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.ps4_controller_getbattery = function (block) {
        const code = `PS4.Battery()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    return Blockly;
}

exports = registerGenerators;
