#ifndef EYE_ANIM_H
#define EYE_ANIM_H

#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>

void init_eye_display(Adafruit_SH1106G* external_display);
void draw_eyes(bool update = true);
void reset_eyes(bool update = true);
void wakeup();
void sleep();
void blink(int speed = 12);
void happy_eye();
void tired_eye();
void angry_eye();
void leftwink_eye();
void saccade(int direction_x, int direction_y);
void move_right_big_eye();
void move_left_big_eye();
void move_big_eye(int direction);
void launch_animation_with_index(int animation_index);

#endif
