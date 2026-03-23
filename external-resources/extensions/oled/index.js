const oled = formatMessage => ({
    name: 'OLED',
    extensionId: 'oled',
    version: '0.0.1',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `assets/oled.png`,
    description: formatMessage({
        id: 'oled.description',
        default: 'I2C oled display based on SSD1306 drivers.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://wiki.tubitblock.cc'
});

module.exports = oled;
