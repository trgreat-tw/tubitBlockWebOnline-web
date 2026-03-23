/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#BB5E00';
    const secondaryColour = '#9F5000';

    const digitalPins = Blockly.Device.getPinOptions('arduino_pin_setDigitalOutput');

    Blockly.Blocks.irRemoteReceiver_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRREMOTERECEIVER_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins

                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.irRemoteReceiver_dataAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRREMOTERECEIVER_DATAAVAILABLE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.irRemoteReceiver_recivedCommand = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRREMOTERECEIVER_RECIVEDCOMMAND,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.irRemoteReceiver_resume = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRREMOTERECEIVER_RESUME,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
