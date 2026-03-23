/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#59C059';

    Blockly.Blocks.TUBITV2_variable_substring = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_VARIABLE_SUBSTRING,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STR'
                    },
                    {
                        type: 'input_value',
                        name: 'FROM'
                    }
                ],
                colour: colour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.TUBITV2_variable_substring2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_VARIABLE_SUBSTRING2,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STR'
                    },
                    {
                        type: 'input_value',
                        name: 'FROM'
                    },
                    {
                        type: 'input_value',
                        name: 'TO'
                    }
                ],
                colour: colour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.TUBITV2_variable_str2type = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2_VARIABLE_STR2TYPE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'STR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TO_TYPE',
                        options: [
                            [Blockly.Msg.TUBITV2_VARIABLE_TOINT, 'Int'],
                            [Blockly.Msg.TUBITV2_VARIABLE_TODOUBLE, 'Double']
                        ]
                    }
                ],
                colour: colour,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.TUBITV2_variable_create = {
        
        init: function () {
            this.jsonInit({
		    message0: Blockly.Msg.TUBITV2_VARIABLE_CREATE,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'varset',
                    options: [
                        [Blockly.Msg.TUBITV2_VARIABLE_GLOBAL, ' '],
                        [Blockly.Msg.TUBITV2_VARIABLE_STATIC, 'static']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'vartype',
                    options: [
                        [Blockly.Msg.TUBITV2_VARIABLE_INT, 'int'],
                        [Blockly.Msg.TUBITV2_VARIABLE_LONG, 'long'],
                        [Blockly.Msg.TUBITV2_VARIABLE_DOUBLE, 'double']
                    ]
                },
                {
                    type: 'input_value',
                    name: 'VARNAME'
                },
                {
                    type: 'input_value',
                    name: 'VARN'
                }
            ],
            
            colour: colour,
            extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TUBITV2_variable_create_string = {
        
        init: function () {
            this.jsonInit({
		    message0: Blockly.Msg.TUBITV2_VARIABLE_CREATE_STINRG,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'varset',
                    options: [
                        [Blockly.Msg.TUBITV2_VARIABLE_GLOBAL, ' '],
                        [Blockly.Msg.TUBITV2_VARIABLE_STATIC, 'static']
                    ]
                },
                {
                    type: 'input_value',
                    name: 'VARNAME'
                },
                {
                    type: 'input_value',
                    name: 'VARN'
                }
            ],
            
            colour: colour,
            extensions: ['shape_statement']
            });
        }
    };

    /*
    Blockly.Blocks['example_block'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("Choose variable")
              .appendField(new Blockly.FieldVariable("default_var"), "VAR");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");

          this.jsonInit({
                    colour: colour,
                    extensions: ['output_number']
                });
            }
        }
      
      */


    Blockly.Blocks.TUBITV2_variable_read = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_VARIABLE_READ,
                args0: [
		       
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    }
                ],
                
                colour: colour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.TUBITV2_variable_unboxing = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_VARIABLE_UNBOXING,
                args0: [
			{
                        type: 'field_dropdown',
                        name: 'vartype',
                        options: [
                            [Blockly.Msg.TUBITV2_VARIABLE_INT, 'int'],
                            [Blockly.Msg.TUBITV2_VARIABLE_LONG, 'long'],
                            [Blockly.Msg.TUBITV2_VARIABLE_DOUBLE, 'double'],
                            [Blockly.Msg.TUBITV2_VARIABLE_STRING, 'String']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    }
                ],
                
                colour: colour,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.TUBITV2_variable_set = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_VARIABLE_SET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'VARN'
                    }
                ],
                
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TUBITV2_variable_change = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_VARIABLE_CHANGE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'VARN'
                    }
                ],
                
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
