/* SensingArmor 感應裝甲 V1.6.1 (u2024.01.04)
 *  
 * 
 * SensingArmor 感應裝甲 控制相關問題請參考官網或來信詢問!
 * 鴻兔科技 www.trgreat.com 
 * 電子信箱：hr_user@trgreat.com
 */
#include <SensingArmor.h>

SensingArmor SAP;

int value = 0;

void setup() {
   Serial.begin(115200);
   SAP.InitSensor(15);
  // put your setup code here, to run once:

}

void loop() {

  Serial.print("感測裝甲讀取數值 : ");
  Serial.print(SAP.ReadSensor());
  Serial.print(" 感測裝甲被觸發次數 : ");
  SAP.SetRange(80);
  value += SAP.ReadPPStrike();
  Serial.println(value);

  delay(5);

}

/*SensingArmor 感應裝甲 方法說明：
 * 
 * InitSensor(int sa_pin); //初始化感測裝甲，設定控制腳位
 * 
 * ReadSensor(); //讀取感測裝甲數值
 * SetRange(int r); //設定感測裝甲被觸發的範圍 預設:80
 * ReadPPStrike(); //讀取感測裝甲是否被觸發
 */
