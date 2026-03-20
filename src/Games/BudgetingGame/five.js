import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";

const Five = () => {
    const style = document.createElement("style");
    style.innerHTML = `
        .rangeInput::-webkit-slider-thumb {
            background-image: url('https://cdn-icons-png.freepik.com/256/3409/3409840.png?semt=ais_hybrid');
            background-size: cover;
        }
    `;
    document.head.appendChild(style);

    const navigate = useNavigate();
    const clickSound = useRef(null);

    const [sliderValue, setSliderValue] = useState(75000);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    // =========================
    // GLOBAL BACKGROUND MUSIC
    // =========================
    useEffect(() => {
        if (!window.bgAudio) {
            window.bgAudio = new Audio("/src/BudgetingGame/BgameAudio/backaudio.mp3");
            window.bgAudio.volume = 0.3;
            window.bgAudio.loop = true;
            window.bgAudio.play().catch(() => {});
        }
    }, []);

    // =========================
    // CLICK SOUND
    // =========================
    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0;
            clickSound.current.volume = 1;
            clickSound.current.play().catch(() => {});
        }
    };

    const goToSixPage = () => {
        playClickSound();

        const result = Math.abs(91250 - sliderValue);
        localStorage.setItem("result2", result);
        localStorage.setItem("value2", sliderValue);

        navigate("/games/budgetinggame/six");
    };

    return (
        <div className="BudgetingGame">
            <div className="upper">
                <h1 id="heading">THE BUDGETING GAME!</h1>
            </div>
            <hr />

            <div className="main1">
                <p>
                    <span className="line">
                        How much do you think it would cost on average if you bought<br />
                        a fast food lunch every day for one year?
                    </span>
                </p>
                <br /><br />
            </div>

            <br /><br /><br /><br />

            <input
                type="range"
                className="rangeInput"
                id="rangeInput"
                min="0"
                max="150000"
                value={sliderValue}
                step="250"
                onChange={handleSliderChange}
            />

            <div className="extreme">
                <span id="zero"><b>Rs 0</b></span>
                <span id="max"><b>Rs 1,50,000</b></span>
            </div>

            <br />

            <p id="Value"> Rs <span>{sliderValue}</span></p>

            <br />

            <div className="button">
                <button onClick={goToSixPage} className="my-button">SUBMIT</button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto" />
            </div>
        </div>
    );
};

export default Five;

