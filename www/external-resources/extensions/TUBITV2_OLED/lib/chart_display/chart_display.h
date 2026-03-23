#ifndef CHART_DISPLAY_H
#define CHART_DISPLAY_H

#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>

// 圖表類型
#define CHART_LINE 0
#define CHART_BAR  1

// 顯示方向
#define DIR_LEFT_TO_RIGHT 0
#define DIR_RIGHT_TO_LEFT 1

// 初始化傳入顯示器
void init_chart_display(Adafruit_SH1106G* display);
void drawChart(int* data, byte chartType, byte dirType);
void clearChart(int* data, int length);

#endif
