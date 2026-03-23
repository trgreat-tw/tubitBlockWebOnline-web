/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {
    let oled_matrix_counter = 0;

    Blockly.Arduino.tubitv2_oled_start = function (block) {
        Blockly.Arduino.includes_.tubitv2o = `#include <Adafruit_GFX.h>\n#include <Adafruit_SH110X.h>`;
        Blockly.Arduino.definitions_.tubitv2o= `Adafruit_SH1106G display(128, 64, &Wire);\n`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] = `display.begin(0x3C, true);`;
        var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        var code = "display.clearDisplay();\n";
        code += branch.slice(2).replace(/\n  /g, '\n');
        code += "display.display();\n"

        return code;
    };

    Blockly.Arduino.tubitv2_oled_update = function (block) {
        Blockly.Arduino.includes_.tubitv2o = `#include <Adafruit_GFX.h>\n#include <Adafruit_SH110X.h>`;
        Blockly.Arduino.definitions_.tubitv2o= `Adafruit_SH1106G display(128, 64, &Wire);\n`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] = `display.begin(0x3C, true);\ndisplay.setRotation(0);\ndisplay.clearDisplay();`;
        return "display.display();\n";
    };

    Blockly.Arduino.tubitv2_oled_clear = function (block) {
        Blockly.Arduino.includes_.tubitv2o = `#include <Adafruit_GFX.h>\n#include <Adafruit_SH110X.h>`;
        Blockly.Arduino.definitions_.tubitv2o= `Adafruit_SH1106G display(128, 64, &Wire);\n`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] = `display.begin(0x3C, true);\ndisplay.setRotation(0);\ndisplay.clearDisplay();`;
        return "display.clearDisplay();\n";
    };

    Blockly.Arduino.tubitv2_oled_drawrline= function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);

        return `display.drawLine(${x0}, ${y0}, ${x1}, ${y1}, SH110X_WHITE);\n`;
    };

    Blockly.Arduino.tubitv2_oled_drawaxisalignedline= function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const length = Blockly.Arduino.valueToCode(block, 'LENGTH', Blockly.Arduino.ORDER_ATOMIC);
        const is_vertical = block.getFieldValue('IS_VERTICAL');

        if(is_vertical=="VERTICAL"){
            return `display.drawLine(${x}, ${y}, ${x}, ${y}+${length}, SH110X_WHITE);\n`;

        }else{
            return `display.drawLine(${x}, ${y}, ${x}+${length}, ${y}, SH110X_WHITE);\n`;
        }

    };

    Blockly.Arduino.tubitv2_oled_drawrectangle= function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const width = Blockly.Arduino.valueToCode(block, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC);
        const height = Blockly.Arduino.valueToCode(block, 'HEIGHT', Blockly.Arduino.ORDER_ATOMIC);
        const corner_radius = Blockly.Arduino.valueToCode(block, 'CORNER_RADIUS', Blockly.Arduino.ORDER_ATOMIC);
        const is_filled = block.getFieldValue('IS_FILLED');

        if(is_filled=="FILLED"){
            return `display.fillRoundRect(${x}, ${y}, ${width}, ${height}, ${corner_radius}, SH110X_WHITE);\n`;
             
        }else{
            return `display.drawRoundRect(${x}, ${y}, ${width}, ${height}, ${corner_radius}, SH110X_WHITE);\n`;
        }
    };

    Blockly.Arduino.tubitv2_oled_drawrcircle= function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const radius = Blockly.Arduino.valueToCode(block, 'RADIUS', Blockly.Arduino.ORDER_ATOMIC);
        const is_filled = block.getFieldValue('IS_FILLED');

        if(is_filled=="FILLED"){
            return `display.fillCircle(${x}, ${y}, ${radius}, SH110X_WHITE);\n`;
            
        }

        return `display.drawCircle(${x}, ${y}, ${radius}, SH110X_WHITE);\n`;

    };

    Blockly.Arduino.tubitv2_oled_drawrtriangle= function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const is_filled = block.getFieldValue('IS_FILLED');

        if(is_filled=="FILLED"){
            return `display.fillTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2}, SH110X_WHITE);\n`;
        }
        return `display.drawTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2}, SH110X_WHITE);\n`;
    };

    Blockly.Arduino.tubitv2_oled_font = function (block) {
    const font = block.getFieldValue('FONT');
    const string = Blockly.Arduino.valueToCode(block, 'STRING', Blockly.Arduino.ORDER_ATOMIC);
    const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
    const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
    
    if (font === 'u8g2_font_unifont_t_chinese1') {
        Blockly.Arduino.includes_['TUBITV2_OLED_FONT'] = `#include <U8g2_for_Adafruit_GFX.h>`;
        Blockly.Arduino.definitions_['TUBITV2_OLED_FONT'] = `U8G2_FOR_ADAFRUIT_GFX u8g2;`;
        Blockly.Arduino.setups_['TUBITV2_OLED_FONT'] = `u8g2.begin(display);`;
    }

    if (font === '') {
        return `display.setFont();\ndisplay.setTextSize(1);\ndisplay.setTextColor(SH110X_WHITE);\ndisplay.setCursor(${x}, ${y});\ndisplay.print(${string});\n`;
    } else {
        return `u8g2.setFont(${font});\nu8g2.setCursor(${x}, ${y});\nu8g2.print(${string});\n`;
    }
        
    };

    /* --- ANIMATION --- */

    Blockly.Arduino.tubitv2_oled_anim_draw_eyes = function (block) {
        Blockly.Arduino.includes_['TUBITV2_OLED_ANI']= `#include <eye_anim.h>`;
        Blockly.Arduino.setups_['TUBITV2_OLED_ANI'] = `init_eye_display(&display);`;

        const update = block.getFieldValue('UPDATE');

        if(update=="TRUE"){
            return `draw_eyes(true); \n`;
        }

        return `draw_eyes(false);\n`;
    };

    Blockly.Arduino.tubitv2_oled_anim_reset_eyes = function (block) {
        Blockly.Arduino.includes_['TUBITV2_OLED_ANI']= `#include <eye_anim.h>`;
        Blockly.Arduino.setups_['TUBITV2_OLED_ANI'] = `init_eye_display(&display);`;

        const update = block.getFieldValue('UPDATE');

        if(update=="TRUE"){
            return `reset_eyes(true);\n`;
        }

        return `reset_eyes(false);\n`;
    };
    
    Blockly.Arduino.tubitv2_oled_anim_blink = function (block) {
        Blockly.Arduino.includes_['TUBITV2_OLED_ANI']= `#include <eye_anim.h>`;
        Blockly.Arduino.setups_['TUBITV2_OLED_ANI'] = `init_eye_display(&display);`;
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        return `blink(${speed});\n`;
    };
    
    Blockly.Arduino.tubitv2_oled_anim_move_big_eye = function (block) {
        Blockly.Arduino.includes_['TUBITV2_OLED_ANI']= `#include <eye_anim.h>`;
        Blockly.Arduino.setups_['TUBITV2_OLED_ANI'] = `init_eye_display(&display);`;
        const direction = block.getFieldValue('DIRECTION');
        return `move_big_eye("${direction}");\n`;
    };
    
    Blockly.Arduino.tubitv2_oled_anim_saccade = function (block) {
        Blockly.Arduino.includes_['TUBITV2_OLED_ANI']= `#include <eye_anim.h>`;
        Blockly.Arduino.setups_['TUBITV2_OLED_ANI'] = `init_eye_display(&display);`;
        const direction_x = block.getFieldValue('DIRECTION_X');
        const direction_y = block.getFieldValue('DIRECTION_Y');
        return `saccade("${direction_x}", "${direction_y}");\n`;
    };
    
    Blockly.Arduino.tubitv2_oled_anim_launch_animation_with_index = function (block) {
        Blockly.Arduino.includes_['TUBITV2_OLED_ANI']= `#include <eye_anim.h>`;
        Blockly.Arduino.setups_['TUBITV2_OLED_ANI'] = `init_eye_display(&display);`;
        const index = block.getFieldValue('ANIM_INDEX');
        return `launch_animation_with_index(${index});\n`;
    };

    //chart...

    Blockly.Arduino.tubitv2_oled_draw_chart = function (block) {
        Blockly.Arduino.includes_.tubitv2o = `#include <Adafruit_GFX.h>\n#include <Adafruit_SH110X.h>`;
        Blockly.Arduino.definitions_.tubitv2o= `Adafruit_SH1106G display(128, 64, &Wire);\n`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] = `display.begin(0x3C, true);`;
        Blockly.Arduino.includes_['TUBITV2_OLED_CHART']= `#include <chart_display.h>`;
        Blockly.Arduino.definitions_['TUBITV2_OLED_CHART'] = `#define SCREEN_WIDTH 128\n#define SCREEN_HEIGHT 64\n#define OLED_RESET -1static int t = 0;\nstatic int mode = 0;\nstatic unsigned long lastSwitch = 0;\nint chartData[SCREEN_WIDTH];`;
        Blockly.Arduino.setups_['TUBITV2_OLED_CHART'] = `init_chart_display(&display);\n  clearChart(chartData, SCREEN_WIDTH);`;

        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
        const chart_type = block.getFieldValue('CHART_TYPE');
        const direction = block.getFieldValue('DIRECTION');
        return `chartData[SCREEN_WIDTH - 1] = ${value};\ndrawChart(chartData, ${chart_type}, ${direction});\n`;
    };

    Blockly.Arduino.tubitv2_oled_matrix= function (block) {
        const matrix_data = block.getFieldValue('MATRIX');
        const rows = [];

        for (let i = 0; i < 7; i++) {
            rows.push(`0b${matrix_data.slice(i * 14, (i + 1) * 14)}00`);
        }
        
        Blockly.Arduino.includes_.tubitv2o = `#include <Adafruit_GFX.h>`;
        Blockly.Arduino.includes_.tubitv2o += `\n#include <Adafruit_SH110X.h>`;
        Blockly.Arduino.includes_.tubitv2o += `\n#include <dot_matrix.h>`;
        
        if(!Blockly.Arduino.definitions_.tubitv2o){
            Blockly.Arduino.definitions_.tubitv2o = `Adafruit_SH1106G display(128, 64, &Wire, -1);\n`;
        }

        let hash = 0;
        for (let i = 0; i < matrix_data.length; i++) {
            hash = ((hash << 5) - hash) + matrix_data.charCodeAt(i);
            hash |= 0; // 轉成32-bit整數
        }
        const hex_id = `oled_matrix_buf${Math.abs(hash).toString(16)}`;

        Blockly.Arduino.definitions_[hex_id] = `uint16_t ${hex_id}[7] = {${rows.join(',')}};`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] = `display.begin(0x3C, true);`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] += `\n  display.setRotation(0);`;
        Blockly.Arduino.setups_['TUBITV2_OLED'] += `\n  init_dot_matrix(&display);`;
        
        return `drawDotMatrix8x12(${hex_id});\n`;
    };

    Blockly.Arduino.tubitv2_oled_createimage= function (block) {
    const imagename = Blockly.Arduino.valueToCode(block, 'IMAGENAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
	const bmpdata = Blockly.Arduino.valueToCode(block, 'BMPDATA', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
	const code =`static const unsigned char PROGMEM ${imagename}[] ={ ${bmpdata} };`;
	Blockly.Arduino.definitions_["tubitv2_oled_img_"+imagename] = code; 
        return '';
    };

    Blockly.Arduino.tubitv2_oled_displayimage= function (block) {

        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const imagename = Blockly.Arduino.valueToCode(block, 'IMAGENAME', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);

        return `display.drawBitmap(${x},${y},${imagename},${w},${h}, SH110X_WHITE);\n`;
        
        
    };

    return Blockly;
}

exports = registerGenerators;
