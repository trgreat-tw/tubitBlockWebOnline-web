const tubitv2v7rc = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2v7rc.name',
        default: 'V7RC Remote'
    }),

    extensionId: 'tubitv2v7rc',
    
    version: '2.5.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技 / YC',
    iconURL: `assets/v7rc.png`,

    description: formatMessage({
        id: 'tubitv2v7rc.description',
        default: 'V7RC BLE/WIFI Remote APP.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://www.facebook.com/V7RCAPP/?locale=zh_TW'
});

module.exports = tubitv2v7rc;
