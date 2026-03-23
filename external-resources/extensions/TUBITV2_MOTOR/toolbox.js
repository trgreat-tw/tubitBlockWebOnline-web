/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
    <category name="%{BKY_TUBITV2_MOTOR_CATEGORY}" id="TUBITV2_MOTOR_CATEGORY" colour="#FF6700" secondaryColour="#FF6700" iconURI="../external-resources/extensions/TUBITV2_MOTOR/assets/TUBITV2.jpg">

    <block type="tubitv2motor_run" id="tubitv2motor_run">
        
        <value name="SPEED">
            <shadow type="math_int9_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2motor_allrun" id="tubitv2motor_allrun">
        
    <value name="M1S">
        <shadow type="math_int9_number">
            <field name="NUM">0</field>
        </shadow>
    </value>

    <value name="M2S">
        <shadow type="math_int9_number">
            <field name="NUM">0</field>
        </shadow>
    </value>   
    <value name="M3S">
        <shadow type="math_int9_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="M4S">
        <shadow type="math_int9_number">
            <field name="NUM">0</field>
        </shadow>
    </value>    
    </block>

    <block type="tubitv2motor_stopm" id="tubitv2motor_stopm">
    </block>
    <sep gap="36"/>
      <label text="%{BKY_TUBITV2_MOTOR_ENC}" />
    <block type="tubitv2motor_readenc" id="tubitv2motor_readenc">
    </block>

    <block type="tubitv2motor_setenc" id="tubitv2motor_setenc">
        
    <value name="ENCODER">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>
    
</category>`;
}

exports = registerToolboxs;
