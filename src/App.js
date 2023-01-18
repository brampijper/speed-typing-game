import React from "react";
import "./App.css";
import useWordGame from "./useWordGame";

function App() {
    const {
        text,
        wordCount, 
        isTimeRunning, 
        timeRemaining, 
        textAreaRef,
        startGame,
        handleChange
    } = useWordGame()

    return (
        <div>
            <h1>How fast can you type?</h1>
            <textarea
                ref={textAreaRef}
                value={text}
                onChange={handleChange}
                disabled={!isTimeRunning} />
            <h4>time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                start game
            </button>
            <h1>word count: {wordCount}</h1>
        </div>
    )
}

export default App