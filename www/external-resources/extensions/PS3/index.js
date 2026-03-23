const ps3_controller = formatMessage => ({

    name: formatMessage({
        id: 'ps3_controller.name',
        default: 'PS3 Controller',
    }),
    extensionId: 'ps3_controller',

    version: '1.0.0',
    supportDevice: [ 'arduinoEsp32'],
    author: '鴻兔科技',
    iconURL: `assets/ps3.png`,
    description: formatMessage({
        id: 'ps3_controller.description',
        default: 'Connecting a PS3 controller with ESP32.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    library: 'lib',
    tags: ['communication'],
    helpLink: 'ww'
});

module.exports = ps3_controller;