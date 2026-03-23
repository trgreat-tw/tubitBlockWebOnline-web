/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */


function registerGenerators (Blockly) {
    
    Blockly.Arduino.TUBITV2_Array_create= function (block) {
        const vs = block.getFieldValue('varset'); 
        const vt = block.getFieldValue('vartype');
        const vn = Blockly.Arduino.valueToCode(block, 'ARRAYNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vr = Blockly.Arduino.valueToCode(block, 'ARRAYS', Blockly.Arduino.ORDER_ATOMIC);
	    //const code = `${vs} ${vt} ${vn} = ${vr} ;\n`;
        Blockly.Arduino.definitions_['TUBITV2_Array_create_' + vn] = vs+' '+vt+' ' +vn +'['+vr+'];';
        return '';
    };

    Blockly.Arduino.TUBITV2_Array_set = function (block) {
        const vn = Blockly.Arduino.valueToCode(block, 'ARRAYNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vp = Blockly.Arduino.valueToCode(block, 'ARRAYPOS', Blockly.Arduino.ORDER_ATOMIC);
        const vr = Blockly.Arduino.valueToCode(block, 'ARRAYNU', Blockly.Arduino.ORDER_ATOMIC);
	    const code = `${vn}[${vp}]= ${vr} ; \n `;
        return code;
    };

    Blockly.Arduino.TUBITV2_Array_read = function (block) {
        const vn = Blockly.Arduino.valueToCode(block, 'ARRAYNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vp = Blockly.Arduino.valueToCode(block, 'ARRAYPOS', Blockly.Arduino.ORDER_ATOMIC);
	const code = `${vn}[int(${vp})]`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.TUBITV2_Array_size= function (block) {
        const vn = Blockly.Arduino.valueToCode(block, 'ARRAYNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
	const code = `sizeof(${vn})/sizeof(${vn}[0])`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
