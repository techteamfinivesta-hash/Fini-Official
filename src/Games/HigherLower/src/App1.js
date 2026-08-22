import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import commodityData from "./data";
import "./index_higher.css";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import EndScreen from "./EndScreen";

// How long the outgoing screen stays mounted, fading out on top of the
// incoming one, before it's dropped. Matches the CSS crossfade-out
// animation-duration in index_higher.css — keep them in sync.
const CROSSFADE_MS = 400;

// Swapping `screen` used to unmount the old component and mount the new
// one in the same commit, so there was one real frame where the outgoing
// screen was gone and the incoming one (e.g. EndScreen, which fades in
// from opacity 0 on its own) hadn't visibly started yet — a blank/black
// flash. This keeps the previous screen mounted (as a fading-out overlay,
// see .screen-layer-exit) for CROSSFADE_MS after a change, so there's
// always at least one screen fully visible during the handoff.
function useScreenTransition(screen) {
  const nextIdRef = useRef(1);
  const [entries, setEntries] = useState(() => [{ screen, id: 0 }]);

  useEffect(() => {
    setEntries((prev) => {
      const current = prev[prev.length - 1];
      if (current.screen === screen) return prev;
      // Always exactly [outgoing, incoming] — a change mid-crossfade
      // replaces whatever was already fading out rather than stacking a
      // third layer.
      return [current, { screen, id: nextIdRef.current++ }];
    });
  }, [screen]);

  useEffect(() => {
    if (entries.length < 2) return undefined;
    const timer = setTimeout(() => {
      setEntries((prev) => prev.slice(-1));
    }, CROSSFADE_MS);
    return () => clearTimeout(timer);
  }, [entries]);

  return entries;
}

function App1() {
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [metricToggle, setMetricToggle] = useState(true);
  const [commodities] = useState(commodityData);
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [gameMode, setGameMode] = useState("Classic");

  // Switching screens (start -> game via "New Game", end -> game via "Try
  // Again", etc.) swaps in a differently-sized subtree above whatever the
  // user was scrolled to. The browser's native scroll anchoring then shifts
  // the scroll offset to compensate, landing the new screen mid-scroll
  // instead of at its top — cards render partly off-screen. Resetting to
  // the top synchronously (useLayoutEffect, before paint) makes every
  // screen transition land at a stable, predictable position instead.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const screenEntries = useScreenTransition(screen);
  const appRef = useRef(null);

  // .wrapper/.screen-transition use min-height to fill "one viewport" so
  // the dual/single cards can be vertically centered in it — but they sit
  // below the site's <header class="navbar">, not at the true top of the
  // viewport, so a raw 100vh box run from there overshoots the visible
  // area by however tall the navbar is. That pushed the centered content
  // down with it, so on shorter viewports (~700-800px) the Higher/Lower
  // buttons rendered partly below the fold. Measuring the navbar's actual
  // height and exposing it as a CSS var lets the CSS subtract it back out
  // (see --nav-offset in index_higher.css) instead of guessing a constant.
  // ResizeObserver (not a one-shot measurement + window "resize") because
  // the navbar's own height can change after this first fires — e.g. its
  // logo <img> finishing load a beat later grows it a few px — and a
  // stale offset would just reintroduce the same overflow at a smaller
  // scale.
  useLayoutEffect(() => {
    const navEl = document.querySelector(".navbar");
    if (!navEl) return undefined;
    const updateNavOffset = () => {
      appRef.current?.style.setProperty("--nav-offset", `${navEl.offsetHeight}px`);
    };
    updateNavOffset();
    const ro = new ResizeObserver(updateNavOffset);
    ro.observe(navEl);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;
    let trailTimeoutId = null;

    const applyCursorPosition = () => {
      rafId = null;
      document.documentElement.style.setProperty('--cursor-x', `${mouseX - 20}px`);
      document.documentElement.style.setProperty('--cursor-y', `${mouseY - 20}px`);
    };

    // Raw mousemove can fire far faster than the screen repaints (some
    // mice/trackpads report at 120-1000Hz), and the old version scheduled
    // a brand new setTimeout PER event with nothing clearing the previous
    // one — a burst of movement could leave dozens of stacked timers and
    // style writes queued up on the main thread, which is exactly the
    // kind of jank that reads as UI "flicker." Coalescing the cursor write
    // to once per animation frame, and throttling (not stacking) the
    // trail write to at most once per 50ms, keeps this to a bounded,
    // predictable amount of work regardless of input rate.
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (rafId === null) {
        rafId = requestAnimationFrame(applyCursorPosition);
      }

      if (trailTimeoutId === null) {
        trailTimeoutId = setTimeout(() => {
          trailTimeoutId = null;
          document.documentElement.style.setProperty('--trail-x', `${mouseX - 4}px`);
          document.documentElement.style.setProperty('--trail-y', `${mouseY - 4}px`);
        }, 50);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(trailTimeoutId);
    };
  }, []);

  const handleStart = (mode) => {
    setGameMode(mode);
    setScore(0);
    setScreen("game");
  };

  return (
    <div className="app" ref={appRef}>
      <div
        className="custom-cursor" 
        style={{
          left: 'var(--cursor-x, 0)',
          top: 'var(--cursor-y, 0)'
        }}
      />
      <div 
        className="cursor-trail" 
        style={{
          left: 'var(--trail-x, 0)',
          top: 'var(--trail-y, 0)'
        }}
      />

      <div className="screen-transition">
        {screenEntries.map((entry, idx) => {
          const isExiting = idx < screenEntries.length - 1;
          return (
            <div
              key={entry.id}
              className={
                isExiting
                  ? "screen-layer screen-layer-exit"
                  : "screen-layer screen-layer-enter"
              }
            >
              {entry.screen === "start" && (
                <StartScreen
                  handleStart={handleStart}
                  metricToggle={metricToggle}
                  setMetricToggle={setMetricToggle}
                  isMusicOn={isMusicOn}
                  toggleMusic={() => setIsMusicOn((prev) => !prev)}
                />
              )}
              {entry.screen === "game" && (
                <GameScreen
                  cData={commodities}
                  score={score}
                  setScore={setScore}
                  highScore={highScore}
                  setHighScore={setHighScore}
                  handleLoss={() => setScreen("end")}
                  gameMode={gameMode}
                  isMusicOn={isMusicOn}
                  metricToggle={metricToggle}
                />
              )}
              {entry.screen === "end" && (
                <EndScreen
                  score={score}
                  highScore={Math.max(score, highScore)}
                  restart={() => {
                    setScore(0);
                    setScreen("game");
                  }}
                  returnToMenu={() => setScreen("start")}
                  gameMode={gameMode}
                  metricToggle={metricToggle}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App1;