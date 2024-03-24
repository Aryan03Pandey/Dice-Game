import React from "react";

function TotalScore({totalscore}){
    return (
        <div className="score">
                    <h2>{totalscore}</h2>
                    <p>Total Score</p>
                </div>
    )
}

export default TotalScore;