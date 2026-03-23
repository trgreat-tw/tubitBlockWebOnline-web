#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include <eye_anim.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SH1106G display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);
  init_eye_display(&display);  // 初始化動畫模組並傳入 display 指標

  delay(500);
  wakeup();           // 開機動畫
  delay(1000);
  blink();            // 眨眼
  delay(500);
  happy_eye();        // 微笑眼
  delay(500);
  angry_eye();        // 生氣眼
  delay(500);
  tired_eye();        // 疲倦眼
  delay(500);
  leftwink_eye();     // 左眨眼
  delay(500);
  move_right_big_eye(); // 大眼右移
  delay(500);
  move_left_big_eye();  // 大眼左移
  delay(500);

  // 自動執行一組掃視動畫
  launch_animation_with_index(9);
}

void loop() {
  // 可根據需求寫入控制邏輯，例如按鈕觸發不同表情
}
