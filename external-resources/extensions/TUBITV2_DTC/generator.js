/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {


    Blockly.Arduino.tubitv2dtc_setcpr = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;

        const gs = Blockly.Arduino.valueToCode(block, 'GS', Blockly.Arduino.ORDER_ATOMIC);
        const ppr = Blockly.Arduino.valueToCode(block, 'PPR', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit.setEncoderCPR(${gs}*4*${ppr});\n`;
    };
    Blockly.Arduino.tubitv2dtc_setpid = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        
        const p = Blockly.Arduino.valueToCode(block, 'P', Blockly.Arduino.ORDER_ATOMIC);
        const i = Blockly.Arduino.valueToCode(block, 'I', Blockly.Arduino.ORDER_ATOMIC);
        const d = Blockly.Arduino.valueToCode(block, 'D', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit.setPIDTunings(${p},${i},${d});\n`;
    };

    Blockly.Arduino.tubitv2dtc_setmotors= function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const leftMotor = block.getFieldValue('LEFT_MOTOR');
        const leftInv = block.getFieldValue('LEFT_INV');
        const rightMotor = block.getFieldValue('RIGHT_MOTOR');
        const rightInv = block.getFieldValue('RIGHT_INV');
        return `dtc.setMotorConfig(${leftMotor}, ${rightMotor}, ${leftInv}, ${rightInv});\n`;
    };


    Blockly.Arduino.tubitv2dtc_setyrdata = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const  wh= Blockly.Arduino.valueToCode(block, 'WH', Blockly.Arduino.ORDER_ATOMIC);
        const ww = Blockly.Arduino.valueToCode(block, 'WW', Blockly.Arduino.ORDER_ATOMIC);
        const dw = Blockly.Arduino.valueToCode(block, 'DW', Blockly.Arduino.ORDER_ATOMIC);
        return `dtc.setConstants(${wh},${ww},${dw});\n`;
    };
    Blockly.Arduino.tubitv2dtc_addyrdata = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const y = Blockly.Arduino.valueToCode(block, 'MY', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'MZ', Blockly.Arduino.ORDER_ATOMIC);
        return `dtc.adjustDtcConstantsAdd(${y},${r});\n`;
    };

    Blockly.Arduino.tubitv2dtc_initir = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const l2 = block.getFieldValue('PINL2');
        const l1 = block.getFieldValue('PINL1');
        const M =  block.getFieldValue('PINM');
        const r1 = block.getFieldValue('PINR1');
        const r2 = block.getFieldValue('PINR2');
        return `dtc.initIRsensor(${l2},${l1},${M},${r1},${r2});\n`;
    };

    Blockly.Arduino.tubitv2dtc_setirerr = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const l2 = Blockly.Arduino.valueToCode(block, 'L2', Blockly.Arduino.ORDER_ATOMIC);
        const l1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
        const M = Blockly.Arduino.valueToCode(block, 'M', Blockly.Arduino.ORDER_ATOMIC);
        const r1 =Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
        const r2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
        return `dtc.setPosMapping(${l2},${l1},${M},${r1},${r2});\n`;
    };

    Blockly.Arduino.tubitv2dtc_readir = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        
        const pin = block.getFieldValue('PINIR');
        return [`dtc.readIR(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2dtc_readirerr = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        
        return [`dtc.getLineError()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2dtc_driveVector = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const mode = block.getFieldValue('CONTROL');
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        return `dtc.driveVector${mode}(${y},${r});\n`;
    };

    Blockly.Arduino.tubitv2dtc_rlwheel = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const w = block.getFieldValue('CONTROL');
        const spd = Blockly.Arduino.valueToCode(block, 'SPD', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit.setMotorPwm(${w},${spd});\n`;
    };

    Blockly.Arduino.tubitv2dtc_lineflowinit = function (block) {
    Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
    Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;

    const cm = Blockly.Arduino.valueToCode(block, 'CM', Blockly.Arduino.ORDER_ATOMIC) || '50';
    const vmax = Blockly.Arduino.valueToCode(block, 'VMAX', Blockly.Arduino.ORDER_ATOMIC) || '25';
    const acc = Blockly.Arduino.valueToCode(block, 'ACC', Blockly.Arduino.ORDER_ATOMIC) || '2.5';
    const kp = Blockly.Arduino.valueToCode(block, 'KP', Blockly.Arduino.ORDER_ATOMIC) || '5.0';
    const kd = Blockly.Arduino.valueToCode(block, 'KD', Blockly.Arduino.ORDER_ATOMIC) || '0.025';

    return `
      TuDTC::LFParams p;
      p.targetDistCM = ${cm};
      p.maxSpeed     = ${vmax};
      p.acc          = ${acc};
      p.Kp           = ${kp};
      p.Kd           = ${kd};
      dtc.LineFollow_Init(p);
    `;
    };

    Blockly.Arduino.tubitv2dtc_syncmotor= function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        return `tubit.syncPidReference(true);\n`;
    };

    Blockly.Arduino.tubitv2dtc_lineflowup = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        return `dtc.LineFollow_Update();\n`;
    };

    Blockly.Arduino.tubitv2dtc_lineflowstop = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        return `dtc.LineFollow_Stop();\n`;
    };

    Blockly.Arduino.tubitv2dtc_lineflowisruning = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        return [`dtc.LineFollow_Running()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2dtc_lineflowreaddis = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        return [`dtc.LineFollow_Distance()`, Blockly.Arduino.ORDER_ATOMIC];
    };

