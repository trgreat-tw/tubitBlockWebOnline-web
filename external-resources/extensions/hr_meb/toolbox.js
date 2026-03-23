/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_HRMEB_CATEGORY}" id="HRMEB_CATEGORY" colour="#6132ff" secondaryColour="#6132ff" iconURI="../external-resources/extensions/hr_meb/assets/hrmeb.png">
    <block type="hrmeb_set" id="hrmeb_set">
    <value name="FR">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>

    <block type="hrmeb_set_motordir" id="hrmeb_set_motordir">
    </block>

<sep gap="36"/>
    <block type="hrmeb_readbutton" id="hrmeb_readbutton">
    </block>
    
<sep gap="36"/>
    <block type="hrmeb_motor" id="hrmeb_motor">
        
        <value name="SPEED">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>

    <block type="hrmeb_allrun" id="hrmeb_allrun">
        
    <value name="M1S">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>

    <value name="M2S">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>   
    <value name="M3S">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="M4S">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>    
    </block>

    <block type="hrmeb_stopm" id="hrmeb_stopm">
    </block>



</category>`;
}

exports = registerToolboxs;
