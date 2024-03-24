import React from "react";

function Reset(props){
    return <button className="reset btn black-btn" onClick={() => props.settotalscore(0)}>Reset Score</button>
}

export default Reset;