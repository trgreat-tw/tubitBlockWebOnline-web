/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#4C97FF';
    const secondaryColour = '#4C97FF';

    Blockly.Blocks.tubitv2bno055_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BNO055_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2bno055_oiu = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BNO055_OIU,
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

    Blockly.Blocks.tubitv2bno055_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BNO055_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2BNO055_X, 'orientationX'],
                            [Blockly.Msg.TUBITV2BNO055_Y, 'orientationY'],
                            [Blockly.Msg.TUBITV2BNO055_Z, 'orientationZ']
                        ]

                        
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
