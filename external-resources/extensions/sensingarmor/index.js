const sensorarmor = formatMessage => ({
    name: formatMessage({
        id: 'sensorarmor.name',
        default: '感測裝甲'
    }),
    extensionId: 'sensorarmor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/sensorarmor.png`,
    description: formatMessage({
        id: 'sensorarmor.description',
        default: '感測觸碰力道、感測乒乓球射擊'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://www.trgreat.com/%E7%86%B1%E8%B3%A3%E7%94%A2%E5%93%81-%E6%95%99%E8%82%B2%E5%9E%8B%E6%A9%9F%E5%99%A8%E4%BA%BA/%E6%84%9F%E6%B8%AC%E8%A3%9D%E7%94%B2'
});

module.exports = sensorarmor;
