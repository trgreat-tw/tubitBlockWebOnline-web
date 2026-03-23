/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2LIGHTSENSOR_CATEGORY}" id="TUBITV2LIGHTSENSOR_CATEGORY" colour="#E3BF3A" secondaryColour="#E3BF3A" iconURI="../external-resources/extensions/light/assets/tubitv2lightsensor.png">
    
    <block type="tubitv2lightsensor_init" id="tubitv2lightsensor_init">
        <value name="PIN">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2lightsensor_read" id="tubitv2lightsensor_read"></block>

</category>`;
}

exports = registerToolboxs;
