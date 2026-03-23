/*
  ============================================
   Company   : 東業創新科技有限公司 × 鴻兔科技
   Author    : xun
   Website   : https://trgreat.com/
   Email     : hr_user@trgreat.com
   Date      : 2025-08-17
   Version   : v3.0.0
  ============================================

  File       : TuBitCore.h
  Description: TuBitCore 函式庫標頭檔
               - 提供按鍵、伺服馬達、編碼器馬達
                 與數學運算等 API 定義
*/

#pragma once
#include <Arduino.h>

// ===== Constants & Types =====
#define SERVOMIN  500   
#define SERVOMAX  2000  

typedef enum{
  Button_A = 0,
  Button_B = 1,
} ButtonT;

typedef enum {
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,

}MotorNum;

typedef enum {
    S0 = 0,
    S1 = 1,
    S2 = 2,
    S3 = 3,
    S4 = 4,
    S5 = 5,
    S6 = 6,
    S7 = 7,
}ServoNum;

class Adafruit_PWMServoDriver;
class ESP32Encoder;
class InterruptEncoder;
class PID;

class TuBitCore {
public:
  TuBitCore();
  ~TuBitCore();

  // Setup
  void init(); 

  // Button
  bool readButton(ButtonT b);
  bool readButtonEdge(ButtonT b, bool rising); 

  // Servo
  void setServoPulseMs(ServoNum num, float ms);
  void setServoAngle(ServoNum num, int deg);

  // DC motors (open-loop PWM)
  void setMotorPwm(MotorNum id, int pwm); //pwm -255~0~255
  void setMotorsPwm(double m1, double m2, double m3, double m4);
  void stopAllMotors();

  // Encoder (counts/angle)
  int   readMotorDeg(int n); //-360~360
  long  readMotorEnc(int n);           
  void  resetEnc();
  void  setMotorEnc(int n, int64_t value);
  void  setEncoderCPR(int cpr);         

  // PID
  void  initPID();                       
  void  updatePID();                     
  long  computePID(int n);               
  void  setPIDTunings(double p, double i, double d);

  // Encoder motor (closed-loop / 5ms)
  void setMotorSpeed(double sp1, double sp2, double sp3, double sp4);
  void setMotorPosition(double p1, double p2, double p3, double p4);

  // Robot math / utils
  double getMaxVelocity(const double motors[4]) const;
  double averageSpeed(const double motors[4], double ref) const;
  static double toPolar(double x, double y, int component);      // 0:radius, 1:angle
  static double toCartesian(double r, double theta, int axis);   // 0:x, 1:y
  void   syncPidReference(bool keepOutput);

private:
  // Pin/Channel maps (decl in .h, def in .cpp)
  static const int TUBIT_B[2];
  static const int TB_MA[4];
  static const int TB_MB[4];
  static const int TB_ServoMotor[8];

  bool lastButtonState[2] = {false,false};

  struct Impl; Impl* impl;
};
