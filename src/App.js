import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
    const STARTING_TIME = 5;
    const [text, setText] = useState('')
    const [timeRemaining, settimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setisTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textAreaRef = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function calculateWordCount() {
        const words = text.trim().split(' ')
        const filteredWords = words.filter(word => word !== "")
        setWordCount(filteredWords.length)
    }

    function startGame() {
        settimeRemaining(STARTING_TIME);
        setisTimeRunning(true)
        setText("")
        textAreaRef.current.disabled = false
        textAreaRef.current.focus()
    }

    useEffect( () => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout( () => {
                settimeRemaining(prevState => prevState - 1)
            }, 1000)
        } else {
            calculateWordCount()
            setisTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning])

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