const rgbLedStrip = formatMessage => ({
    name: formatMessage({
        id: 'rgbLedStrip.name',
        default: 'RGB LED Strip'
    }),
    extensionId: 'rgbLedStrip',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'ArthurZheng',
    iconURL: `assets/rgbLedStrip.png`,
    description: formatMessage({
        id: 'rgbLedStrip.description',
        default: 'Single-wire-based RGB LED pixels and strip.'
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

module.exports = rgbLedStrip;
