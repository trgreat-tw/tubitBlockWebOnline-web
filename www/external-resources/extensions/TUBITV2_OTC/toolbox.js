/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_OTC_CATEGORY}" id="TUBITV2_OTC_CATEGORY" colour="#FF6700" secondaryColour="#FF6700" iconURI="../external-resources/extensions/TUBITV2_OTC/assets/otcv2.png">

<block type="tubitv2otc_rundeg" id="tubitv2otc_rundeg">
    
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

<block type="tubitv2otc_runxyr" id="tubitv2otc_runxyr">
    
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

<block type="tubitv2otc_runxyrv7rc" id="tubitv2otc_runxyrv7rc">
    
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

<label text="%{BKY_TUBITV2_OTC_LABEL_ADVANCE_A}" />

<block type="tubitv2otc_setcpr" id="tubitv2otc_setcpr">
        
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

<block type="tubitv2otc_setpid" id="tubitv2otc_setpid">
    
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

<block type="tubitv2otc_setxyrdata" id="tubitv2otc_setxyrdata">
    
<value name="WH">
    <shadow type="math_number">
        <field name="NUM">5.8</field>
    </shadow>
</value>
<value name="WW">
    <shadow type="math_number">
        <field name="NUM">3</field>
    </shadow>
</value>
    <value name="OL">
    <shadow type="math_number">
        <field name="NUM">20</field>
    </shadow>
</value>
</block>

<block type="tubitv2otc_addxyrdata" id="tubitv2otc_addxyrdata">
    
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

<block type="tubitv2otc_setbodydeg" id="tubitv2otc_setbodydeg">
        <value name="DEG">
        <shadow type="math_number">
        <field name="NUM">0</field>
        </shadow>
        </value>
</block>

<label text="%{BKY_TUBITV2_OTC_LABEL_ADVANCE_B}" />

<block type="tubitv2otc_amove" id="tubitv2otc_amove">
    
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


<block type="tubitv2otc_move" id="tubitv2otc_move">
    
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

<block type="tubitv2otc_amovecurve" id="tubitv2otc_amovecurve">
    
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

<block type="tubitv2otc_movecurve" id="tubitv2otc_movecurve">
    
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

<label text="%{BKY_TUBITV2_OTC_LABEL_ADVANCE_C}" />

<block type="tubitv2otc_interrset" id="tubitv2otc_interrset">
        <value name="INTTNAME">
        <shadow type="text">
            <field name="TEXT">defaultStopCondition</field>
        </shadow>
        </value>
</block>

<block type="tubitv2otc_interrevent" id="tubitv2otc_interrevent"> 
   <value name="INTTNAME">
        <shadow type="text">
            <field name="TEXT">defaultStopCondition</field>
        </shadow>
        </value>
        
  <statement name="SUBSTACK">
    <block type="tubitv2otc_return">
      <value name="B">
        <shadow type="logic_boolean">
          <field name="BOOL">FALSE</field>
        </shadow>
      </value>
    </block>
  </statement>
</block>

<block type="tubitv2otc_interr"></block>

<label text="%{BKY_TUBITV2_OTC_LABEL_ADVANCE_D}" />
    
<block type="tubitv2otc_bnomove">
  <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="NOWZ"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
</block>


</category>`;
}

exports = registerToolboxs;
