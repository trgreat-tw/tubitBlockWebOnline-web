const tubitv2irprox = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2irprox.name',
        default: '紅外線收發感測器'
    }),
    extensionId: 'tubitv2irprox',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'HUNG TU 鴻兔科技',
    iconURL: `assets/tubitv2irprox.png`,
    description: formatMessage({
        id: 'tubitv2irprox.description',
        default: '發射與接收紅外線反饋以感測距離.'
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

module.exports = tubitv2irprox;
