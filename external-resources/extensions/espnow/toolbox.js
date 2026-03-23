/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_ESPNOW_CATEGORY}" id="TUBITV2_ESPNOW_CATEGORY" colour="#FF9874" secondaryColour="#DC6B19" iconURI="../external-resources/extensions/espnow/assets/espnow.png">

    <block type="tubitv2_espnow_init" id="tubitv2_espnow_init"></block>

    <block type="tubitv2_espnow_add_peer" id="tubitv2_espnow_add_peer">
        <value name="MAC">
            <shadow type="text">
                <field name="TEXT">00:00:00:00:00:00</field>
            </shadow>
        </value>
        <value name="CHANNEL">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_espnow_device_mac_addr" id="tubitv2_espnow_device_mac_addr"></block>

    <block type="tubitv2_espnow_send" id="tubitv2_espnow_send">
        <value name="MAC">
            <shadow type="text">
                <field name="TEXT">00:00:00:00:00:00</field>
            </shadow>
        </value>
        <value name="MSG">
            <shadow type="text">
                <field name="TEXT">Hello TU:bitBlock</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_espnow_broadcast" id="tubitv2_espnow_broadcast">
        <value name="MSG">
            <shadow type="text">
                <field name="TEXT">Hello TU:bitBlock</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_espnow_get_recv_data" id="tubitv2_espnow_get_recv_data"></block>
    
    <block type="tubitv2_espnow_on_send">
        <statement name="SUBSTACK"></statement>
    </block>

    <block type="tubitv2_espnow_on_recv">
        <statement name="SUBSTACK"></statement>
    </block>
    
</category>`;

}

exports = registerToolboxs;
