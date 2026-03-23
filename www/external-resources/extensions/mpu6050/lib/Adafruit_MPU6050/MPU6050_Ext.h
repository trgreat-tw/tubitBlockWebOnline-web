#ifndef MPU6050_EXT_H
#define MPU6050_EXT_H

#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>

class MPU6050_Ext {
  public:
    MPU6050_Ext(Adafruit_MPU6050* sensor);

    // 每次執行積分與濾波
    void update();

    // 回傳濾波後 yaw 角度
    float getYaw();

    // 校正 Z 軸偏移量
    void calibrate(int samples = 30);

  private:
    Adafruit_MPU6050* mpu;
    sensors_event_t a, g, t;

    float yaw = 0.0;
    float filteredYaw = 0.0;
    float gyroZ_offset = 0.0;
    float alpha = 1;
    unsigned long lastTime = 0;
};

#endif
