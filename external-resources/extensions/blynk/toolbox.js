/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
    <category name="%{BKY_TUBITV2BLYNK_CATEGORY}" id="TUBITV2BLYNK_CATEGORY" colour="#529955" secondaryColour="#457F48" iconURI="../external-resources/extensions/blynk/assets/tubitv2blynk.png">
        
        <block type="tubitv2blynk_template" id="tubitv2blynk_template">
            <value name="TEMPLATE_ID">
                <shadow type="text">
                    <field name="TEXT">TEMPLATE_ID</field>
                </shadow>
            </value>
            <value name="TEMPLATE_NAME">
                <shadow type="text">
                    <field name="TEXT">TEMPLATE_NAME</field>
                </shadow>
            </value>
            <value name="AUTH_TOKEN">
                <shadow type="text">
                    <field name="TEXT">AUTH_TOKEN</field>
                </shadow>
            </value>
            <value name="WIFI_SSID">
                <shadow type="text">
                    <field name="TEXT">WIFI_SSID</field>
                </shadow>
            </value>
            <value name="WIFI_PASS">
                <shadow type="text">
                    <field name="TEXT">WIFI_PASS</field>
                </shadow>
            </value>
        </block>

        
        <block type="tubitv2blynk_begin" id="tubitv2blynk_begin">
            <value name="INTERVAL">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>

        <sep gap="36"/>

        <block type="tubitv2blynk_onconnected" id="tubitv2blynk_onconnected">
        </block>

        <block type="tubitv2blynk_timerevent" id="tubitv2blynk_timerevent">
        </block>

        <sep gap="36"/>

        <block type="tubitv2blynk_write" id="tubitv2blynk_write">
            <value name="VPIN">
                <shadow type="text">
                    <field name="TEXT">V0</field>
                </shadow>
            </value>
        </block>


        <block type="tubitv2blynk_param" id="tubitv2blynk_param">
        </block>

        <sep gap="36"/>

        <block type="tubitv2blynk_virtualwrite" id="tubitv2blynk_virtualwrite">
            <value name="VPIN">
                <shadow type="text">
                    <field name="TEXT">V0</field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        
        <sep gap="36"/>
        
        <block type="tubitv2blynk_run" id="tubitv2blynk_run">
        </block>

        //<sep gap="36"/>

    </category>`;
}

exports = registerToolboxs;
