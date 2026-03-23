/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#FF6700';
    const secondaryColour = '#FF6700';

    Blockly.Blocks.tubitv2motor_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MOTOR_RUN,
                args0: [
                     {
                        type: 'field_dropdown',
                        name: 'NMOTOR',
                        options: [
                            [Blockly.Msg.TUBITV2_MOTOR_M1, 'M1'],
                            [Blockly.Msg.TUBITV2_MOTOR_M2, 'M2'],
                            [Blockly.Msg.TUBITV2_MOTOR_M3, 'M3'],
                            [Blockly.Msg.TUBITV2_MOTOR_M4, 'M4'],]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2motor_allrun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MOTOR_ALLRUN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'M1S'
                    },                    
                    {
                        type: 'input_value',
                        name: 'M2S'
                    },
                    {
                        type: 'input_value',
                        name: 'M3S'
                    },
                    {
                        type: 'input_value',
                        name: 'M4S'
                    },
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2motor_stopm = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MOTOR_STOP,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2motor_readenc = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MOTOR_READENC,
                args0: [
                     {
                        type: 'field_dropdown',
                        name: 'NMOTOR_1',
                        options: [
                            [Blockly.Msg.TUBITV2_MOTOR_M1, '1'],
                            [Blockly.Msg.TUBITV2_MOTOR_M2, '2'],
                            [Blockly.Msg.TUBITV2_MOTOR_M3, '3'],
                            [Blockly.Msg.TUBITV2_MOTOR_M4, '4'],]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tubitv2motor_setenc = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MOTOR_SETENC,
                args0: [
                     {
                        type: 'field_dropdown',
                        name: 'NMOTOR',
                        options: [
                            [Blockly.Msg.TUBITV2_MOTOR_M1, '1'],
                            [Blockly.Msg.TUBITV2_MOTOR_M2, '2'],
                            [Blockly.Msg.TUBITV2_MOTOR_M3, '3'],
                            [Blockly.Msg.TUBITV2_MOTOR_M4, '4'],]
                    },
                    {
                        type: 'input_value',
                        name: 'ENCODER'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
