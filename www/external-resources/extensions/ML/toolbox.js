/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2MLLL_CATEGORY}" id="TUBITV2MLLL_CATEGORY" colour="#40E0D0" secondaryColour="#40E0D0" iconURI="../external-resources/extensions/ML/assets/AI.png">
    <block type="tubitv2MLLL_init" id="tubitv2MLLL_init">
        <value name="init">
            <shadow type="text">
                <field name="TEXT">NN initialization</field>
            </shadow>
        </value>
    </block>


    <block type="tubitv2MLLL_set0" id="tubitv2MLLL_set0">
        <value name="f_NAME0">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
        <value name="Weight0">
            <shadow type="math_whole_number">
                <field name="NUM">0.8</field>
            </shadow>
        </value>
        <value name="Loss0">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2MLLL_set1" id="tubitv2MLLL_set1">
        <value name="f_NAME1">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
        <value name="Weight1">
            <shadow type="math_whole_number">
                <field name="NUM">0.7</field>
            </shadow>
        </value>
        <value name="Weight11">
            <shadow type="math_whole_number">
                <field name="NUM">0.8</field>
            </shadow>
        </value>
        <value name="Loss1">
            <shadow type="math_whole_number">
                <field name="NUM">0.9</field>
            </shadow>
        </value>
        <value name="Loss11">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2MLLL_set2" id="tubitv2MLLL_set2">
        <value name="f_NAME">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
        <value name="alpha">
            <shadow type="math_whole_number">
                <field name="NUM">0.8</field>
            </shadow>
        </value>
    </block>

     <block type="tubitv2MLLL_set00" id="tubitv2MLLL_set00">
        <value name="f_NAME00">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2MLLL_set11" id="tubitv2MLLL_set11">
        <value name="f_NAME11">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2MLLL_randomInit" id="tubitv2MLLL_randomInit">
        <value name="input_NAME">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
    </block>
    
    <block type="tubitv2MLLL_Trainset" id="tubitv2MLLL_Trainset">
        <value name="input_NAMEEE">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
        <value name="data">
            <shadow type="text">
            <field name="TEXT">0,0:0,0</field>
            </shadow>
        </value>
        <value name="L_rate">
            <shadow type="math_whole_number">
                <field name="NUM">0.01</field>
            </shadow>
        </value>
        <value name="epoch">
            <shadow type="math_whole_number">
                <field name="NUM">1000</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2MLLL_getWB" id="tubitv2MLLL_getWB">
        <value name="get_NAME">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2MLLL_predition" id="tubitv2MLLL_predition">
        <value name="predition_NAMEEE">
            <shadow type="text">
            <field name="TEXT">NAME</field>
            </shadow>
        </value>
        <value name="predition_data">
            <shadow type="math_whole_number">
                <field name="NUM">6</field>
            </shadow>
        </value>
    </block>

</category>`;


}

exports = registerToolboxs;
