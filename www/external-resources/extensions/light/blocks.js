/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#E3BF3A';
    const secondaryColour = '#E3BF3A';

    Blockly.Blocks.tubitv2lightsensor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2LIGHTSENSOR_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2lightsensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2LIGHTSENSOR_READ,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
