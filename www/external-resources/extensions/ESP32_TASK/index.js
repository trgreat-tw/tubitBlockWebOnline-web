const tubittask = formatMessage => ({
  
    name: formatMessage({
        id: 'tubittask.name',
        default: 'tubittask.description'
    }),
    extensionId: 'tubittask',

    version: '1.0.0',//版本
    supportDevice: [ 'arduinoEsp32'],//支援板子
    author: 'HONG TU 鴻兔科技',//作者
    iconURL: `assets/task.png`,
    description: formatMessage({//描述
        id: 'tubittask.description',
        default: '適用ESP32雙核心執行多工任務。'
    }),
    featured: true,
    // hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['kit'],
    helpLink: 'https://docs.espressif.com/projects/esp-idf/en/v4.3/esp32/api-reference/system/freertos.html'
});

module.exports = tubittask;
