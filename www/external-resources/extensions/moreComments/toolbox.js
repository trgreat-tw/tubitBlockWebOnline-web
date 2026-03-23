/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_MORECOMMENTS_CATEGORY}" id="MORECOMMENTS_CATEGORY" colour="#529955" secondaryColour="#457F48" iconURI="../external-resources/extensions/moreComments/assets/moreComments.png">
    <block type="moreComments_commandBlock" id="moreComments_commandBlock">
        <value name="COMMENTS">
            <shadow type="text">
                <field name="TEXT">add your comments in here</field>
            </shadow>
        </value>
    </block>
    <block type="moreComments_branchBlock" id="moreComments_branchBlock">
        <value name="COMMENTS">
            <shadow type="text">
                <field name="TEXT">add your comments in here</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
