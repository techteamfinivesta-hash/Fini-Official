// EndScreen.js
import React, { useState, useEffect, useRef } from "react";
import end from './end.gif';

const LEADERBOARD_KEY = "higherLowerGame_leaderboard";
const MAX_ENTRIES = 5;

function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Failed to read Higher/Lower leaderboard:", err);
    return [];
  }
}

function saveLeaderboard(entries) {
  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error("Failed to save Higher/Lower leaderboard:", err);
  }
}

function EndScreen({ score, highScore, restart, returnToMenu, gameMode, metricToggle }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [copied, setCopied] = useState(false);
  const hasRecordedRun = useRef(false);

  // Guarded by a ref (not an empty dep array) so this survives React 18
  // StrictMode's mount->cleanup->mount dev cycle without recording the run twice.
  useEffect(() => {
    if (hasRecordedRun.current) return;
    hasRecordedRun.current = true;

    const entry = {
      score,
      mode: metricToggle ? "Dual Comparison" : "Single Price Prediction",
      difficulty: gameMode,
      date: new Date().toISOString()
    };

    const updated = [...loadLeaderboard(), entry]
      .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
      .slice(0, MAX_ENTRIES);

    saveLeaderboard(updated);
    setLeaderboard(updated);
  }, [score, gameMode, metricToggle]);

  const handleCopyResult = async () => {
    const summary = `I scored ${score} on ${gameMode} in the Commodity Higher/Lower game!`;
    if (!navigator.clipboard) {
      console.error("Clipboard API unavailable in this browser/context.");
      return;
    }
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy result:", err);
    }
  };

  return (
    <div className="end-container">
      <div className="end-container1">
        <h2>Game Over!</h2>
        <p>Final Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>

      <div className="leaderboard">
        <h3>Top 5 Runs</h3>
        {leaderboard.length === 0 ? (
          <p className="leaderboard-empty">No runs recorded yet.</p>
        ) : (
          <ol className="leaderboard-list">
            {leaderboard.map((entry, idx) => (
              <li key={`${entry.date}-${idx}`}>
                <span className="leaderboard-score">{entry.score}</span>
                <span className="leaderboard-meta">
                  {entry.mode} · {entry.difficulty} · {new Date(entry.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="end-buttons">

        <button onClick={restart}>Try Again</button>
        <button onClick={returnToMenu}>Main Menu</button>
        <button onClick={handleCopyResult}>{copied ? "Copied!" : "Copy Result"}</button>
      </div>
    </div>
  );
}

export default EndScreen;
