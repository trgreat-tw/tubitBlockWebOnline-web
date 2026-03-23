/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2ATARM_CATEGORY}" id="TUBITV2ATARM_CATEGORY" colour="#4CAF50" secondaryColour="#4CAF50" iconURI="../external-resources/extensions/TUBITV2_ATARM/assets/atarm.png">

    <block type="tubitv2atarm_init" id="tubitv2atarm_init">
    </block>

    <sep gap="36"/>
    <label text="%{BKY_TUBITV2ATARM_SET}" />

    <block type="tubitv2atarm_clawset" id="tubitv2atarm_clawset">
            <value name="CLAWOPDEG">
        <shadow type="math_number">
            <field name="NUM">60</field>
        </shadow>
        </value>

                <value name="CLAWCLDEG">
        <shadow type="math_number">
            <field name="NUM">160</field>
        </shadow>
        </value>
    </block>    

        <block type="tubitv2atarm_liftset" id="tubitv2atarm_liftset">
            <value name="ATADWDEG">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
        </value>

                <value name="ATAUPDEG">
        <shadow type="math_number">
            <field name="NUM">65</field>
        </shadow>
        </value>
    </block>   
        <block type="tubitv2atarm_panset" id="tubitv2atarm_panset">
            <value name="PANDWDEG">
        <shadow type="math_number">
            <field name="NUM">55</field>
        </shadow>
        </value>

                <value name="PANUPDEG">
        <shadow type="math_number">
            <field name="NUM">125</field>
        </shadow>
        </value>
    </block>   
    <sep gap="36"/>
    <label text="%{BKY_ATARM_CLAW}" />
    
    <block type="tubitv2atarm_claw" id="tubitv2atarm_claw">
    <value name="TIME">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
        </value>
    </block> 
    
    <sep gap="36"/>
    <label text="%{BKY_ATARM_DEGADD}" />

    <block type="tubitv2atarm_trcontroladd" id="tubitv2atarm_trcontroladd">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
        </value>
    </block>

    <block type="tubitv2atarm_udcontroladd" id="tubitv2atarm_udcontroladd">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
        </value>
    </block>

        <sep gap="36"/>
    <label text="%{BKY_ATARM_DEGSET}" />

    <block type="tubitv2atarm_trcontrol" id="tubitv2atarm_trcontrol">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">90</field>
        </shadow>
        </value>

        <value name="TIME">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
        </value>
    </block>

    <block type="tubitv2atarm_udcontrol" id="tubitv2atarm_udcontrol">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
        </value>

        <value name="TIME">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
        </value>
    </block>

</category>`;
}

exports = registerToolboxs;
