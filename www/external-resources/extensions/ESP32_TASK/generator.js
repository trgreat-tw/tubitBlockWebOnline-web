/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */


function registerGenerators (Blockly) {
    


    Blockly.Arduino.TUBITTASK_Init = function (block) {
        const Taskname = Blockly.Arduino.valueToCode(block, 'TASKNAMEN', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const core = this.getFieldValue('COREN');
        Blockly.Arduino.definitions_[`TUBITTASK_Init_${Taskname  }`] = `TaskHandle_t ${Taskname};`;
        return`xTaskCreatePinnedToCore( \n      ${Taskname}_USE,     /* Task function. */\n      "${Taskname}_USE",       /* name of task. */\n      10000,         /* Stack size of task */\n      NULL,          /* parameter of the task */\n      1,             /* priority of the task */\n      &${Taskname}, /* Task handle to keep track of created task */\n      ${core});            /* pin task to core 0 */\n`;
    };

    Blockly.Arduino.TUBITTASK_Taskcoderun = function (block) {
        const taskname = Blockly.Arduino.valueToCode(block, 'TASKNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTASK');
        let module_definitions = `void ${taskname}_USE(void *pvParameters)\n{\n`;
        module_definitions += branch;
        module_definitions += "}\n";
        Blockly.Arduino.definitions_[`TUBITTASK_Taskcode_${taskname }`] = module_definitions;
        return '';
    };

    



    return Blockly;
}

exports = registerGenerators;
