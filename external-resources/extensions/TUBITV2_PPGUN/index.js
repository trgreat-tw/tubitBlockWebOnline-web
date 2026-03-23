const tubitv2ppgun = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2ppgun.name',
        default: 'ppgun Remote'
    }),

    extensionId: 'tubitv2ppgun',
    
    version: '1.0.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',
    iconURL: `assets/ppgun.png`,

    description: formatMessage({
        id: 'tubitv2ppgun.description',
        default: 'Ping Pong Launcher Control for TuBit V2 MTC Robot Kit'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://trgreat.com/mtc-robot-ppgun-kit/'
});

module.exports = tubitv2ppgun;
