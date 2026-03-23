/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2HALLSENSOR_CATEGORY}" id="TUBITV2HALLSENSOR_CATEGORY" colour="#4A6C6D" secondaryColour="#4A6C6D" iconURI="../external-resources/extensions/hall/assets/tubitv2hallsensor.png">
    
    <block type="tubitv2hallsensor_init" id="tubitv2hallsensor_init"></block>
    <block type="tubitv2hallsensor_read" id="tubitv2hallsensor_read"></block>
    
</category>`;
}

exports = registerToolboxs;
