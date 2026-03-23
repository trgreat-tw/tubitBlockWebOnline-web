/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_TUBITV2_OLED_CATEGORY}" id="TUBITV2_OLED_CATEGORY" colour="#3A6EA5" secondaryColour="#3A6EA5" iconURI="../external-resources/extensions/TUBITV2_OLED/assets/TUBITV2_OLED.jpg">

    <block type="tubitv2_oled_start" id="tubitv2_oled_start"></block>
    <block type="tubitv2_oled_update" id="tubitv2_oled_update"></block>
    <block type="tubitv2_oled_clear" id="tubitv2_oled_clear"></block>
    <sep gap="36"/>
    <label text="%{BKY_TUBITV2_OLED_LABEL_ADVANCE_A}" />

    <block type="tubitv2_oled_drawrline" id="tubitv2_oled_drawrline">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="X1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_oled_drawaxisalignedline" id="tubitv2_oled_drawaxisalignedline">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="LENGTH">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_oled_drawrectangle" id="tubitv2_oled_drawrectangle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="WIDTH">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="HEIGHT">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="CORNER_RADIUS">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_oled_drawrcircle" id="tubitv2_oled_drawrcircle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="RADIUS">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_oled_drawrtriangle" id="tubitv2_oled_drawrtriangle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
            <value name="X1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="X2">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y2">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <label text="%{BKY_TUBITV2_OLED_LABEL_ADVANCE_BA}" />

    <block type="tubitv2_oled_matrix" id="tubitv2_oled_matrix">
        <value name="MATRIX">
            <shadow type="matrix">
                <field name="MATRIX">00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000</field>
            </shadow>
        </value>
    </block>

    <block type="tubitv2_oled_createimage" id="tubitv2_oled_createimage">
        <value name="IMAGENAME">
            <shadow type="text">
                <field name="TEXT">tubit_logo</field>
            </shadow>
        </value>
        <value name="BMPDATA">
            <shadow type="text">
                <field name="TEXT">0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X30,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X70,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X01,0XF0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X03,0XF0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X02,0X00,0X07,0XE0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X06,0X00,0X0F,0XE0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X06,0X00,0X1F,0XE0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X07,0X00,0X3F,0XC0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X0F,0X00,0X4F,0XC0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X0F,0X00,0XEB,0XC0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X0F,0X01,0XAB,0X80,0X00,0X00,0X00,0X0C,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X1F,0X03,0XB9,0X87,0XFE,0X70,0X70,0X0C,0X00,0XC0,0X00,0X60,0X30,0XF8,0X00,0X00,0X1E,0X07,0X93,0X87,0XFE,0X70,0X70,0X0C,0X00,0XE3,0X00,0X70,0X73,0XFC,0X00,0X00,0X1E,0X0F,0XC7,0X03,0XFE,0X70,0X70,0X0C,0X00,0XC3,0X00,0X70,0X73,0XFC,0X00,0X00,0X1C,0X1F,0XFE,0X00,0X70,0X70,0X70,0X0C,0X00,0X03,0X00,0X30,0X60,0X0E,0X00,0X00,0X3C,0X1F,0XFC,0X00,0X70,0X70,0X71,0X8D,0XE0,0XCF,0XE0,0X38,0XE0,0X0E,0X00,0X00,0X3C,0X3F,0XF0,0X00,0X70,0X70,0X73,0X8F,0XF0,0XCF,0XE0,0X38,0XE0,0X0C,0X00,0X00,0X38,0X7F,0XE0,0X00,0X70,0X70,0X71,0X8F,0XF8,0XC7,0XC0,0X18,0XC0,0X1C,0X00,0X00,0X38,0X7F,0XC0,0X00,0X70,0X70,0X70,0X0E,0X38,0XC3,0X00,0X1D,0XC0,0X38,0X00,0X00,0X30,0XFF,0X00,0X00,0X70,0X70,0X70,0X0C,0X18,0XC3,0X00,0X1D,0XC0,0X70,0X00,0X00,0X31,0XFE,0X00,0X00,0X70,0X70,0X70,0X0C,0X18,0XC3,0X00,0X0F,0X80,0XE0,0X00,0X00,0X31,0XFC,0X00,0X00,0X70,0X38,0XE0,0X0E,0X38,0XC3,0X80,0X0F,0X81,0XC0,0X00,0X00,0X23,0XF0,0X00,0X00,0X70,0X3F,0XE1,0X8F,0XF8,0XC3,0XE0,0X07,0X83,0XFC,0X00,0X00,0X63,0XE0,0X00,0X00,0X70,0X1F,0XC3,0X8F,0XF0,0XC3,0XE0,0X07,0X03,0XFC,0X00,0X00,0X67,0XC0,0X00,0X00,0X60,0X07,0X01,0X8C,0XC0,0XC0,0XC0,0X03,0X03,0XFC,0X00,0X00,0X67,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X0E,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X08,0X38,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X18,0X1E,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X30,0X0F,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X64,0X0F,0X80,0X00,0X00,0X00,0X00,0X80,0X00,0X00,0X20,0X00,0X00,0X00,0X00,0X00,0XCC,0X06,0XE0,0X00,0X81,0X00,0X01,0XD9,0X8C,0X46,0X70,0XC6,0X12,0X00,0X00,0X01,0X98,0X03,0X70,0X00,0XB5,0X6A,0XD1,0XDB,0XEC,0XEF,0X71,0XCF,0X7F,0X00,0X00,0X03,0X38,0X03,0X38,0X00,0XFD,0XFA,0XF0,0X92,0X69,0XF7,0X21,0X19,0X6B,0X00,0X00,0X03,0X2C,0X03,0X0C,0X00,0XFD,0XFB,0XF0,0X92,0X69,0X8D,0X21,0X19,0X6B,0X00,0X00,0X06,0X00,0X01,0X86,0X00,0X6C,0XDB,0X66,0XD3,0XE8,0XEF,0X35,0XCF,0X6B,0X00,0X00,0X06,0X00,0X01,0X80,0X00,0X00,0X00,0X00,0X00,0X60,0X00,0X00,0X00,0X00,0X00,0X00,0X04,0X00,0X01,0X80,0X00,0X00,0X00,0X00,0X03,0XC0,0X00,0X00,0X00,0X00,0X00,0X00,0X0C,0X00,0X01,0X80,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X0C,0X00,0X01,0X80,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X0E,0X01,0X01,0X80,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X07,0XFC,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X01,0XF0,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,</field>
            </shadow>
        </value>
    </block>

