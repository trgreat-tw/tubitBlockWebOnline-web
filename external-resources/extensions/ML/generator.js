/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.tubitv2MLLL_init = function(block){    
        Blockly.Arduino.includes_.tubitv2MLLL_init = `#include "NNforduino.h"`;
        return ``;
    };

    Blockly.Arduino.tubitv2MLLL_set0 = function(block){    
        const f_Name0 = Blockly.Arduino.valueToCode(block, 'f_NAME0', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const Ac0 = block.getFieldValue('activ0');
        const W0 = Blockly.Arduino.valueToCode(block, 'Weight0', Blockly.Arduino.ORDER_ATOMIC);
        const Lo0 = Blockly.Arduino.valueToCode(block, 'Loss0', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_.tubitv2MLLL_set0 =`NNforduino ${f_Name0};\n`;
        return `${f_Name0}.OnelayerNN(${Ac0});\n${f_Name0}.w0 = ${W0};\n${f_Name0}.b0 = ${Lo0};\n`;
    };

    Blockly.Arduino.tubitv2MLLL_set1 = function(block){    
        const f_Name1 = Blockly.Arduino.valueToCode(block, 'f_NAME1', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const Ac1 = block.getFieldValue('activ1');
        const Ac11 = block.getFieldValue('activ11');
        const W1 = Blockly.Arduino.valueToCode(block, 'Weight1', Blockly.Arduino.ORDER_ATOMIC);
        const W11 = Blockly.Arduino.valueToCode(block, 'Weight11', Blockly.Arduino.ORDER_ATOMIC);
        const Lo1 = Blockly.Arduino.valueToCode(block, 'Loss1', Blockly.Arduino.ORDER_ATOMIC);
        const Lo11 = Blockly.Arduino.valueToCode(block, 'Loss11', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_.tubitv2MLLL_set1 =`NNforduino ${f_Name1};\n`;
        return `${f_Name1}.TwolayerNN(${Ac1},${Ac11});\n${f_Name1}.w0 = ${W1};\n${f_Name1}.w1 = ${W11};\n${f_Name1}.b0 = ${Lo1};\n${f_Name1}.b1 = ${Lo11};\n`;
    };

    Blockly.Arduino.tubitv2MLLL_set2 = function(block){    
        const W = Blockly.Arduino.valueToCode(block, 'alpha', Blockly.Arduino.ORDER_ATOMIC);
        const f_Name = Blockly.Arduino.valueToCode(block, 'f_NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        Blockly.Arduino.definitions_.tubitv2MLLL_set2 =`NNforduino ${f_Name};\n`;       
        return `${f_Name}.RNN(${W});\n`;
    };

    Blockly.Arduino.tubitv2MLLL_set00 = function(block){    
        const f_Name00 = Blockly.Arduino.valueToCode(block, 'f_NAME00', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const Ac00 = block.getFieldValue('activ00');
        Blockly.Arduino.definitions_.tubitv2MLLL_set00 =`NNforduino ${f_Name00};\n`;
        return `${f_Name00}.OnelayerNN(${Ac00});\n`;
    };

    Blockly.Arduino.tubitv2MLLL_set11 = function(block){    
        const f_Name11 = Blockly.Arduino.valueToCode(block, 'f_NAME11', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const Ac22 = block.getFieldValue('activ22');
        const Ac33 = block.getFieldValue('activ33');
        Blockly.Arduino.definitions_.tubitv2MLLL_set11 =`NNforduino ${f_Name11};\n`;
        return `${f_Name11}.TwolayerNN(${Ac22},${Ac33});\n`;
    };

    Blockly.Arduino.tubitv2MLLL_randomInit = function(block){    
        const Rand = block.getFieldValue('random');  
        const input = Blockly.Arduino.valueToCode(block, 'input_NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if (Rand=="SLP"){
            return `${input}.InitONN(RAN);\n`;
        } else{
            return `${input}.InitTNN(RAN);\n`;
        }
        
    };

    Blockly.Arduino.tubitv2MLLL_Trainset = function(block){    
        const T_Rand = block.getFieldValue('Train_random');  
        const inputtt = Blockly.Arduino.valueToCode(block, 'input_NAMEEE', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const DATA = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        const LR = Blockly.Arduino.valueToCode(block, 'L_rate', Blockly.Arduino.ORDER_ATOMIC);
        const Epoch = Blockly.Arduino.valueToCode(block, 'epoch', Blockly.Arduino.ORDER_ATOMIC);

        if (T_Rand=="SLP"){
            return `${inputtt}.LearnONN(u8${DATA},${LR},${Epoch});\n`;
        } else{
            return `${inputtt}.LearnTNN(u8${DATA},${LR},${Epoch});\n`;
        }
        
    };

    Blockly.Arduino.tubitv2MLLL_getWB = function(block){    
        const Get_nn = block.getFieldValue('get_nn');  
        const get_name = Blockly.Arduino.valueToCode(block, 'get_NAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const Get_wb = block.getFieldValue('get_wb');
       let code;
        if (Get_nn=="SLP"){
            {
                if (Get_wb === "W1" || Get_wb === "W2"){
                    code = `${get_name}.w0`;
                    return  [code, Blockly.Arduino.ORDER_ATOMIC];
                } else{
                    code = `${get_name}.b0`;
                    return  [code, Blockly.Arduino.ORDER_ATOMIC];
                }
            }
            ;
        } else{
            switch (Get_wb) {
                case "W1":
                    code = `${get_name}.w0`;
                    return  [code, Blockly.Arduino.ORDER_ATOMIC];
                case "W2":
                    code = `${get_name}.w1`;
                    return  [code, Blockly.Arduino.ORDER_ATOMIC];
                case "B1":
                    code = `${get_name}.b0`;
                    return  [code, Blockly.Arduino.ORDER_ATOMIC];
                case "B2":
                    code = `${get_name}.b1`;
                    return  [code, Blockly.Arduino.ORDER_ATOMIC];
                default:
                    return ''; 
                }           
        }
        
    };

    Blockly.Arduino.tubitv2MLLL_predition = function(block){    
        const Pre_nn = block.getFieldValue('predition_NN');  
        const Pre_NAME = Blockly.Arduino.valueToCode(block, 'predition_NAMEEE', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const Pre_DATA = Blockly.Arduino.valueToCode(block, 'predition_data', Blockly.Arduino.ORDER_ATOMIC);
        let code;
        if (Pre_nn=="SLP"){
            code = `${Pre_NAME}.OutONN(${Pre_DATA})`;
            return  [code, Blockly.Arduino.ORDER_ATOMIC];
        } else if (Pre_nn=="MLP"){
            code = `${Pre_NAME}.OutTNN(${Pre_DATA})`;
            return  [code, Blockly.Arduino.ORDER_ATOMIC];
        } else{
            code = `${Pre_NAME}.OutRNN(${Pre_DATA})`;
            return  [code, Blockly.Arduino.ORDER_ATOMIC];
        }
        
    };

    return Blockly;
}

exports = registerGenerators;
