const tubitv2mtc = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2mtc.name',
        default: 'TUBIT V2 MTC V2 ROBOT'
    }),
    extensionId: 'tubitv2mtc',

    version: '2.4.0',
    supportDevice: ['arduinoEsp32'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/mtcv2.png`,
    description: formatMessage({
        id: 'tubitv2mtc.description',
        default: 'For MTC V2 ROBOT.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://trgreat.com/tubitv2-mtckit/'
});

module.exports = tubitv2mtc;
