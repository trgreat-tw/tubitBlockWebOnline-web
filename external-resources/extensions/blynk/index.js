const tubitv2blynk = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2blynk.name',
        default: 'BLYNK IOT'
    }),
    extensionId: 'tubitv2blynk',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2blynk.png`,
    description: formatMessage({
        id: 'tubitv2blynk.description',
        default: '透過 BLYNK 架設物聯網'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://blynk.io/'
});

module.exports = tubitv2blynk;