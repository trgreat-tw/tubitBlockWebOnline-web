/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITTASK_CATEGORY}" id="TUBITTASK_CATEGORY" colour="#59C059" secondaryColour="#59C059" iconURI="../external-resources/extensions/ESP32_TASK/assets/task.png">
    

    <block type="TUBITTASK_Init" id="TUBITTASK_Init">
    <value name="TASKNAMEN">
        <shadow type="text">
        <field name="TEXT">Task1code</field>
        </shadow>
    </value>
    </block>

    <block type="TUBITTASK_Taskcoderun" id="TUBITTASK_Taskcoderun">
        <value name="TASKNAME">
        <shadow type="text">
            <field name="TEXT">Task1code</field>
        </shadow>
        </value>

    </block>
   

</category>`;
}

exports = registerToolboxs;
