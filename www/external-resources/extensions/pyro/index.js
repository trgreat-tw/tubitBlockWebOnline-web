const tubitv2pyro = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2pyro.name',
        default: '人體紅外線感測器'
    }),
    extensionId: 'tubitv2pyro',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2pyro.png`,
    description: formatMessage({
        id: 'tubitv2pyro.description',
        default: '偵測人體放出的紅外線'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://drive.google.com/drive/folders/1eDjsCnKLM8Wl6UB95v1c3TjAhB84cwa4'
});

module.exports = tubitv2pyro;
