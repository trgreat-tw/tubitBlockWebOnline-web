const tubitv2lightsensor = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2lightsensor.name',
        default: '光照感測器'
    }),
    extensionId: 'tubitv2lightsensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2lightsensor.png`,
    description: formatMessage({
        id: 'tubitv2lightsensor.description',
        default: '感測周圍的光線'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.trgreat.com'
});

module.exports = tubitv2lightsensor;
