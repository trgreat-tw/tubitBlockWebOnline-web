/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#16A07A';

    Blockly.Blocks.tubitv2_button = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_BUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TUBIT_BUTTON',
                        options: [
                            [Blockly.Msg.TUBITV2_BUTTON_A, 'Button_A'],
                            [Blockly.Msg.TUBITV2_BUTTON_B, 'Button_B']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };


        Blockly.Blocks.tubitv2_buttonts = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_BUTTONTS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TUBIT_BUTTON',
                        options: [
                            [Blockly.Msg.TUBITV2_BUTTON_A, 'Button_A'],
                            [Blockly.Msg.TUBITV2_BUTTON_B, 'Button_B']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TUBIT_BUTTONTS',
                        options: [
                            [Blockly.Msg.TUBITV2_BUTTON_TSA, 'true'],
                            [Blockly.Msg.TUBITV2_BUTTON_TSB, 'false']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
