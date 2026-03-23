const TUbitv2 = formatMessage => ({
    name: formatMessage({
        id: 'tubitv2.name',
        default: 'TU:bit V2'
    }),
    deviceId: 'tubitv2_esp32',
    manufactor: '鴻兔科技',
    learnMore: 'https://www.trgreat.com/', // A link you can learn more about the device
    typeList: ['arduino'],
    iconURL: 'assets/TUBITV2.png',
    description: formatMessage({
        id: 'tubitv2.description',
        default: '由鴻兔科技生產製造專為教育機器人開發的控制板。'
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'assets/TUBITV2-illustration.svg',
    connectionSmallIconURL: 'assets/TUBITV2-small.svg',
    translations: 'translations.js',
    programMode: ['upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c'],
    tags: ['kit'],
    helpLink: ''
});

const TUbitv2Arduino = formatMessage => {
    const device = TUbitv2(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'tubitv2_arduinoEsp32';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['tubitv2','tubitv2var','tubitv2b','tubitv2o','tubitv2m','tubitv2sm'],
    device.deviceExtensionsCompatible = 'arduinoEsp32';
    device.hide = true;
    return device;
};

const TUbitv2MicroPython = formatMessage => {
    const device = TUbitv2(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'tubitv2_microPythonEsp32';
    device.programMode = ['upload'];
    device.deviceExtensions = [];
    device.deviceExtensionsCompatible = 'microPythonEsp32';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    TUbitv2(formatMessage),
    TUbitv2Arduino(formatMessage),
    TUbitv2MicroPython(formatMessage),
]);