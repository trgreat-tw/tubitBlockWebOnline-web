// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {
        "en": {
            "mpu6050.name": "MPU6050 Sensor",
            "mpu6050.description": "6-axis attitude sensor module based on MPU6050."
        },
        "ru": {
            "mpu6050.name": "Датчик MPU6050 ",
            "mpu6050.description": "Модуль 6-осевого датчика положения на базе MPU6050."
        },
        "zh-cn": {
            "mpu6050.name": "MPU6050 陀螺儀",
            "mpu6050.description": "基于 MPU6050 的6轴姿态陀螺儀。"
        },
        "zh-tw": {
            "mpu6050.name": "MPU6050 陀螺儀",
            "mpu6050.description": "基於 MPU6050 的6軸姿態陀螺儀。"
        }
    }
    ;
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "MPU6050_ACCELERATION": "mpu6050 %1 axis acceleration (m/s^2)",
            "MPU6050_CATEGORY": "MPU6050",
            "MPU6050_GYRO": "mpu6050 %1 axis rotation (rad/s)",
            "MPU6050_INIT": "init mpu6050 accelerometer range %1 gyro range %2 filter bandwidth %3",
            "MPU6050_READDATA": "mpu6050 read data",
            "MPU6050_TEMPERATURE": "mpu6050 temperature (℃)",
            "MPU6050_CALIBRATE": "mpu6050 calibrate angle",
            "MPU6050_UPDATEYAW": "mpu6050 update yaw angle data",
            "MPU6050_GETYAW": "mpu6050 get angle (Yaw)"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "MPU6050_ACCELERATION": "mpu6050 %1 轴加速度 (m/s^2)",
            "MPU6050_CATEGORY": "MPU6050",
            "MPU6050_GYRO": "mpu6050 %1 轴角速度 (rad/s)",
            "MPU6050_INIT": "初始化 mpu6050 加速度计范围 %1 陀螺仪范围 %2 滤波器带宽 %3",
            "MPU6050_READDATA": "mpu6050 读取数据",
            "MPU6050_TEMPERATURE": "mpu6050 温度 (℃)",
            "MPU6050_CALIBRATE": "mpu6050校准角度",
            "MPU6050_UPDATEYAW": "mpu6050更新角度数据",
            "MPU6050_GETYAW": "mpu6050读取角度(Yaw)"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "MPU6050_ACCELERATION": "mpu6050 %1 軸加速度 (m/s^2)",
            "MPU6050_CATEGORY": "MPU6050",
            "MPU6050_GYRO": "mpu6050 %1 軸角速度 (rad/s)",
            "MPU6050_INIT": "初始化 mpu6050 加速度計範圍 %1 陀螺儀範圍 %2 濾波器帶寬 %3",
            "MPU6050_READDATA": "mpu6050 讀取數據",
            "MPU6050_TEMPERATURE": "mpu6050 溫度 (℃)",
            "MPU6050_CALIBRATE":"mpu6050校正角度",
            "MPU6050_UPDATEYAW":"mpu6050更新角度數據",
            "MPU6050_GETYAW":"mpu6050讀取角度(Yaw)"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
