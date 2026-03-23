/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#59C059';

    Blockly.Blocks.TUBITV2_Array_create = { //建立陣列
        
        init: function () {
            this.jsonInit({
		    message0: Blockly.Msg.TUBITV2_ARRAY_CREATE,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'varset',
                    options: [
                        [Blockly.Msg.TUBITV2_ARRAY_GLOBAL, ' '],
                        [Blockly.Msg.TUBITV2_ARRAY_STATIC, 'static']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'vartype',
                    options: [
                        [Blockly.Msg.TUBITV2_ARRAY_INT, 'int'],
                        [Blockly.Msg.TUBITV2_ARRAY_LONG, 'long'],
                        [Blockly.Msg.TUBITV2_ARRAY_DOUBLE, 'double']
                    ]
                },
                {
                    type: 'input_value',
                    name: 'ARRAYNAME'
                },
                {
                    type: 'input_value',
                    name: 'ARRAYS'
                }
            ],
            
            colour: colour,
            extensions: ['shape_statement']
            });
        }
    };

    /*
    Blockly.Blocks.TUBITV2_ARRAY_create_string = {
        
        init: function () {
            this.jsonInit({
		    message0: Blockly.Msg.TUBITV2_ARRAY_CREATE_STINRG,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'varset',
                    options: [
                        [Blockly.Msg.TUBITV2_ARRAY_GLOBAL, ' '],
                        [Blockly.Msg.TUBITV2_ARRAY_STATIC, 'static']
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
      
      */


    Blockly.Blocks.TUBITV2_Array_set = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_ARRAY_SET,
                args0: [
		       
                    {
                        type: 'input_value',
                        name: 'ARRAYNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'ARRAYPOS'
                    },
                    {
                        type: 'input_value',
                        name: 'ARRAYNU'
                    }
                ],
                
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TUBITV2_Array_read = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_ARRAY_READ,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ARRAYNAME'
                    },
                    {
                        type: 'input_value',
                        name: 'ARRAYPOS'
                    }
                ],
                
                colour: colour,
                extensions: ['output_number']
            });
        }
    };


    Blockly.Blocks.TUBITV2_Array_size = {
        init: function () {
            this.jsonInit({
		message0: Blockly.Msg.TUBITV2_ARRAY_SIZE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ARRAYNAME'
                    }
                ],
                
                colour: colour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
