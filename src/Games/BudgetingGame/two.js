import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3"; 
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";  

const Two = () => {
    const navigate = useNavigate();  
    const clickSound = useRef(null); 

    // ✅ Initialize global background audio if it doesn't exist
    useEffect(() => {
        if (!window.bgAudio) {
            window.bgAudio = new Audio(backaudio);
            window.bgAudio.loop = true;
            window.bgAudio.volume = 0.3;
            window.bgAudio.play().catch(err => console.error("BG audio error:", err));
        }
    }, []);

    // Play click sound on button
    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0; 
            clickSound.current.volume = 1; 
            clickSound.current.play().catch(err => console.error("Click sound error:", err));
        }
    };

    const goToThreePage = () => {
        playClickSound();
        navigate('/games/budgetinggame/three'); 
    };

    return (
        <div className="BudgetingGame">
            <div className="upper">
                <h1 id="heading">THE BUDGETING GAME!</h1>
            </div>
            <hr />

            <div className="main1">
                <p>
                    <span className="line">A budget is about balancing income<br/> 
                    <b>(money in)</b> with expenses <b>(money out).<br/></b></span>
                    <span className="line">Even small expenses can add up and should be<br/> 
                    included in your budget, so it's important to be able <br/>
                    to estimate your expenses.<br/></span>
                
                    <span className="line">Ready to test your estimating skills?<br/></span>
                    <span className="line"><big>Let's go!</big></span>
                </p>
            </div><br />

            <div className="button">
                <button className="my-button" onClick={goToThreePage}>
                    BEGIN
                </button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio>
            </div>
        </div>
    );
};

export default Two;
