/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

        Blockly.Arduino.tubitv2husky_init = function (block) {
            const type = block.getFieldValue('TYPE'); // 取得下拉選單值 (iic / uart)

            // ---------- Include ----------
            Blockly.Arduino.includes_.tubitv2husky_init = `#include <HUSKYLENS.h>`;

            // ---------- 全域定義 ----------
            Blockly.Arduino.definitions_.tubitv2husky_init =
        `HUSKYLENS huskylens;\n` +
        `HUSKYLENSResult HuskyResultBuffer;\n` +
        `String tubit_husky_getresult(HUSKYLENSResult result){\n` +
        `if(result.command==COMMAND_RETURN_BLOCK){return String()+F("Block:x=")+result.xCenter+F(",y=")+result.yCenter+F(",w=")+result.width+F(",h=")+result.height+F(",ID=")+result.ID;}\n` +
        `else if(result.command==COMMAND_RETURN_ARROW){return String()+F("Arrow:x0=")+result.xOrigin+F(",y0=")+result.yOrigin+F(",x1=")+result.xTarget+F(",y1=")+result.yTarget+F(",ID=")+result.ID;}\n` +
        `else{return "";}}\n`;

            // ---------- 初始化程式 ----------
            let code = '';

            if (type === 'iic') {
                // ---- I2C 模式 ----
                code =
        `Wire.begin();\n` +
        `while(!huskylens.begin(Wire)){\n` +
        `Serial.println(F("HuskyLens 初始化失敗!"));\n` +
        `Serial.println(F("1. 請確認機器設定為 I2C 模式 (設定→通訊方式→I2C)"));\n` +
        `Serial.println(F("2. 請確認連接線接對 SDA / SCL 腳位")); \n` +
        `delay(100);\n` +
        `}\n`;
            } 
            else if (type === 'uart') {
                // ---- UART 模式 (ESP32 硬體 Serial2, GPIO17→TX2, GPIO16→RX2) ----
                Blockly.Arduino.definitions_.tubitv2husky_uart =
        `#define HUSKY_RX 16\n` +
        `#define HUSKY_TX 17\n` +
        `HardwareSerial mySerial(2);\n`;
                code =
        `mySerial.begin(9600, SERIAL_8N1, HUSKY_RX, HUSKY_TX);\n` +
        `while(!huskylens.begin(mySerial)){\n` +
        `Serial.println(F("HuskyLens 初始化失敗!"));\n` +
        `Serial.println(F("1. 請確認機器設定為 UART 模式 (設定→通訊方式→UART 9600)"));\n` +
        `Serial.println(F("2. 請確認接線 TX2→RX, RX2→TX 是否正確")); \n` +
        `delay(100);\n` +
        `}\n`;
            }

            return code;
        };


    // --- LEARN ---
    // huskylens.isLearned() -> bool
    Blockly.Arduino.tubitv2husky_is_learned = function (block) {
        let code = "";
        code = `huskylens.isLearned()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // huskylens.isLearned(IDn) -> bool
    Blockly.Arduino.tubitv2husky_is_learned_id = function (block) {
        let code = "";
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);
        code = `huskylens.isLearned(${id})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // huskylens.{requestLearned, request{Blocks, Arrows}Learned}() -> bool: ID0 (未學習) 以外的結果存在
    Blockly.Arduino.tubitv2husky_request_learned = function (block) {
        let code = "";
        const type = block.getFieldValue('TYPE');
        switch(type){
            case "blocks":
                code = `huskylens.requestBlocksLearned()`;
                break;
            case "arrows":
                code = `huskylens.requestArrowsLearned()`;
                break;
            case "both":
                code = `huskylens.requestLearned()`;
                break;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

   
    Blockly.Arduino.tubitv2husky_updata = function (block) {
        const code = `HUSKYLENSResult result = huskylens.read();\n`;
        return code;
    }

    Blockly.Arduino.tubitv2husky_readdata = function (block) {
        const type = block.getFieldValue('TYPE');
        const code = `result.${type}`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }
    Blockly.Arduino.tubitv2husky_switchvision = function (block) {
        const type = block.getFieldValue('TYPE');
        const code = `huskylens.writeAlgorithm(${type});\n`;
        return code;
    }
        Blockly.Arduino.tubitv2husky_visionto= function (block) {
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);
        const code = `huskylens.writeLearnedID(${id});  \n`;
        return code;
    }
    // --- RECOGNITION ---
    // huskylens.{request, request{Blocks, Arrows} }() -> bool: 結果存在畫面
    Blockly.Arduino.tubitv2husky_request = function (block) {
        let code = "";
        const type = block.getFieldValue('TYPE');
        switch(type){
            case "blocks":
                code = `huskylens.requestBlocks()`;
                break;
            case "arrows":
                code = `huskylens.requestArrows()`;
                break;
            case "both":
                code = `huskylens.request()`;
                break;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // huskylens.{request, request{Blocks, Arrows} }(IDn) -> bool: 指定 IDn (已學習) 的結果存在畫面
    Blockly.Arduino.tubitv2husky_request_id = function (block) {
        let code = "";
        const type = block.getFieldValue('TYPE');
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);
        switch(type){
            case "blocks":
                code = `huskylens.requestBlocks(${id})`;
                break;
            case "arrows":
                code = `huskylens.requestArrows(${id})`;
                break;
            case "both":
                code = `huskylens.request(${id})`;
                break;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // --- COUNT ---
    // huskylens.available() -> int: 可以讀取的結果數
    Blockly.Arduino.tubitv2husky_available = function (block) {
        const code = `huskylens.available()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }
    
    // huskylens.countLearnedIDs() -> int16_t: 已經學習的結果數
    Blockly.Arduino.tubitv2husky_learned_ids = function (block) {
        const code = `huskylens.countLearnedIDs()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }
    
    // huskylens.{count, count{Blocks/Arrows}}() -> int16_t: 有多少結果
    Blockly.Arduino.tubitv2husky_count = function (block) {
        let code = "";
        const type = block.getFieldValue('TYPE');
        switch(type){
            case "blocks":
                code = `huskylens.countBlocks()`;
                break;
            case "arrows":
                code = `huskylens.countArrows()`;
                break;
            case "both":
                code = `huskylens.count()`;
                break;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // huskylens.{count, count{Blocks/Arrows}}(IDn) -> int16_t: 有多少結果
    Blockly.Arduino.tubitv2husky_count_id = function (block) {
        let code = "";
        const type = block.getFieldValue('TYPE');
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);
        switch(type){
            case "blocks":
                code = `huskylens.countBlocks(${id})`;
                break;
            case "arrows":
                code = `huskylens.countArrows(${id})`;
                break;
            case "both":
                code = `huskylens.count(${id})`;
                break;
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // huskylens.frameNumber() -> int16_t: 已經處理的幀數
    Blockly.Arduino.tubitv2husky_frame_number = function (block) {
        const code = `huskylens.frameNumber()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    // --- RESULT ---
    // huskylens.{get, get{Blocks/Arrows}}(index) -> HUSKYLENSResult: 取得第 index 筆結果
    Blockly.Arduino.tubitv2husky_get = function (block) {
        let code = "";
        const var_name = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const type = block.getFieldValue('TYPE');
        const index = Blockly.Arduino.valueToCode(block, 'INDEX', Blockly.Arduino.ORDER_ATOMIC);

        switch(type){
            case "blocks":
                code = `${var_name} = huskylens.getBlock(${index});\n`;
                break;
            case "arrows":
                code = `${var_name} = huskylens.getArrow(${index});\n`;
                break;
            case "both":
                code = `${var_name} = huskylens.get(${index});\n`;
                break;
        }
        return code;
    }

    // huskylens.{get, get{Blocks/Arrows}}(ID, index) -> HUSKYLENSResult: 指定 ID 取得第 index 筆結果
    Blockly.Arduino.tubitv2husky_get_id = function (block) {
        let code = "";
        const var_name = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const type = block.getFieldValue('TYPE');
        const id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);
        const index = Blockly.Arduino.valueToCode(block, 'INDEX', Blockly.Arduino.ORDER_ATOMIC);

        switch(type){
            case "blocks":
                code = `${var_name} = huskylens.getBlock(${id}, ${index});\n`;
                break;
            case "arrows":
                code = `${var_name} = huskylens.getArrow(${id}, ${index});\n`;
                break;
            case "both":
                code = `${var_name} = huskylens.get(${id}, ${index});\n`;
                break;
        }
        return code;
    }

    Blockly.Arduino.tubitv2husky_result_var_declare = function (block) {
        const var_name = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if (!Blockly.Arduino.definitions_['TUBITV2HUSKY_RESULT_VAR_DECLARE']){
            Blockly.Arduino.definitions_['TUBITV2HUSKY_RESULT_VAR_DECLARE'] = `HUSKYLENSResult ${var_name};\n`;
        } else {
            Blockly.Arduino.definitions_['TUBITV2HUSKY_RESULT_VAR_DECLARE'] += `HUSKYLENSResult ${var_name};\n`;
        }
        return "";
    };
    
    Blockly.Arduino.tubitv2husky_result_var_read = function (block) {
        const var_name = Blockly.Arduino.valueToCode(block, 'VARNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        code = `tubit_husky_getresult(${var_name})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = registerGenerators;
