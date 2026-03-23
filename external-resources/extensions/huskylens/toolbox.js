/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2HUSKY_CATEGORY}" id="TUBITV2HUSKY_CATEGORY" colour="#DC6B19" secondaryColour="#DC6B19" iconURI="../external-resources/extensions/huskylens/assets/huskylens.png">

    <block type="tubitv2husky_init" id="tubitv2husky_init"></block>

    <label text="%{BKY_TUBITV2HUSKY_LABEL_LEARN}" />
    <block type="tubitv2husky_is_learned" id="tubitv2husky_is_learned"></block>
    <block type="tubitv2husky_is_learned_id" id="tubitv2husky_is_learned_id">
        <value name="ID">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    
    <block type="tubitv2husky_request_learned" id="tubitv2husky_request_learned"></block>

    <label text="%{BKY_TUBITV2HUSKY_LABEL_RECOGNITION}" />
    <block type="tubitv2husky_switchvision" id="tubitv2husky_switchvision"></block>
    <block type="tubitv2husky_visionto" id="tubitv2husky_visionto">
        <value name="ID">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="tubitv2husky_request" id="tubitv2husky_request"></block>
    <block type="tubitv2husky_request_id" id="tubitv2husky_request_id">
        <value name="ID">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <label text="%{BKY_TUBITV2HUSKY_LABEL_DATA}" />
    <block type="tubitv2husky_updata" id="tubitv2husky_updata"></block>
    <block type="tubitv2husky_readdata" id="tubitv2husky_readdata"></block>

    <label text="%{BKY_TUBITV2HUSKY_LABEL_COUNT}" />
    <block type="tubitv2husky_available" id="tubitv2husky_available"></block>
    <block type="tubitv2husky_learned_ids" id="tubitv2husky_learned_ids"></block>
    <block type="tubitv2husky_count" id="tubitv2husky_count"></block>
    <block type="tubitv2husky_count_id" id="tubitv2husky_count_id">
        <value name="ID">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="tubitv2husky_frame_number" id="tubitv2husky_frame_number"></block>

    <label text="%{BKY_TUBITV2HUSKY_LABEL_RESULT}" />

    <block type="tubitv2husky_result_var_declare" id="tubitv2husky_result_var_declare">
        <value name="VARNAME">
            <shadow type="text">
                <field name="TEXT">huskylens_data1</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2husky_get" id="tubitv2husky_get">
        <value name="VARNAME">
            <shadow type="text">
                <field name="TEXT">huskylens_data1</field>
            </shadow>
        </value>
        <value name="INDEX">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2husky_get_id" id="tubitv2husky_get_id">
        <value name="VARNAME">
            <shadow type="text">
                <field name="TEXT">huskylens_data1</field>
            </shadow>
        </value>
        <value name="INDEX">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="ID">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2husky_result_var_read" id="tubitv2husky_result_var_read">
        <value name="VARNAME">
            <shadow type="text">
                <field name="TEXT">huskylens_data1</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = registerToolboxs;
