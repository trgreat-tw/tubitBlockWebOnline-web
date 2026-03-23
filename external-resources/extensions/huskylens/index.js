const tubitv2husky = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2husky.name',
        default: 'Huskylens'
    }),
    extensionId: 'tubitv2husky',

    version: '2.5.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',
    iconURL: `assets/huskylens.png`,
    description: formatMessage({
        id: 'tubitv2husky.description',
        default: 'Huskylens AI machine vision .'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://wiki.dfrobot.com/HUSKYLENS_V1.0_SKU_SEN0305_SEN0336'
});

module.exports = tubitv2husky;
