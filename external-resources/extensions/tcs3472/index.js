const tubitv2tcs3472 = formatMessage => ({
    
    name: formatMessage({
        id: 'tubitv2tcs3472.name',
        default: 'TCS3472'
    }),
    extensionId: 'tubitv2tcs3472',

    version: '1.5.0',//版本
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HONG TU 鴻兔科技',//作者
    iconURL: `assets/tcs3472.png`,
    description: formatMessage({//描述
        id: 'tubitv2tcs3472.description',
        default: 'RGB顏色感測模組.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://drive.google.com/drive/folders/1eDjsCnKLM8Wl6UB95v1c3TjAhB84cwa4'
});

module.exports = tubitv2tcs3472;
