/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_ARRAY_CATEGORY}" id="TUBITV2_ARRAY_CATEGORY" colour="#59C059" secondaryColour="#59C059" iconURI="../external-resources/extensions/array/assets/TUBITV2.jpg">
    

    <block type="TUBITV2_Array_create" id="TUBITV2_Array_create">
        <value name="ARRAYNAME">
        <shadow type="text">
            <field name="TEXT">array1</field>
        </shadow>
        </value>

        <value name="ARRAYS">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>

    </block>

    <block type="TUBITV2_Array_set" id="TUBITV2_Array_set">
                <value name="ARRAYNAME">
        <shadow type="text">
            <field name="TEXT">array1</field>
        </shadow>
        </value>

        <value name="ARRAYPOS">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>

        <value name="ARRAYNU">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>

    </block>

    <block type="TUBITV2_Array_read" id="TUBITV2_Array_read">
                <value name="ARRAYNAME">
        <shadow type="text">
            <field name="TEXT">array1</field>
        </shadow>
        </value>

        <value name="ARRAYPOS">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="TUBITV2_Array_size" id="TUBITV2_Array_size">
        <value name="ARRAYNAME">
        <shadow type="text">
            <field name="TEXT">array1</field>
        </shadow>
        </value>

    </block>
   
</category>`;
}

exports = registerToolboxs;
