const tubitv2var = formatMessage => ({
  
    name: formatMessage({
        id: 'tubitv2var.name',
        default: 'tubitv2var.description'
    }),
    extensionId: 'tubitv2var',

    version: '1.5.0',//版本
    supportDevice: [ 'arduinoEsp32'],//支援板子
    author: 'HONG TU 鴻兔科技',//作者
    iconURL: `assets/TUBITV2.jpg`,
    description: formatMessage({//描述
        id: 'tubitv2var.description',
        default: '建立更多型別變數與字串轉換、分割等。'
    }),
    featured: true,
    // hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://www.trgreat.com'
});

module.exports = tubitv2var;
