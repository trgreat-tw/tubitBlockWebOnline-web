/* HR_MEB ESP32馬達擴展板資料庫 (u2025.0303)
 *  
 * 
 * HR_MEB相關問題請參考HR_MEB接線圖教學或來信詢問!
 * 鴻兔科技 www.trgreat.com 
 * 電子信箱：hr_user@trgreat.com
 */
#include "Arduino.h"
#include <HR_MEB.h>

static Motor motor1(1, 12, 13);
static Motor motor2(2, 14, 15);
static Motor motor3(3, 16, 17);
static Motor motor4(4, 18, 19);
int _motorDir[4] = {1,1,1,1};

static const int ButA = 2;

//--------------------------- HR_MEB ---------------------------//

void HR_MEB::Init(uint32_t frequency)
{
  Serial.begin(115200);
  pinMode(ButA,INPUT_PULLUP);
  motor1.mcpwm_begin(frequency);
  motor2.mcpwm_begin(frequency);
  motor3.mcpwm_begin(frequency);
  motor4.mcpwm_begin(frequency);
}

bool HR_MEB::readButton(){
  return !digitalRead(ButA);
}

void HR_MEB::SetMotorDir(bool m1 , bool m2 , bool m3, bool m4)
{
  _motorDir[0] = (m1) ? 1 : -1;
  _motorDir[1] = (m2) ? 1 : -1;
  _motorDir[2] = (m3) ? 1 : -1;
  _motorDir[3] = (m4) ? 1 : -1;
}


void HR_MEB::StopAllMotor() {
  MotorRun(M1, 0);
  MotorRun(M2, 0);
  MotorRun(M3, 0);
  MotorRun(M4, 0);
}

void HR_MEB::ALLMotorControl(double m1 , double m2 , double m3, double m4) {
  MotorRun(M1, m1);
  MotorRun(M2, m2);
  MotorRun(M3, m3);
  MotorRun(M4, m4);
}

void HR_MEB::MotorRun(MotorNum ID , int SPD) 
{
  
  if(SPD > 100)  SPD = 100;
  if(SPD < -100) SPD = -100;
  int index = ID - 1;
  int realSpeed = SPD * _motorDir[index];

  switch (ID) {
    case M1:
      motor1.Motor_Speed(realSpeed);
      break;
    case M2:
      motor2.Motor_Speed(realSpeed);
      break;
    case M3:
      motor3.Motor_Speed(realSpeed);
      break;
    case M4:
      motor4.Motor_Speed(realSpeed);
      break;
    default:
      break;
  }
}


//----------------------------Motor detail---------------

Motor :: Motor(uint8_t num ,uint8_t Pin_A,uint8_t Pin_B)
{
    setMotornum(num,Pin_A,Pin_B);    
}
Motor :: ~Motor()
{
    
} 

void Motor::setMotornum(uint8_t num,uint8_t Pin_A,uint8_t Pin_B)
{    
    switch (num)
    {
	case 1:
      Dire_Pin = Pin_A;
     Speed_Pin = Pin_B;
     MCPWM_TIMER = MCPWM_TIMER_0;
     MCPWM_UNIT=MCPWM_UNIT_0;
     MCPWMXA=MCPWM0A;
     MCPWMXB=MCPWM0B;
	    break;
	case 2:
      Dire_Pin = Pin_A;
     Speed_Pin = Pin_B;
     MCPWM_TIMER = MCPWM_TIMER_1;
     MCPWM_UNIT=MCPWM_UNIT_0;
      MCPWMXA=MCPWM1A;
     MCPWMXB=MCPWM1B;
	    break;
  case 3:
       Dire_Pin = Pin_A;
     Speed_Pin = Pin_B;
     MCPWM_TIMER = MCPWM_TIMER_2;
     MCPWM_UNIT=MCPWM_UNIT_0;
    MCPWMXA=MCPWM2A;
     MCPWMXB=MCPWM2B;
      break;  
  case 4:
      Dire_Pin = Pin_A;
     Speed_Pin = Pin_B;
     MCPWM_TIMER = MCPWM_TIMER_0;
     MCPWM_UNIT=MCPWM_UNIT_1;
      MCPWMXA=MCPWM0A;
     MCPWMXB=MCPWM0B;
      break;  
  case 5:
      Dire_Pin = Pin_A;
     Speed_Pin = Pin_B;
     MCPWM_TIMER = MCPWM_TIMER_1;
     MCPWM_UNIT=MCPWM_UNIT_1;
      MCPWMXA=MCPWM1A;
     MCPWMXB=MCPWM1B;
      break;    
  case 6:
      Dire_Pin = Pin_A;
     Speed_Pin = Pin_B;
     MCPWM_TIMER = MCPWM_TIMER_2;
     MCPWM_UNIT=MCPWM_UNIT_1;
     MCPWMXA=MCPWM2A;
     MCPWMXB=MCPWM2B;
      break;    	
	default:
	    break;
    }
   
}

void Motor :: mcpwm_begin(uint32_t frequency)
{  
   
  mcpwm_gpio_init(MCPWM_UNIT, MCPWMXA,  Dire_Pin);
  mcpwm_gpio_init(MCPWM_UNIT, MCPWMXB,  Speed_Pin);
  mcpwm_config_t pwm_config;
  pwm_config.frequency = frequency; 
  pwm_config.cmpr_a = 0;  
  pwm_config.cmpr_b = 0; 
  pwm_config.counter_mode = MCPWM_UP_COUNTER;
  pwm_config.duty_mode = MCPWM_DUTY_MODE_0;
  mcpwm_init(MCPWM_UNIT, MCPWM_TIMER, &pwm_config);

  }

  

void Motor :: Motor_Speed(float duty_cycle)
{
  if(duty_cycle>0)
    {
      mcpwm_set_signal_low(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_A);
      mcpwm_set_duty(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_B, duty_cycle);
      mcpwm_set_duty_type(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_B, MCPWM_DUTY_MODE_0);
    }else if(duty_cycle==0)
    {
      mcpwm_set_signal_high(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_A);
      mcpwm_set_signal_high(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_B);
    }

     else{
      mcpwm_set_signal_low(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_B);
      mcpwm_set_duty(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_A, -duty_cycle);
      mcpwm_set_duty_type(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_A, MCPWM_DUTY_MODE_0);
    }
}


void Motor :: Motor_SpeedAB(float duty_cycleA,float duty_cycleB)
{

      mcpwm_set_duty(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_A, duty_cycleA);
      mcpwm_set_duty_type(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_A, MCPWM_DUTY_MODE_0);

      mcpwm_set_duty(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_B, duty_cycleB);
      mcpwm_set_duty_type(MCPWM_UNIT, MCPWM_TIMER, MCPWM_OPR_B, MCPWM_DUTY_MODE_0);
  
}
