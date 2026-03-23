/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_MPU6050_CATEGORY}" id="MPU6050_CATEGORY" colour="#0066CC" secondaryColour="#005AB5" iconURI="../external-resources/extensions/mpu6050/assets/mpu6050.png">
    <block type="mpu6050_init" id="mpu6050_init">
        <field name="AR">MPU6050_RANGE_8_G</field>
        <field name="GR">MPU6050_RANGE_500_DEG</field>
        <field name="FB">MPU6050_BAND_21_HZ</field>
    </block>
    <block type="mpu6050_readData" id="mpu6050_readData"></block>
    <block type="mpu6050_acceleration" id="mpu6050_acceleration"></block>
    <block type="mpu6050_gyro" id="mpu6050_gyro"></block>
    <block type="mpu6050_temperature" id="mpu6050_temperature"></block>
    
    <block type="mpu6050_calibrate" id="mpu6050_calibrate"></block>
    <block type="mpu6050_updateYaw" id="mpu6050_updateYaw"></block>
    <block type="mpu6050_getYaw" id="mpu6050_getYaw"></block>
</category>`;
}

exports = registerToolboxs;
