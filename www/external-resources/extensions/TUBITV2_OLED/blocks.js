/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function registerBlocks (Blockly) {
    const colour = '#3A6EA5';
    const secondaryColour = '#3A6EA5';

    Blockly.Blocks.tubitv2_oled_start = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_START,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_update = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_UPDATE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* --- DRAW SHAPE --- */

    Blockly.Blocks.tubitv2_oled_drawrline = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DRAWRLINE,
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
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_drawaxisalignedline = {
            init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DRAWAXISALIGNEDLINE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'IS_VERTICAL',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_VERTICAL, 'VERTICAL'],
                            [Blockly.Msg.TUBITV2_OLED_HORIZONTAL, 'HORIZONTAL']
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
                        name: 'LENGTH'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_drawrectangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DRAWRECTANGLE,
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
                        name: 'WIDTH'
                    },
                    {
                        type: 'input_value',
                        name: 'HEIGHT'
                    },
                    {
                        type: 'input_value',
                        name: 'CORNER_RADIUS'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IS_FILLED',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_FILLED, 'FILLED'],
                            [Blockly.Msg.TUBITV2_OLED_HOLLOW, 'HOLLOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2_oled_drawrcircle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DRAWRCIRCLE,
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
                        name: 'RADIUS'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IS_FILLED',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_FILLED, 'FILLED'],
                            [Blockly.Msg.TUBITV2_OLED_HOLLOW, 'HOLLOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_drawrtriangle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DRAWRTRIANGLE,
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
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'input_value',
                        name: 'X2'
                    },
                    {
                        type: 'input_value',
                        name: 'Y2'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IS_FILLED',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_FILLED, 'FILLED'],
                            [Blockly.Msg.TUBITV2_OLED_HOLLOW, 'HOLLOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* --- DRAW STRING --- */

    Blockly.Blocks.tubitv2_oled_font = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_FONT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FONT',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_CHINESE, 'u8g2_font_unifont_t_chinese1'],
                            [Blockly.Msg.TUBITV2_OLED_EN, '']
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
                        name: 'STRING'
                    },
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* --- ANIMATION --- */

    Blockly.Blocks.tubitv2_oled_anim_draw_eyes ={
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_ANIMDRAWEYES,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'UPDATE',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_ANIMUPDATE, 'TRUE'],
                            [Blockly.Msg.TUBITV2_OLED_ANIMDONTUPDATE, 'FALSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_anim_reset_eyes ={
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_ANIMRESETEYES,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'UPDATE',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_ANIMUPDATE, 'TRUE'],
                            [Blockly.Msg.TUBITV2_OLED_ANIMDONTUPDATE, 'FALSE']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_anim_blink ={
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_ANIMBLINK,
                args0: [
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

    Blockly.Blocks.tubitv2_oled_anim_move_big_eye ={
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_ANIMMOVEBIGEYE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_RIGHT, '-1'],
                            [Blockly.Msg.TUBITV2_OLED_LEFT, '1']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_anim_saccade ={
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_ANIMSACCADE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION_X',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_RIGHT, '-1'],
                            [Blockly.Msg.TUBITV2_OLED_LEFT, '1']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION_Y',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_UP, '-1'],
                            [Blockly.Msg.TUBITV2_OLED_DOWN, '1']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

Blockly.Blocks.tubitv2_oled_anim_launch_animation_with_index = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.TUBITV2_OLED_ANIMLAUNCHANIMATIONWITHINDEX,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'ANIM_INDEX',
                    options: [
                        [Blockly.Msg.TUBITV2_OLED_WAKEUP, '0'],            // case 0: wakeup()
                        [Blockly.Msg.TUBITV2_OLED_RESETEYE, '1'],         // case 1: reset_eyes(true)
                        [Blockly.Msg.TUBITV2_OLED_MBE_RIGHT, '2'],        // case 2: move_big_eye(1)
                        [Blockly.Msg.TUBITV2_OLED_MBE_LEFT, '3'],         // case 3: move_big_eye(-1)
                        [Blockly.Msg.TUBITV2_OLED_BLINK_WAIT, '4'],       // case 4: blink(12); delay(1000)
                        [Blockly.Msg.TUBITV2_OLED_HAPPY, '5'],            // case 5: happy_eye()
                        [Blockly.Msg.TUBITV2_OLED_BLINK, '6'],            // case 6: blink(12)
                        [Blockly.Msg.TUBITV2_OLED_LEFTWINK, '7'],         // case 7: leftwink_eye()
                        [Blockly.Msg.TUBITV2_OLED_ANGRY, '8'],            // case 8: angry_eye()
                        [Blockly.Msg.TUBITV2_OLED_SACCADE, '9']           // case 9: saccade 隨機眼球晃動
                    ]
                }
            ],
            colour: colour,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};


    /* Chart */

    Blockly.Blocks.tubitv2_oled_draw_chart ={
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DRAWCHART,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CHART_TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_CHART_LINE, 'CHART_LINE'],
                            [Blockly.Msg.TUBITV2_OLED_CHART_BAR, 'CHART_BAR']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            [Blockly.Msg.TUBITV2_OLED_RIGHT, 'DIR_RIGHT_TO_LEFT'],
                            [Blockly.Msg.TUBITV2_OLED_LEFT, 'DIR_LEFT_TO_RIGHT']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* Bitmap */
    Blockly.Blocks.tubitv2_oled_matrix = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_MATRIX,
                args0: [
                    {
                        type: 'field_matrix',
                        name: 'MATRIX',
                        width: 14,
                        height: 7
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_createimage= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_CREATEIMAGE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'IMAGENAME'
                    },
                    {
                        type: 'input_value',
                        name: 'BMPDATA'
                    }
            
            ],
            colour: colour,
            secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_oled_displayimage = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_OLED_DISPLAYIMAGE,
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
                        name: 'W'
                    },
                    {
                        type: 'input_value',
                        name: 'H'
                    },
                    {
                    type: 'input_value',
                    name: 'IMAGENAME'
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
