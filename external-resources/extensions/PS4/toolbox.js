/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
        <category name="%{BKY_PS4_CONTROLLER_CATEGORY}" id="PS4_CONTROLLER_CATEGORY" colour="#2d2de3" secondaryColour="#2d2de3" iconURI="../external-resources/extensions/PS4/assets/ps4.png">
            <block type="ps4_controller_init" id="ps4_controller_init" >
                <value name="MAC">
                    <shadow type="text">
                        <field name="TEXT">00:00:00:00:00:00</field>
                    </shadow>
                </value>
            </block>
            <block type="ps4_controller_isConnected" id="ps4_controller_isConnected" />
            <sep gap="36"/>
            <block type="ps4_controller_getJoystick" id="ps4_controller_getJoystick" />
            <block type="ps4_controller_isPressed" id="ps4_controller_isPressed" />
            <block type="ps4_controller_setLED" id="ps4_controller_setLED" >
                <value name="LED_RED">
                    <shadow type="math_int9_number">
                        <field name="NUM">255</field>
                    </shadow>
                </value>
                <value name="LED_GREEN">
                    <shadow type="math_int9_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="LED_BLUE">
                    <shadow type="math_int9_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="ps4_controller_setRumble" id="ps4_controller_setRumble" >
                <value name="RUMBLE">
                    <shadow type="math_int9_number">
                        <field name="NUM">255</field>
                    </shadow>
                </value>
            </block>
            <block type="ps4_controller_getAddress" id="ps4_controller_getAddress" />
            <block type="ps4_controller_getbattery" id="ps4_controller_getbattery" />
        </category>`;
}

exports = registerToolboxs;
