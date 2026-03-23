/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_MTC_CATEGORY}" id="TUBITV2_MTC_CATEGORY" colour="#FF6700" secondaryColour="#FF6700" iconURI="../external-resources/extensions/TUBITV2_MTC/assets/mtcv2.png">

<block type="tubitv2mtc_rundeg" id="tubitv2mtc_rundeg">
    
<value name="DEG">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="SPEED">
    <shadow type="math_number">
        <field name="NUM">255</field>
    </shadow>
</value>
</block>

<block type="tubitv2mtc_runxyr" id="tubitv2mtc_runxyr">
    
    <value name="X">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    <value name="Y">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    <value name="R">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
</block>


<block type="tubitv2mtc_runxyrv7rc" id="tubitv2mtc_runxyrv7rc">
    
    <value name="X">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    <value name="Y">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    <value name="LR">
    <shadow type="logic_boolean">
    <field name="BOOL">FALSE</field>
    </shadow>
    </value>
    <value name="RR">
    <shadow type="logic_boolean">
    <field name="BOOL">FALSE</field>
    </shadow>
    </value>
</block>



<label text="%{BKY_TUBITV2_MTC_LABEL_ADVANCE_A}" />

<block type="tubitv2mtc_setcpr" id="tubitv2mtc_setcpr">

<value name="GS">
    <shadow type="math_number">
        <field name="NUM">90</field>
    </shadow>
</value>
<value name="PPR">
    <shadow type="math_number">
        <field name="NUM">13</field>
    </shadow>
</value>
</block>

<block type="tubitv2mtc_setpid" id="tubitv2mtc_setpid">
    
<value name="P">
    <shadow type="math_number">
        <field name="NUM">6</field>
    </shadow>
</value>
    <value name="I">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="D">
<shadow type="math_number">
    <field name="NUM">0.065</field>
</shadow>
</value>
</block>

<block type="tubitv2mtc_setxyrdata" id="tubitv2mtc_setxyrdata">
    
<value name="WH">
    <shadow type="math_number">
        <field name="NUM">6</field>
    </shadow>
</value>
<value name="WW">
    <shadow type="math_number">
        <field name="NUM">3</field>
    </shadow>
</value>
    <value name="MH">
    <shadow type="math_number">
        <field name="NUM">20</field>
    </shadow>
</value>
    <value name="MW">
    <shadow type="math_number">
        <field name="NUM">20</field>
    </shadow>
</value>
</block>

<block type="tubitv2mtc_addxyrdata" id="tubitv2mtc_addxyrdata">
    
<value name="MX">
    <shadow type="math_number">
        <field name="NUM">0.0</field>
    </shadow>
</value>
<value name="MY">
    <shadow type="math_number">
        <field name="NUM">0.0</field>
    </shadow>
</value>
    <value name="MZ">
    <shadow type="math_number">
        <field name="NUM">0.0</field>
    </shadow>
</value>
</block>

<block type="tubitv2mtc_setbodydeg" id="tubitv2mtc_setbodydeg">
        <value name="DEG">
        <shadow type="math_number">
        <field name="NUM">0</field>
        </shadow>
        </value>
</block>

<label text="%{BKY_TUBITV2_MTC_LABEL_ADVANCE_B}" />

<block type="tubitv2mtc_amove" id="tubitv2mtc_amove">
    
<value name="X">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="Y">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="R">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="VM">
    <shadow type="math_number">
        <field name="NUM">1200</field>
    </shadow>
</value>
    <value name="A">
    <shadow type="math_number">
        <field name="NUM">800</field>
    </shadow>
</value>
</block>


<block type="tubitv2mtc_move" id="tubitv2mtc_move">
    
<value name="X">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="Y">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="R">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="VM">
    <shadow type="math_number">
        <field name="NUM">1200</field>
    </shadow>
</value>
    <value name="A">
    <shadow type="math_number">
        <field name="NUM">800</field>
    </shadow>
</value>
    <value name="AD">
    <shadow type="math_number">
        <field name="NUM">-800</field>
    </shadow>
</value>
    <value name="VS">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="VE">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
</block>

<block type="tubitv2mtc_amovecurve" id="tubitv2mtc_amovecurve">
    
<value name="X">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="Y">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="R">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="BULGE">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="VM">
    <shadow type="math_number">
        <field name="NUM">1200</field>
    </shadow>
</value>
    <value name="A">
    <shadow type="math_number">
        <field name="NUM">800</field>
    </shadow>
</value>
</block>

<block type="tubitv2mtc_movecurve" id="tubitv2mtc_movecurve">
    
<value name="X">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="Y">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="R">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="BULGE">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="VM">
    <shadow type="math_number">
        <field name="NUM">1200</field>
    </shadow>
</value>
    <value name="A">
    <shadow type="math_number">
        <field name="NUM">800</field>
    </shadow>
</value>
    <value name="AD">
    <shadow type="math_number">
        <field name="NUM">-800</field>
    </shadow>
</value>
    <value name="VS">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
    <value name="VE">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
</value>
</block>

<label text="%{BKY_TUBITV2_MTC_LABEL_ADVANCE_C}" />

<block type="tubitv2mtc_interrset" id="tubitv2mtc_interrset">
        <value name="INTTNAME">
        <shadow type="text">
            <field name="TEXT">defaultStopCondition</field>
        </shadow>
        </value>
</block>

<block type="tubitv2mtc_interrevent" id="tubitv2mtc_interrevent"> 
   <value name="INTTNAME">
        <shadow type="text">
            <field name="TEXT">defaultStopCondition</field>
        </shadow>
        </value>
        
  <statement name="SUBSTACK">
    <block type="tubitv2mtc_return">
      <value name="B">
        <shadow type="logic_boolean">
          <field name="BOOL">FALSE</field>
        </shadow>
      </value>
    </block>
  </statement>
</block>

<block type="tubitv2mtc_interr"></block>

<label text="%{BKY_TUBITV2_MTC_LABEL_ADVANCE_D}" />
    
<block type="tubitv2mtc_bnomove">
  <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="NOWZ"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
</block>


</category>`;
}

exports = registerToolboxs;
