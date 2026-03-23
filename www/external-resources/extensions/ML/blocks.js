/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#40E0D0';
    const secondaryColour = colour;

    Blockly.Blocks.tubitv2MLLL_init= {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_label',
                        name: 'init',
                        text: 'NN 初始化'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_set0= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_SET0,
                // message1:'%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'f_NAME0'
                    },              
                    {
                        type: 'field_dropdown',
                        name: 'activ0',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_SET0_ACTIV1, 'NONE'],
                            [Blockly.Msg.TUBITV2MLLL_SET0_ACTIV2, 'RELU'],
                            [Blockly.Msg.TUBITV2MLLL_SET0_ACTIV3, 'CROSSIN']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'Weight0'
                    },
                    {
                        type: 'input_value',
                        name: 'Loss0'
                    }                    
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_set1= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_SET1,
                // message1:'%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'f_NAME1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'activ1',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_SET1_ACTIV1, 'NONE'],
                            [Blockly.Msg.TUBITV2MLLL_SET1_ACTIV2, 'RELU'],
                            [Blockly.Msg.TUBITV2MLLL_SET1_ACTIV3, 'CROSSIN']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'activ11',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_SET1_ACTIV11, 'NONE'],
                            [Blockly.Msg.TUBITV2MLLL_SET1_ACTIV22, 'RELU'],
                            [Blockly.Msg.TUBITV2MLLL_SET1_ACTIV33, 'CROSSIN']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'Weight1'
                    },
                    {
                        type: 'input_value',
                        name: 'Weight11'
                    },
                    {
                        type: 'input_value',
                        name: 'Loss1'
                    },
                    {
                        type: 'input_value',
                        name: 'Loss11'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2MLLL_set2= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_SET2,
                // message1:'%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'f_NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'alpha'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_randomInit= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_RANDOMINIT,
                // message1:'%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'random',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_RANDOMINIT1, 'SLP'],
                            [Blockly.Msg.TUBITV2MLLL_RANDOMINIT2, 'MLP']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'input_NAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_set00= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_SET00,
                // message1:'%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'f_NAME00'
                    },              
                    {
                        type: 'field_dropdown',
                        name: 'activ00',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_SET00_ACTIV1, 'NONE'],
                            [Blockly.Msg.TUBITV2MLLL_SET00_ACTIV2, 'RELU'],
                            [Blockly.Msg.TUBITV2MLLL_SET00_ACTIV3, 'CROSSIN']
                        ]
                    }                   
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_set11= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_SET11,
                // message1:'%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'f_NAME11'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'activ22',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_SET11_ACTIV1, 'NONE'],
                            [Blockly.Msg.TUBITV2MLLL_SET11_ACTIV2, 'RELU'],
                            [Blockly.Msg.TUBITV2MLLL_SET11_ACTIV3, 'CROSSIN']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'activ33',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_SET11_ACTIV11, 'NONE'],
                            [Blockly.Msg.TUBITV2MLLL_SET11_ACTIV22, 'RELU'],
                            [Blockly.Msg.TUBITV2MLLL_SET11_ACTIV33, 'CROSSIN']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_Trainset= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_TRAINSET,
                // message1:'%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'Train_random',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_TRAINSET1, 'SLP'],
                            [Blockly.Msg.TUBITV2MLLL_TRAINSET2, 'MLP']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'input_NAMEEE'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    {
                        type: 'input_value',
                        name: 'L_rate'
                    },
                    {
                        type: 'input_value',
                        name: 'epoch'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_getWB= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_GETWB,
                // message1:'%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'get_nn',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_GETNN1, 'SLP'],
                            [Blockly.Msg.TUBITV2MLLL_GETNN2, 'MLP']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'get_NAME'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'get_wb',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_GETW0, 'W1'],
                            [Blockly.Msg.TUBITV2MLLL_GETW1, 'W2'],
                            [Blockly.Msg.TUBITV2MLLL_GETB0, 'B1'],
                            [Blockly.Msg.TUBITV2MLLL_GETB1, 'B2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tubitv2MLLL_predition= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2MLLL_PREDITION,
                // message1:'%1',
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'predition_NN',
                        options: [
                            [Blockly.Msg.TUBITV2MLLL_PREDITIONNN1, 'SLP'],
                            [Blockly.Msg.TUBITV2MLLL_PREDITIONNN2, 'MLP'],
                            [Blockly.Msg.TUBITV2MLLL_PREDITIONNN3, 'RNN']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'predition_NAMEEE'
                    },
                    {
                        type: 'input_value',
                        name: 'predition_data'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };


    return Blockly;
}

exports = registerBlocks;
