// This file was automatically generated.  Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable dot-notation */
function getInterfaceTranslations () {
return {
    "en": {
        "tubitv2dtc.name": "TUBIT V2 DTC ROBOT",
        "tubitv2dtc.description": "Dual-wheel robot control blocks for TUBIT V2 DTC kit."
    },
    "zh-cn": {
        "tubitv2dtc.name": "TUBIT V2 DTC 双轮机器人套件",
        "tubitv2dtc.description": "用于控制DTC双轮循迹机器人的图形化编程模块。"
    },
    "zh-tw": {
        "tubitv2dtc.name": "TUBIT V2 DTC 雙輪機器人套件",
        "tubitv2dtc.description": "用於控制DTC雙輪循跡機器人的圖形化控制積木。"
    }
};

}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales["en"],
        { 
"TUBITV2_DTC_CATEGORY": "DTC Dual-Wheel Control",
"TUBITV2_DTC_SETCPR": "Set motor gear ratio %1 encoder counts %2",
"TUBITV2_DTC_SETYRDATA": "Set DTC wheel diameter %1 width %2 spacing (including width) %3",
"TUBITV2_DTC_AAYRDATA": "Fine-tune parameters y:%1 rotation:%2",
"TUBITV2_DTC_SETPID": "Set motor PID P %1 I %2 D %3",
"TUBITV2_DTC_INITIR": "Initialize IR pins L2:%1 L1:%2 M:%3 R1:%4 R2:%5",
"TUBITV2_DTC_SETIRERR": "Set IR position mapping L2:%1 L1:%2 M:%3 R1:%4 R2:%5",
"TUBITV2_PIN23": "23",
"TUBITV2_PIN15": "15",
"TUBITV2_PIN12": "12",
"TUBITV2_PIN5": "5",
"TUBITV2_PIN2": "2",
"TUBITV2_PIN0": "0",
"TUBITV2_PIN33": "33",
"TUBITV2_PIN32": "32",
"TUBITV2_PIN35": "35",
"TUBITV2_PIN34": "34",
"TUBITV2_PIN39": "39",
"TUBITV2_PIN36": "36",
"TUBITV2_DTC_IRL2": "L2",
"TUBITV2_DTC_IRL1": "L1",
"TUBITV2_DTC_IRM": "M",
"TUBITV2_DTC_IRR1": "R1",
"TUBITV2_DTC_IRR2": "R2",
"TUBITV2_DTC_READIR": "Read IR %1",
"TUBITV2_DTC_READIRERR": "Read line offset",
"TUBITV2_DTC_DRIVEVECTOR": "DTC %1 vector control Y:%2 Rotation:%3",
"TUBITV2_DTC_OP": "Open loop",
"TUBITV2_DTC_CL": "Closed loop",
"TUBITV2_DTC_RLWHEEL": "DTC %1motor speed %2",
"TUBITV2_DTC_R": "Right",
"TUBITV2_DTC_L": "Left",
"TUBITV2_DTC_LINEFLOWPD": "Line PD setting P%1 D%2",
"TUBITV2_DTC_LINEFLOWINIT": "Initialize line following distance:%1 cm Speed:%2 Acc:%3 Kp:%4 Kd:%5",
"TUBITV2_DTC_LINEFLOWUP": "Update line follow status",
"TUBITV2_DTC_LINEFLOWSTOP": "Stop line follow",
"TUBITV2_DTC_LINEFLOWISFRUNING": "Check line follow status",
"TUBITV2_DTC_LINEFLOWREADDIS": "Read line follow distance",
"TUBITV2_DTC_MOVE": "Precise Move Y:%1 R:%2 Vmax:%3 Acc:%4 Dec:%5 Vs:%6 Ve:%7",
"TUBITV2_DTC_MOVELINE": "Line-follow Move Y:%1 R:%2 Vmax:%3 Acc:%4 Dec:%5 Vs:%6 Ve:%7 Kp:%8 Kd:%9",
"TUBITV2_DTC_NO": "Precise",
"TUBITV2_DTC_LINE": "Line correction",
"TUBITV2_DTC_BNOTURNPID": "DTC BNO PID P%1 I%2 D%3",
"TUBITV2_DTC_BNOTURN": "DTC BNO rotate %1° current angle %2 Vmax %3",
"TUBITV2_DTC_INTERRSET": "Set interrupt condition %1",
"TUBITV2_DTC_INTERREVENT": "When interrupt %1 triggered, do",
"TUBITV2_DTC_RETURNA": "Return %1",
"TUBITV2_DTC_LABEL_ADVANCE_A": "DTC: Parameter Setup",
"TUBITV2_DTC_LABEL_ADVANCE_B": "DTC: Sensor Setup",
"TUBITV2_DTC_LABEL_ADVANCE_C": "DTC: Motion Control",
"TUBITV2_DTC_LABEL_ADVANCE_D": "DTC: Line Following",
"TUBITV2_DTC_LABEL_ADVANCE_E": "DTC: Interrupt Setup",
"TUBITV2_DTC_LABEL_ADVANCE_F": "DTC: BNO055 Angle Control",
"TUBITV2_DTC_SYNCMOTOR":"Resync motor PID speed",
"TUBITV2_DTC_SETMOTORS": "Set motors Left:%1 L-Invert:%2 Right:%3 R-Invert:%4",
"TUBIT_BOOL_TRUE": "Invert",
"TUBIT_BOOL_FALSE": "Normal",
"TUBITV2_DTC_M4":"M4",
"TUBITV2_DTC_M3":"M3",
"TUBITV2_DTC_M2":"M2",
"TUBITV2_DTC_M1":"M1"


        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
"TUBITV2_DTC_CATEGORY": "DTC 双轮车控制",
"TUBITV2_DTC_SETCPR": "设置电机 齿轮比%1 编码数%2",
"TUBITV2_DTC_SETYRDATA": "设置DTC 轮直径%1 轮宽%2 轮间距(含轮宽)%3",
"TUBITV2_DTC_AAYRDATA": "微调参数 y:%1 旋转:%2",
"TUBITV2_DTC_SETPID": "设置电机 P %1 I %2 D %3",
"TUBITV2_DTC_INITIR": "初始化红外引脚 L2:%1 L1:%2 M:%3 R1:%4 R2:%5",
"TUBITV2_DTC_SETIRERR": "设置红外偏移值 L2:%1 L1:%2 M:%3 R1:%4 R2:%5",
"TUBITV2_PIN23": "23",
"TUBITV2_PIN15": "15",
"TUBITV2_PIN12": "12",
"TUBITV2_PIN5": "5",
"TUBITV2_PIN2": "2",
"TUBITV2_PIN0": "0",
"TUBITV2_PIN33": "33",
"TUBITV2_PIN32": "32",
"TUBITV2_PIN35": "35",
"TUBITV2_PIN34": "34",
"TUBITV2_PIN39": "39",
"TUBITV2_PIN36": "36",
"TUBITV2_DTC_IRL2": "L2",
"TUBITV2_DTC_IRL1": "L1",
"TUBITV2_DTC_IRM": "M",
"TUBITV2_DTC_IRR1": "R1",
"TUBITV2_DTC_IRR2": "R2",
"TUBITV2_DTC_READIR": "检测红外 %1",
"TUBITV2_DTC_READIRERR": "读取偏移值",
"TUBITV2_DTC_DRIVEVECTOR": "DTC %1 向量控制 Y:%2 旋转:%3",
"TUBITV2_DTC_OP": "开环",
"TUBITV2_DTC_CL": "闭环",
"TUBITV2_DTC_RLWHEEL": "DTC %1电机 速度%2",
"TUBITV2_DTC_R": "右",
"TUBITV2_DTC_L": "左",
"TUBITV2_DTC_LINEFLOWPD": "循线PD设置 P%1 D%2",
"TUBITV2_DTC_LINEFLOWINIT": "初始化循迹模式 距离:%1 cm 速度:%2 加速度:%3 Kp:%4 Kd:%5",
"TUBITV2_DTC_LINEFLOWUP": "更新循迹状态",
"TUBITV2_DTC_LINEFLOWSTOP": "停止循迹",
"TUBITV2_DTC_LINEFLOWISFRUNING": "检测循迹状态",
"TUBITV2_DTC_LINEFLOWREADDIS": "读取循迹距离",
 "TUBITV2_DTC_MOVE": "精确移动 Y:%1 R:%2 Vmax:%3 Acc:%4 Add:%5 Vs:%6 Ve:%7",
 "TUBITV2_DTC_MOVELINE": "循迹校正移动 Y:%1 R:%2 Vmax:%3 Acc:%4 Add:%5 Vs:%6 Ve:%7 Kp:%8 Kd:%9",
"TUBITV2_DTC_NO": "精确",
"TUBITV2_DTC_LINE": "循迹校正",
"TUBITV2_DTC_BNOTURNPID": "DTC BNO设置 P%1 I%2 D%3",
"TUBITV2_DTC_BNOTURN": "DTC BNO旋转%1° 当前角度%2 Vmax%3",
"TUBITV2_DTC_INTERRSET": "设置中断条件 %1",
"TUBITV2_DTC_INTERREVENT": "当触发中断 %1 时执行",
"TUBITV2_DTC_RETURNA": "返回结果 %1",
"TUBITV2_DTC_LABEL_ADVANCE_A": "DTC: 参数设置",
"TUBITV2_DTC_LABEL_ADVANCE_B": "DTC: 传感设置",
"TUBITV2_DTC_LABEL_ADVANCE_C": "DTC: 移动控制",
"TUBITV2_DTC_LABEL_ADVANCE_D": "DTC: 循迹控制",
"TUBITV2_DTC_LABEL_ADVANCE_E": "DTC: 中断设置",
"TUBITV2_DTC_LABEL_ADVANCE_F": "DTC: BNO055角度控制",
"TUBITV2_DTC_SYNCMOTOR":"重新同步电机速度",
"TUBITV2_DTC_SETMOTORS": "设置电机 左:%1 反转:%2 右:%3 反转:%4",
"TUBIT_BOOL_TRUE": "反转",
"TUBIT_BOOL_FALSE": "不反转",
"TUBITV2_DTC_M4":"M4",
"TUBITV2_DTC_M3":"M3",
"TUBITV2_DTC_M2":"M2",
"TUBITV2_DTC_M1":"M1"



        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
"TUBITV2_DTC_CATEGORY": "DTC V1",
"TUBITV2_DTC_SETCPR": "設定馬達 齒輪比%1 編碼數%2",
"TUBITV2_DTC_SETYRDATA": "設定DTC 輪直徑%1 輪寬%2 輪距離(含輪寬)%3",
"TUBITV2_DTC_AAYRDATA": "微調參數 y:%1 旋轉:%2",
"TUBITV2_DTC_SETPID": "設定馬達 P %1 I %2 D %3",
"TUBITV2_DTC_INITIR": "初始化IR腳位 L2:%1 L1:%2 M:%3 R1:%4 R2:%5",
"TUBITV2_DTC_SETIRERR": "設定IR偏移值 L2:%1 L1:%2 M:%3 R1:%4 R2:%5",
"TUBITV2_PIN23": "23",
"TUBITV2_PIN15": "15",
"TUBITV2_PIN12": "12",
"TUBITV2_PIN5": "5",
"TUBITV2_PIN2": "2",
"TUBITV2_PIN0": "0",
"TUBITV2_PIN33": "33",
"TUBITV2_PIN32": "32",
"TUBITV2_PIN35": "35",
"TUBITV2_PIN34": "34",
"TUBITV2_PIN39": "39",
"TUBITV2_PIN36": "36",
"TUBITV2_DTC_IRL2": "L2",
"TUBITV2_DTC_IRL1": "L1",
"TUBITV2_DTC_IRM": "M",
"TUBITV2_DTC_IRR1": "R1",
"TUBITV2_DTC_IRR2": "R2",
"TUBITV2_DTC_READIR": "觸發IR %1",
"TUBITV2_DTC_READIRERR": "讀取偏移值",
"TUBITV2_DTC_DRIVEVECTOR": "DTC %1向量控制 Y:%2 旋轉:%3",
"TUBITV2_DTC_OP": "開迴路",
"TUBITV2_DTC_CL": "閉迴路",
"TUBITV2_DTC_RLWHEEL": "DTC %1馬達 速度%2",
"TUBITV2_DTC_R": "右",
"TUBITV2_DTC_L": "左",
"TUBITV2_DTC_LINEFLOWPD": "循線PD設定 P%1 D%2",
"TUBITV2_DTC_LINEFLOWINIT": "初始化循跡模式 距離:%1 cm 速度:%2 加速度:%3 Kp:%4 Kd:%5",
"TUBITV2_DTC_LINEFLOWUP": "更新循跡狀態",
"TUBITV2_DTC_LINEFLOWSTOP": "停止循跡",
"TUBITV2_DTC_LINEFLOWISFRUNING": "檢測循跡狀態",
"TUBITV2_DTC_LINEFLOWREADDIS": "讀取循跡移動距離",
"TUBITV2_DTC_MOVE": "精準移動 Y:%1 R:%2 Vmax:%3 Acc:%4 Add:%5 Vs:%6 Ve:%7",
"TUBITV2_DTC_MOVELINE": "循跡校正移動 Y:%1 R:%2 Vmax:%3 Acc:%4 Add:%5 Vs:%6 Ve:%7 Kp:%8 Kd:%9",
"TUBITV2_DTC_NO": "精準",
"TUBITV2_DTC_LINE": "循跡校正",
"TUBITV2_DTC_BNOTURNPID": "DTC BNO設定 P%1 I%2 D%3",
"TUBITV2_DTC_BNOTURN": "DTC BNO旋轉%1° 現在角度%2 Vmax%3",
"TUBITV2_DTC_INTERRSET": "設定中斷條件 %1",
"TUBITV2_DTC_INTERREVENT": "當觸發中斷 %1 時執行",
"TUBITV2_DTC_RETURNA": "回傳結果 %1",
"TUBITV2_DTC_LABEL_ADVANCE_A": "DTC:參數設定",
"TUBITV2_DTC_LABEL_ADVANCE_B": "DTC:感測設定",
"TUBITV2_DTC_LABEL_ADVANCE_C": "DTC:移動控制",
"TUBITV2_DTC_LABEL_ADVANCE_D": "DTC:循跡控制",
"TUBITV2_DTC_LABEL_ADVANCE_E": "DTC:中斷設定",
"TUBITV2_DTC_LABEL_ADVANCE_F": "DTC:BNO055角度控制",
"TUBITV2_DTC_SYNCMOTOR":"同步馬達 PID 速度",
"TUBITV2_DTC_SETMOTORS": "設定馬達 左:%1 反轉:%2 右:%3 反轉:%4",
"TUBIT_BOOL_TRUE": "反轉",
"TUBIT_BOOL_FALSE": "不反轉",
"TUBITV2_DTC_M4":"M4",
"TUBITV2_DTC_M3":"M3",
"TUBITV2_DTC_M2":"M2",
"TUBITV2_DTC_M1":"M1"

        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}

exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;