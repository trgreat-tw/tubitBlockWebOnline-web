/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

                    
    Blockly.Arduino.tubitv2bno055_init = function (block) {
        Blockly.Arduino.includes_.tubitv2bno055_init = `#include <EasyBNO055_ESP.h>`;
        Blockly.Arduino.definitions_.tubitv2bno055_init = `EasyBNO055_ESP bno;`;

    let workspace = Blockly.getMainWorkspace();
    let hasOiuBlock = workspace.getAllBlocks(false).some(b => b.type === 'tubitv2bno055_oiu');

    if (hasOiuBlock) {
        Blockly.Arduino.setups_.tubitv2bno055_init = `bno.start(&otherI2CUpdate);`;
    } else {
        Blockly.Arduino.setups_.tubitv2bno055_init = `bno.start();`;
    }

        return '';
    };
    
    Blockly.Arduino.tubitv2bno055_oiu = function (block) {

        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

        let code = `void otherI2CUpdate() {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_.tubitv2bno055_oiu =code;
        return '';
    };

    Blockly.Arduino.tubitv2bno055_read = function (block) {
        const type = block.getFieldValue('TYPE'); // orientationX, orientationY, orientationZ
        return [`bno.${type}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
