#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include "dot_matrix.h"

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SH1106G display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// 測試圖案：箭頭（16 x 7）
uint16_t arrow[7] = {
  0b0000001100000000,
  0b0000011110000000,
  0b0000111111000000,
  0b0000001100000000,
  0b0000001100000000,
  0b0000001100000000,
  0b0000001100000000
};

uint16_t arrow2[7] = {
  0b0000001100000000,
  0b0000001100000000,
  0b0000001100000000,
  0b0000001100000000,
  0b0000111111000000,
  0b0000011110000000,
  0b0000001100000000
};


void setup() {
  display.begin(0x3C, true);
  display.setRotation(0);

  init_dot_matrix(&display);          // 初始化 dot_matrix 模組（可省略）
            // 繪製圖案
}

void loop() {
  // 不重複繪圖，空著即可
   drawDotMatrix8x12(arrow);
   delay(300);
   
   drawDotMatrix8x12(arrow2);
   delay(300);
   
}
