/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#FF6700';
    const secondaryColour = '#FF6700';

    Blockly.Blocks.tubitv2dtc_setcpr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_SETCPR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'GS'
                    },
                    {
                        type: 'input_value',
                        name: 'PPR'
                    },
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2dtc_setpid= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_SETPID,
                args0: [
                    {
                        type: 'input_value',
                        name: 'P'
                    },
                    {
                        type: 'input_value',
                        name: 'I'
                    },
                    {
                        type: 'input_value',
                        name: 'D'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2dtc_setmotors = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TUBITV2_DTC_SETMOTORS,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'LEFT_MOTOR',
                    options: [
                        [Blockly.Msg.TUBITV2_DTC_M4, '4'],
                        [Blockly.Msg.TUBITV2_DTC_M1, '1'],
                        [Blockly.Msg.TUBITV2_DTC_M2, '2'],
                        [Blockly.Msg.TUBITV2_DTC_M3, '3']
                        
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'LEFT_INV',
                    options: [
                        [Blockly.Msg.TUBIT_BOOL_FALSE, 'false'],
                        [Blockly.Msg.TUBIT_BOOL_TRUE, 'true']
                        ]
                },
                {
                    type: 'field_dropdown',
                    name: 'RIGHT_MOTOR',
                    options: [
                        [Blockly.Msg.TUBITV2_DTC_M3, '3'],
                        [Blockly.Msg.TUBITV2_DTC_M4, '4'],
                        [Blockly.Msg.TUBITV2_DTC_M1, '1'],
                        [Blockly.Msg.TUBITV2_DTC_M2, '2']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'RIGHT_INV',
                    options: [
                        [Blockly.Msg.TUBIT_BOOL_FALSE, 'false'],
                        [Blockly.Msg.TUBIT_BOOL_TRUE, 'true']
                        ]
                }
            ],
            colour: color,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};


Blockly.Blocks.tubitv2dtc_setyrdata= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_SETYRDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'WH'
                    },
                    {
                        type: 'input_value',
                        name: 'WW'
                    },
                    {
                        type: 'input_value',
                        name: 'DW'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        Blockly.Blocks.tubitv2dtc_addyrdata= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_AAYRDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MY'
                    },
                    {
                        type: 'input_value',
                        name: 'MZ'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tubitv2dtc_initir= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_INITIR,
                args0: [
                    {
                        //const int IR_PIN[5] = {32, 35, 34, 39, 36};
                        type: 'field_dropdown',
                        name: 'PINL2',
                        options: [
                            [Blockly.Msg.TUBITV2_PIN32, '32'],
                            [Blockly.Msg.TUBITV2_PIN35, '35'],
                            [Blockly.Msg.TUBITV2_PIN34, '34'],
                            [Blockly.Msg.TUBITV2_PIN39, '39'],
                            [Blockly.Msg.TUBITV2_PIN36, '36'],
                            [Blockly.Msg.TUBITV2_PIN33, '33'],
                            [Blockly.Msg.TUBITV2_PIN23, '23'],
                            [Blockly.Msg.TUBITV2_PIN15, '15'],
                            [Blockly.Msg.TUBITV2_PIN12, '12'],
                            [Blockly.Msg.TUBITV2_PIN5, '5'],
                            [Blockly.Msg.TUBITV2_PIN2, '2'],
                            [Blockly.Msg.TUBITV2_PIN0, '0']
                        ]                   
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PINL1',
                        options: [
                            [Blockly.Msg.TUBITV2_PIN35, '35'],
                            [Blockly.Msg.TUBITV2_PIN34, '34'],
                            [Blockly.Msg.TUBITV2_PIN39, '39'],
                            [Blockly.Msg.TUBITV2_PIN36, '36'],
                            [Blockly.Msg.TUBITV2_PIN33, '33'],
                            [Blockly.Msg.TUBITV2_PIN32, '32'],
                            [Blockly.Msg.TUBITV2_PIN23, '23'],
                            [Blockly.Msg.TUBITV2_PIN15, '15'],
                            [Blockly.Msg.TUBITV2_PIN12, '12'],
                            [Blockly.Msg.TUBITV2_PIN5, '5'],
                            [Blockly.Msg.TUBITV2_PIN2, '2'],
                            [Blockly.Msg.TUBITV2_PIN0, '0']
                        ]                   
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PINM',
                        options: [
                            [Blockly.Msg.TUBITV2_PIN34, '34'],
                            [Blockly.Msg.TUBITV2_PIN39, '39'],
                            [Blockly.Msg.TUBITV2_PIN36, '36'],
                            [Blockly.Msg.TUBITV2_PIN33, '33'],
                            [Blockly.Msg.TUBITV2_PIN32, '32'],
                            [Blockly.Msg.TUBITV2_PIN35, '35'],
                            [Blockly.Msg.TUBITV2_PIN23, '23'],
                            [Blockly.Msg.TUBITV2_PIN15, '15'],
                            [Blockly.Msg.TUBITV2_PIN12, '12'],
                            [Blockly.Msg.TUBITV2_PIN5, '5'],
                            [Blockly.Msg.TUBITV2_PIN2, '2'],
                            [Blockly.Msg.TUBITV2_PIN0, '0']
                        ]                   
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PINR1',
                        options: [
                            [Blockly.Msg.TUBITV2_PIN39, '39'],
                            [Blockly.Msg.TUBITV2_PIN36, '36'],
                            [Blockly.Msg.TUBITV2_PIN33, '33'],
                            [Blockly.Msg.TUBITV2_PIN32, '32'],
                            [Blockly.Msg.TUBITV2_PIN35, '35'],
                            [Blockly.Msg.TUBITV2_PIN34, '34'],
                            [Blockly.Msg.TUBITV2_PIN23, '23'],
                            [Blockly.Msg.TUBITV2_PIN15, '15'],
                            [Blockly.Msg.TUBITV2_PIN12, '12'],
                            [Blockly.Msg.TUBITV2_PIN5, '5'],
                            [Blockly.Msg.TUBITV2_PIN2, '2'],
                            [Blockly.Msg.TUBITV2_PIN0, '0']
                        ]                   
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PINR2',
                        options: [
                            [Blockly.Msg.TUBITV2_PIN36, '36'],
                            [Blockly.Msg.TUBITV2_PIN33, '33'],
                            [Blockly.Msg.TUBITV2_PIN32, '32'],
                            [Blockly.Msg.TUBITV2_PIN35, '35'],
                            [Blockly.Msg.TUBITV2_PIN34, '34'],
                            [Blockly.Msg.TUBITV2_PIN39, '39'],
                            [Blockly.Msg.TUBITV2_PIN23, '23'],
                            [Blockly.Msg.TUBITV2_PIN15, '15'],
                            [Blockly.Msg.TUBITV2_PIN12, '12'],
                            [Blockly.Msg.TUBITV2_PIN5, '5'],
                            [Blockly.Msg.TUBITV2_PIN2, '2'],
                            [Blockly.Msg.TUBITV2_PIN0, '0']
                        ]                   
                    }                 

                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.tubitv2dtc_setirerr= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_SETIRERR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'L2'
                    },
                    {
                        type: 'input_value',
                        name: 'L1'
                    },
                    {
                        type: 'input_value',
                        name: 'M'
                    },
                    {
                        type: 'input_value',
                        name: 'R1'
                    },
                    {
                        type: 'input_value',
                        name: 'R2'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        Blockly.Blocks.tubitv2dtc_readir= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_READIR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PINIR',
                        options: [
                            [Blockly.Msg.TUBITV2_DTC_IRL2, '1'],
                            [Blockly.Msg.TUBITV2_DTC_IRL1, '2'],
                            [Blockly.Msg.TUBITV2_DTC_IRM, '3'],
                            [Blockly.Msg.TUBITV2_DTC_IRR1, '4'],
                            [Blockly.Msg.TUBITV2_DTC_IRR2, '5'],
                        ]                   
                    }          
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

        Blockly.Blocks.tubitv2dtc_readirerr= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_READIRERR,
                args0: [
                    
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    //基礎控制
        Blockly.Blocks.tubitv2dtc_driveVector= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_DRIVEVECTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CONTROL',
                        options: [
                            [Blockly.Msg.TUBITV2_DTC_OP, 'Open'],
                            [Blockly.Msg.TUBITV2_DTC_CL, 'Closed']
                        ]                   
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tubitv2dtc_rlwheel= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_RLWHEEL,
                args0: [
{
                    type: 'field_dropdown',
                    name: 'CONTROL',
                    options: [
                        [Blockly.Msg.TUBITV2_DTC_M1, 'M1'],
                        [Blockly.Msg.TUBITV2_DTC_M2, 'M2'],
                        [Blockly.Msg.TUBITV2_DTC_M3, 'M3'],
                        [Blockly.Msg.TUBITV2_DTC_M4, 'M4']
                    ]
                },
                    {
                        type: 'input_value',
                        name: 'SPD'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    //循跡
    Blockly.Blocks.tubitv2dtc_lineflowinit= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_LINEFLOWINIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'CM'
                    },
                    {
                        type: 'input_value',
                        name: 'VMAX'
                    },
                    {
                        type: 'input_value',
                        name: 'ACC'
                    },
                    {
                        type: 'input_value',
                        name: 'KP'
                    },
                    {
                        type: 'input_value',
                        name: 'KD'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tubitv2dtc_syncmotor= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_SYNCMOTOR,
                args0: [
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.tubitv2dtc_lineflowup= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_LINEFLOWUP,
                args0: [
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tubitv2dtc_lineflowstop= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_LINEFLOWSTOP,
                args0: [
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tubitv2dtc_lineflowisruning= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_LINEFLOWISFRUNING,
                args0: [
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
        Blockly.Blocks.tubitv2dtc_lineflowreaddis= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_LINEFLOWREADDIS,
                args0: [
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    //精準移動
    /*
    Blockly.Blocks.tubitv2dtc_move= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CONTROL',
                        options: [
                            [Blockly.Msg.TUBITV2_DTC_NO, 'SCurve'],
                            [Blockly.Msg.TUBITV2_DTC_LINE, 'SCurve_lineFlow']
                        ]                   
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'VMAX'
                    },
                    {
                        type: 'input_value',
                        name: 'ACC'
                    },
                    {
                        type: 'input_value',
                        name: 'ADD'
                    },
                    {
                        type: 'input_value',
                        name: 'VS'
                    },
                    {
                        type: 'input_value',
                        name: 'VE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };*/
Blockly.Blocks.tubitv2dtc_move = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TUBITV2_DTC_MOVE,
            args0: [
                { type: 'input_value', name: 'Y' },
                { type: 'input_value', name: 'R' },
                { type: 'input_value', name: 'VMAX' },
                { type: 'input_value', name: 'ACC' },
                { type: 'input_value', name: 'ADD' },
                { type: 'input_value', name: 'VS' },
                { type: 'input_value', name: 'VE' }
            ],
            colour: color,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });

    }

};

Blockly.Blocks.tubitv2dtc_move_line = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TUBITV2_DTC_MOVELINE,
            args0: [
                { type: 'input_value', name: 'Y' },
                { type: 'input_value', name: 'R' },
                { type: 'input_value', name: 'VMAX' },
                { type: 'input_value', name: 'ACC' },
                { type: 'input_value', name: 'ADD' },
                { type: 'input_value', name: 'VS' },
                { type: 'input_value', name: 'VE' },
                { type: 'input_value', name: 'KP' },
                { type: 'input_value', name: 'KD' }
            ],
            colour: color,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });

    }

};



    //中斷功能
        Blockly.Blocks.tubitv2dtc_interrset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_INTERRSET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'INTTNAME'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2dtc_interrevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_INTERREVENT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'INTTNAME'
                    }
                ],
                "message1": "%1",
                "args1": [
                    {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2dtc_return = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_RETURNA,
                args0: [
                    {
                        type: 'input_value',
                    name: 'B',
                    check: 'Boolean'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        
    //G BNO055  void DTC_BNO_MOVE_(double x, double y, double z, double nowz);
    
    Blockly.Blocks.tubitv2dtc_bnoturnpid = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_BNOTURNPID,
                args0: [
                    {
                        type: 'input_value',
                        name: 'P'
                    },
                    {
                        type: 'input_value',
                        name: 'I'
                    },
                    {
                        type: 'input_value',
                        name: 'D'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.tubitv2dtc_bnoturn = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_DTC_BNOTURN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
                    },
                    {
                        type: 'input_value',
                        name: 'NDEG'
                    },
                    {
                        type: 'input_value',
                        name: 'VMAX'
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
