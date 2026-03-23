// TUbitBlock 設備列表配置
// 定制TubitBlock專案的設備選擇界面
// 根據 https://wiki.tubitblock.cc/zh/developer-guide/plugin-development/customizing-device-list

module.exports = [
    // TU:bit V2 設備 (主要設備)
    ['tubitv2_esp32', 'tubitv2_arduinoEsp32', 'tubitv2_microPythonEsp32'],
    
    // 常用的Arduino開發板
    'arduinoUno',
    'arduinoNano',
    'arduinoMega2560',
    
    // ESP32系列
    ['esp32', 'arduinoEsp32', 'microPythonEsp32'],
    ['esp8266NodeMCU', 'arduinoEsp8266NodeMCU', 'microPythonEsp8266NodeMCU'],
    
    // 其他常用開發板
    'microbit',
    'microbitV2',
    ['raspberryPiPico', 'arduinoRaspberryPiPico', 'microPythonRaspberryPiPico']
];
