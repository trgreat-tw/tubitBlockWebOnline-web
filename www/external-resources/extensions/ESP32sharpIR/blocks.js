/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#9F0050';
    const secondaryColour = '#820041';

    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');

    Blockly.Blocks.sharpIR_inita = {
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
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sharpIR_readDistancea = {
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
