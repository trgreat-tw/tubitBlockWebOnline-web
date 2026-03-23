#ifndef DOT_MATRIX_H
#define DOT_MATRIX_H

#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>  

void init_dot_matrix(Adafruit_SH1106G *display);
void drawDotMatrix8x12(uint16_t pattern[7]);

#endif
