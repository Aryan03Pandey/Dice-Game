import React, { useCallback, useState } from "react";
import TotalScore from "./totalscore";
import SelectNumber from "./selectNumber";
import DiceArea from "./diceArea";
import Reset from "./reset";
import Rules from "./rules";
import Insructions from "./instructions";

function GamePlay(){
    const [totalscore, settotalscore] = useState(0);

    const [selectedNum, setSelectedNum] = useState(1);

    const [showRules, setShowRules] = useState(false);

    function handleClick(){
        return setShowRules(prev => !prev);
    }



    return (
        <div className="gameplay-container">
            <div className="upper-section">
                <TotalScore totalscore = {totalscore} />
                <SelectNumber selectedNum = {selectedNum} setSelectedNum = {setSelectedNum} />
            </div>

            <div className="game-area">
                <DiceArea selectedNum = {selectedNum}
                    setSelectedNum = {setSelectedNum}
                    settotalscore = {settotalscore} />

                <Reset settotalscore = {settotalscore} />
                <Rules onClick = {handleClick} showRules = {showRules} />
                <Insructions visible = {showRules} />
            </div>
        </div>
    )
}

export default GamePlay;