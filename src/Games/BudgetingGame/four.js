import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";
import backaudio from "../BudgetingGame/BgameAudio/backaudio.mp3";

const Four = () => {
    const navigate = useNavigate();
    const clickSound = useRef(null);

    const [comparisonStatement, setComparisonStatement] = useState("");
    const [sliderValue, setSliderValue] = useState(null);
    const [remainingValue, setRemainingValue] = useState(null);
    const [counter, setCounter] = useState(0);
    const [startCounter, setStartCounter] = useState(false);

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

    /* ============================
       LOAD LOCAL STORAGE VALUES
       ============================ */
    useEffect(() => {
        const value1 = localStorage.getItem("value1");
        const result1 = localStorage.getItem("result1");

        if (value1 && result1) {
            const remaining = parseInt(result1, 10);
            const slider = parseInt(value1, 10);

            setSliderValue(slider);
            setRemainingValue(remaining);

            let comparisonText = "";

            if (remaining === 0) comparisonText = "Bullseye! That's exactly what you thought.";
            else if (remaining < 1000)
                comparisonText =
                    36500 > slider
                        ? `Nice job! That's only ${remaining} more than you thought.`
                        : `Nice job! That's only ${remaining} less than you thought.`;
            else
                comparisonText =
                    36500 > slider
                        ? `That's ${remaining} more than you thought!`
                        : `That's ${remaining} less than you thought!`;

            setComparisonStatement(comparisonText);
        }

        const timer = setTimeout(() => setStartCounter(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    /* ============================
       COUNTER ANIMATION
       ============================ */
    useEffect(() => {
        if (startCounter && sliderValue !== null) {
            setCounter(sliderValue);

            const counterInterval = setInterval(() => {
                setCounter(prev => {
                    if (prev < 36500) return Math.min(prev + 50, 36500);
                    if (prev > 36500) return Math.max(prev - 50, 36500);
                    return prev;
                });
            }, 10);

            return () => clearInterval(counterInterval);
        }
    }, [startCounter, sliderValue]);

    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0;
            clickSound.current.volume = 1;
            clickSound.current.play().catch(() => {});
        }
    };

    const goToFivePage = () => {
        playClickSound();
        navigate("/games/budgetinggame/five");
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
                        You guessed :<br />
                        <big>
                            <big>
                                <span
                                    className="value"
                                    style={{ color: "#73fd29", fontSize: "7vh" }}
                                >
                                    {sliderValue !== null ? `Rs ${sliderValue}` : ""}
                                </span>
                            </big>
                        </big>
                    </span>

                    <span className="line">
                        <br />The average cup of coffee costs Rs 100.<br />
                    </span>

                    <span className="line">
                        If you bought one coffee a day for a whole year,
                        <br />it would cost<br />
                    </span>

                    <span
                        className="line"
                        style={{ color: "#73fd29", fontSize: "7vh" }}
                    >
                        Rs {counter}
                        <br />
                    </span>

                    <span className="line" style={{ fontSize: "4.3vh" }}>
                        {comparisonStatement}
                        <br />
                    </span>
                </p>
            </div>

            <br />

            <div className="button">
                <button onClick={goToFivePage} className="my-button">
                    NEXT
                </button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto" />
            </div>
        </div>
    );
};

export default Four;
