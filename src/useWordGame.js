import { useState, useEffect, useRef } from 'react';

export default function useWordGame(startingTime = 5) {
    const [timeRemaining, settimeRemaining] = useState(startingTime)
    const [isTimeRunning, setisTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const [text, setText] = useState('')
    const textAreaRef = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function startGame() {
        settimeRemaining(startingTime);
        setisTimeRunning(true)
        setText("")
        textAreaRef.current.disabled = false
        textAreaRef.current.focus()
    }

    function calculateWordCount() {
        const words = text.trim().split(' ')
        const filteredWords = words.filter(word => word !== "")
        setWordCount(filteredWords.length)
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

    return {text, wordCount, isTimeRunning, timeRemaining, textAreaRef, startGame, handleChange}


} 