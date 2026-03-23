/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_VARIABLE_CATEGORY}" id="TUBITV2_VARIABLE_CATEGORY" colour="#59C059" secondaryColour="#59C059" iconURI="../external-resources/extensions/variable/assets/TUBITV2.jpg">
    

    <block type="TUBITV2_variable_create" id="TUBITV2_variable_create">
        <value name="VARNAME">
        <shadow type="text">
            <field name="TEXT">var1</field>
        </shadow>
        </value>

        <value name="VARN">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>

    </block>

    <block type="TUBITV2_variable_create_string" id="TUBITV2_variable_create_string">
        <value name="VARNAME">
        <shadow type="text">
            <field name="TEXT">var1</field>
        </shadow>
        </value>
        
        <value name="VARN">
            <shadow type="text">
                <field name="TEXT">string</field>
            </shadow>
        </value>

    </block>

    <block type="TUBITV2_variable_read" id="TUBITV2_variable_read">
        <value name="VARNAME">
        <shadow type="text">
            <field name="TEXT">var1</field>
        </shadow>
        </value>

    </block>
    <block type="TUBITV2_variable_unboxing" id="TUBITV2_variable_unboxing">
        <value name="VARNAME">
        <shadow type="text">
            <field name="TEXT">var1</field>
        </shadow>
        </value>

    </block>

    <block type="TUBITV2_variable_set" id="TUBITV2_variable_set">
    <value name="VARNAME">
    <shadow type="text">
        <field name="TEXT">var1</field>
    </shadow>
    </value>
    <value name="VARN">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>

    </block>

    <block type="TUBITV2_variable_change" id="TUBITV2_variable_change">
        <value name="VARNAME">
        <shadow type="text">
            <field name="TEXT">var1</field>
        </shadow>
        </value>
        <value name="VARN">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
        </value>
    </block>

    <sep gap="40"/>
    
    <block type="TUBITV2_variable_str2type" id="TUBITV2_variable_str2type">
        <value name="STR">
            <shadow type="text">
                <field name="TEXT">string</field>
            </shadow>
        </value>
    </block>
    
    <block type="TUBITV2_variable_substring" id="TUBITV2_variable_substring">
        <value name="STR">
            <shadow type="text">
                <field name="TEXT">string</field>
            </shadow>
        </value>
        <value name="FROM">
            <shadow type="math_int9_number">
                <field name="TEXT">0</field>
            </shadow>
        </value>
    </block>

    <block type="TUBITV2_variable_substring2" id="TUBITV2_variable_substring2">
        <value name="STR">
            <shadow type="text">
                <field name="TEXT">string</field>
            </shadow>
        </value>
        <value name="FROM">
            <shadow type="math_int9_number">
                <field name="TEXT">0</field>
            </shadow>
        </value>
        <value name="TO">
            <shadow type="math_int9_number">
                <field name="TEXT">1</field>
            </shadow>
        </value>
    </block>

   

</category>`;
}

exports = registerToolboxs;
