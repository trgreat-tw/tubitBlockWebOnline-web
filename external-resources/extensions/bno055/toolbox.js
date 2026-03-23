/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2BNO055_CATEGORY}" id="TUBITV2BNO055" colour="#4C97FF" secondaryColour="#4C97FF" iconURI="../external-resources/extensions/bno055/assets/tubitv2bno055.png">

<block type="tubitv2bno055_init" id="tubitv2bno055_init">
</block>
<block type="tubitv2bno055_oiu" id="tubitv2bno055_oiu">
</block>
<block type="tubitv2bno055_read" id="tubitv2bno055_read">
</block>

    
</category>`;
}

exports = registerToolboxs;
