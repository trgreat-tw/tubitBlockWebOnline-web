/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2PPGUN_CATEGORY}" id="TUBITV2PPGUN_CATEGORY" colour="#348feb" secondaryColour="#348feb" iconURI="../external-resources/extensions/TUBITV2_PPGUN/assets/ppgun.png">

    <block type="tubitv2ppgun_init" id="tubitv2ppgun_init">
    </block>

    <block type="tubitv2ppgun_launch" id="tubitv2ppgun_launch">
    </block>    

    
    <sep gap="36"/>
    <label text="%{BKY_PPGUN_DEGADD}" />

    <block type="tubitv2ppgun_trcontroladd" id="tubitv2ppgun_trcontroladd">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
        </value>
    </block>

    <block type="tubitv2ppgun_udcontroladd" id="tubitv2ppgun_udcontroladd">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
        </value>
    </block>

        <sep gap="36"/>
    <label text="%{BKY_PPGUN_DEGSET}" />

    <block type="tubitv2ppgun_trcontrol" id="tubitv2ppgun_trcontrol">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
        </value>

        <value name="TIME">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
        </value>
    </block>

    <block type="tubitv2ppgun_udcontrol" id="tubitv2ppgun_udcontrol">
        <value name="DEG">
        <shadow type="math_number">
            <field name="NUM">5</field>
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
