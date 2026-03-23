/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2PID_CATEGORY}" id="TUBITV2PID_CATEGORY" colour="#9fc5e8" secondaryColour="#9fc5e8" iconURI="../external-resources/extensions/pid/assets/pid.png"> 

    <block type="tubitv2pid_create" id="tubitv2pid_create">
    <value name="INPUT">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="INPUT">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="OUTPUT">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="SETPOINT">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="kp">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="ki">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="kd">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    </block>



    <block type="tubitv2pid_set" id="tubitv2pid_set">

    <value name="SampleTime">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="OutputLimits_min">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    <value name="OutputLimits_max">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    </block>
    
    <block type="tubitv2pid_compute" id="tubitv2pid_compute">
    </block>


</category>`;
}

exports = registerToolboxs;
