/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#4CE45F';
    const secondaryColour = '#4CE45F';

    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');

    Blockly.Blocks.tubitv2sonudsensor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2SOUNDSENSOR_INIT,
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

    Blockly.Blocks.tubitv2sonudsensor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2SOUNDSENSOR_READ,
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
                            [Blockly.Msg.TUBITV2SOUNDSENSOR_TYPED, 'digital'],
                            [Blockly.Msg.TUBITV2SOUNDSENSOR_TYPEA, 'analog']
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
