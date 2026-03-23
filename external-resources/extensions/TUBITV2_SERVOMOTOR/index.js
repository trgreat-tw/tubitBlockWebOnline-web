const tubitv2sm = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2sm.name',
        default: 'TUBIT V2 SERVO MOTOR'
    }),
    extensionId: 'tubitv2sm',
    
    version: '2.0.0',
    supportDevice: ['arduinoEsp32'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/TUBITV2.jpg`,
    description: formatMessage({
        id: 'tubitv2sm.description',
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

module.exports = tubitv2sm;
