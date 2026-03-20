import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../BudgetingGame/styleGame.css";
import Image from "../BudgetingGame/BgameImages/image.png";
import exitClickSound from "../BudgetingGame/BgameAudio/buttonclick.mp3";  

const Nine = () => {
  const navigate = useNavigate();
  const clickSound = useRef(null);

  const playExitClickSound = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.volume = 1;
      clickSound.current.play().catch(() => {});
    }
  };

  const goToHomePage = () => {
    // Stop the global background music
    if (window.bgAudio) {
      window.bgAudio.pause();
      window.bgAudio.currentTime = 0;
    }

    playExitClickSound();
    navigate("/games");
  };

  useEffect(() => {
    // Ensure the image and page loads, no bgAudio started here
  }, []);

  return (
    <div className="BudgetingGame">
      <div className="upper">
        <h1 id="heading">THE BUDGETING GAME!</h1>
      </div>
      <hr />

      <div className="main1">
        <pre>
          <img src={Image} height="120vh" width="120vh" alt="Image" /><br /><br />
          <p>
            <span className="line">Nice estimating!<br /></span>
            <span className="line">Now you can see why budgeting matters. Even small expenses<br /></span>
            <span className="line">can add up! Be sure to budget, track your spending, and have<br /></span>
            <span className="line">emergency savings to back you up.</span>
          </p>
        </pre>
      </div>

      <br /><br />

      <div className="button">
        <button onClick={goToHomePage} className="my-button">EXIT</button>
        <audio ref={clickSound} src={exitClickSound} preload="auto"></audio>
      </div>
    </div>
  );
};

export default Nine;
