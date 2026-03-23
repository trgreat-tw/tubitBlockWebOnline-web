/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {

    return `
<category name="%{BKY_ARDUINODEVICEDEMO_CATEGORY}" id="ARDUINODEVICEDEMO_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="../external-resources/extensions/arduinoDeviceDemo/">
    <block type="deviceDemo_button"></block>
    <block type="deviceDemo_ultrasonic"></block>
    <block type="deviceDemo_rgb">
        <value name="ALL">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="POS">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>
`;

}

exports = registerToolboxs;
