/* HR_MEB ESP32馬達擴展板資料庫 (u2025.0303)
 * MCU：ESP32-WROOM-32D 30P版本 
 * 
 * HR_MEB相關問題請參考HR_MEB接線圖教學或來信詢問!
 * 鴻兔科技 www.trgreat.com 
 * 電子信箱：hr_user@trgreat.com
 */
#include <HR_MEB.h>

HR_MEB meb;

void setup() {
  /*初始化HR_MEB 馬達擴展板 
    預設Serial序列埠鮑率115200
  */
  meb.Init(20000);//括號內是馬達控制頻率 通常設定ㄋ10K~20K左右 
  
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

  if(meb.readButton()){//讀取按鈕訊號
    meb.ALLMotorControl(100,100,100,100); //控制4顆馬達
    delay(2000);
    meb.StopAllMotor();
    delay(2000);
    meb.ALLMotorControl(-100,-100,-100,-100); //控制4顆馬達
    delay(2000);
    meb.StopAllMotor();
   }

}

/*HR_MEB 馬達擴展板 方法說明：
 * 
 * readButton(); //讀取板載按鈕訊號
 * 
 * SetMotorDir(true,true,true,true); //設定馬達正反轉
 * MotorRun(MotorNum id,int speed); //控制單顆馬達(馬達編號 M1~M4,速度 -100~100);
 * ALLMotorControl(double m1 , double m2 , double m3, double m4); //控制4顆馬達
 * StopAllMotor(); //停止所有馬達
 */
