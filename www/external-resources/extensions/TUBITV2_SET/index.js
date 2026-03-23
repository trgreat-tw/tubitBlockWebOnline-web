const tubitv2 = formatMessage => ({
    name: 'TUBIT V2 SET',//名稱
    
    name: formatMessage({
        id: 'tubitv2.name',
        default: 'TUBIT V2 SET'
    }),
    extensionId: 'tubitv2',

    version: '2.0.0',//版本
    supportDevice: [ 'arduinoEsp32'],//支援板子
    author: 'HONG TU 鴻兔科技',//作者
    iconURL: `assets/TUBITV2.jpg`,
    description: formatMessage({//描述
        id: 'tubitv2.description',
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

module.exports = tubitv2;
