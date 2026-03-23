/* HR_MEB ESP32馬達擴展板資料庫 (u2025.0303)
 *  
 * 
 * HR_MEB相關問題請參考HR_MEB接線圖教學或來信詢問!
 * 鴻兔科技 www.trgreat.com 
 * 電子信箱：hr_user@trgreat.com
 */

#ifndef HR_MEB_h
#define HR_MEB_h

#include "Arduino.h"
#include <inttypes.h>
#include <Wire.h>

#include <stdio.h>

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_attr.h"

#include "driver/mcpwm.h"
#include "soc/mcpwm_reg.h"
#include "soc/mcpwm_struct.h"


typedef enum {
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4,

}MotorNum;

class HR_MEB {

public :


//HR_MEB init
void Init(uint32_t frequency);

//Button
bool readButton();

//DC motor
void MotorRun (MotorNum ID,int SPEED);
void ALLMotorControl(double m1 , double m2 , double m3, double m4);
void SetMotorDir(bool m1 , bool m2 , bool m3, bool m4) ;
void StopAllMotor();

};

class Motor
{
  private:
          int  pin;   
          int  Dire_Pin;
          int  Speed_Pin;

          void setMotornum(uint8_t num,uint8_t Pin_A,uint8_t Pin_B);

          mcpwm_io_signals_t  MCPWMXA;
          mcpwm_io_signals_t  MCPWMXB;
          mcpwm_unit_t  MCPWM_UNIT;          
          mcpwm_timer_t MCPWM_TIMER;

  public:  
     Motor(uint8_t num,uint8_t Pin_A,uint8_t Pin_B);
     ~Motor();

     
     void mcpwm_begin(uint32_t frequency);
     
     void Motor_Speed(float duty_cycle);
	 void Motor_SpeedAB(float duty_cycleA,float duty_cycleB);
    
};

#endif

