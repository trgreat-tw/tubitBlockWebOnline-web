/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#6132ff';
    const secondaryColour = '#6132ff';

    Blockly.Blocks.hrmeb_set= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HRMEB_SET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'FR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.hrmeb_set_motordir= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HRMEB_SET_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'M1S',
                        options: [
                            [Blockly.Msg.HRMEB_MOTOR_TD, 'true'],  
                            [Blockly.Msg.HRMEB_MOTOR_FD, 'false'] 
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'M2S',
                        options: [
                            [Blockly.Msg.HRMEB_MOTOR_TD, 'true'],  
                            [Blockly.Msg.HRMEB_MOTOR_FD, 'false'] 
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'M3S',
                        options: [
                            [Blockly.Msg.HRMEB_MOTOR_TD, 'true'], 
                            [Blockly.Msg.HRMEB_MOTOR_FD, 'false']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'M4S',
                        options: [
                            [Blockly.Msg.HRMEB_MOTOR_TD, 'true'],
                            [Blockly.Msg.HRMEB_MOTOR_FD, 'false'] 
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /*
"type": "field_checkbox",
      "name": "NAME",
      "checked": "FALSE"
*/


    Blockly.Blocks.hrmeb_readbutton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HRMEB_READBUTTON,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };





    Blockly.Blocks.hrmeb_motor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HRMEB_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NMOTOR',
                        options: [
                            [Blockly.Msg.HRMEB_MOTOR_M1, 'M1'],
                            [Blockly.Msg.HRMEB_MOTOR_M2, 'M2'],
                            [Blockly.Msg.HRMEB_MOTOR_M3, 'M3'],
                            [Blockly.Msg.HRMEB_MOTOR_M4, 'M4']]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.hrmeb_allrun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HRMEB_MOTOR_ALLRUN,
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
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.hrmeb_stopm = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HRMEB_MOTOR_STOP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