// ---------- 一般移動 (不含KP/KD) ----------
Blockly.Arduino.tubitv2dtc_move = function (block) {
    Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
    Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;

    const y   = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const r   = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const vm  = Blockly.Arduino.valueToCode(block, 'VMAX', Blockly.Arduino.ORDER_ATOMIC) || '0';
    const acc = Blockly.Arduino.valueToCode(block, 'ACC', Blockly.Arduino.ORDER_ATOMIC)  || '0';
    const add = Blockly.Arduino.valueToCode(block, 'ADD', Blockly.Arduino.ORDER_ATOMIC)  || '0';
    const vs  = Blockly.Arduino.valueToCode(block, 'VS', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const ve  = Blockly.Arduino.valueToCode(block, 'VE', Blockly.Arduino.ORDER_ATOMIC)   || '0';

    return `dtc.moveSCurve(${y}, ${r}, ${vm}, ${acc}, ${add}, ${vs}, ${ve});\n`;
};


// ---------- 循跡校正 (含KP/KD) ----------
Blockly.Arduino.tubitv2dtc_move_line = function (block) {
    Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
    Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;

    const y   = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const r   = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const vm  = Blockly.Arduino.valueToCode(block, 'VMAX', Blockly.Arduino.ORDER_ATOMIC) || '0';
    const acc = Blockly.Arduino.valueToCode(block, 'ACC', Blockly.Arduino.ORDER_ATOMIC)  || '0';
    const add = Blockly.Arduino.valueToCode(block, 'ADD', Blockly.Arduino.ORDER_ATOMIC)  || '0';
    const vs  = Blockly.Arduino.valueToCode(block, 'VS', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const ve  = Blockly.Arduino.valueToCode(block, 'VE', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const kp  = Blockly.Arduino.valueToCode(block, 'KP', Blockly.Arduino.ORDER_ATOMIC)   || '0';
    const kd  = Blockly.Arduino.valueToCode(block, 'KD', Blockly.Arduino.ORDER_ATOMIC)   || '0';

    return `dtc.moveSCurve_lineFlow(${y}, ${r}, ${vm}, ${acc}, ${add}, ${vs}, ${ve}, ${kp}, ${kd}, nullptr);\n`;
};

    Blockly.Arduino.tubitv2dtc_interrset = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const vn = Blockly.Arduino.valueToCode(block, 'INTTNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        return `dtc.setInterruptCallback(&${vn});\n`;
    };

    Blockly.Arduino.tubitv2dtc_interrevent = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const vn = Blockly.Arduino.valueToCode(block, 'INTTNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

        let code = `bool ${vn}() {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_['TUBITV2_dtc' + vn] =code;
        return '';
    };

    Blockly.Arduino.tubitv2dtc_return = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const boolCode = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
        return `return ${boolCode};\n`;
    };

    Blockly.Arduino.tubitv2dtc_bnoturnpid = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const p = Blockly.Arduino.valueToCode(block, 'P', Blockly.Arduino.ORDER_ATOMIC); 
        const i = Blockly.Arduino.valueToCode(block, 'I', Blockly.Arduino.ORDER_ATOMIC);
        const d = Blockly.Arduino.valueToCode(block, 'D', Blockly.Arduino.ORDER_ATOMIC);
        return `dtc.setTurnPid(${p},${i},${d});\n`;
    };
        Blockly.Arduino.tubitv2dtc_bnoturn = function (block) {
        Blockly.Arduino.includes_.tubitv2dtc = `#include <TuDTC.h>`;
        Blockly.Arduino.definitions_.tubitv2dtc = `TuDTC dtc(tubit);`;
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC); 
        const ndeg = Blockly.Arduino.valueToCode(block, 'NDEG', Blockly.Arduino.ORDER_ATOMIC); 
        const vmax = Blockly.Arduino.valueToCode(block, 'VMAX', Blockly.Arduino.ORDER_ATOMIC);
        return `dtc.turnBno(${deg}, &${ndeg}, ${vmax});\n`;
    };
     
    return Blockly;
}

exports = registerGenerators;
