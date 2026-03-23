/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#DC6B19';
    const secondaryColour = '#DC6B19';

    Blockly.Blocks.tubitv2husky_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_INIT,
                 args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_IIC, 'iic'],
                            [Blockly.Msg.TYPE_UART, 'uart']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    // --- LEARN ---
    // huskylens.isLearned() -> bool 學習結果存在
    Blockly.Blocks.tubitv2husky_is_learned = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_ISLEARNED,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // huskylens.isLearned(IDn) -> bool 學習結果存在於 IDn
    Blockly.Blocks.tubitv2husky_is_learned_id = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_ISLEARNEDID,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // huskylens.{requestLearned, request{Blocks, Arrows}Learned}() -> bool: ID0 (未學習) 以外的結果存在
    Blockly.Blocks.tubitv2husky_request_learned = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_REQUESTLEARNED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    //--READ DATA---- 
    Blockly.Blocks.tubitv2husky_updata = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_UPDATA,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2husky_readdata = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_READDATA,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_ID, 'ID'],
                            [Blockly.Msg.TYPE_XCENTER, 'xCenter'],
                            [Blockly.Msg.TYPE_YCENTER, 'yCenter'],
                            [Blockly.Msg.TYPE_WIDTH, 'width'],
                            [Blockly.Msg.TYPE_HIGHT, 'height'],
                            [Blockly.Msg.TYPE_XORIGIN, 'xOrigin'],
                            [Blockly.Msg.TYPE_YORIGIN, 'yOrigin'],
                            [Blockly.Msg.TYPE_XTARGET, 'xTarget'],
                            [Blockly.Msg.TYPE_YTARGET, 'yTarget']

                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    //切換辨識模式
    Blockly.Blocks.tubitv2husky_switchvision = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_SWITCHVISION,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                                [Blockly.Msg.TYPE_ALGORITHM_FACE_RECOGNITION, 'ALGORITHM_FACE_RECOGNITION'],
                                [Blockly.Msg.TYPE_ALGORITHM_OBJECT_TRACKING, 'ALGORITHM_OBJECT_TRACKING'],
                                [Blockly.Msg.TYPE_ALGORITHM_OBJECT_RECOGNITION, 'ALGORITHM_OBJECT_RECOGNITION'],
                                [Blockly.Msg.TYPE_ALGORITHM_LINE_TRACKING, 'ALGORITHM_LINE_TRACKING'],
                                [Blockly.Msg.TYPE_ALGORITHM_TAG_RECOGNITION, 'ALGORITHM_TAG_RECOGNITION'],
                                [Blockly.Msg.TYPE_ALGORITHM_COLOR_RECOGNITION, 'ALGORITHM_COLOR_RECOGNITION'],
                                [Blockly.Msg.TYPE_ALGORITHM_OBJECT_CLASSIFICATION, 'ALGORITHM_OBJECT_CLASSIFICATION']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    //// 選擇辨識 ID=x ?
    Blockly.Blocks.tubitv2husky_visionto = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_VISIONTO,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    // --- RECOGNITION ---
    // huskylens.{request, request{Blocks, Arrows} }() -> bool: 結果存在畫面
    Blockly.Blocks.tubitv2husky_request = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_REQUEST,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // huskylens.{request, request{Blocks, Arrows} }(IDn) -> bool: 指定 IDn (已學習) 的結果存在畫面
    Blockly.Blocks.tubitv2husky_request_id = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_REQUESTID,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    // --- COUNT ---
    // huskylens.available() -> int: 可以讀取的結果數
    Blockly.Blocks.tubitv2husky_available = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_AVAILABLE,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // huskylens.countLearnedIDs() -> int16_t: 已經學習的結果數
    Blockly.Blocks.tubitv2husky_learned_ids = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_LEARNEDIDS,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // huskylens.{count, count{Blocks/Arrows}}() -> int16_t: 有多少結果
    Blockly.Blocks.tubitv2husky_count = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_COUNT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // huskylens.{count, count{Blocks/Arrows}}(IDn) -> int16_t: 有多少結果
    Blockly.Blocks.tubitv2husky_count_id = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_COUNTID,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'ID'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // huskylens.frameNumber() -> int16_t: 已經處理的幀數
    Blockly.Blocks.tubitv2husky_frame_number = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_FRAMENUMBER,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    // --- RESULT ---
    // huskylens.{get, get{Blocks/Arrows}}(index) -> HUSKYLENSResult: 取得第 index 筆結果
    
    Blockly.Blocks.tubitv2husky_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_GET,
                args0: [
                    {
                        type: 'input_value',
                        name: 'INDEX'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    // huskylens.{get, get{Blocks/Arrows}}(ID, index) -> HUSKYLENSResult: 指定 ID 取得第 index 筆結果
    Blockly.Blocks.tubitv2husky_get_id = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_GETID,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ID'
                    },
                    {
                        type: 'input_value',
                        name: 'INDEX'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options: [
                            [Blockly.Msg.TYPE_BLOCKS, 'blocks'],
                            [Blockly.Msg.TYPE_ARROWS, 'arrows'],
                            [Blockly.Msg.TYPE_BOTH, 'both']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2husky_result_var_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_RESULTVARDECLARE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tubitv2husky_result_var_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TUBITV2HUSKY_RESULTVARREAD,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VARNAME'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
