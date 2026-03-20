import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";

const Six = () => {
    const navigate = useNavigate();
    const clickSound = useRef(null);

    const [sliderValue, setSliderValue] = useState(null);
    const [comparisonStatement, setComparisonStatement] = useState("");
    const [counter, setCounter] = useState(91250);
    const [startCounter, setStartCounter] = useState(false);

    // Load stored values and prepare comparison
    useEffect(() => {
        const storedSliderValue = localStorage.getItem("value2");
        const storedRemainingValue = localStorage.getItem("result2");

        if (storedSliderValue && storedRemainingValue) {
            const slider = parseInt(storedSliderValue, 10);
            const remaining = parseInt(storedRemainingValue, 10);

            setSliderValue(slider);

            let comparisonText = "";
            if (remaining === 0) {
                comparisonText = "Bullseye! That's exactly what you thought.";
            } else if (remaining < 1000) {
                comparisonText = 91250 > slider
                    ? `Nice job! That's only Rs ${remaining} more than you thought.`
                    : `Nice job! That's only Rs ${remaining} less than you thought.`;
            } else {
                comparisonText = 91250 > slider
                    ? `That's Rs ${remaining} more than you thought!`
                    : `That's Rs ${remaining} less than you thought!`;
            }

            setComparisonStatement(comparisonText);
        }

        const timer = setTimeout(() => setStartCounter(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    // Animate counter to actual value
    useEffect(() => {
        if (startCounter && sliderValue !== null) {
            setCounter(sliderValue);

            const counterInterval = setInterval(() => {
                setCounter(prev => {
                    if (prev < 91250) return Math.min(prev + 50, 91250);
                    if (prev > 91250) return Math.max(prev - 50, 91250);
                    return prev;
                });
            }, 10);

            return () => clearInterval(counterInterval);
        }
    }, [startCounter, sliderValue]);

    // Play click sound
    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0;
            clickSound.current.volume = 1;
            clickSound.current.play().catch(() => {});
        }
    };

    const goToSevenPage = () => {
        playClickSound();
        navigate("/games/budgetinggame/seven");
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
                    <span className="line">You guessed :<br />
                        <big><big>
                            <span className="value" style={{ color: "#73fd29", fontSize: "7vh" }}>
                                {sliderValue !== null ? `Rs ${sliderValue}` : ""}
                            </span>
                        </big></big>
                    </span>

                    <span className="line"><br />The average cost of eating out is Rs 250.<br /></span>
                    <span className="line">If you bought 365 meals, that would cost:<br /></span>
                    <span className="line" style={{ color: "#73fd29", fontSize: "7vh" }}>
                        Rs {counter}<br/>
                    </span>    
                    <span className="line" id="final" style={{fontSize: "4.3vh"}}>
                        {comparisonStatement}
                    </span>
                </p>
            </div>

            <br /><br />

            <div className="button">
                <button onClick={goToSevenPage} className="my-button">NEXT</button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio>
            </div>
        </div>
    );
};

export default Six;
