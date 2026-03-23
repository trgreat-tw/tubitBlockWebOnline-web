#ifndef STROP_H
#define STROP_H
#include <Arduino.h>
String SubString(String src, int from) {
  return src.substring(from);
}

String SubString(String src, int from, int to) {
  return src.substring(from, to);
}

double StrToDouble(String str) {
  return str.toDouble();
}

int StrToInt(const char* str) {
  char* endptr;
  long value = strtol(str, &endptr, 10);

  if (*endptr != '\0' || (value > INT_MAX || value < INT_MIN)) { return 0; }
  return (int)value;
}

int StrToInt(String str) {
  return str.toInt();
}

#endif
