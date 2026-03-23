const tubitv2o = formatMessage => ({
    
    name: formatMessage({
        id: 'tubitv2o.name',
        default: 'TUBIT V2 OLED'
    }),
    extensionId: 'tubitv2o',

    version: '1.5.0',
    supportDevice: ['arduinoEsp32'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/TUBITV2_OLED.jpg`,
    description: formatMessage({
        id: 'tubitv2o.description',
        default: 'For TU:bit V2 Control board.'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://www.trgreat.com'
});

module.exports = tubitv2o;