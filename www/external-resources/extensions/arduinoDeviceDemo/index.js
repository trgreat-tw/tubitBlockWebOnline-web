const arduinoDeviceDemo = () => ({
    name: 'Third Party Device Demo',
    extensionId: 'arduinoDeviceDemo',
    version: '1.0.0',
    supportDevice: ['deviceDemo_arduinoEsp32'],
    author: 'TUbitBlock',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    helpLink: ''
});

module.exports = arduinoDeviceDemo;
