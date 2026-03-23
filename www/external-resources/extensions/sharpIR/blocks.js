/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#9F0050';
    const secondaryColour = '#820041';

    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');

    Blockly.Blocks.sharpIR_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHARPIR_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODEL',
                        options: [
                            ['GP2Y0A21YK0F', 'GP2Y0A21YK0F'],
                            ['GP2Y0A02YK0F', 'GP2Y0A02YK0F'],
                            ['GP2Y0A710K0F', 'GP2Y0A710K0F']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sharpIR_readDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHARPIR_READDISTANCE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
