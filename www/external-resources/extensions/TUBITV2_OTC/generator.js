/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {


    Blockly.Arduino.tubitv2otc_setcpr = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;

        const gs = Blockly.Arduino.valueToCode(block, 'GS', Blockly.Arduino.ORDER_ATOMIC);
        const ppr = Blockly.Arduino.valueToCode(block, 'PPR', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit.setEncoderCPR(${gs}*4*${ppr});\n`;
    };
    Blockly.Arduino.tubitv2otc_setpid = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        
        const p = Blockly.Arduino.valueToCode(block, 'P', Blockly.Arduino.ORDER_ATOMIC);
        const i = Blockly.Arduino.valueToCode(block, 'I', Blockly.Arduino.ORDER_ATOMIC);
        const d = Blockly.Arduino.valueToCode(block, 'D', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit.setPIDTunings(${p},${i},${d});\n`;
    };

    Blockly.Arduino.tubitv2otc_rundeg = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const deg = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.angleToXY(${deg},${speed});\n`;
    };

    Blockly.Arduino.tubitv2otc_runxyr = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.driveVectorOpen(${x},${y},${r});\n`;
    };
    Blockly.Arduino.tubitv2otc_runxyrv7rc = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const LR = Blockly.Arduino.valueToCode(block, 'LR', Blockly.Arduino.ORDER_ATOMIC);
        const RR = Blockly.Arduino.valueToCode(block, 'RR', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.driveVectorOpen(${x},${y},${LR}*-180 + ${RR}*180);\n`;
    };
    Blockly.Arduino.tubitv2otc_setxyrdata = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const  wh= Blockly.Arduino.valueToCode(block, 'WH', Blockly.Arduino.ORDER_ATOMIC);
        const ww = Blockly.Arduino.valueToCode(block, 'WW', Blockly.Arduino.ORDER_ATOMIC);
        const ol = Blockly.Arduino.valueToCode(block, 'OL', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.setOtcParameters(${wh},${ww},${ol});\n`;
    };
    Blockly.Arduino.tubitv2otc_addxyrdata = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'MX', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'MY', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'MZ', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.adjustOtcConstantsAdd(${x},${y},${r});\n`;
    };

    Blockly.Arduino.tubitv2otc_amove = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const vm = Blockly.Arduino.valueToCode(block, 'VM', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.moveSCurve(${x},${y},-(${r}),${vm},${a},-(${a}),0,0);\n`;
    };

    Blockly.Arduino.tubitv2otc_move = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const vm = Blockly.Arduino.valueToCode(block, 'VM', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
        const ad = Blockly.Arduino.valueToCode(block, 'AD', Blockly.Arduino.ORDER_ATOMIC);
        const vs = Blockly.Arduino.valueToCode(block, 'VS', Blockly.Arduino.ORDER_ATOMIC);
        const ve = Blockly.Arduino.valueToCode(block, 'VE', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.moveSCurve(${x},${y},-(${r}),${vm},${a},${ad},${vs},${ve});\n`;
    };

        Blockly.Arduino.tubitv2otc_amovecurve = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const bulge = Blockly.Arduino.valueToCode(block, 'BULGE', Blockly.Arduino.ORDER_ATOMIC);
        const vm = Blockly.Arduino.valueToCode(block, 'VM', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.moveCurveSCurve(${x},${y},${r},${bulge},${vm},${a},-(${a}),0,0);\n`;
    };

    Blockly.Arduino.tubitv2otc_movecurve = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const bulge = Blockly.Arduino.valueToCode(block, 'BULGE', Blockly.Arduino.ORDER_ATOMIC);
        const vm = Blockly.Arduino.valueToCode(block, 'VM', Blockly.Arduino.ORDER_ATOMIC);
        const a = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
        const ad = Blockly.Arduino.valueToCode(block, 'AD', Blockly.Arduino.ORDER_ATOMIC);
        const vs = Blockly.Arduino.valueToCode(block, 'VS', Blockly.Arduino.ORDER_ATOMIC);
        const ve = Blockly.Arduino.valueToCode(block, 'VE', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.moveCurveSCurve(${x},${y},${r},${bulge},${vm},${a},${ad},${vs},${ve});\n`;
    };

        Blockly.Arduino.tubitv2otc_setbodydeg = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const vn = Blockly.Arduino.valueToCode(block, 'DEG', Blockly.Arduino.ORDER_ATOMIC);
        return `otc.moveBody(0, 0, 0, true, fmod(360.0 - ${vn}, 360.0));\n`;
    };

 
    Blockly.Arduino.tubitv2otc_interrset = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const vn = Blockly.Arduino.valueToCode(block, 'INTTNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        let code = `otc.setInterruptCallback(&${vn});\n`;
        return code;
    };

    Blockly.Arduino.tubitv2otc_interrevent = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const vn = Blockly.Arduino.valueToCode(block, 'INTTNAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

        let code = `bool ${vn}() {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_['TUBITV2_otc' + vn] =code;
        return '';
    };

    Blockly.Arduino.tubitv2otc_return = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const boolCode = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
        return `return ${boolCode};\n`;
    };

    Blockly.Arduino.tubitv2otc_interr = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const type = block.getFieldValue('TYPE');
        return [`otc.${type}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tubitv2otc_bnomove = function (block) {
        Blockly.Arduino.includes_.tubitv2otc = `#include <TuOTC.h>`;
        Blockly.Arduino.definitions_.tubitv2otc = `TuOTC otc(tubit);`;
        const type = block.getFieldValue('TYPE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const nowz = Blockly.Arduino.valueToCode(block, 'NOWZ', Blockly.Arduino.ORDER_ATOMIC);

        if (type === 'ENC') {
            return `otc.bnoMoveClosed(${x}, ${y}, ${z}, ${nowz});\n`;
        } else {
            return `otc.bnoMoveOpen(${x}, ${y}, ${z}, ${nowz});\n`;
        }
    };

     /*
    Blockly.Arduino.tubitv2otc_movestartevent = function (block) {

        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

        let code = `void onMoveStart() {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_.tubitv2otc_movestartevent =code;
        Blockly.Arduino.setups_.tubitv2otc_movestartevent = 'tubit.setMoveStartCallback(onMoveStart);';
        return '';
    };

    Blockly.Arduino.tubitv2otc_moveloopevent = function (block) {

        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

        let code = `void onEachLoop() {\n`;
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += `}\n`

        Blockly.Arduino.definitions_.tubitv2otc_moveloopevent =code;
        Blockly.Arduino.setups_.tubitv2otc_moveloopevent = 'tubit.setMoveLoopCallback(onEachLoop);';
        return '';
    };

   
    Blockly.Arduino.tubitv2otc_gcsmove = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z = Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const sec = Blockly.Arduino.valueToCode(block, 'SEC', Blockly.Arduino.ORDER_ATOMIC);
        const rkp = Blockly.Arduino.valueToCode(block, 'RKP', Blockly.Arduino.ORDER_ATOMIC);
        const nowz = Blockly.Arduino.valueToCode(block, 'NOWZ', Blockly.Arduino.ORDER_ATOMIC);
        return `tubit.OTC_GCS_MOVE(${x}, ${y}, ${z}, ${sec}, ${rkp}, &(${nowz}));\n`;
    };
   */
    return Blockly;
}

exports = registerGenerators;
