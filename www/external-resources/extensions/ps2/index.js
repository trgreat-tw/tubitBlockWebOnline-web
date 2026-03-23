const ps2 = formatMessage => ({
    name: formatMessage({
        id: 'ps2.name',
        default: 'PS2 Remote Control'
    }),
    extensionId: 'ps2',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `assets/ps2.png`,
    description: formatMessage({
        id: 'ps2.description',
        default: 'PS2 wireless remote controller with 4 signal lines.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://drive.google.com/drive/folders/1V2P6gk_SAqTEU7IYe3f9Y3sNaMy0XsuO'
});

module.exports = ps2;
