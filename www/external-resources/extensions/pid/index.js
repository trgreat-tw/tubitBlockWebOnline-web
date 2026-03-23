const tubitv2pid = formatMessage => ({
    
    name: formatMessage({
        id: 'tubitv2pid.name',
        default: 'PID Control'
    }),
    extensionId: 'tubitv2pid',

    version: '1.5.0',//版本
    supportDevice: [ 'arduinoEsp32'],
    author: 'HONG TU 鴻兔科技',//作者
    iconURL: `assets/pid.png`,
    description: formatMessage({//描述
        id: 'tubitv2pid.description',
        default: 'PID Control.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://www.trgreat.com'
});

module.exports = tubitv2pid;
