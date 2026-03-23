const tubitv2otc = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2otc.name',
        default: 'TUBIT V2 OTC V2 ROBOT'
    }),
    extensionId: 'tubitv2otc',

    version: '2.4.0',
    supportDevice: ['arduinoEsp32'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/otcv2.png`,
    description: formatMessage({
        id: 'tubitv2otc.description',
        default: 'For OTC V2 ROBOT.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://trgreat.com/tubitv2-otckit/'
});

module.exports = tubitv2otc;
