/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */


function registerGenerators (Blockly) {
    


    Blockly.Arduino.TUBITV2_variable_str2type = function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        const STR  = block.getFieldValue('STR');
        const str = Blockly.Arduino.valueToCode(block, 'STR', Blockly.Arduino.ORDER_ATOMIC);
        const TYPE = block.getFieldValue('TO_TYPE');
        const code = `StrTo${TYPE}(${str})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.TUBITV2_variable_substring = function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        // const STR = block.getFieldValue('STR');
        const Str = Blockly.Arduino.valueToCode(block, 'STR', Blockly.Arduino.ORDER_ATOMIC);
        // const FROM = block.getFieldValue('FROM');
        const From = Blockly.Arduino.valueToCode(block, 'FROM', Blockly.Arduino.ORDER_ATOMIC);
        const code = `SubString(${Str}, ${From})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];

    }

    Blockly.Arduino.TUBITV2_variable_substring2 =  function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        // const STR = block.getFieldValue('STR');
        const Str = Blockly.Arduino.valueToCode(block, 'STR', Blockly.Arduino.ORDER_ATOMIC);
        // const FROM = block.getFieldValue('FROM');
        const From = Blockly.Arduino.valueToCode(block, 'FROM', Blockly.Arduino.ORDER_ATOMIC);
        // const TO = block.getFieldValue('TO');
        const To = Blockly.Arduino.valueToCode(block, 'TO', Blockly.Arduino.ORDER_ATOMIC);
        const code = `SubString(${Str}, ${From}, ${To})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

/*
    Blockly.Arduino['example_block'] = function(block) {
        var variableName = block.getFieldValue('VAR'); // 讀取變數名稱
        var code = 'Serial.println(' + variableName + ');\n';
        return code;
      };
*/

    Blockly.Arduino.TUBITV2_variable_create= function (block) {
        
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        
        const vs = block.getFieldValue('varset'); 
        const vt = block.getFieldValue('vartype');
        const vn = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vr = Blockly.Arduino.valueToCode(block, 'VARN', Blockly.Arduino.ORDER_ATOMIC);
	    //const code = `${vs} ${vt} ${vn} = ${vr} ;\n`;
        Blockly.Arduino.definitions_['TUBITV2_variable_create_' + vn] = vs+' '+vt+' ' +vn +'='+vr+ ';';
        return '';
    };

    
    Blockly.Arduino.TUBITV2_variable_create_string= function (block) {
        
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        
        const vs = block.getFieldValue('varset'); 
        const vn = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vr = Blockly.Arduino.valueToCode(block, 'VARN', Blockly.Arduino.ORDER_ATOMIC);
	    //const code = `${vs} ${vt} ${vn} = ${vr} ;\n`;
        Blockly.Arduino.definitions_['TUBITV2_variable_create_string' + vn] = vs+' String '+vn +'='+vr+ ';';
        return '';
    };


    Blockly.Arduino.TUBITV2_variable_read = function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        const vn = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
	const code = `${vn}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

       Blockly.Arduino.TUBITV2_variable_unboxing = function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
	const vt = block.getFieldValue('vartype');
        const vn = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
	const code = `(${vt})${vn}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.TUBITV2_variable_set = function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        const vn = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vr = Blockly.Arduino.valueToCode(block, 'VARN', Blockly.Arduino.ORDER_ATOMIC);
	    const code = `${vn} = ${vr} ; \n `;
        return code;
    };



    Blockly.Arduino.TUBITV2_variable_change = function (block) {
        Blockly.Arduino.includes_.TUBITV2_variable = `#include <StrOp.h>`;
        const vn = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const vr = Blockly.Arduino.valueToCode(block, 'VARN', Blockly.Arduino.ORDER_ATOMIC);
	    const code = `${vn} += ${vr} ;\n `;
        return code;
    };

    return Blockly;
}

exports = registerGenerators;
