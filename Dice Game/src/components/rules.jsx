import React, { useState } from "react";

function Rules(props){
    return  <button className="rules btn" onClick={props.onClick} >{props.showRules? "Hide " : "Show "} Rules</button>
}

export default Rules;