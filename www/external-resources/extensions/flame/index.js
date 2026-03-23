const tubitv2flamesensor = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2flamesensor.name',
        default: '火焰感測器'
    }),
    extensionId: 'tubitv2flamesensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2flamesensor.png`,
    description: formatMessage({
        id: 'tubitv2flamesensor.description',
        default: '偵測周遭的火焰.'
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

module.exports = tubitv2flamesensor;
