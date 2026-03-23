const tubitv2dtc = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2dtc.name',
        default: 'TUBIT V2 DTC V1 ROBOT'
    }),
    extensionId: 'tubitv2dtc',

    version: '1.0.1',
    supportDevice: ['arduinoEsp32'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/dtcv1.png`,
    description: formatMessage({
        id: 'tubitv2dtc.description',
        default: 'For DTC V1 ROBOT.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://trgreat.com/tubitv2-dtckit/'
});

module.exports = tubitv2dtc;
