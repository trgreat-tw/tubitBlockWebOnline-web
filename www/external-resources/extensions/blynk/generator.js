/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    let _TimerEventBranch = "";

    Blockly.Arduino.tubitv2blynk_template = function (block) {

        /* Template Init */
        const template_id = Blockly.Arduino.valueToCode(block, 'TEMPLATE_ID', Blockly.Arduino.ORDER_ATOMIC);
        const template_name = Blockly.Arduino.valueToCode(block, 'TEMPLATE_NAME', Blockly.Arduino.ORDER_ATOMIC);
        const auth_token = Blockly.Arduino.valueToCode(block, 'AUTH_TOKEN', Blockly.Arduino.ORDER_ATOMIC);
        const wifi_ssid = Blockly.Arduino.valueToCode(block, 'WIFI_SSID', Blockly.Arduino.ORDER_ATOMIC);
        const wifi_pass = Blockly.Arduino.valueToCode(block, 'WIFI_PASS', Blockly.Arduino.ORDER_ATOMIC);
        let module_definitions = `#define BLYNK_TEMPLATE_ID ${template_id}\n`;
        module_definitions += `#define BLYNK_TEMPLATE_NAME ${template_name}\n`;
        module_definitions += `#define BLYNK_AUTH_TOKEN ${auth_token}\n`;
        module_definitions += `#define BLYNK_WIFI_SSID ${wifi_ssid}\n`;
        module_definitions += `#define BLYNK_WIFI_PASS ${wifi_pass}\n`;
        module_definitions += `#define BLYNK_PRINT Serial\n\n`;
        Blockly.Arduino.includes_.tubitv2blynk_template = module_definitions;

        /* Include */
        let module_includes = `#include <WiFi.h>\n`;
        module_includes += `#include <WiFiClient.h>\n`;
        module_includes += `#include <BlynkSimpleEsp32.h>\n`;
        Blockly.Arduino.includes_.tubitv2blynk_template += module_includes;
	    
        

        /* Timer Event */
        Blockly.Arduino.definitions_.tubitv2blynk_template = `BlynkTimer BlynkTimer_;\n\n void BlynkTimerEvent(){\n${_TimerEventBranch}}\n`;

        
        return '';
    };

    Blockly.Arduino.tubitv2blynk_timerevent = function (block) {
        _TimerEventBranch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        return '';
    };

    Blockly.Arduino.tubitv2blynk_onconnected = function (block) {
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        let module_definitions = `BLYNK_CONNECTED(){\n`;
        module_definitions += branch;
        module_definitions += "}\n";
        Blockly.Arduino.definitions_.tubitv2blynk_onconnected = module_definitions;
        return '';
    };

    Blockly.Arduino.tubitv2blynk_write = function (block) {
        const vpin = Blockly.Arduino.valueToCode(block, 'VPIN', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        let module_definitions = `BLYNK_WRITE(${vpin}){\n`;
        module_definitions += branch;
        module_definitions += "}\n";
        Blockly.Arduino.definitions_[`tubitv2blynk_insertInDefine_${module_definitions}`] = module_definitions;
        return '';
    };

    Blockly.Arduino.tubitv2blynk_virtualwrite = function (block){
        const vpin = Blockly.Arduino.valueToCode(block, 'VPIN', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
        let code = `Blynk.virtualWrite(${vpin}, ${value});\n`;
        return code;
    };

    Blockly.Arduino.tubitv2blynk_begin = function (block){
        const interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);
        let code = `Blynk.begin(BLYNK_AUTH_TOKEN, BLYNK_WIFI_SSID, BLYNK_WIFI_PASS);\n`;
        code += `BlynkTimer_.setInterval(${interval}L, BlynkTimerEvent);\n`;
        return code;
    };

    Blockly.Arduino.tubitv2blynk_run = function (block){
        let code = `Blynk.run();\n`;
        code += `BlynkTimer_.run();\n`;
        return code;
    };

    Blockly.Arduino.tubitv2blynk_param = function (block) {
        const ty = block.getFieldValue('typeset'); 
        const code = `param`+ty;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
