/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_SENSORARMOR_CATEGORY}" id="SENSORARMOR_CATEGORY" colour="#0768eb" secondaryColour="#0768eb" iconURI="../external-resources/extensions/sensingarmor/assets/sensorarmor.png">
    
    <block type="sensorarmor_init" id="sensorarmor_init"></block>
    <sep gap="36"/>
    <block type="sensorarmor_read" id="sensorarmor_read"></block>
    <block type="sensorarmor_setrange" id="sensorarmor_setrange">
     <value name="RANGEV">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
    </block>
    
    <block type="sensorarmor_readppstrike" id="sensorarmor_readppstrike"></block>
    
</category>`;
}

exports = registerToolboxs;
