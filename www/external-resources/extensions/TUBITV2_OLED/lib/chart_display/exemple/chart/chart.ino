#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include <chart_display.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SH1106G display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

static int t = 0;
  static int mode = 0;
  static unsigned long lastSwitch = 0;

int chartData[SCREEN_WIDTH];  // 資料陣列

void setup() {
  Serial.begin(115200);
  display.begin(0x3C, true);
  display.clearDisplay();
  display.display();

  init_chart_display(&display);
  clearChart(chartData, SCREEN_WIDTH);
}

void loop() {
  

  // 每10秒切換圖表模式
  if (millis() - lastSwitch > 10000) {
    mode = (mode + 1) % 4;
    clearChart(chartData, SCREEN_WIDTH);
    lastSwitch = millis();
  }

  int value;

  switch (mode) {
    case 0:
      // 折線圖 - 從左到右
      value = 32 + 30 * sin(t * 0.1);
      chartData[SCREEN_WIDTH - 1] = value;
      drawChart(chartData, CHART_LINE, DIR_LEFT_TO_RIGHT);
      break;

    case 1:
      // 長條圖 - 從左到右
      value = random(0, 64);
      chartData[SCREEN_WIDTH - 1] = 64 - value;
      drawChart(chartData, CHART_BAR, DIR_LEFT_TO_RIGHT);
      break;

    case 2:
      // 折線圖 - 從右到左
      value = 32 + 30 * cos(t * 0.1);
      chartData[SCREEN_WIDTH - 1] = value;
      drawChart(chartData, CHART_LINE, DIR_RIGHT_TO_LEFT);
      break;

    case 3:
      // 長條圖 - 從右到左
      value = 64 - random(0, 64);
      chartData[SCREEN_WIDTH - 1] = value;
      drawChart(chartData, CHART_BAR, DIR_RIGHT_TO_LEFT);
      break;
  }

  delay(100);
  t++;
}
