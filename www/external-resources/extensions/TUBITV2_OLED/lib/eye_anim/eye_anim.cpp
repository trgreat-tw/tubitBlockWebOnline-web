#include "eye_anim.h"

// 外部傳入的 OLED 指標
static Adafruit_SH1106G* display = nullptr;

// 初始化顯示器
void init_eye_display(Adafruit_SH1106G* external_display) {
  display = external_display;
  display->begin(0x3C, true);
  display->setRotation(0);
  display->clearDisplay();
  display->display();
}

// 顏色定義
const int COLOR_WHITE = 1;
const int COLOR_BLACK = 0;

// 常數參數
const int ref_eye_height = 40;
const int ref_eye_width = 40;
const int ref_space_between_eye = 10;
const int ref_corner_radius = 10;
const int base_x_offset = 7;

// 動態參數
int left_eye_x = 32 + base_x_offset;
int left_eye_y = 32;
int right_eye_x = 32 + ref_eye_width + ref_space_between_eye + base_x_offset;
int right_eye_y = 32;

int left_eye_height = ref_eye_height;
int right_eye_height = ref_eye_height;
int corner_radius = ref_corner_radius;
int left_eye_width = ref_eye_width;
int right_eye_width = ref_eye_width;

// 畫雙眼
void draw_eyes(bool update) {
  display->clearDisplay();

  int x = left_eye_x - left_eye_width / 2;
  int y = left_eye_y - left_eye_height / 2;
  display->fillRoundRect(x, y, left_eye_width, left_eye_height, corner_radius, COLOR_WHITE);

  x = right_eye_x - right_eye_width / 2;
  y = right_eye_y - right_eye_height / 2;
  display->fillRoundRect(x, y, right_eye_width, right_eye_height, corner_radius, COLOR_WHITE);

  if (update) display->display();
}

// 重設眼睛
void reset_eyes(bool update) {
  left_eye_height = ref_eye_height;
  right_eye_height = ref_eye_height;
  left_eye_width = ref_eye_width;
  right_eye_width = ref_eye_width;
  corner_radius = ref_corner_radius;

  left_eye_x = 32 + base_x_offset;
  left_eye_y = 32;
  right_eye_x = 32 + ref_eye_width + ref_space_between_eye + base_x_offset;
  right_eye_y = 32;

  draw_eyes(update);
}

void wakeup() {
  reset_eyes(false);
  for (int h = 2; h <= ref_eye_height; h += 2) {
    left_eye_height = right_eye_height = h;
    corner_radius = (h > ref_corner_radius) ? ref_corner_radius : h;
    draw_eyes(true);
  }
}

void sleep() {
  left_eye_height = right_eye_height = 2;
  corner_radius = 0;
  draw_eyes(true);
}

void blink(int speed) {
  reset_eyes(false);
  for (int i = 0; i < 3; i++) {
    left_eye_height -= speed;
    right_eye_height -= speed;
    draw_eyes(); delay(1);
  }
  for (int i = 0; i < 3; i++) {
    left_eye_height += speed;
    right_eye_height += speed;
    draw_eyes(); delay(1);
  }
}

void happy_eye() {
  int offset = ref_eye_height / 2;
  for (int i = 0; i < 15; i++) {
    display->fillTriangle(
      left_eye_x - left_eye_width / 2 - 1, left_eye_y + offset,
      left_eye_x + left_eye_width / 2 + 2, left_eye_y + 5 + offset,
      left_eye_x - left_eye_width / 2 - 1, left_eye_y + left_eye_height + offset,
      COLOR_BLACK);

    display->fillTriangle(
      right_eye_x + right_eye_width / 2 + 1, right_eye_y + offset,
      right_eye_x - left_eye_width / 2 - 2, right_eye_y + 5 + offset,
      right_eye_x + right_eye_width / 2 + 1, right_eye_y + right_eye_height + offset,
      COLOR_BLACK);

    offset -= 2;
    display->display(); delay(20);
  }
  delay(200);
}

void tired_eye() {
  for (int h = 0; h <= 15; h++) {
    draw_eyes(false);
    display->fillRect(left_eye_x - left_eye_width / 2, left_eye_y - left_eye_height / 2, left_eye_width, h, COLOR_BLACK);
    display->fillRect(right_eye_x - right_eye_width / 2, right_eye_y - right_eye_height / 2, right_eye_width, h, COLOR_BLACK);
    display->display(); delay(80);
  }
}

