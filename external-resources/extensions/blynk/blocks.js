/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#529955';
    const secondaryColour = '#457F48';

    Blockly.Blocks.tubitv2blynk_template = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_TEMPLATE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEMPLATE_ID'
                    },
                    {
                        type: 'input_value',
                        name: 'TEMPLATE_NAME'
                    },
                    {
                        type: 'input_value',
                        name: 'AUTH_TOKEN'
                    },
                    {
                        type: 'input_value',
                        name: 'WIFI_SSID'
                    },                    
                    {
                        type: 'input_value',
                        name: 'WIFI_PASS'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_timerevent = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_TIMEREVENT,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_onconnected = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_ONCONNECTED,
                "message1": "%1",
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_write = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_WRITE,
                "message1": "%1",
                args0: [{
                    type: 'input_value',
                    name: 'VPIN'
                }],
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_virtualwrite = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_VIRTUALWRITE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VPIN'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                "args1": [{
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_BEGIN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'INTERVAL'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_RUN,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2blynk_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2BLYNK_PARAM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'typeset',
                        options: [
                            [Blockly.Msg.TUBITV2BLYNK_PARAM_I, '.asInt()'],
                            [Blockly.Msg.TUBITV2BLYNK_PARAM_D, '.asDouble()'],
                            [Blockly.Msg.TUBITV2BLYNK_PARAM_F, '.asFloat()'],
                            [Blockly.Msg.TUBITV2BLYNK_PARAM_S, '.asStr()']
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
