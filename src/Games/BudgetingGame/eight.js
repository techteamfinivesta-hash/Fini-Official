import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../BudgetingGame/styleGame.css";
import buttonClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";  

const Eight = () => {
    const navigate = useNavigate(); 
    const clickSound = useRef(null);

    const [sliderValue, setSliderValue] = useState(null);
    const [comparisonStatement, setComparisonStatement] = useState("");
    const [counter, setCounter] = useState(32850); 
    const [startCounter, setStartCounter] = useState(false); 

    // Load stored values and set comparison
    useEffect(() => {
        const storedSliderValue = localStorage.getItem('value3');
        const storedRemainingValue = localStorage.getItem('result3');

        if (storedSliderValue && storedRemainingValue) {
            const slider = parseInt(storedSliderValue, 10);
            const remaining = parseInt(storedRemainingValue, 10);

            setSliderValue(slider);

            let comparisonText = "";
            if (remaining === 0) {
                comparisonText = "Bullseye! That's exactly what you thought.";
            } else if (remaining < 1000) {
                comparisonText = 32850 > slider
                    ? `Nice job! That's only Rs ${remaining} more than you thought.`
                    : `Nice job! That's only Rs ${remaining} less than you thought.`;
            } else {
                comparisonText = 32850 > slider
                    ? `That's Rs ${remaining} more than you thought!`
                    : `That's Rs ${remaining} less than you thought!`;
            }

            setComparisonStatement(comparisonText);
        }

        const timer = setTimeout(() => setStartCounter(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    // Animate counter
    useEffect(() => {
        if (startCounter && sliderValue !== null) {
            setCounter(sliderValue);

            const counterInterval = setInterval(() => {
                setCounter(prev => {
                    if (prev < 32850) return Math.min(prev + 50, 32850);
                    if (prev > 32850) return Math.max(prev - 50, 32850);
                    return prev;
                });
            }, 10);

            return () => clearInterval(counterInterval);
        }
    }, [startCounter, sliderValue]);

    // Click sound
    const playClickSound = () => {
        if (clickSound.current) {
            clickSound.current.currentTime = 0; 
            clickSound.current.volume = 1;  
            clickSound.current.play().catch(() => {});
        }
    };

    // Navigate to Nine.js
    const goToNinePage = () => {
        playClickSound(); 
        navigate('/games/budgetinggame/nine'); 
    };

    // ✅ Use global bgAudio
    useEffect(() => {
        if (!window.bgAudio) {
            window.bgAudio = new Audio("/src/BudgetingGame/BgameAudio/backaudio.mp3");
            window.bgAudio.loop = true;
            window.bgAudio.volume = 0.3;
            window.bgAudio.play().catch(() => {}); // ignore autoplay block
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
                    <span className="line">You guessed:<br />   
                        <span className="value" style={{ color: "#73fd29", fontSize: "7vh" }}>
                            {sliderValue !== null ? `Rs ${sliderValue}` : ''}
                        </span>  
                    </span>

                    <span className="line"><br />An average meal consisting of a snack and a drink would cost Rs 90 a day.<br /></span>
                    <span className="line">If you bought one such meal a day for the whole year,<br />it would cost <br/></span>
                    <span className="line" style={{ color: "#73fd29", fontSize: "7vh" }}>Rs {counter}<br/></span>

                    <span className="line" style={{ fontSize: "4.3vh" }}>{comparisonStatement}<br /></span>
                </p>
            </div>

            <br />

            <div className="button">
                <button onClick={goToNinePage} className="my-button">NEXT</button>
                <audio ref={clickSound} src={buttonClickSound} preload="auto"></audio>
            </div>
        </div>
    );
};

export default Eight;
