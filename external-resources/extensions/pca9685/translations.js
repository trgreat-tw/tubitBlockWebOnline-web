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
            "pca9685.name": "PCA9685 Module",
            "pca9685.description": "The 16 channel PWM driver module based on PCA9685, uses IIC bus for communication."
        },
        "ru": {
            "pca9685.name": "Модуль PCA9685 ",
            "pca9685.description": "16-канальный модуль ШИМ-драйвера на базе PCA9685 использующий для связи шину IIC."
        },
        "zh-cn": {
            "pca9685.name": "PCA9685 模块",
            "pca9685.description": "基于 PCA9685 的16通道 PWM 驱动模块, 使用 I2C 总线进行通讯。"
        },
        "zh-tw": {
            "pca9685.name": "PCA9685 模塊",
            "pca9685.description": "基於 PCA9685 的16通道 PWM 驅動模塊, 使用 I2C 總線進行通訊。"
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
            "PCA9685_CATEGORY": "PCA9685",
            "PCA9685_INIT": "init pca9685 iic address %1",
            "PCA9685_SETALLCHANNELPWM": "pca9685 set all channel pwm value %1",
            "PCA9685_SETALLSERVOANGLE": "pca9685 set all servo angle %1",
            "PCA9685_SETCHANNELPWM": "pca9685 set channel %1 pwm value %2",
            "PCA9685_SETPWMFREQUENCY": "pca9685 set pwm frequency %1",
            "PCA9685_SETSERVOANGLE": "pca9685 set channel %1 servo angle %2",
            "PCA9685_SETTOSERVOMODE": "pca9685 set to servo mode"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["ru"],
        {
            "PCA9685_CATEGORY": "PCA9685",
            "PCA9685_INIT": "инициализировать pca9685 iic адрес %1",
            "PCA9685_SETALLCHANNELPWM": "драйверу pca9685 установить значение ШИМ для всех каналов %1",
            "PCA9685_SETALLSERVOANGLE": "драйверу pca9685 установить все углы сервопривода %1",
            "PCA9685_SETCHANNELPWM": "драйверу pca9685 установить канал %1 значение ШИМ %2",
            "PCA9685_SETPWMFREQUENCY": "драйверу pca9685 установить частоту ШИМ %1",
            "PCA9685_SETSERVOANGLE": "драйверу pca9685 установить канал %1 угол сервопривода %2",
            "PCA9685_SETTOSERVOMODE": "драйвер pca9685 установить в режим сервопривода"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"],
        {
            "PCA9685_CATEGORY": "PCA9685",
            "PCA9685_INIT": "初始化 pca9685 iic 地址 %1",
            "PCA9685_SETALLCHANNELPWM": "pca9685 设置所有通道 pwm 值 %1",
            "PCA9685_SETALLSERVOANGLE": "pca9685 设置所有舵机角度 %1",
            "PCA9685_SETCHANNELPWM": "pca9685 设置通道 %1 pwm 值 %2",
            "PCA9685_SETPWMFREQUENCY": "pca9685 设置 pwm 频率 %1",
            "PCA9685_SETSERVOANGLE": "pca9685 设置通道 %1 舵机角度 %2",
            "PCA9685_SETTOSERVOMODE": "pca9685 设置为舵机模式"
        }
    );

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"],
        {
            "PCA9685_CATEGORY": "PCA9685",
            "PCA9685_INIT": "初始化 pca9685 iic 地址 %1",
            "PCA9685_SETALLCHANNELPWM": "pca9685 設置所有通道 pwm 值 %1",
            "PCA9685_SETALLSERVOANGLE": "pca9685 設置所有舵機角度 %1",
            "PCA9685_SETCHANNELPWM": "pca9685 設置通道 %1 pwm 值 %2",
            "PCA9685_SETPWMFREQUENCY": "pca9685 設置 pwm 頻率 %1",
            "PCA9685_SETSERVOANGLE": "pca9685 設置通道 %1 舵機角度 %2",
            "PCA9685_SETTOSERVOMODE": "pca9685 設置為舵機模式"
        }
    );

    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
