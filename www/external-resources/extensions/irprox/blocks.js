/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#CE0135';
    const secondaryColour = '#CE0135';

    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');

    Blockly.Blocks.tubitv2irprox_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2IRPROX_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                        
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2irprox_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2IRPROX_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                        
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2IRPROX_TYPED, 'digital'],
                            [Blockly.Msg.TUBITV2IRPROX_TYPEA, 'analog']
                        ]

                        
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
