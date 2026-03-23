/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#ffbf00';
    const secondaryColour = '#ffbf00';

    Blockly.Blocks.tubitv2_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_SET,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
