/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#C0C0C0';
    const secondaryColour = '#C0C0C0';

    Blockly.Blocks.tubitv2v7rc_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODESET',
                        options: [
                            [Blockly.Msg.TUBITV2V7RC_BLE, 'BT'],
                            [Blockly.Msg.TUBITV2V7RC_WIFI, 'WIFI']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2v7rc_bleset= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_BLESET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BLENAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2v7rc_wifiset= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_WIFISET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PSD'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CHANNEL',
                        options: [
                            [Blockly.Msg.TUBITV2V7RC_C1, '1'],
                            [Blockly.Msg.TUBITV2V7RC_C2, '2'],
                            [Blockly.Msg.TUBITV2V7RC_C3, '3'],
                            [Blockly.Msg.TUBITV2V7RC_C4, '4'],
                            [Blockly.Msg.TUBITV2V7RC_C5, '5'],
                            [Blockly.Msg.TUBITV2V7RC_C6, '6'],
                            [Blockly.Msg.TUBITV2V7RC_C7, '7'],
                            [Blockly.Msg.TUBITV2V7RC_C8, '8'],
                            [Blockly.Msg.TUBITV2V7RC_C9, '9'],
                            [Blockly.Msg.TUBITV2V7RC_C10, '10'],
                            [Blockly.Msg.TUBITV2V7RC_C11, '11'],
                            [Blockly.Msg.TUBITV2V7RC_C12, '12'],
                            [Blockly.Msg.TUBITV2V7RC_C13, '13']
                          ]
                    }


                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.tubitv2v7rc_Connect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_CONNECT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    //GAME ADV 模式基礎功能
    Blockly.Blocks.tubitv2v7rc_ADVXY = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_advxy,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DATA',
                        options: [
                            [Blockly.Msg.TUBITV2V7RC_DATAX, '1'],
                            [Blockly.Msg.TUBITV2V7RC_DATAY, '2']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

        Blockly.Blocks.tubitv2v7rc_ADVBUT = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_advbut,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DATA',
                        options: [
                            [Blockly.Msg.TUBITV2V7RC_U, '1'],
                            [Blockly.Msg.TUBITV2V7RC_D, '2'],
                            [Blockly.Msg.TUBITV2V7RC_L, '3'],
                            [Blockly.Msg.TUBITV2V7RC_R, '4'],
                            [Blockly.Msg.TUBITV2V7RC_UL, '5'],
                            [Blockly.Msg.TUBITV2V7RC_DL, '6'],
                            [Blockly.Msg.TUBITV2V7RC_UR, '7'],
                            [Blockly.Msg.TUBITV2V7RC_DR, '8']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };


    //以下進階功能

    Blockly.Blocks.tubitv2v7rc_readalldata = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_READALLDATA,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    
    Blockly.Blocks.tubitv2v7rc_mode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_MODE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MODE'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.tubitv2v7rc_readdata = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2V7RC_READDATA,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DATA',
                        options: [
                            [Blockly.Msg.TUBITV2V7RC_DATA1, '1'],
                            [Blockly.Msg.TUBITV2V7RC_DATA2, '2'],
                            [Blockly.Msg.TUBITV2V7RC_DATA3, '3'],
                            [Blockly.Msg.TUBITV2V7RC_DATA4, '4']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = registerBlocks;
