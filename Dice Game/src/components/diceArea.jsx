import React, { useState } from "react";
import dice1 from "../components/images/dice_1.png"
import dice2 from "../components/images/dice_2.png"
import dice3 from "../components/images/dice_3.png"
import dice4 from "../components/images/dice_4.png"
import dice5 from "../components/images/dice_5.png"
import dice6 from "../components/images/dice_6.png"

function DiceArea(props){

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];

    const [currentDice, setcurrentDice] = useState(1);

    const rollDice = () => {
        let randomNumber = Math.floor((Math.random() * 6) + 1);
        setcurrentDice(randomNumber);

        if(props.selectedNum === randomNumber){
            props.settotalscore((prev) => (prev+randomNumber))
        }
        else{
            props.settotalscore((prev) => (prev - 2))
        }
    }

    return (
        <div className="dice-area">
            <img onClick={rollDice} src={diceArray[currentDice - 1]} alt="" />
        </div>
    )
}

export default DiceArea;