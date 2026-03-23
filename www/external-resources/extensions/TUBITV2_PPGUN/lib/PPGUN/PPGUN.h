#ifndef PPGUN_H
#define PPGUN_H

#include <Arduino.h>
#include <TuBitCore.h>

// ------------------- 外部全域物件 -------------------
extern TuBitCore tubit;   // 在 main.ino 定義 TuBitCore tubit;

// ------------------- 預設腳位 -------------------
ServoNum panPin    = S0;   // 旋轉馬達
ServoNum headPin   = S1;   // 抬頭馬達
ServoNum launchPin = S2;   // 發射馬達

// ------------------- 馬達角度變數 -------------------
float launchDeg = 115;   // 發射馬達預設角度
float headDeg   = 0;     // 抬頭馬達 (0 ~ 55)
float panDeg    = 90;    // 旋轉馬達 (0 ~ 180)

// ------------------- 初始化 -------------------
// 使用者可指定三顆馬達腳位 (預設 S0,S1,S2)
inline void PPGUN_INIT(ServoNum pan = S0, ServoNum head = S1, ServoNum launch = S2) {
  panPin    = pan;
  headPin   = head;
  launchPin = launch;

  // 設定初始角度
  tubit.setServoAngle(launchPin, launchDeg);
  tubit.setServoAngle(headPin, headDeg);
  tubit.setServoAngle(panPin, panDeg);
}

// ------------------- 發射乒乓球 -------------------
inline void PPGUN_launch() {
  tubit.stopAllMotors();
  tubit.setServoAngle(launchPin, 0);
  delay(2000);
  tubit.setServoAngle(launchPin, launchDeg);
}

// ------------------- 累加角度控制 -------------------
// 不需秒數，只累加，有限位
inline void PPGUN_HeadAdd(float deg) {
  headDeg += deg;
  if (headDeg > 55) headDeg = 55;
  if (headDeg < 0)  headDeg = 0;
  tubit.setServoAngle(headPin, headDeg);
}

inline void PPGUN_PanAdd(float deg) {
  panDeg += deg;
  if (panDeg > 180) panDeg = 180;
  if (panDeg < 0)   panDeg = 0;
  tubit.setServoAngle(panPin, panDeg);
}

// ------------------- 直接設定角度 (平滑轉動) -------------------
// sec > 0 → 平滑轉動，切分 100 次
// sec = 0 → 直接到位
inline void PPGUN_HeadSet(float target, int sec) {
  if (target > 55) target = 55;
  if (target < 0)  target = 0;

  if (sec <= 0) {
    headDeg = target;
    tubit.setServoAngle(headPin, headDeg);
    return;
  }

  float step = (target - headDeg) / 100.0;
  int delayTime = (sec * 1000) / 100;

  for (int i = 0; i < 100; i++) {
    headDeg += step;
    tubit.setServoAngle(headPin, headDeg);
    delay(delayTime);
  }
  headDeg = target;
}

inline void PPGUN_PanSet(float target, int sec) {
  if (target > 180) target = 180;
  if (target < 0)   target = 0;

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
