#include <V7RC_WIFI.h>

V7RC_WIFI v7rc;

const char* sid = "V7RC_WIFI";
const char* pasword = "00000000";
//進入設定 連線方式:WIFI IP:92.168.4.255 Port:6188

void setup() {
  Serial.begin(115200);
  v7rc.setupWIFI(sid,pasword);//設定WIFI SSID 與 密碼
}

void loop() {

    v7rc.udpCheck();
    Serial.println(v7rc.readdata());
    if (v7rc.setMode("SRT")){
      Serial.println("-------------------------------------------------------------------------");
      Serial.print("DATA 1：");
      Serial.println(v7rc.readSRTdata(1));
      
      Serial.print("DATA 2：");
      Serial.println(v7rc.readSRTdata(2));
      
      Serial.print("DATA 3：");
      Serial.println(v7rc.readSRTdata(3));
      
      Serial.print("DATA 4：");
      Serial.println(v7rc.readSRTdata(4));
    }
  
  
}

/*方法使用
v7rc.udpCheck(); udp獲取資料更新與確認 
v7rc.readdata()讀取資料 // 回傳值:String
v7rc.setMode("SRT") 模式是否為SRT // 回傳值:boolean
v7rc.readSRTdata(1) 讀取SRT資料(1~4) // 回傳值:int
*/
