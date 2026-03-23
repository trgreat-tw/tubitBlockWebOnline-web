/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
    <category name="%{BKY_TUBITV2TCS3472_CATEGORY}" id="TUBITV2TCS3472_CATEGORY" colour="#E1AFD1" secondaryColour="#E1AFD1" iconURI="../external-resources/extensions/tcs3472/assets/tcs3472.png">

    <block type="tubitv2tcs3472_set" id="tubitv2tcs3472_set">
    </block>

    <block type="tubitv2tcs3472_readcolor" id="tubitv2tcs3472_readcolor">
    </block>

    <block type="tubitv2tcs3472_readrgb" id="tubitv2tcs3472_readrgb">
    </block>


    <block type="tubitv2tcs3472_readlux" id="tubitv2tcs3472_readlux">
    </block>

    <block type="tubitv2tcs3472_setlight" id="tubitv2tcs3472_setlight">
    <value name="LIGHT">
        <shadow type="math_whole_number">
            <field name="NUM">255</field>
        </shadow>
    </value>
</block>

</category>`;
}

exports = registerToolboxs;
