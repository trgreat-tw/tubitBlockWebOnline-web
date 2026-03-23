/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2PYRO_CATEGORY}" id="TUBITV2PYRO_CATEGORY" colour="#CE0135" secondaryColour="#CE0135" iconURI="../external-resources/extensions/pyro/assets/tubitv2pyro.png">
    
    <block type="tubitv2pyro_init" id="tubitv2pyro_init"></block>
    <block type="tubitv2pyro_read" id="tubitv2pyro_read"></block>

</category>`;
}

exports = registerToolboxs;
