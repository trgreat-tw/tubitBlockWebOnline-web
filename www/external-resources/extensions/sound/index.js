const tubitv2sonudsensor = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2sonudsensor.name',
        default: '聲音感測器'
    }),
    extensionId: 'tubitv2sonudsensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2sonudsensor.png`,
    description: formatMessage({
        id: 'tubitv2sonudsensor.description',
        default: '感測周遭的聲音.'
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

module.exports = tubitv2sonudsensor;
