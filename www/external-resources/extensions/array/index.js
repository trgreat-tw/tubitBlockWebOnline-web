const tubitv2array = formatMessage => ({
  
    name: formatMessage({
        id: 'tubitv2array.name',
        default: 'tubitv2array.description'
    }),
    extensionId: 'tubitv2array',

    version: '1.0.0',//版本
    supportDevice: [ 'arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],//支援板子
    author: 'HONG TU 鴻兔科技',//作者
    iconURL: `assets/TUBITV2.jpg`,
    description: formatMessage({//描述
        id: 'tubitv2array.description',
        default: '建立陣列資料。'
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
    helpLink: 'https://docs.arduino.cc/language-reference/en/variables/data-types/array/'
});

module.exports = tubitv2array;
