const tubitv2MLLL = formatMessage => ({

    name: formatMessage({
        id: 'tubitv2MLLL.name',
        default: 'MMMLLL' /*顯示名稱*/
    }),
    extensionId: 'tubitv2MLLL',

    version: '1.5.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',
    iconURL: `assets/AI.png`,
    description: formatMessage({
        id: 'tubitv2MLLL.description',
        default: 'ML model.'
    }),
    featured: true,
    //hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    library: 'lib',
    tags: ['kit'],
    helpLink: 'https://www.trgreat.com'
});

module.exports = tubitv2MLLL;