/****************************************************
 * 東業創新科技有限公司 × 鴻兔科技
 * 創作者: xun
 * 聯絡信箱: hr_user@trgreat.com
 * 公司官網: https://trgreat.com
 * 時間: 2025-11-03
 * 版本: otc-v2.4
 * 功能簡述: 控制 TuBit V2 OTC 全向輪機器人套件
 * 
 * 主要功能:
 *  - 設定OTC車體參數
 *  - 提供開迴路與閉迴路向量控制 (Open / Closed Loop)
 *  - 支援角度轉換移動 (angleToXY)
 *  - 提供 S 型加減速運動 (moveSCurve / moveCurveSCurve)
 *  - 支援基於 BNO055 的方向校正移動
 *  - 提供中斷回呼函式，可即時停止任務
 * 
 * 適用硬體:
 *  - TuBit V2 控制板 (https://trgreat.com/tubit-v2-board/)
 *  - TuOTC 全向輪底盤
 ****************************************************/


#pragma once
#include <Arduino.h>
#include "TuBitCore.h"

using TuOtcInterruptCallback = bool (*)();

class TuOTC {
public:
  explicit TuOTC(TuBitCore& core);
  ~TuOTC();

  void setOtcXytConstants(double xConst, double yConst, double turnConst);
  void setOtcParameters(double wheel_H, double wheel_W, double OTC_L);
  void adjustOtcConstantsAdd(double dx, double dy, double dturn);
  void angleToXY(double angleDeg, double speed);

  void driveVectorOpen(double x, double y, double r);
  void driveVectorClosed(double x, double y, double r);

  void moveBody(double R, double ZdegPerSec, double Ddeg, bool setInitialYaw, double dDeg);

  void moveSCurve(double x, double y, double z,
                  double vm, double a, double ad, double Vs, double Ve,
                  TuOtcInterruptCallback cb);
  inline void moveSCurve(double x, double y, double z,
                         double vm, double a, double ad, double Vs, double Ve) {
    moveSCurve(x, y, z, vm, a, ad, Vs, Ve, nullptr);
  }

  void moveCurveSCurve(double x, double y, double rTargetDeg, double bulge,
                     double vm, double a, double ad, double Vs, double Ve,
                     TuOtcInterruptCallback cb);

 
  inline void moveCurveSCurve(double x, double y, double rTargetDeg, double bulge,
                            double vm, double a, double ad, double Vs, double Ve) {
  		moveCurveSCurve(x, y, rTargetDeg, bulge, vm, a, ad, Vs, Ve, nullptr);
	}

  void bnoMoveOpen(double x, double y, double z, double nowYawDeg);
  void bnoMoveClosed(double x, double y, double z, double nowYawDeg);

  void setInterruptCallback(TuOtcInterruptCallback cb) { cb_ = cb; }

  double interruptedX() const { return ix_; }
  double interruptedY() const { return iy_; }
  double interruptedZ() const { return iz_; }

  void syncPidReference(bool keepOutput) { core_.syncPidReference(keepOutput); }

private:
  TuBitCore& core_;
  
  double wheels_H_;
  double wheels_W_;
  double OTC_L_;
  double kx_ = 20.882;
  double ky_ = 20.52962962;
  double kturn_ = 3.4179;

  
  double yaw_accum_deg_ = 0.0;


  TuOtcInterruptCallback cb_ = nullptr;
  double ix_ = 0.0, iy_ = 0.0, iz_ = 0.0;

  void distributeOpenLoop3(double x, double y, double r, double out3[3]) const;
  void distributeClosedLoop3(double x, double y, double r, double out3[3]) const;

  void sendPwm3(const double v3[3]);
  void sendSpeed3(const double v3[3]);

  static double wrap180(double d);
};
