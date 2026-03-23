/* SensingArmor 感應裝甲 V1.6.1 (u2024.01.04)
 *  
 * 
 * SensingArmor 感應裝甲 控制相關問題請參考官網或來信詢問!
 * 鴻兔科技 www.trgreat.com 
 * 電子信箱：hr_user@trgreat.com
 */

#include "Arduino.h"
#include <SensingArmor.h>

int sap_p = 0;
int sap_sv = 0; 
int range = 80;
int sap_PD = 0;
int sav_ov = 0;

void SensingArmor::InitSensor(int sa_pin)
{
  sap_p = sa_pin;
  pinMode(sap_p,INPUT);
  for(int i = 0 ; i <5; i++){
  ReadPPStrike();
  }

}

int SensingArmor::ReadSensor(){
  sap_sv = analogRead(sap_p);
  return sap_sv;  
}

void  SensingArmor::SetRange(int r){
 range = r;
}

int SensingArmor::ReadPPStrike(){
  ReadSensor();
   int rpps_v = abs(sap_sv - sav_ov);
   int rpps_out =0;
   if( rpps_v < range && sap_PD == 1){
      sap_PD = 0;
  }
  
  if( rpps_v > range && sap_PD == 0 && rpps_out ==0){
      sap_PD = 1;
      rpps_out = 1;
  }else{
     rpps_out = 0;
    }
  
  sav_ov =sap_sv ;
  return rpps_out;
  
}