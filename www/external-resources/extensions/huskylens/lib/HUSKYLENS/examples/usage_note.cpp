/* HUSKYLENS_ADVANCED.ino
// #include "HUSKYLENS.h"

// HUSKYLENS huskylens;

// INITIALIZE ---
// Wire.begin();
// while (!huskylens.begin(Wire)){delay(100);}

// REQUEST ---
// huskylens.request()                          // -> bool: requestBlocks(N/IDn) 存在第 IDn (已學習) 筆的 B&A 結果
// huskylens.request{Blocks/Arrows}()           // -> bool: requestBlocks(N/IDn) 存在第 IDn (已學習) 筆的 B|A 結果
// huskylens.requestLearned()                   // -> bool: 存在 ID0 (未學習) 以外的 B&A 結果
// huskylens.request{Blocks/Arrows}Learned()    // -> bool: 存在 ID0 (未學習) 以外的 B|A 結果
// huskylens.countLearnedIDs();                 // -> int16_t: ( N / int16_t ID ) 已經學習的任何結果
// huskylens.count();                           // -> int16_t: ( N / int16_t ID ) 有多少 B/A 結果
// huskylens.count{Blocks/Arrows}();            // -> int16_t: ( N / int16_t ID ) 所有 B&A 結果中有多少 B|A
// huskylens.frameNumber();                     // -> int16_t: 已經處理的幀數
// huskylens.get(ID, index);                    // -> HUSKYLENSResult: get( N / int16_t ID , int16_t index ) 所有 B&A 結果
// huskylens.get{Blocks/Arrows}(ID, index);     // -> HUSKYLENSResult: getBlock( N / int16_t ID , int16_t index ) 所有 B|A 結果

/* + from HUSKYLENS_GET_STARED.ino & HUSKYLENS_I2C.ino
// huskylens.isLearned()    -> bool
// huskylens.available()    -> int

// if (result.command == COMMAND_RETURN_BLOCK)
    // result.xCenter   -> int16_t
    // result.yCenter   -> int16_t
    // result.width     -> int16_t
    // result.height    -> int16_t
    // result.ID        -> int16_t

// if (result.command == COMMAND_RETURN_ARROW)
    // result.xOrigin   -> int16_t
    // result.yOrigin   -> int16_t
    // result.xTarget   -> int16_t
    // result.yTarget   -> int16_t
    // result.ID        -> int16_t
*/

/*  Next Useful files are HUSKYLENS_OBJECT_TRACKING.ino, HUSKYLENS_UTILITIES.ino, pls check
    Only HUSKYLENS_MIND_PLUS.ino uses "DFRobot_HuskyLens.h"
*/