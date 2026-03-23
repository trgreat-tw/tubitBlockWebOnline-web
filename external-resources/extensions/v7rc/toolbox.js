/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2V7RC_CATEGORY}" id="TUBITV2V7RC_CATEGORY" colour="#C0C0C0" secondaryColour="#C0C0C0" iconURI="../external-resources/extensions/v7rc/assets/v7rc.png">
    
    <block type="tubitv2v7rc_init" id="tubitv2v7rc_init">
    </block>

      <sep gap="36"/>
      <label text="%{BKY_V7RCINITSET}" />

    <block type="tubitv2v7rc_bleset" id="tubitv2v7rc_bleset">
        <value name="BLENAME">
        <shadow type="text">
            <field name="TEXT">TUBIT</field>
        </shadow>
        </value>
    </block>

    <block type="tubitv2v7rc_wifiset" id="tubitv2v7rc_wifiset">
        <value name="SSID">
        <shadow type="text">
            <field name="TEXT">TUBIT_V7RC</field>
        </shadow>
        </value>

        <value name="PSD">
        <shadow type="text">
            <field name="TEXT">123456789</field>
        </shadow>
        </value>

        <value name="CHANNEL">
        <shadow type="math_int9_number">
            <field name="NUM">1</field>
        </shadow>
        </value>

    </block>

    <sep gap="36"/>
    <label text="%{BKY_V7RCCONN}" />

    <block type="tubitv2v7rc_Connect" id="tubitv2v7rc_Connect">
    </block>

    <block type="tubitv2v7rc_mode" id="tubitv2v7rc_mode">
    <value name="MODE">
    <shadow type="text">
    <field name="TEXT">SRT</field>
    </shadow>
    </value>
    </block>

     <sep gap="36"/>
    <label text="%{BKY_V7RCADVMODE}" />

    <block type="tubitv2v7rc_ADVXY" id="tubitv2v7rc_ADVXY">
    </block>
    
    <block type="tubitv2v7rc_ADVBUT" id="tubitv2v7rc_ADVBUT">
    </block>


    <sep gap="36"/>
    <label text="%{BKY_V7RCADSET}" />

    <block type="tubitv2v7rc_readalldata" id="tubitv2v7rc_readaalldata">
    </block>
    
    <block type="tubitv2v7rc_readdata" id="tubitv2v7rc_readdata">
    </block>


</category>`;
}

exports = registerToolboxs;
