/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#BA324F';
    const secondaryColour = '#BA324F';

    Blockly.Blocks.tubitv2servomotor_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_SERVOMOTOR_RUN,
                args0: [
                     {
                        type: 'field_dropdown',
                        name: 'SMOTOR',
                        options: [
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S0, 'S0'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S1, 'S1'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S2, 'S2'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S3, 'S3'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S4, 'S4'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S5, 'S5'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S6, 'S6'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S7, 'S7']]
                    },
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
        }
        
        Blockly.Blocks.tubitv2servomotor_ms = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.TUBITV2_SERVOMOTOR_MS,
                    args0: [
                         {
                            type: 'field_dropdown',
                            name: 'SMOTOR',
                            options: [
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S0, 'S0'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S1, 'S1'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S2, 'S2'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S3, 'S3'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S4, 'S4'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S5, 'S5'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S6, 'S6'],
                            [Blockly.Msg.TUBITV2_SERVOMOTOR_S7, 'S7']]
                        },
                        {
                            type: 'input_value',
                            name: 'MS'
                        }
                    ],
                    colour: color,
                    secondaryColour: secondaryColour,
                    extensions: ['shape_statement']
                });
            }
            }
    
    return Blockly;
}

exports = registerBlocks;