void angry_eye() {
  display->clearDisplay();
  for (int h = 0; h <= 25; h++) {
    draw_eyes(false);
    int center_x = (left_eye_x + right_eye_x) / 2;
    int top_y = left_eye_y - left_eye_height / 2 - 5;
    int bottom_y = top_y + h;
    display->fillTriangle(center_x - left_eye_width, top_y,
                          center_x + left_eye_width, top_y,
                          center_x, bottom_y,
                          COLOR_BLACK);
    display->display(); delay(10);
  }
}

void leftwink_eye() {
  draw_eyes(false); display->display(); delay(80);
  for (int h = ref_eye_height; h >= 2; h -= 4) {
    left_eye_height = h;
    right_eye_height = ref_eye_height;
    draw_eyes(false); display->display(); delay(10);
  }
  delay(20);
  for (int h = 2; h <= ref_eye_height; h += 4) {
    left_eye_height = h;
    right_eye_height = ref_eye_height;
    draw_eyes(false); display->display(); delay(10);
  }
}

void saccade(int dir_x, int dir_y) {
  int dx = 8 * dir_x, dy = 6 * dir_y, dblink = 8;
  left_eye_x += dx; right_eye_x += dx;
  left_eye_y += dy; right_eye_y += dy;
  left_eye_height -= dblink; right_eye_height -= dblink;
  draw_eyes(); delay(30);
  left_eye_x += dx; right_eye_x += dx;
  left_eye_y += dy; right_eye_y += dy;
  left_eye_height += dblink; right_eye_height += dblink;
  draw_eyes(); delay(30);
}

void move_big_eye(int direction) {
  int oversize = 1, move = 2, blink = 5;
  for (int i = 0; i < 3; i++) {
    left_eye_x += move * direction;
    right_eye_x += move * direction;
    left_eye_height -= blink; right_eye_height -= blink;
    if (direction > 0) right_eye_height += oversize, right_eye_width += oversize;
    else left_eye_height += oversize, left_eye_width += oversize;
    draw_eyes(); delay(1);
  }
  for (int i = 0; i < 3; i++) {
    left_eye_x += move * direction;
    right_eye_x += move * direction;
    left_eye_height += blink; right_eye_height += blink;
    if (direction > 0) right_eye_height += oversize, right_eye_width += oversize;
    else left_eye_height += oversize, left_eye_width += oversize;
    draw_eyes(); delay(1);
  }
  delay(800);
  for (int i = 0; i < 6; i++) {
    left_eye_x -= move * direction;
    right_eye_x -= move * direction;
    if (i < 3) {
      left_eye_height -= blink; right_eye_height -= blink;
      if (direction > 0) right_eye_height -= oversize, right_eye_width -= oversize;
      else left_eye_height -= oversize, left_eye_width -= oversize;
    } else {
      left_eye_height += blink; right_eye_height += blink;
      if (direction > 0) right_eye_height -= oversize, right_eye_width -= oversize;
      else left_eye_height -= oversize, left_eye_width -= oversize;
    }
    draw_eyes(); delay(1);
  }
  reset_eyes();
}

void move_right_big_eye() { move_big_eye(1); }
void move_left_big_eye()  { move_big_eye(-1); }

const int max_animation_index = 11;

void launch_animation_with_index(int index) {
  if (index > max_animation_index) index = max_animation_index;
  switch (index) {
    case 0: wakeup(); break;
    case 1: reset_eyes(true); break;
    case 2: move_big_eye(1); break;
    case 3: move_big_eye(-1); break;
    case 4: blink(12); delay(1000); break;
    case 5: happy_eye(); break;
    case 6: blink(12); break;
    case 7: leftwink_eye(); break;
    case 8: angry_eye(); break;
    case 9:
      reset_eyes(true);
      for (int i = 0; i < 20; i++) {
        int dx = random(-1, 2), dy = random(-1, 2);
        saccade(dx, dy); delay(1);
        saccade(-dx, -dy); delay(1);
      }
      break;
  }
}
