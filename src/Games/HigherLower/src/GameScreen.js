// GameScreen.js
import React, { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import { fetchCommodity } from "./CommodityObj";
import backgroundMusic from "./sounds/background.mp3";
import quit from "./sounds/quit.mp3";
// Import sound files explicitly
import correctSound from "./sounds/correct.mp3";
import wrongSound from "./sounds/wrong.mp3";
import clickSound from "./sounds/click.mp3";

// Import AOS and its styles
import AOS from "aos";
import "aos/dist/aos.css";

const sounds = {
  correct: new Howl({ src: [correctSound] }),
  wrong: new Howl({ src: [wrongSound] }),
  flip: new Howl({ src: [clickSound] }),
  quit: new Howl({ src: [quit] })
};

// Helper to return different placeholder images for left/right cards.
const getPlaceholderImage = (side) => {
  if (side === "left") return "/images/placeholder1.png";
  if (side === "right") return "/images/placeholder2.png";
  return "/images/placeholder.png";
};

// Scoring curve: streak 1-4 = +1/correct, 5-9 = +2/correct, 10+ = +3/correct.
const getScoreIncrement = (streak) => {
  if (streak >= 10) return 3;
  if (streak >= 5) return 2;
  return 1;
};

// Shared pacing constants so both branches (correct/wrong) follow the same
// phase order — result overlay instantly, hold, then card exit — instead of
// each being independently tuned. CARD_EXIT_MS/CARD_ENTRY_MS mirror the
// actual CSS animation-duration / AOS data-aos-duration values below; keep
// them in sync if those ever change.
const TIMING = {
  CARD_EXIT_MS: 600,     // swipe-right-card / swipe-left-card (index_higher.css)
  CARD_ENTRY_MS: 800,    // data-aos-duration on every commodity card below
  ENTRY_STAGGER_MS: 300, // dual-mode right card's data-aos-delay
  REVEAL_HOLD_MS: 1200,  // correct-guess overlay hold, before cards swipe out
  WRONG_HOLD_MS: 1600,   // wrong-guess hold — REVEAL_HOLD_MS + 400, deliberately
                          // a bit longer for the "game over" beat
};

// Above this magnitude the raw % stops being a meaningful "how close was it"
// signal (cross-category pairs can be off by orders of magnitude) and just
// becomes a wall of digits, so it's capped to a plain-language label instead.
const PRICE_DELTA_CAP_PCT = 200;

// "+12.3%" / "-4.0%" style label for how far apart two prices were, capped
// to "Much higher" / "Much lower" once the raw % stops being meaningful.
const formatPriceDelta = (fromPrice, toPrice) => {
  const deltaPct = ((toPrice - fromPrice) / fromPrice) * 100;
  if (Math.abs(deltaPct) > PRICE_DELTA_CAP_PCT) {
    return deltaPct > 0 ? "Much higher" : "Much lower";
  }
  return `${deltaPct >= 0 ? "+" : ""}${deltaPct.toFixed(1)}%`;
};

function GameScreen({
  cData,
  score,
  setScore,
  highScore,
  setHighScore,
  handleLoss,
  gameMode,
  isMusicOn,
  metricToggle
}) {
  // Timer: For Beat The Clock mode, timer starts at 15 seconds.
  const initialTimer = gameMode === "Beat The Clock" ? 15 : null;
  const [timerValue, setTimerValue] = useState(initialTimer);

  // Dual mode states.
  const [leftCommodity, setLeftCommodity] = useState(null);
  const [rightCommodity, setRightCommodity] = useState(null);
  // Single mode state.
  const [currentCommodity, setCurrentCommodity] = useState(null);

  // Common state: track if answer submitted and the result.
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  // .result-overlay is position:fixed, sitting outside the cards'/screen's
  // normal box. Cards visibly fade out over the swipe (CARD_EXIT_MS), and
  // on a loss the whole GameScreen then crossfades out under App1's
  // transition — but a position:fixed descendant's own opacity doesn't
  // reliably inherit an ancestor's opacity animation the same way across
  // browsers/compositing paths, so the overlay could sit fully opaque
  // through both of those fades and only vanish on unmount — a hard cut
  // arriving right as the next screen/round appears, well after
  // everything else has already dimmed. Fading it out directly, in sync
  // with the swipe (see resultExiting below), makes it finish fading
  // BEFORE either of those handoffs rather than depending on inheriting
  // an ancestor's animation.
  const [resultExiting, setResultExiting] = useState(false);
  const [priceDelta, setPriceDelta] = useState(null);
  const [streak, setStreak] = useState(0);
  const wrapperRef = useRef(null);
  const musicRef = useRef(null);

  // Refs for swipe detection (if using pointer input)
  const startXRef = useRef(null);
  const startYRef = useRef(null);

  // Initialize AOS on component mount (entry animations only)
  useEffect(() => {
    AOS.init({
      once: true,               // Animate only once when the element enters the viewport
      duration: TIMING.CARD_ENTRY_MS // default; every card also sets data-aos-duration explicitly
    });
  }, []);

  // Initialize commodities when data or mode changes.
  useEffect(() => {
    if (metricToggle) {
      // Dual Comparison mode – ensure different commodities
      const left = fetchCommodity(cData);
      const right = fetchCommodity(cData, left);
      setLeftCommodity(left);
      setRightCommodity(right);
      setAnswerSubmitted(false);
      setResult(null);
    } else {
      // Single Price Prediction mode.
      setCurrentCommodity(fetchCommodity(cData));
      setAnswerSubmitted(false);
      setResult(null);
      setTimerValue(initialTimer);
    }
  }, [cData, metricToggle, initialTimer]);

  // Background music effect with unload when off.
  useEffect(() => {
    if (isMusicOn) {
      musicRef.current = new Howl({
        src: [backgroundMusic],
        loop: true,
        volume: 0.5,
        html5: true,
        onload: () => console.log("Background music loaded"),
        onloaderror: (id, error) =>
          console.error("Error loading background music:", error)
      });
      musicRef.current.play();
    } else {
      if (musicRef.current) {
        musicRef.current.unload();
        musicRef.current = null;
      }
    }
    return () => {
      if (musicRef.current) {
        musicRef.current.unload();
        musicRef.current = null;
      }
    };
  }, [isMusicOn]);

  // Timer logic for Beat The Clock (applies for both dual and single modes).
  useEffect(() => {
    if (gameMode === "Beat The Clock" && timerValue > 0) {
      const interval = setInterval(() => {
        setTimerValue((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (gameMode === "Beat The Clock" && timerValue === 0) {
      // App1 now keeps this GameScreen instance mounted (fading out) for
      // a beat after handleLoss so the game->end transition can crossfade
      // instead of cutting instantly — so its keydown listener below is
      // still live during that window. Locking answerSubmitted here (the
      // same guard handleDualAnswer/handleSingleAnswer already check)
      // stops a stray arrow-key press from starting another round on a
      // screen that's on its way out.
      setAnswerSubmitted(true);
      handleLoss();
    }
  }, [timerValue, gameMode, handleLoss]);

  // New helper function to animate all commodity cards.
  // 'animationClass' should be "swipe-right-card" or "swipe-left-card"
  const animateCards = (animationClass, callback) => {
    const cards = wrapperRef.current.querySelectorAll(".commodity-card");
    if (cards.length === 0) {
      callback();
      return;
    }
    let animatedCount = 0;
    cards.forEach((card) => {
      card.classList.add(animationClass);
      const handleEnd = () => {
        // Deliberately NOT removing animationClass here. The old node is
        // about to be unmounted anyway (callback swaps in fresh commodities,
        // and the cards below now key off a role-scoped id so that's a real
        // unmount, not a reuse) — stripping the class first snapped the old
        // content back to fully visible for a beat before that swap landed,
        // which read as a duplicate/flash of the previous card.
        card.removeEventListener("animationend", handleEnd);
        animatedCount++;
        if (animatedCount === cards.length) {
          callback();
        }
      };
      card.addEventListener("animationend", handleEnd);
    });
  };

  // Handler for Dual Comparison answer.
  // Handler for Dual Comparison answer.
const handleDualAnswer = (choice) => {
  if (answerSubmitted) return;
  setAnswerSubmitted(true);
  sounds.flip.play();

  const leftPrice = leftCommodity.price;
  const rightPrice = rightCommodity.price;
  const isCorrect =
    choice === "higher" ? rightPrice > leftPrice : rightPrice < leftPrice;
  const deltaLabel = formatPriceDelta(leftPrice, rightPrice);

  // Same phase order for both branches: show the result overlay instantly,
  // hold it so it's actually readable, then swipe the cards out.
  setPriceDelta(deltaLabel);

  if (!isCorrect) {
    setResult("wrong");
    setStreak(0);
    sounds.wrong.play();
    setTimeout(() => {
      // Starts the overlay's own fade-out in step with the cards, so it's
      // fully invisible by the time they finish swiping instead of
      // sitting fully opaque and then hard-cutting away later. See the
      // comment on resultExiting's declaration above.
      setResultExiting(true);
      animateCards("swipe-left-card", () => {
        // After animation complete, trigger loss.
        handleLoss();
      });
    }, TIMING.WRONG_HOLD_MS);
  } else {
    setResult("correct");
    sounds.correct.play();
    setTimeout(() => {
      setResultExiting(true);
      animateCards("swipe-right-card", () => {
        // Plain sequential values + top-level setter calls, not nested
        // functional updaters. setScore/setHighScore are App1's setters
        // (passed as props) — calling them from inside GameScreen's own
        // setStreak(prev => ...) updater was a cross-component setState-
        // during-render anti-pattern (confirmed via React's dev warning
        // and its real JS stack). It's safe to read streak/score directly
        // here rather than via updater functions: answerSubmitted has kept
        // this round locked the whole time, so nothing else could have
        // changed them out from under this closure since the click.
        const newStreak = streak + 1;
        const increment = getScoreIncrement(newStreak);
        const newScore = score + increment;
        setStreak(newStreak);
        setScore(newScore);
        if (newScore > highScore) setHighScore(newScore);
        if (gameMode === "Beat The Clock") {
          setTimerValue(15);
        }
        // In dual mode, the right card becomes the new left.
        setLeftCommodity(rightCommodity);
        setRightCommodity(fetchCommodity(cData, rightCommodity));
        setAnswerSubmitted(false);
        setResult(null);
        setResultExiting(false);
        setPriceDelta(null);
      });
    }, TIMING.REVEAL_HOLD_MS);
  }
};

// Handler for Single Price Prediction answer.
const handleSingleAnswer = (choice) => {
  if (answerSubmitted) return;
  setAnswerSubmitted(true);
  sounds.flip.play();

  const currentPrice = currentCommodity.price;
  const nextCommodity = fetchCommodity(cData, currentCommodity);
  const nextPrice = nextCommodity.price;
  const isCorrect =
    choice === "higher" ? nextPrice > currentPrice : nextPrice < currentPrice;
  const deltaLabel = formatPriceDelta(currentPrice, nextPrice);

  // Same phase order for both branches: show the result overlay instantly,
  // hold it so it's actually readable, then swipe the cards out.
  setPriceDelta(deltaLabel);

  if (!isCorrect) {
    setResult("wrong");
    setStreak(0);
    sounds.wrong.play();
    setTimeout(() => {
      setResultExiting(true);
      animateCards("swipe-left-card", () => {
        handleLoss();
      });
    }, TIMING.WRONG_HOLD_MS);
  } else {
    setResult("correct");
    sounds.correct.play();
    setTimeout(() => {
      setResultExiting(true);
      animateCards("swipe-right-card", () => {
        // See the identical comment in handleDualAnswer: plain sequential
        // values + top-level setter calls instead of nesting App1's
        // setScore/setHighScore inside GameScreen's own setStreak updater.
        const newStreak = streak + 1;
        const increment = getScoreIncrement(newStreak);
        const newScore = score + increment;
        setStreak(newStreak);
        setScore(newScore);
        if (newScore > highScore) setHighScore(newScore);
        setCurrentCommodity(nextCommodity);
        setAnswerSubmitted(false);
        setResult(null);
        setResultExiting(false);
        setPriceDelta(null);
        if (gameMode === "Beat The Clock") {
          setTimerValue(15);
        }
      });
    }, TIMING.REVEAL_HOLD_MS);
  }
};

  // --- Swipe Detection (shared by mouse and touch input) ---
  const handlePointerDown = (clientX, clientY) => {
    startXRef.current = clientX;
    startYRef.current = clientY;
  };

  const handlePointerUp = (clientX) => {
    if (startXRef.current === null) return;
    const diffX = clientX - startXRef.current;
    // Set threshold for swipe detection (50px)
    if (Math.abs(diffX) > 50 && !answerSubmitted) {
      // Determine answer from swipe direction:
      // Right swipe → answer "higher"
      // Left swipe → answer "lower"
      const swipeChoice = diffX > 0 ? "higher" : "lower";
      if (metricToggle) {
        handleDualAnswer(swipeChoice);
      } else {
        handleSingleAnswer(swipeChoice);
      }
    }
    startXRef.current = null;
    startYRef.current = null;
  };

  const handleMouseDown = (e) => handlePointerDown(e.clientX, e.clientY);
  const handleMouseUp = (e) => handlePointerUp(e.clientX);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handlePointerDown(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    handlePointerUp(touch.clientX);
  };

  // --- Keyboard Controls (third input path alongside click/swipe/touch) ---
  // No dependency array: re-subscribes every render so the listener always
  // closes over the current commodities/answerSubmitted state, avoiding a
  // stale-closure bug where arrow keys would keep comparing the first round's data.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        if (metricToggle) handleDualAnswer("lower");
        else handleSingleAnswer("lower");
      } else if (e.key === "ArrowRight") {
        if (metricToggle) handleDualAnswer("higher");
        else handleSingleAnswer("higher");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // --- Quit Handler ---
  const handleQuit = () => {
    // Replace this with your desired quit logic.
    // For demonstration, we redirect to the home page.
    sounds.quit.play();
    // See the identical comment on the Beat The Clock branch above: this
    // instance stays mounted (fading out) briefly after handleLoss, so
    // lock out its still-live keydown listener the same way.
    setAnswerSubmitted(true);
    handleLoss();
  };

  // --- Render UI based on mode ---
  if (metricToggle) {
    // Dual Comparison UI.
    return (
      <div
        className={`wrapper ${
          gameMode === "Beat The Clock" ? "wrapper-with-timer" : ""
        }`}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {gameMode === "Beat The Clock" && timerValue !== null && (
          <div className="timer">{timerValue}s</div>
        )}
        <div className="dual-container">
          {/* Left Commodity Card with AOS entry animation */}
          {/* Key is role-scoped ("left-"/"right-" prefix, not just the
              commodity name) — round-advance moves the right commodity's
              data into left state, so without the prefix the two keys could
              collide and React would reuse/mutate the DOM node across
              slots instead of unmounting it, which is what caused stale
              image/attribute glitches after a correct guess. */}
          <div
            key={`left-${leftCommodity ? leftCommodity.name : "empty"}`}
            className="commodity-card dual-card"
            data-aos="fade-right"
            data-aos-duration={TIMING.CARD_ENTRY_MS}
          >
            {leftCommodity && (
              <>
                <img
                  src={leftCommodity.image || getPlaceholderImage("left")}
                  alt={leftCommodity.name}
                  className="commodity-image"
                />
                <h2>{leftCommodity.name}</h2>
                <div className="price">
                  ${leftCommodity.price.toFixed(2)}
                </div>
              </>
            )}
          </div>
          {/* Right Commodity Card with AOS entry animation and delay */}
          <div
            key={`right-${rightCommodity ? rightCommodity.name : "empty"}`}
            className="commodity-card dual-card"
            data-aos="fade-left"
            data-aos-duration={TIMING.CARD_ENTRY_MS}
            data-aos-delay={TIMING.ENTRY_STAGGER_MS}
          >
            {rightCommodity && (
              <>
                <img
                  src={rightCommodity.image || getPlaceholderImage("right")}
                  alt={rightCommodity.name}
                  className="commodity-image"
                />
                <h2>{rightCommodity.name}</h2>
                {answerSubmitted ? (
                  <div className="price">
                    ${rightCommodity.price.toFixed(2)}
                  </div>
                ) : (
                  <div className="price hidden-price">???</div>
                )}
              </>
            )}
          </div>
        </div>
        {!answerSubmitted && (
          <div className="dual-buttons">
            <button onClick={() => handleDualAnswer("higher")}>
              Higher
            </button>
            <button onClick={() => handleDualAnswer("lower")}>
              Lower
            </button>
          </div>
        )}
        {result && (
          <div
            className={`result-overlay ${result} ${
              resultExiting ? "result-overlay-exit" : ""
            }`}
          >
            <div className="result-icon">{result === "correct" ? "✔" : "✖"}</div>
            {priceDelta && <div className="price-delta">{priceDelta}</div>}
          </div>
        )}
        <div className="score-board">
          <div className="high-score">High Score: {highScore}</div>
          <div className="streak-count">Streak: {streak}</div>
          <div className="current-score">Score: {score}</div>
        </div>
        {/* Quit Button */}
        <button className="quit-button" onClick={handleQuit}>
          Quit
        </button>
      </div>
    );
  } else {
    // Single Price Prediction UI.
    return (
      <div
        className={`wrapper ${
          gameMode === "Beat The Clock" ? "wrapper-with-timer" : ""
        }`}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {gameMode === "Beat The Clock" && timerValue !== null && (
          <div className="timer">{timerValue}s</div>
        )}
        <div className="single-container">
          {/* Single Commodity Card with AOS entry animation */}
          <div
            key={currentCommodity ? currentCommodity.name : "current-commodity"}
            className="commodity-card single-card"
            data-aos="fade-up"
            data-aos-duration={TIMING.CARD_ENTRY_MS}
          >
            {currentCommodity && (
              <>
                <img
                  src={
                    currentCommodity.image ||
                    "/images/placeholder.png"
                  }
                  alt={currentCommodity.name}
                  className="commodity-image"
                />
                <h2>{currentCommodity.name}</h2>
                <div className="price">
                  ${currentCommodity.price.toFixed(2)}
                </div>
              </>
            )}
          </div>
        </div>
       
        {!answerSubmitted && (
          <div className="single-buttons">
            <button onClick={() => handleSingleAnswer("lower")}>
              Lower
            </button>
            <button onClick={() => handleSingleAnswer("higher")}>
              Higher
            </button>
          </div>
        )}
        {result && (
          <div
            className={`result-overlay ${result} ${
              resultExiting ? "result-overlay-exit" : ""
            }`}
          >
            <div className="result-icon">{result === "correct" ? "✔" : "✖"}</div>
            {priceDelta && <div className="price-delta">{priceDelta}</div>}
          </div>
        )}
        <div className="score-board">
          <div className="high-score">High Score: {highScore}</div>
          <div className="streak-count">Streak: {streak}</div>
          <div className="current-score">Score: {score}</div>
        </div>
        {/* Quit Button */}
        <button className="quit-button" onClick={handleQuit}>
          Quit
        </button>
      </div>
    );
  }
}

export default GameScreen;
