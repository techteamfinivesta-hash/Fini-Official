import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";

const Three = () => {
    const navigate = useNavigate();
    const [rangeValue, setRangeValue] = useState(25000);

    const clickSound = useRef(null);

    // =========================
    // BACKGROUND MUSIC (global)
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
    // SLIDER THUMB STYLE
    // =========================
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            .rangeInput::-webkit-slider-thumb {
                background-image: url('https://cdn-icons-png.flaticon.com/512/6744/6744480.png');
                background-size: cover;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

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

    const goToFourPage = () => {
        const result = Math.abs(36500 - rangeValue);
        localStorage.setItem("result1", result);
        localStorage.setItem("value1", rangeValue);

        playClickSound();
        navigate("/games/budgetinggame/four");
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
                        Guess how much it would cost<br />
                        if you bought a coffee every day for a year?
                    </span>
                </p>
                <br />
            </div>

            <br /><br /><br />

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

            <p id="Value">
                Rs <span id="rangeValue">{rangeValue}</span>
            </p>

            <br /><br /><br />

            <div className="button">
                <button onClick={goToFourPage} className="my-button">SUBMIT</button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto" />
            </div>

        </div>
    );
};

export default Three;
