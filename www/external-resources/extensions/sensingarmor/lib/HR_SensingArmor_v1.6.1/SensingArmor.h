/* SensingArmor 感應裝甲 V1.6.1 (u2024.01.04)
 *  
 * 
 * SensingArmor 感應裝甲 控制相關問題請參考官網或來信詢問!
 * 鴻兔科技 www.trgreat.com 
 * 電子信箱：hr_user@trgreat.com
 */

#ifndef SensingArmor_h
#define SensingArmor_h

#include "Arduino.h"
#include <inttypes.h>
#include <Wire.h>

class SensingArmor {

private :
int sap_p = 0;
int sap_sv = 0; 
int range = 80;
int sap_PD = 0;
int sav_ov = 0;

public :
void InitSensor(int sa_pin);
int ReadSensor();
void  SetRange(int r);
int ReadPPStrike();
};



#endif

