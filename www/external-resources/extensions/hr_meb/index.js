const hrmeb = formatMessage => ({

    name: formatMessage({
        id: 'hrmeb.name',
        default: 'HR_MEB ESP32 Motor Expansion Board. '
    }),

    extensionId: 'hrmeb',
    
    version: '1.0.0',
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',
    iconURL: `assets/hrmeb.png`,

    description: formatMessage({
        id: 'hrmeb.description',
        default: 'HR_MEB ESP32 Motor Expansion Board.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['shield'],
    helpLink: 'https://www.trgreat.com/%E7%86%B1%E8%B3%A3%E7%94%A2%E5%93%81-%E6%95%99%E8%82%B2%E5%9E%8B%E6%A9%9F%E5%99%A8%E4%BA%BA/hr_meb-esp32'
});

module.exports = hrmeb;