<block type="tubitv2_oled_displayimage" id="tubitv2_oled_displayimage">
<value name="X">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="Y">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="W">
<shadow type="math_whole_number">
    <field name="NUM">128</field>
</shadow>
</value>
<value name="H">
<shadow type="math_whole_number">
    <field name="NUM">48</field>
</shadow>
</value>

<value name="IMAGENAME">
<shadow type="text">
    <field name="TEXT">tubit_logo</field>
</shadow>
</value>

</block>

    <label text="%{BKY_TUBITV2_OLED_LABEL_ADVANCE_B}" />

    
<block type="tubitv2_oled_font" id="tubitv2_oled_font">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="STRING">
            <shadow type="text">
                <field name="TEXT">Hello Tubit V2</field>
            </shadow>
        </value>
        </block>

    <label text="%{BKY_TUBITV2_OLED_LABEL_ADVANCE_C}" />

    <block type="tubitv2_oled_draw_chart" id="tubitv2_oled_draw_chart">
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <label text="%{BKY_TUBITV2_OLED_LABEL_ADVANCE_D}" />

    <block type="tubitv2_oled_anim_draw_eyes" id="tubitv2_oled_anim_draw_eyes"></block>
    <block type="tubitv2_oled_anim_reset_eyes" id="tubitv2_oled_anim_reset_eyes"></block>

    <block type="tubitv2_oled_anim_blink" id="tubitv2_oled_anim_blink">
        <value name="SPEED">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    

    <block type="tubitv2_oled_anim_move_big_eye" id="tubitv2_oled_anim_move_big_eye"></block>
    <block type="tubitv2_oled_anim_saccade" id="tubitv2_oled_anim_saccade"></block>
    
    <block type="tubitv2_oled_anim_launch_animation_with_index" id="tubitv2_oled_anim_launch_animation_with_index"></block>

    <sep gap="36"/>

</category>`;
}

exports = registerToolboxs;
