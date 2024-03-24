import React, { useState } from "react";
import TotalScore from "./totalscore";
import Number from "./number";

function SelectNumber({selectedNum , setSelectedNum}){

    const numsArray = [1,2,3,4,5,6];

    return (
        <div className="select-number">
            <div className="numbers-container">
                {
                    numsArray.map((val, index) => {
                        return <Number
                                onClick = {() => setSelectedNum(val)} 
                                isSelected = {selectedNum === val}
                                key = {index}
                                value = {val} 
                                /> 
                    })
                }
            </div>

            <div className="instruction-container">
                <p>Select Number</p>
            </div>
        </div>
    )
}

export default SelectNumber;