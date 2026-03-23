#include "dot_matrix.h"

Adafruit_SH1106G* _matrix_display = nullptr;

void init_dot_matrix(Adafruit_SH1106G *display) {
  _matrix_display = display;
}

void drawDotMatrix8x12(uint16_t pattern[7]) {
  if (_matrix_display == nullptr) return;

  const int cols = 16;         // 每列16格
  const int rows = 7;          // 每行7格
  const int cellW = 8;         // 每格寬度
  const int cellH = 8;         // 每格高度
  const int spacing = 1;       // 間距
  const int offsetX = 0;
  const int offsetY = 0;

  _matrix_display->clearDisplay();

  for (int row = 0; row < rows; row++) {
    for (int col = 0; col < cols; col++) {
      int x = offsetX + col * (cellW + spacing);
      int y = offsetY + row * (cellH + spacing);

      bool on = (pattern[row] >> (15 - col)) & 0x01;

      if (on)
        _matrix_display->fillRect(x, y, cellW, cellH, SH110X_WHITE);
      else
        _matrix_display->drawRect(x, y, cellW, cellH, SH110X_BLACK);  // 畫外框
    }
  }

  _matrix_display->display();
}
