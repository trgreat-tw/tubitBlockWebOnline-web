/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2IRPROX_CATEGORY}" id="TUBITV2IRPROX_CATEGORY" colour="#CE0135" secondaryColour="#CE0135" iconURI="../external-resources/extensions/irprox/assets/tubitv2irprox.png">
    
    <block type="tubitv2irprox_init" id="tubitv2irprox_init"></block>
    <block type="tubitv2irprox_read" id="tubitv2irprox_read"></block>
    
</category>`;
}

exports = registerToolboxs;
