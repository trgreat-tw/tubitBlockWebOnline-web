const tubitv2b = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2b.name',
        default: 'TUBIT V2 BUTTON'
    }),
    extensionId: 'tubitv2b',

    version: '2.0.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',
    iconURL: `assets/TUBITV2.jpg`,
    description: formatMessage({
        id: 'tubitv2.description',
        default: 'For TU:bit V2 Control board.'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    tags: ['kit'],
    helpLink: 'https://www.trgreat.com'
});

module.exports = tubitv2b;