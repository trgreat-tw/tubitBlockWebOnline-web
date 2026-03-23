/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#FF6700';
    const secondaryColour = '#FF6700';

    Blockly.Blocks.tubitv2mtc_setcpr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_SETCPR,
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

    Blockly.Blocks.tubitv2mtc_setpid= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_SETPID,
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
    Blockly.Blocks.tubitv2mtc_rundeg= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_RUNDEG,
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

    Blockly.Blocks.tubitv2mtc_runxyr= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_RUNXYR,
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

    Blockly.Blocks.tubitv2mtc_runxyrv7rc= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_RUNXYRV7RC,
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

    //---
    Blockly.Blocks.tubitv2mtc_setxyrdata= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_SETXYRDATA,
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
                        name: 'MH'
                    },
                    {
                        type: 'input_value',
                        name: 'MW'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

        Blockly.Blocks.tubitv2mtc_addxyrdata= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_ADDXYRDATA,
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


    Blockly.Blocks.tubitv2mtc_amove= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_AMOVE,
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

    
    Blockly.Blocks.tubitv2mtc_move= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_MOVE,
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

        Blockly.Blocks.tubitv2mtc_amovecurve= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_AMOVECURVE,
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

        Blockly.Blocks.tubitv2mtc_movecurve= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_MOVECURVE,
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
    Blockly.Blocks.tubitv2mtc_setbodydeg = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_SETBODYDEG,
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
        Blockly.Blocks.tubitv2mtc_interrset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_INTERRSET,
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

    Blockly.Blocks.tubitv2mtc_interrevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_INTERREVENT,
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

        Blockly.Blocks.tubitv2mtc_return = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_RETURNA,
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

        
    Blockly.Blocks.tubitv2mtc_interr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_INTERR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2_MTC_X, 'interruptedX()'],
                            [Blockly.Msg.TUBITV2_MTC_Y, 'interruptedY()'],
                            [Blockly.Msg.TUBITV2_MTC_Z, 'interruptedZ()']
                        ]

                        
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    //G BNO055  void MTC_BNO_MOVE_(double x, double y, double z, double nowz);
    
    Blockly.Blocks.tubitv2mtc_bnomove = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_BNOMOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2_MTC_BNON, ''],
                            [Blockly.Msg.TUBITV2_MTC_BNOENC, 'ENC']
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
    Blockly.Blocks.tubitv2mtc_movestartevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_MOVESTARTEVENT,
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

    Blockly.Blocks.tubitv2mtc_moveloopevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_MOVELOOPEVENT,
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


// MTC_GCS_MOVE(double x, double y, double z, double sec, float rkp, double* nowz)
Blockly.Blocks.tubitv2mtc_gcsmove= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_MTC_GCSMOVE,
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
