/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#9fc5e8'; //積木顏色
    const secondaryColour = '#9fc5e8'; //第二種積木顏色

    Blockly.Blocks.tubitv2pid_create = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PID_CREATE,
                args0: [
                    {
                    type: 'field_dropdown',
                        name: 'SPID',
                        options: [
                            [Blockly.Msg.TUBITV2_PID_1, '1'],
                            [Blockly.Msg.TUBITV2_PID_2, '2'],
                            [Blockly.Msg.TUBITV2_PID_3, '3'],
                            [Blockly.Msg.TUBITV2_PID_5, '4'],
                            [Blockly.Msg.TUBITV2_PID_6, '5'],
                            [Blockly.Msg.TUBITV2_PID_6, '6'],
                            [Blockly.Msg.TUBITV2_PID_7, '7'],
                            [Blockly.Msg.TUBITV2_PID_8, '8']]
                        },
                    {
                        type: 'input_value',
                        name: 'INPUT'
                    },
                    {
                        type: 'input_value',
                        name: 'OUTPUT'
                    },
                    {
                        type: 'input_value',
                        name: 'SETPOINT'
                    },
                    {
                        type: 'input_value',
                        name: 'kp'
                    },
                    {
                        type: 'input_value',
                        name: 'ki'
                    },
                    {
                        type: 'input_value',
                        name: 'kd'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2pid_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PID_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                            name: 'SPID',
                            options: [
                                [Blockly.Msg.TUBITV2_PID_1, '1'],
                                [Blockly.Msg.TUBITV2_PID_2, '2'],
                                [Blockly.Msg.TUBITV2_PID_3, '3'],
                                [Blockly.Msg.TUBITV2_PID_5, '4'],
                                [Blockly.Msg.TUBITV2_PID_6, '5'],
                                [Blockly.Msg.TUBITV2_PID_6, '6'],
                                [Blockly.Msg.TUBITV2_PID_7, '7'],
                                [Blockly.Msg.TUBITV2_PID_8, '8']]
                            },
                    {
                        type: 'input_value',
                        name: 'SampleTime'
                    },
                    {
                        type: 'input_value',
                        name: 'OutputLimits_min'
                    },
                    {
                        type: 'input_value',
                        name: 'OutputLimits_max'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2pid_compute = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PID_COMPUTE,
                args0: [
                {
                    type: 'field_dropdown',
                        name: 'SPID',
                        options: [
                            [Blockly.Msg.TUBITV2_PID_1, '1'],
                            [Blockly.Msg.TUBITV2_PID_2, '2'],
                            [Blockly.Msg.TUBITV2_PID_3, '3'],
                            [Blockly.Msg.TUBITV2_PID_5, '4'],
                            [Blockly.Msg.TUBITV2_PID_6, '5'],
                            [Blockly.Msg.TUBITV2_PID_6, '6'],
                            [Blockly.Msg.TUBITV2_PID_7, '7'],
                            [Blockly.Msg.TUBITV2_PID_8, '8']]
                        },
                    ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = registerBlocks;
