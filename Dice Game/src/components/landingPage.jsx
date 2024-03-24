import React from "react";
import mainImage from "../components/images/mainImage.png"


function LandingPage(props){
    return(
        <div className="container">
            <div className="intro-image">
                <img src={mainImage} alt="text" />
            </div>
            <div className="intro-text">
                <h1>Dice Game</h1>
                <button 
                className="btn black-btn"
                onClick={props.toggle}
                >
                    Play now
                    </button>
            </div>
        </div>
    )

}

export default LandingPage;
