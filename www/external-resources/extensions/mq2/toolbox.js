/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2MQ2_CATEGORY}" id="TUBITV2MQ2_CATEGORY" colour="#AA98A9" secondaryColour="#AA98A9" iconURI="../external-resources/extensions/mq2/assets/tubitv2mq2.png">
    
    <block type="tubitv2mq2_init" id="tubitv2mq2_init"></block>
    <block type="tubitv2mq2_read" id="tubitv2mq2_read"></block>
    
</category>`;
}

exports = registerToolboxs;
