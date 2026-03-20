import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";  
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3"; 

const Seven = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .rangeInput::-webkit-slider-thumb {
            background-image: url('https://cdn-icons-png.flaticon.com/512/8088/8088008.png');
            background-size: cover;
        }
    `;
    document.head.appendChild(style);

    const navigate = useNavigate(); 
    const clickSound = useRef(null); 
    const [rangeValue, setRangeValue] = useState(25000);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0; 
            clickSound.current.volume = 1; 
            clickSound.current.play().catch(() => {});
        }
    };

    const goToEightPage = () => {
        playClickSound(); 

        const value = rangeValue;
        const result = Math.abs(32850 - value);

        localStorage.setItem('result3', result);
        localStorage.setItem('value3', value);

        navigate('/games/budgetinggame/eight'); 
    };

    /* ============================
       GLOBAL BACKGROUND AUDIO
       ============================ */
    useEffect(() => {
        if (!window.bgAudio) {
            window.bgAudio = new Audio(backaudio);
            window.bgAudio.loop = true;
            window.bgAudio.volume = 0.3;
            window.bgAudio.play().catch(err => console.error("BG audio error:", err));
        }
    }, []);

    return (
        <div className="BudgetingGame">
            <div className="upper">
                <h1 id="heading">THE BUDGETING GAME!</h1>
            </div>
            <hr />

            <div className="main1">
                <p>
                    <span className="line">
                        How much do you think it would cost if <br />
                        you bought a snack and soda every day for one year?
                    </span>
                </p>
                <br />
            </div>

            <br /><br /><br /><br />

            <input
                type="range"
                className="rangeInput"
                id="rangeInput"
                min="0"
                max="50000"
                value={rangeValue}
                step="50"
                onChange={handleRangeChange}
            />

            <div className="extreme">
                <span id="zero"><b>Rs 0</b></span>
                <span id="max"><b>Rs 50,000</b></span>
            </div>

            <p id="Value"> Rs <span id="rangeValue">{rangeValue}</span></p>

            <br />

            <div className="button">
                <button onClick={goToEightPage} className="my-button">SUBMIT</button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio>
            </div>
        </div>
    );
};

export default Seven;
