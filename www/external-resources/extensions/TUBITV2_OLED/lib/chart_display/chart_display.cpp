#include "chart_display.h"

// 外部傳入的 OLED 顯示物件指標
static Adafruit_SH1106G* chart_display = nullptr;

void init_chart_display(Adafruit_SH1106G* display) {
  chart_display = display;
}

// 顯示圖表資料
void drawChart(int* data, byte chartType, byte dirType) {
  if (!chart_display) return;

  byte w = chart_display->width();
  byte h = chart_display->height();

  chart_display->fillRect(0, 0, w, h, SH110X_BLACK);  // 清空畫面

  for (int i = 0; i < ((chartType == CHART_LINE) ? (w - 1) : w); i++) {
    if (data[i] >= 0 && data[i + 1] >= 0) {
      if (chartType == CHART_LINE) {
        // 折線圖
        if (dirType == DIR_LEFT_TO_RIGHT)
          chart_display->drawLine(i, data[i], i + 1, data[i + 1], SH110X_WHITE);
        else
          chart_display->drawLine(w - 1 - i, data[i], w - 2 - i, data[i + 1], SH110X_WHITE);
      } else {
        // 長條圖
        if (dirType == DIR_LEFT_TO_RIGHT)
          chart_display->drawLine(i, h - 1, i, data[i], SH110X_WHITE);
        else
          chart_display->drawLine(w - 1 - i, h - 1, w - 1 - i, data[i], SH110X_WHITE);
      }
    }
  }

  chart_display->display();

  // 資料左移（模擬即時滾動）
  for (int i = 0; i < (w - 1); i++) {
    data[i] = data[i + 1];
  }
}

// 清空資料陣列
void clearChart(int* data, int length) {
  for (int i = 0; i < length; i++) {
    data[i] = -1;
  }
}
