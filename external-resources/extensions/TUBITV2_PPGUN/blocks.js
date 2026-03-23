/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#348feb';
    const secondaryColour = '#348feb';

    Blockly.Blocks.tubitv2ppgun_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PPGUN_INIT, // 顯示名稱: 初始化旋轉馬達 腳位 抬頭馬達 腳位 發射馬達 腳位
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
                            [Blockly.Msg.TUBITV2SM_1, 'S1'],
                            [Blockly.Msg.TUBITV2SM_0, 'S0'],
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
                        name: 'SHOOT',
                        options: [
                            [Blockly.Msg.TUBITV2SM_2, 'S2'],
                            [Blockly.Msg.TUBITV2SM_0, 'S0'],
                            [Blockly.Msg.TUBITV2SM_1, 'S1'],
                            [Blockly.Msg.TUBITV2SM_3, 'S3'],
                            [Blockly.Msg.TUBITV2SM_4, 'S4'],
                            [Blockly.Msg.TUBITV2SM_5, 'S5'],
                            [Blockly.Msg.TUBITV2SM_6, 'S6'],
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

    
    Blockly.Blocks.tubitv2ppgun_launch = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PPGUN_LAUNCH,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2ppgun_trcontroladd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PPGUN_TRCONTROLADD,
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
    
    Blockly.Blocks.tubitv2ppgun_udcontroladd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PPGUN_UDCONTROLADD,
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



    Blockly.Blocks.tubitv2ppgun_trcontrol = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PPGUN_TRCONTROL,
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
    
    Blockly.Blocks.tubitv2ppgun_udcontrol = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2PPGUN_UDCONTROL,
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
