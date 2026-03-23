/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_SERVOMOTOR_CATEGORY}" id="TUBITV2_SERVOMOTOR_CATEGORY" colour="#BA324F" secondaryColour="#BA324F" iconURI="../external-resources/extensions/TUBITV2_SERVOMOTOR/assets/TUBITV2.jpg">
    
    <block type="tubitv2servomotor_run" id="tubitv2servomotor_run">
        
        <value name="DEG">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2servomotor_ms" id="tubitv2servomotor_ms">
        
    <value name="MS">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>

    
    
</category>`;
}

exports = registerToolboxs;
