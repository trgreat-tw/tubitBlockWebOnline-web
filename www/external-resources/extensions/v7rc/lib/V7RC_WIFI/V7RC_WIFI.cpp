/*V7RC BLE控制庫 (v250501)n
*操作問題請回報(hr_user@trgreat.com)
*專門給TUBITBLOCK使用
*/


#include <V7RC_WIFI.h>
#include <WiFi.h>
#include "esp_wifi.h"
#include "esp_timer.h"
#include "Arduino.h"
#include "fb_gfx.h"
#include "soc/soc.h" //disable brownout problems
#include "soc/rtc_cntl_reg.h"  //disable brownout problems
#include "esp_http_server.h"

#define udp_on 

#ifdef udp_on 
#include <WiFiUdp.h>
const int udpPort = 6188; // V7RC port setting
bool udp_packet_not_empty = false;
bool udp_packet_loaded = false;
WiFiUDP udp;
char packetBuffer[255];
char ReplyBuffer[] = "acknowledged";
#endif 

typedef struct {
  size_t size; //number of values used for filtering
  size_t index; //current value index
  size_t count; //value count
  int sum;
  int* values; //array to be filled with values
} ra_filter_t;

#define PART_BOUNDARY "123456789000000000000987654321"
static const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;
static const char* _STREAM_BOUNDARY = "\r\n--" PART_BOUNDARY "\r\n";
static const char* _STREAM_PART = "Content-Type: image/jpeg\r\nContent-Length: %u\r\n\r\n";
httpd_handle_t stream_httpd = NULL;
httpd_handle_t camera_httpd = NULL;
String receive_data;

int V7RC_A[4] ={3,7,11,15};
int V7RC_B[4] ={7,11,15,19};
byte numberBase=10;

void V7RC_WIFI::setupWIFI(const char* ssid, const char* password, const int channel){
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); //disable brownout detector
  WiFi.persistent(false);
  WiFi.softAP(ssid, password, channel, 0, 1); //SSID, password, channel, hidden, max connection
  #ifdef udp_on
  udp.begin(udpPort);
  #endif
  
}


String V7RC_WIFI::readdata(){
 return receive_data;
}

bool checkConnected(){
  // 確認連線數量
  wifi_sta_list_t wifi_sta_list;
  esp_wifi_ap_get_sta_list(&wifi_sta_list);

  // 如果連線數是0，則表示沒有連線
  return wifi_sta_list.num ==0 ? false : true;
}

bool V7RC_WIFI::connect(){//專門for tubitblock
  #ifdef udp_on
  while (true){
    udp_packet_not_empty = (udp.parsePacket() > 0);
    if (udp_packet_not_empty){
      udp_packet_loaded = true;
      udp.read(packetBuffer, 1024);
    } else if (!udp_packet_not_empty && udp_packet_loaded){
      udp_packet_loaded = false;
      break;
    } else {
        // 如果沒有連線，return false
        if (!checkConnected()) return false;
    }
  }
  receive_data = String(packetBuffer);
  receive_data.trim();
  udp_packet_not_empty = false;
  udp_packet_loaded = false;
  #endif 

 return true;
}

bool V7RC_WIFI::setMode(String mod){
  return receive_data.startsWith(mod);
}

int V7RC_WIFI::readSRTdata(int sc){
  return strtol(receive_data.substring(V7RC_A[sc-1],V7RC_B[sc-1]).c_str(),0,numberBase);
}