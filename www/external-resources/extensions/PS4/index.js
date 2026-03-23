const ps4_controller = formatMessage => ({

    name: formatMessage({
        id: 'ps4_controller.name',
        default: 'PS4 Controller',
    }),
    extensionId: 'ps4_controller',

    version: '0.0.２',
    supportDevice: [ 'arduinoEsp32'],
    author: 'YC',
    iconURL: `assets/ps4.png`,
    description: formatMessage({
        id: 'ps4_controller.description',
        default: 'Connecting a PS4 controller with ESP32.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    official: true,
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://github.com/pablomarquez76/PS4_Controller_Host'
});

module.exports = ps4_controller;