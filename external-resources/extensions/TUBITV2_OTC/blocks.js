/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#FF6700';
    const secondaryColour = '#FF6700';

    Blockly.Blocks.tubitv2otc_setcpr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_SETCPR,
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

    Blockly.Blocks.tubitv2otc_setpid= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_SETPID,
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
    Blockly.Blocks.tubitv2otc_rundeg= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_RUNDEG,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
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

    Blockly.Blocks.tubitv2otc_runxyr= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_RUNXYR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
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

    Blockly.Blocks.tubitv2otc_setxyrdata= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_SETXYRDATA,
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
                        name: 'OL'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        Blockly.Blocks.tubitv2otc_addxyrdata= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_ADDXYRDATA,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MX'
                    },
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

        Blockly.Blocks.tubitv2otc_runxyrv7rc= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_RUNXYRV7RC,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'LR',
                        check: 'Boolean'
                    },
                    {
                        type: 'input_value',
                        name: 'RR',
                        check: 'Boolean'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2otc_amove= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_AMOVE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
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
                        name: 'VM'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    }                    

                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    
    Blockly.Blocks.tubitv2otc_move= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_MOVE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
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
                        name: 'VM'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    },
                    {
                        type: 'input_value',
                        name: 'AD'
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
    };

        Blockly.Blocks.tubitv2otc_amovecurve= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_AMOVECURVE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
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
                        name: 'BULGE'
                    },
                    {
                        type: 'input_value',
                        name: 'VM'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    }                    

                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        Blockly.Blocks.tubitv2otc_movecurve= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_MOVECURVE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
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
                        name: 'BULGE'
                    },
                    {
                        type: 'input_value',
                        name: 'VM'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    },
                    {
                        type: 'input_value',
                        name: 'AD'
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
    };
    //設定自身角度
    Blockly.Blocks.tubitv2otc_setbodydeg = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_SETBODYDEG,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DEG'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    //中斷功能
        Blockly.Blocks.tubitv2otc_interrset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_INTERRSET,
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

    Blockly.Blocks.tubitv2otc_interrevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_INTERREVENT,
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

        Blockly.Blocks.tubitv2otc_return = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_RETURNA,
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

        
    Blockly.Blocks.tubitv2otc_interr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_INTERR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2_OTC_X, 'interruptedX()'],
                            [Blockly.Msg.TUBITV2_OTC_Y, 'interruptedY()'],
                            [Blockly.Msg.TUBITV2_OTC_Z, 'interruptedZ()']
                        ]

                        
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    //G BNO055  void OTC_BNO_MOVE_(double x, double y, double z, double nowz);
    
    Blockly.Blocks.tubitv2otc_bnomove = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_BNOMOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2_OTC_BNON, ''],
                            [Blockly.Msg.TUBITV2_OTC_BNOENC, 'ENC']
                        ]
                        
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'NOWZ'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


//移動控制時間

/*
    Blockly.Blocks.tubitv2otc_movestartevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_MOVESTARTEVENT,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2otc_moveloopevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_MOVELOOPEVENT,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


// OTC_GCS_MOVE(double x, double y, double z, double sec, float rkp, double* nowz)
Blockly.Blocks.tubitv2otc_gcsmove= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OTC_GCSMOVE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'SEC'
                    },
                    {
                        type: 'input_value',
                        name: 'RKP'
                    },
                    {
                        type: 'input_value',
                        name: 'NOWZ'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
*/



    return Blockly;
}

exports = registerBlocks;
