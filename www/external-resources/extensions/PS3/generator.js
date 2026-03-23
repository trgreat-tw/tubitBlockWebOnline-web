/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    
    Blockly.Arduino.ps3_controller_init = function (block) {
        // Blockly.Arduino.includes_.tubitv2_set = `#include <TUBIT_V2.h>`;
        Blockly.Arduino.includes_.esp32_ps3 = `#include <Ps3Controller.h>`;
        const mac = Blockly.Arduino.valueToCode(block, 'MAC', Blockly.Arduino.ORDER_ATOMIC) || '"00:00:00:00:00:00"';
        if (mac === '"00:00:00:00:00:00"') Blockly.Arduino.setups_.begin = ' Ps3.begin();';
        else Blockly.Arduino.setups_.begin = ` Ps3.begin(${mac});`;
        return '';
    }
    
    Blockly.Arduino.ps3_controller_isConnected = function (block) {
        const code = 'Ps3.isConnected()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }


    Blockly.Arduino.ps3_controller_getJoystick = function (block) {
        const joystick = this.getFieldValue('JOYSTICK');
        const code = `Ps3.data.analog.stick.${joystick}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.ps3_controller_isPressed = function (block) {
        const button = this.getFieldValue('BUTTON');
        const code = `Ps3.data.button.${button}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.ps3_controller_setPlayer = function (block) {
	const player = Blockly.Arduino.valueToCode(block, 'PLAYER', Blockly.Arduino.ORDER_ATOMIC);
        return `Ps3.setPlayer(${player});\n`;
    };

	Blockly.Arduino.ps3_controller_setRumbleMs = function (block) {
   	 const intensity = Blockly.Arduino.valueToCode(block, 'INTENSITY', Blockly.Arduino.ORDER_ATOMIC) || '100';
   	 const duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '500';
   	 return `Ps3.setRumble(${intensity}, ${duration});\n`;
	};
    Blockly.Arduino.ps3_controller_getbattery = function (block) {
        const code = `Ps3.data.status.battery`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    return Blockly;
}

exports = registerGenerators;
