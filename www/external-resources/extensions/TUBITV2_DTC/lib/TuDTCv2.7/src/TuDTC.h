/****
 * 東業創新科技有限公司 × 鴻兔科技
 * 創作者: xun
 * 聯絡信箱: hr_user@trgreat.com
 * 公司官網: https://trgreat.com
 * 時間: 2025-11-010
 * 版本: dtc-v2.7
 * 功能簡述: 控制 TuBit V2 DTC 雙輪循線機器人套件
 * 
 * 主要功能:
 *  - DTC車體參數設定
 *  - 初始化 5 顆 IR 感測器腳位，支援多組客製權重配置
 *  - 提供非阻塞循跡控制 (LineFollow_Init / LineFollow_Update / LineFollow_Stop)
 *  - 提供 S 型加減速精準移動 (DTC_MOVE)
 *  - 提供 S 型加減速 + IR 線校正精準移動 (DTC_MOVE_LINEFLOW)
 *  - 支援閉迴路與開迴路馬達控制 (setMotorSpeed / setMotorPwm)
 *  - 支援中斷回呼函式，可即時停止任務
 *  - 支援BNO055轉彎校正
 * 
 * 適用硬體:
 *  - TuBit V2 控制板 (https://trgreat.com/tubit-v2-board/)
 *  - TuDTC 底盤 (雙輪循線機器人套件)
 *  - 5 路紅外線循線模組
 ****/

#pragma once
#include <Arduino.h>
#include "TuBitCore.h"

// 中斷回呼型別 (回傳 true 代表中斷動作)
typedef bool (*TuDtcInterruptCallback)();

#define CTRL_TICK_HZ 200  // 控制頻率 (200Hz = 5ms)

class TuDTC {
public:
  explicit TuDTC(TuBitCore& core);

  // ---------- IR 感測器 ----------
  void initIRsensor(int ir1, int ir2, int ir3, int ir4, int ir5);
  bool  readIR(int index) const; // 1~5, 回傳 1=黑線,0=白線
  void setPosMapping(int p0, int p1, int p2, int p3, int p4);
  double getLineError() const; // 回傳加權平均誤差 (負左正右)

  // ---------- 參數設定 ----------
  void setConstants(double yConst, double turnConst);
  void setConstants(double wheel_H, double wheel_W, double axle_L);
  void adjustConstantsAdd(double dy, double dturn);
  void setInterruptCallback(TuDtcInterruptCallback cb);

  // ---------- 基礎輔助 ----------
  void   driveVectorOpen(double y, double z);
  void   driveVectorClosed(double y, double z);

  // ==========================================================
  //  A) 非阻塞循跡控制
  // ==========================================================
  struct LFParams {
    double targetDistCM = 0.0;  // 目標距離 (cm)
    double maxSpeed     = 0.0;  // 最大前進速度
    double acc          = 0.0;  // 加速度
    double Kp           = 8.0;  // P 參數
    double Kd           = 0.025;// D 參數
  };

  void  LineFollow_Init(const LFParams& p, TuDtcInterruptCallback cb=nullptr);
  void  LineFollow_Update();
  void  LineFollow_Stop(bool haltMotors=true);

  bool  LineFollow_Running() const { return lf_active; }
  double LineFollow_Distance() const { return lf_dist; }

  // ==========================================================
  //  B) 精準移動 (S型加減速)
  // ==========================================================
  void moveSCurve(double y, double z,
                double vm, double a, double ad, double Vs, double Ve,
                TuDtcInterruptCallback cb=nullptr);

  void moveSCurve_lineFlow(double y, double z,
                         double vm, double a, double ad, double Vs, double Ve,
                         double lineflowP, double lineflowI,
                         TuDtcInterruptCallback cb=nullptr);
  void turnBno(double z, double* nowZ, double spd,
                          TuDtcInterruptCallback cb=nullptr);
  void setTurnPid(double kp, double ki, double kd);

  void setMotorConfig(int leftMotor, int rightMotor, bool leftInv, bool rightInv);


private:
  TuBitCore& core_;
  double ttKp = 3.0, ttKi = 0.0, ttKd = 0.05; // 可以之後調整

  // ---------- 常數參數 ----------
  double wheel_H_;     // 輪子直徑 (cm)
  double wheel_W_;     // 輪子寬度 (cm)
  double axle_L_;      // 輪外緣距離 (cm)
  double YDATA_    = 17.6294706194; // 前進距離換算常數
  double TURNDATA_ = 2.015;         // 旋轉換算常數
  int    pos_[5]   = { -5, -2, 0, 2, 5 }; // IR 權重
  int    irPins_[5] = { -1,-1,-1,-1,-1 }; // IR 腳位

  TuDtcInterruptCallback cb_ = nullptr; // 全域中斷

  // ---------- 非阻塞循跡狀態 ----------
  bool   lf_active = false;
  double lf_targetDist = 0.0;
  double lf_maxSpeed   = 0.0;
  double lf_acc        = 0.0;
  double lf_Kp         = 2;
  double lf_Kd         = 15;
  double lf_currentSpeed = 0.0;
  double lf_prevError = 0.0;
  double lf_dist       = 0.0;

  // 馬達索引與方向設定
int leftMotorIndex_  = M4;   // 預設 左輪 M4
int rightMotorIndex_ = M3;   // 預設 右輪 M3
bool leftInvert_     = false;
bool rightInvert_    = false;

static const uint8_t motorMap_[5]; // 映射 M1~M4 → 陣列位置

};
