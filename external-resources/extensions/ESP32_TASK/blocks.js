/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#59C059';

    Blockly.Blocks.TUBITTASK_Init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITTASK_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TASKNAMEN'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COREN',
                        options: [
                            [Blockly.Msg.TUBITV2_CORE0, '0'],
                            [Blockly.Msg.TUBITV2_CORE1, '1']
                        ]
                    }
                ],
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TUBITTASK_Taskcoderun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITTASKCODERUN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TASKNAME'
                    },
                    {
                        type: "input_statement",
                        name: "SUBSTASK"
                }],
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
