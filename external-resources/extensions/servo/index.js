const servo = formatMessage => ({
    name: formatMessage({
        id: 'servo.name',
        default: 'Servo',
        description: 'Name of servo'
    }),
    extensionId: 'servo',
    version: '1.0.0',
    type: 'microbit',
    supportDevice: ['microbit', 'microbitV2'],
    author: 'ArthurZheng',
    iconURL: `assets/servo.png`,
    description: formatMessage({
        id: 'servo.description',
        default: 'Classic servo support for microbit.',
        description: 'Description of servo'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['actuator'],
    helpLink: 'https://wiki.tubitblock.cc'
});

module.exports = servo;
