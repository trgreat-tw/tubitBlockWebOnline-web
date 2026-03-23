/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_SHARPIR_CATEGORY}" id="SHARPIR_CATEGORY" colour="#9F0050" secondaryColour="#820041" iconURI="../external-resources/extensions/ESP32sharpIR/assets/sharpIR.png">
    <block type="sharpIR_inita" id="sharpIR_inita">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sharpIR_readDistancea" id="sharpIR_readDistancea">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
