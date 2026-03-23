/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#0768eb';
    const secondaryColour = '#0768eb';

    const analogPins = Blockly.Device.getPinOptions('arduino_pin_readAnalogPin');

    Blockly.Blocks.sensorarmor_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENSINGARMOR_INIT,
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

    Blockly.Blocks.sensorarmor_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENSINGARMOR_READ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                        
                    }
                ],    
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sensorarmor_setrange = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENSINGARMOR_SETRANGE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    },
                    {
                        type: 'input_value',
                        name: 'RANGEV'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sensorarmor_readppstrike= {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENSINGARMOR_READPPSTRIKE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                        
                    }
                ],    
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
