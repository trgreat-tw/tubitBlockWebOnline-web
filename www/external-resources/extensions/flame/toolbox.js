/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2FLAMESENSOR_CATEGORY}" id="TUBITV2FLAMESENSOR_CATEGORY" colour="#FDA426" secondaryColour="#FDA426" iconURI="../external-resources/extensions/flame/assets/tubitv2flamesensor.png">
    
    <block type="tubitv2flamesensor_init" id="tubitv2flamesensor_init"></block>
    <block type="tubitv2flamesensor_read" id="tubitv2flamesensor_read"></block>

</category>`;
}

exports = registerToolboxs;
