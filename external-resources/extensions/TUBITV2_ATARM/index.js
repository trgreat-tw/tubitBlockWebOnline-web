const tubitv2atarm = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2atarm.name',
        default: 'atarm Remote'
    }),

    extensionId: 'tubitv2atarm',
    
    version: '1.0.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',
    iconURL: `assets/atarm.png`,

    description: formatMessage({
        id: 'tubitv2atarm.description',
        default: 'Robotic Arm Control for TuBit V2 TC Robot Kit.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://trgreat.com/mtc-robot-arm-kit/'
});

module.exports = tubitv2atarm;
