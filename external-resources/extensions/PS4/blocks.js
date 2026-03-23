/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#2d2de3';

    Blockly.Blocks.ps4_controller_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MAC',
                        check: 'String'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps4_controller_isConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_IS_CONNECTED,
                output: 'Boolean',
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };


    Blockly.Blocks.ps4_controller_getJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_GET_JOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOYSTICK',
                        options: [
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_LSTICKX, 'LStickX'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_LSTICKY, 'LStickY'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_RSTICKX, 'RStickX'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_RSTICKY, 'RStickY'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_L2VALUE, 'L2Value'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_R2VALUE, 'R2Value'],
                        ]
                    }
                ],
                output: 'Number',
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.ps4_controller_isPressed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_IS_PRESSED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_UP, 'Up'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_DOWN, 'Down'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_LEFT, 'Left'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_RIGHT, 'Right'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_TRIANGLE, 'Triangle'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_CIRCLE, 'Circle'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_CROSS, 'Cross'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_SQUARE, 'Square'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_L1, 'L1'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_L2, 'L2'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_L3, 'L3'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_R1, 'R1'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_R2, 'R2'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_R3, 'R3'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_SHARE, 'Share'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_OPTIONS, 'Options'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_PS, 'PSButton'],
                            [Blockly.Msg.PS4_CONTROLLER_JOYSTICK_BUTTON_TOUCHPAD, 'TouchPad'],
                        ]
                    }
                ],
                output: 'boolean',
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.ps4_controller_setLED = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_SET_LED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'LED_RED',
                    },
                    {
                        type: 'input_value',
                        name: 'LED_GREEN',
                    },
                    {
                        type: 'input_value',
                        name: 'LED_BLUE',
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps4_controller_setRumble = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_SET_RUMBLE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'RUMBLE',
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps4_controller_getAddress = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_GET_ADDRESS,
                output: 'String',
                colour: color,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.ps4_controller_getbattery = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS4_CONTROLLER_GET_BATTERY,
                output: 'Number',
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
