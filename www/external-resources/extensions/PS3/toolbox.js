function registerToolboxs () {
    return `
        <category name="%{BKY_PS3_CONTROLLER_CATEGORY}" id="PS3_CONTROLLER_CATEGORY" colour="#cd1df5" secondaryColour="#cd1df5" iconURI="../external-resources/extensions/PS3/assets/ps3.png">
            <block type="ps3_controller_init" id="ps3_controller_init">
                <value name="MAC">
                    <shadow type="text">
                        <field name="TEXT">00:00:00:00:00:00</field>
                    </shadow>
                </value>
            </block>

            <block type="ps3_controller_setPlayer" id="ps3_controller_setPlayer">
                <value name="PLAYER">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="ps3_controller_isConnected" id="ps3_controller_isConnected" />
            <sep gap="36"/>
            <block type="ps3_controller_getJoystick" id="ps3_controller_getJoystick" />
            <block type="ps3_controller_isPressed" id="ps3_controller_isPressed" />

            <block type="ps3_controller_setRumbleMs" id="ps3_controller_setRumbleMs">
                <value name="INTENSITY">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="DURATION">
                    <shadow type="math_number">
                        <field name="NUM">500</field>
                    </shadow>
                </value>
            </block>
            <block type="ps3_controller_getbattery" id="ps3_controller_getbattery" />
        </category>`;
}

exports = registerToolboxs;
