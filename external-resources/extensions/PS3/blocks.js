/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#cd1df5';

    Blockly.Blocks.ps3_controller_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS3_CONTROLLER_INIT,
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

    Blockly.Blocks.ps3_controller_isConnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS3_CONTROLLER_IS_CONNECTED,
                output: 'Boolean',
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };


    Blockly.Blocks.ps3_controller_getJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS3_CONTROLLER_GET_JOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOYSTICK',
                        options: [
                            [Blockly.Msg.PS3_CONTROLLER_JOYSTICK_LSTICKX, 'lx'],
                            [Blockly.Msg.PS3_CONTROLLER_JOYSTICK_LSTICKY, 'ly'],
                            [Blockly.Msg.PS3_CONTROLLER_JOYSTICK_RSTICKX, 'rx'],
                            [Blockly.Msg.PS3_CONTROLLER_JOYSTICK_RSTICKY, 'ry'],

                        ]
                    }
                ],
                output: 'Number',
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.ps3_controller_isPressed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS3_CONTROLLER_IS_PRESSED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_UP, 'up'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_DOWN, 'down'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_LEFT, 'left'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_RIGHT, 'right'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_TRIANGLE, 'triangle'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_CIRCLE, 'circle'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_CROSS, 'cross'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_SQUARE, 'square'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_L1, 'l1'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_L2, 'l2'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_L3, 'l3'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_R1, 'r1'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_R2, 'r2'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_R3, 'r3'],
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_SHARE, 'select'],    // 注意，share 對應 select
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_OPTIONS, 'start'],    // options 對應 start
				[Blockly.Msg.PS3_CONTROLLER_JOYSTICK_BUTTON_PS, 'ps'],
                        ]
                    }
                ],
                output: 'boolean',
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

	Blockly.Blocks.ps3_controller_setPlayer = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.PS3_CONTROLLER_SET_PLAYER,
            args0: [
                {
                    type: 'input_value',
                    name: 'PLAYER'
                }
            ],
            colour: color,
            extensions: ['shape_statement']
        });
    }
};

    Blockly.Blocks.ps3_controller_setRumbleMs = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS3_CONTROLLER_SET_RUMBLE_MS,
                args0: [
                    {
                    type: 'input_value',
                    name: 'INTENSITY',
                    },
                    {
                    type: 'input_value',
                    name: 'DURATION',
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps3_controller_getbattery = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS3_CONTROLLER_GET_BATTERY,
                output: 'Number',
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
