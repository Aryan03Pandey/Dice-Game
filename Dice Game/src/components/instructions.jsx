import React from "react";

function Insructions(props){
    return <div className="instructions" style={{display: props.visible ? "block" : "none"}}>
        <h2>How to play dice game</h2>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>If selected number is same as dice number, you will get same point as dice</li>
            <li>If you get wrong guess, then 2 points will be deducted</li>
        </ul>
    </div>
}

export default Insructions