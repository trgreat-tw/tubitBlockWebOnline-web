#ifndef V7RC_WIFI_h
#define V7RC_WIFI_h

#include <WiFi.h>
#include "esp_timer.h"
#include "Arduino.h"
#include "fb_gfx.h"
#include "soc/soc.h" //disable brownout problems
#include "soc/rtc_cntl_reg.h"  //disable brownout problems
#include "esp_http_server.h"

class V7RC_WIFI {

private :



public :

void setupWIFI(const char* ssid, const char* password, const int channel);

bool connect();
String readdata();
bool setMode(String mod);
int readSRTdata(int sc);

};



#endif

