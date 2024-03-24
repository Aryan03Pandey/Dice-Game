import React from "react";

function Number(props){
    return (
        <div className="number"
            style={{backgroundColor: props.isSelected ? "black" : "white",
                    color: props.isSelected? "white" : "black"}}
            onClick={props.onClick}
        >
            <h3>{props.value}</h3>
        </div>
    )
}

export default Number;