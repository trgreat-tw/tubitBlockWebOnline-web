/****************************************************
 * 東業創新科技有限公司 × 鴻兔科技
 * 創作者: xun
 * 聯絡信箱: hr_user@trgreat.com
 * 公司官網: https://trgreat.com
 * 時間: 2025-11-03
 * 版本: mtc-v2.4
 * 功能簡述: 控制 TuBit V2 MTC 麥克納姆輪機器人套件
 * 
 * 主要功能:
 *  - 設定麥克那姆輪車體參數自動調整移動狀態
 *  - 提供開迴路與閉迴路向量控制 (Open / Closed Loop)
 *  - 支援角度轉換移動 (angleToXY)
 *  - 提供 S 型加減速運動 (moveSCurve / moveCurveSCurve)
 *  - 支援基於 BNO055 的方向校正移動
 *  - 提供中斷回呼函式，可即時停止任務
 * 
 * 適用硬體:
 *  - TuBit V2 控制板 (https://trgreat.com/tubit-v2-board/)
 *  - TuMTC 麥克納姆輪底盤
 ****************************************************/

#pragma once
#include <Arduino.h>
#include "TuBitCore.h"

using TuMtcInterruptCallback = bool (*)();

class TuMTC {
public:
  explicit TuMTC(TuBitCore& core);
  ~TuMTC();

  void angleToXY(double angleDeg, double speed); 

  void driveVectorClosed(double x, double y, double z); 
  void driveVectorOpen(double x, double y, double z);  

  void setMtcXytConstants(double xConst, double yConst, double turnConst); 
  void setMtcParameters(double wheel_H, double wheel_W, double MTC_H, double MTC_W);
  void adjustMtcConstantsAdd(double dx, double dy, double dturn);
  void moveBody(double R, double ZdegPerSec, double Ddeg, bool setInitialYaw, double dDeg); 


  double interruptedX() const { return ix_; }
  double interruptedY() const { return iy_; }
  double interruptedZ() const { return iz_; }

  using TuMtcInterruptCallback = bool (*)();
  void setInterruptCallback(TuMtcInterruptCallback cb);

  void moveSCurve(double x, double y, double z,
                double vm, double a, double ad, double Vs, double Ve,
                TuMtcInterruptCallback cb);
 
  inline void moveSCurve(double x, double y, double z,
                       double vm, double a, double ad, double Vs, double Ve) {
  	moveSCurve(x, y, z, vm, a, ad, Vs, Ve, nullptr);
	}

  void moveCurveSCurve(double x, double y, double rTargetDeg, double bulge,
                     double vm, double a, double ad, double Vs, double Ve,
                     TuMtcInterruptCallback cb);

 
  inline void moveCurveSCurve(double x, double y, double rTargetDeg, double bulge,
                            double vm, double a, double ad, double Vs, double Ve) {
  		moveCurveSCurve(x, y, rTargetDeg, bulge, vm, a, ad, Vs, Ve, nullptr);
	}

  void bnoMoveOpen(double x, double y, double z, double nowYawDeg);
  void bnoMoveClosed(double x, double y, double z, double nowYawDeg);

  void syncPidReference(bool keepOutput) { core_.syncPidReference(keepOutput); }

private:
  TuBitCore& core_;
  
  double yaw_accum_deg_ = 0.0;
  TuMtcInterruptCallback cb_ = nullptr;
  double ix_ = 0, iy_ = 0, iz_ = 0;
  
  double wheels_H_ = 21.3;  
  double wheels_W_ = 21.3;  
  double MTC_H_ = 6;     
  double MTC_W_ = 3;     
  double kx_ = 20.16, ky_ = 19.2, kturn_ = 5.1408;

  void distributeOpenLoop(double x, double y, double r, double out[4]) const;
  void distributeClosedLoop(double x, double y, double r, double out[4]) const;
  void sendPwm(const double v[4]);
  void sendSpeed(const double v[4]);
  static double easeInOut(double u);
  static double wrap180(double deg);
  static double u_d;  

};
