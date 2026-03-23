#include "MPU6050_Ext.h"

MPU6050_Ext::MPU6050_Ext(Adafruit_MPU6050* sensor) {
  mpu = sensor;
  lastTime = millis();
}

void MPU6050_Ext::update() {
  mpu->getEvent(&a, &g, &t);

  unsigned long now = millis();
  float dt = (now - lastTime) / 1000.0;
  lastTime = now;

  float gyroZ_deg = (g.gyro.z - gyroZ_offset) * 180.0 / 3.14159265;
  yaw += gyroZ_deg * dt;

  if (yaw > 180.0) yaw -= 360.0;
  if (yaw < -180.0) yaw += 360.0;

  filteredYaw = alpha * filteredYaw + (1 - alpha) * yaw;
}

float MPU6050_Ext::getYaw() {
  return filteredYaw;
}

void MPU6050_Ext::calibrate(int samples) {
  float sum = 0.0;
  for (int i = 0; i < samples; i++) {
    mpu->getEvent(&a, &g, &t);
    sum += g.gyro.z;
    delay(10);
  }
  gyroZ_offset = sum / samples;
}
