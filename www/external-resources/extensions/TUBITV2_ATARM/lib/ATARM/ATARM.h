#ifndef ATARM_H
#define ATARM_H

#include <Arduino.h>
#include <TuBitCore.h>

// ------------------- 外部全域物件 -------------------
extern TuBitCore tubit;   // 在 main.ino 定義 TuBitCore tubit;

// ------------------- 預設腳位 -------------------
ServoNum panPin   = S0;   // 旋轉馬達
ServoNum liftPin  = S1;   // 抬臂馬達
ServoNum clawPin  = S2;   // 夾爪馬達

// ------------------- 馬達角度變數 -------------------
float clawOpenDeg  = 70;    // 夾爪開角度
float clawCloseDeg = 160;   // 夾爪關角度
float clawDeg      = 70;    // 當前夾爪角度

float liftMinDeg   = 0;     // 抬臂最小角度
float liftMaxDeg   = 65;    // 抬臂最大角度
float liftDeg      = 0;     // 抬臂角度

float panMinDeg    = 55;     // 旋轉最小角度
float panMaxDeg    = 125;   // 旋轉最大角度
float panDeg       = 90;    // 當前旋轉角度

// ------------------- 初始化 -------------------
inline void ATARM_INIT(ServoNum pan = S0, ServoNum lift = S1, ServoNum claw = S2) {
  panPin   = pan;
  liftPin  = lift;
  clawPin  = claw;

  // 初始角度
  liftDeg = liftMinDeg;
  panDeg  = (panMinDeg + panMaxDeg) / 2;  // 初始化為中間角度
  clawDeg = clawOpenDeg;

  tubit.setServoAngle(liftPin, liftDeg);
  tubit.setServoAngle(panPin, panDeg);
  tubit.setServoAngle(clawPin, clawDeg);
}

// ------------------- 範圍設定 -------------------
inline void ATARM_SetClawRange(float openDeg, float closeDeg) {
  clawOpenDeg  = openDeg;
  clawCloseDeg = closeDeg;
}

inline void ATARM_SetLiftRange(float minDeg, float maxDeg) {
  liftMinDeg = minDeg;
  liftMaxDeg = maxDeg;
}

inline void ATARM_SetPanRange(float minDeg, float maxDeg) {
  panMinDeg = minDeg;
  panMaxDeg = maxDeg;
}

// ------------------- 夾爪控制 -------------------
inline void ATARM_ClawCtrl(bool action, int sec = 0) {
  float target = action ? clawCloseDeg : clawOpenDeg;
  if (sec <= 0) {
    clawDeg = target;
    tubit.setServoAngle(clawPin, clawDeg);
    return;
  }

  float step = (target - clawDeg) / 100.0;
  int delayTime = (sec * 1000) / 100;

  for (int i = 0; i < 100; i++) {
    clawDeg += step;
    tubit.setServoAngle(clawPin, clawDeg);
    delay(delayTime);
  }
  clawDeg = target;
}

// ------------------- 抬臂馬達累加 -------------------
inline void ATARM_LiftAdd(float deg) {
  liftDeg += deg;
  if (liftDeg > liftMaxDeg) liftDeg = liftMaxDeg;
  if (liftDeg < liftMinDeg) liftDeg = liftMinDeg;
  tubit.setServoAngle(liftPin, liftDeg);
}

// ------------------- 旋轉馬達累加 -------------------
inline void ATARM_PanAdd(float deg) {
  panDeg += deg;
  if (panDeg > panMaxDeg) panDeg = panMaxDeg;
  if (panDeg < panMinDeg) panDeg = panMinDeg;
  tubit.setServoAngle(panPin, panDeg);
}

// ------------------- 抬臂馬達設定角度 (平滑轉動) -------------------
inline void ATARM_LiftSet(float target, int sec) {
  if (target > liftMaxDeg) target = liftMaxDeg;
  if (target < liftMinDeg) target = liftMinDeg;

  if (sec <= 0) {
    liftDeg = target;
    tubit.setServoAngle(liftPin, liftDeg);
    return;
  }

  float step = (target - liftDeg) / 100.0;
  int delayTime = (sec * 1000) / 100;

  for (int i = 0; i < 100; i++) {
    liftDeg += step;
    tubit.setServoAngle(liftPin, liftDeg);
    delay(delayTime);
  }
  liftDeg = target;
}

// ------------------- 旋轉馬達設定角度 (平滑轉動) -------------------
inline void ATARM_PanSet(float target, int sec) {
  if (target > panMaxDeg) target = panMaxDeg;
  if (target < panMinDeg) target = panMinDeg;

  if (sec <= 0) {
    panDeg = target;
    tubit.setServoAngle(panPin, panDeg);
    return;
  }

  float step = (target - panDeg) / 100.0;
  int delayTime = (sec * 1000) / 100;

  for (int i = 0; i < 100; i++) {
    panDeg += step;
    tubit.setServoAngle(panPin, panDeg);
    delay(delayTime);
  }
  panDeg = target;
}

#endif
