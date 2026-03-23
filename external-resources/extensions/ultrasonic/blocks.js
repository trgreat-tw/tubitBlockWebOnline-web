/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#D39DDB';
    const secondaryColour = '#BA55D3';

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    Blockly.Blocks.ultrasonic_readDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ULTRASONIC_READ_DISTANCE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TRIG',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ECHO',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UNIT',
                        options: [
                            ['cm', 'CM'],
                            ['inch', 'INC']]
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
