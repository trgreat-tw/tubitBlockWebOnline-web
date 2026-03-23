/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#4CAF50';
    const secondaryColour = '#4CAF50';

    Blockly.Blocks.tubitv2atarm_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_INIT, 
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ROTATE',
                        options: [
                            [Blockly.Msg.TUBITV2SM_0, 'S0'],
                            [Blockly.Msg.TUBITV2SM_1, 'S1'],
                            [Blockly.Msg.TUBITV2SM_2, 'S2'],
                            [Blockly.Msg.TUBITV2SM_3, 'S3'],
                            [Blockly.Msg.TUBITV2SM_4, 'S4'],
                            [Blockly.Msg.TUBITV2SM_5, 'S5'],
                            [Blockly.Msg.TUBITV2SM_6, 'S6'],
                            [Blockly.Msg.TUBITV2SM_7, 'S7']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UPDOWN',
                        options: [
                            [Blockly.Msg.TUBITV2SM_7, 'S7'],
                            [Blockly.Msg.TUBITV2SM_0, 'S0'],
                            [Blockly.Msg.TUBITV2SM_1, 'S1'],
                            [Blockly.Msg.TUBITV2SM_2, 'S2'],
                            [Blockly.Msg.TUBITV2SM_3, 'S3'],
                            [Blockly.Msg.TUBITV2SM_4, 'S4'],
                            [Blockly.Msg.TUBITV2SM_5, 'S5'],
                            [Blockly.Msg.TUBITV2SM_6, 'S6']
                            
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CLAW',
                        options: [
                            [Blockly.Msg.TUBITV2SM_6, 'S6'],
                            [Blockly.Msg.TUBITV2SM_2, 'S2'],
                            [Blockly.Msg.TUBITV2SM_0, 'S0'],
                            [Blockly.Msg.TUBITV2SM_1, 'S1'],
                            [Blockly.Msg.TUBITV2SM_3, 'S3'],
                            [Blockly.Msg.TUBITV2SM_4, 'S4'],
                            [Blockly.Msg.TUBITV2SM_5, 'S5'],
                            [Blockly.Msg.TUBITV2SM_7, 'S7']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        Blockly.Blocks.tubitv2atarm_clawset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_CLAWSET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'CLAWOPDEG'
                    },
                    {
                        type: 'input_value',
                        name: 'CLAWCLDEG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

            Blockly.Blocks.tubitv2atarm_liftset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_LIFTSET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ATADWDEG'
                    },
                    {
                        type: 'input_value',
                        name: 'ATAUPDEG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

                Blockly.Blocks.tubitv2atarm_panset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_PANSET,
                args0: [
                    
                    {
                        type: 'input_value',
                        name: 'PANUPDEG'
                    },
                    {
                        type: 'input_value',
                        name: 'PANDWDEG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.tubitv2atarm_claw = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_CLAW,
                    args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ACTION',
                        options: [
                            [Blockly.Msg.TUBITV2CLAW_OP, 'true'],
                            [Blockly.Msg.TUBITV2CLAW_CL, 'false']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2atarm_trcontroladd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_TRCONTROLADD,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2atarm_udcontroladd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_UDCONTROLADD,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };



    Blockly.Blocks.tubitv2atarm_trcontrol = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_TRCONTROL,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2atarm_udcontrol = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2ATARM_UDCONTROL,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
                    },
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
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
