/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.sensorarmor_init = function (block){
        const pin = this.getFieldValue('PIN');
        Blockly.Arduino.includes_.hrmeb_set = `#include <SensingArmor.h>`;
        Blockly.Arduino.definitions_[`sensorarmor_init${pin}`]= `SensingArmor SAP_${pin};`
        return `SAP_${pin}.InitSensor(${pin});\n`;
    };

    Blockly.Arduino.sensorarmor_read = function (block) {
        const pin = this.getFieldValue('PIN');
        return [`SAP_${pin}.ReadSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sensorarmor_setrange = function (block) {
        const pin = this.getFieldValue('PIN');
        const rv = Blockly.Arduino.valueToCode(block, 'RANGEV', Blockly.Arduino.ORDER_ATOMIC);
        return `SAP_${pin}.SetRange(${rv}); \n`;
    };


    Blockly.Arduino.sensorarmor_readppstrike = function (block) {
        const pin = this.getFieldValue('PIN');
        return [`SAP_${pin}.ReadPPStrike()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
