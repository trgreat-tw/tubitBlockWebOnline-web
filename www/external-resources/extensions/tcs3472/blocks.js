/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#E1AFD1';
    const secondaryColour = '#E1AFD1';

       const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.tubitv2tcs3472_set= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2TCS3472_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LEDPIN',
                         options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.tubitv2tcs3472_readcolor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2TCS3472_READCOLOR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2tcs3472_readrgb= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2TCS3472_READRGB,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'RGB',
                        options: [
                            [Blockly.Msg.TUBITV2TCS3472_R, '0'],
                            [Blockly.Msg.TUBITV2TCS3472_G, '1'],
                            [Blockly.Msg.TUBITV2TCS3472_B, '2']]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.tubitv2tcs3472_readlux = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2TCS3472_READLUX,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.tubitv2tcs3472_setlight= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2TCS3472_SETLIGHT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'LIGHT'
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
