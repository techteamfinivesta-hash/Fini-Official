import "../Resources/Resources.css";

import HL from './HigherLower/public/images/bg.png'
import balance from './Images/G.jpg';

const Game = () => {
  return (
    <div className="gamepage">
      <div className="header games">
        <h1>Games</h1>
        <p>Play Engaging Games and Test Your Skills!</p>
      </div>

      <div className="resourcesbox">


        <div className="boxsmall game">
          <a href="/games/higherlower">
            <div className="img">
              <img src={HL} alt="Higher or Lower Game Cover" />
            </div>
            <div className="text">
              <h2>Higher or Lower</h2>
              <p className="game-byline-card">
                Can you guess if the next value is higher or lower?
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall game">
          <a href="/games/budgetinggame/one">
            <div className="img">
              <img src={balance} alt="Budgeting Game Cover" />
            </div>
            <div className="text">
              <h2>Budgeting Game</h2>
              <p className="game-byline-card">
              Guess the Price, Master Your Finances!
              </p>
            </div>
          </a>
        </div>

        <div className="boxsmall game">
          <a href="/games/scramble">
            <div className="img">
              <img src={balance} alt="Scramble Game Cover" />
            </div>
            <div className="text">
              <h2>Scramble</h2>
              <p className="game-byline-card">
              Unscramble the words before the time runs out
              </p>
            </div>
          </a>
        </div>
        <div className="boxsmall game">
          <a href="/games/FinanceBingo">
            <div className="img">
              <img src={balance} alt="Finance Bingo" />
            </div>
            <div className="text">
              <h2>Finance Bingo</h2>
              <p className="game-byline-card">
              Unleash the magic with Finance Bingo
              </p>
            </div>
          </a>
        </div>



      </div>

    </div>
  );
};

export default Game;