/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

function registerBlocks (Blockly) {
    
    const colour = '#FF9874';
    const secondaryColour = '#FF9874';

    Blockly.Blocks.tubitv2_espnow_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_espnow_add_peer = { 
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_ADD_PEER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MAC'
                    },
                    {
                        type: 'input_value',
                        name: 'CHANNEL'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2_espnow_device_mac_addr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_DEVICE_MAC_ADDR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };
    
    Blockly.Blocks.tubitv2_espnow_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_SEND,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MAC'
                    },
                    {
                        type: 'input_value',
                        name: 'MSG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2_espnow_broadcast = { 
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_BROADCAST,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MSG'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2_espnow_get_recv_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_GET_RECV_DATA,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.tubitv2_espnow_on_send = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_ON_SEND,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.tubitv2_espnow_on_recv = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_ESPNOW_ON_RECV,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    return Blockly;
}

exports = registerBlocks;
