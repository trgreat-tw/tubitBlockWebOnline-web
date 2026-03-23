const tubitv2bno055 = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2bno055.name',
        default: 'BNO055 9軸感測模組'
    }),
    extensionId: 'tubitv2bno055',
    version: '1.0.0',
    supportDevice: [ 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2bno055.png`,
    description: formatMessage({
        id: 'tubitv2bno055.description',
        default: '讀取絕對方向、角速度、加速度、磁場強度、線性加速度、重力與溫度等數據'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://github.com/madhephaestus/EasyBNO055_ESP'
});

module.exports = tubitv2bno055;
