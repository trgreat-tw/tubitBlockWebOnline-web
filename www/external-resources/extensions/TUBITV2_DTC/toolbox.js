/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_DTC_CATEGORY}" id="TUBITV2_DTC_CATEGORY" colour="#FF6700" secondaryColour="#FF6700" iconURI="../external-resources/extensions/TUBITV2_DTC/assets/dtcv1.png">

<label text="%{BKY_TUBITV2_DTC_LABEL_ADVANCE_A}" />

<block type="tubitv2dtc_setcpr" id="tubitv2dtc_setcpr">     
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

<block type="tubitv2dtc_setpid" id="tubitv2dtc_setpid">
    
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

<sep gap="36"/>
<block type="tubitv2dtc_setmotors" id="tubitv2dtc_setmotors">
</block>



<block type="tubitv2dtc_setyrdata" id="tubitv2dtc_setyrdata">
    
<value name="WH">
    <shadow type="math_number">
        <field name="NUM">6.5</field>
    </shadow>
</value>
<value name="WW">
    <shadow type="math_number">
        <field name="NUM">2.5</field>
    </shadow>
</value>
    <value name="DW">
    <shadow type="math_number">
        <field name="NUM">15.5</field>
    </shadow>
</value>
</block>

<block type="tubitv2dtc_addyrdata" id="tubitv2dtc_addyrdata">
    
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

<label text="%{BKY_TUBITV2_DTC_LABEL_ADVANCE_B}" />

<block type="tubitv2dtc_initir" id="tubitv2dtc_initir">
</block>


<block type="tubitv2dtc_setirerr" id="tubitv2dtc_setirerr">
 <value name="L2">
    <shadow type="math_number">
        <field name="NUM">-5</field>
    </shadow>
    </value>
    <value name="L1">
    <shadow type="math_number">
        <field name="NUM">-2</field>
    </shadow>
    </value>
    <value name="M">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    <value name="R1">
    <shadow type="math_number">
        <field name="NUM">2</field>
    </shadow>
    </value>
    <value name="R2">
    <shadow type="math_number">
        <field name="NUM">5</field>
    </shadow>
    </value>
</block>



<block type="tubitv2dtc_readir" id="tubitv2dtc_readir">
</block>

<block type="tubitv2dtc_readirerr" id="tubitv2dtc_readirerr">
</block>



<label text="%{BKY_TUBITV2_DTC_LABEL_ADVANCE_C}" />

<block type="tubitv2dtc_rlwheel" id="tubitv2dtc_rlwheel">
    <value name="SPD">
    <shadow type="math_number">
        <field name="NUM">255</field>
    </shadow>
    </value>
</block>

<block type="tubitv2dtc_driveVector" id="tubitv2dtc_driveVector">
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

<block type="tubitv2dtc_move" id="tubitv2dtc_move">
  <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="R"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="VMAX"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
  <value name="ACC"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
  <value name="ADD"><shadow type="math_number"><field name="NUM">-800</field></shadow></value>
  <value name="VS"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="VE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
</block>


<block type="tubitv2dtc_move_line" id="tubitv2dtc_move_line">
  <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="R"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="VMAX"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
  <value name="ACC"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
  <value name="ADD"><shadow type="math_number"><field name="NUM">-800</field></shadow></value>
  <value name="VS"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="VE"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
  <value name="KP"><shadow type="math_number"><field name="NUM">85</field></shadow></value>
  <value name="KD"><shadow type="math_number"><field name="NUM">0.025</field></shadow></value>
</block>



<label text="%{BKY_TUBITV2_DTC_LABEL_ADVANCE_D}" />

<block type="tubitv2dtc_lineflowinit" id="tubitv2dtc_lineflowinit">
    <value name="CM">
    <shadow type="math_number">
        <field name="NUM">9999</field>
    </shadow>
    </value>
        <value name="VMAX">
    <shadow type="math_number">
        <field name="NUM">50</field>
    </shadow>
    </value>
        <value name="ACC">
    <shadow type="math_number">
        <field name="NUM">2.5</field>
    </shadow>
    </value>
        <value name="KP">
    <shadow type="math_number">
        <field name="NUM">5</field>
    </shadow>
    </value>
        <value name="KD">
    <shadow type="math_number">
        <field name="NUM">0.025</field>
    </shadow>
    </value>
</block>

<block type="tubitv2dtc_syncmotor" id="tubitv2dtc_syncmotor">
</block>
<block type="tubitv2dtc_lineflowup" id="tubitv2dtc_lineflowup">
</block>
<block type="tubitv2dtc_lineflowstop" id="tubitv2dtc_lineflowstop">
</block>
<block type="tubitv2dtc_lineflowisruning" id="tubitv2dtc_lineflowisruning">
</block>
<block type="tubitv2dtc_lineflowreaddis" id="tubitv2dtc_lineflowreaddis">
</block>


<label text="%{BKY_TUBITV2_DTC_LABEL_ADVANCE_E}" />

<block type="tubitv2dtc_interrset" id="tubitv2dtc_interrset">
        <value name="INTTNAME">
        <shadow type="text">
            <field name="TEXT">defaultStopCondition</field>
        </shadow>
        </value>
</block>

<block type="tubitv2dtc_interrevent" id="tubitv2dtc_interrevent"> 
   <value name="INTTNAME">
        <shadow type="text">
            <field name="TEXT">defaultStopCondition</field>
        </shadow>
        </value>
        
  <statement name="SUBSTACK">
    <block type="tubitv2dtc_return">
      <value name="B">
        <shadow type="logic_boolean">
          <field name="BOOL">FALSE</field>
        </shadow>
      </value>
    </block>
  </statement>
</block>

<label text="%{BKY_TUBITV2_DTC_LABEL_ADVANCE_F}" />
 
<block type="tubitv2dtc_bnoturnpid" id="tubitv2dtc_bnoturnpid">
    <value name="P">
    <shadow type="math_number">
        <field name="NUM">5.0</field>
    </shadow>
    </value>
    <value name="I">
    <shadow type="math_number">
        <field name="NUM">0.0</field>
    </shadow>
    </value>
    <value name="D">
    <shadow type="math_number">
        <field name="NUM">0.025</field>
    </shadow>
    </value>
</block>

<block type="tubitv2dtc_bnoturn" id="tubitv2dtc_bnoturn">
    <value name="DEG">
    <shadow type="math_number">
        <field name="NUM">90</field>
    </shadow>
    </value>
    <value name="NDEG">
    <shadow type="math_number">
        <field name="NUM">0</field>
    </shadow>
    </value>
    <value name="VMAX">
    <shadow type="math_number">
        <field name="NUM">250</field>
    </shadow>
    </value>
</block>


</category>`;
}

exports = registerToolboxs;
