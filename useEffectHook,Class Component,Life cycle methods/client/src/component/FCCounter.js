import React, { useEffect, useState } from 'react';

function FCCounter() {
    let [score, setScore] = useState(0);
    let [wickets, setWickets] = useState(0);

    useEffect(() => {
        console.log("FCCounter -loading");
    }, []); // Run only once on mount

    useEffect(() => {
        console.log("Score SV changes");
    }, [score]); // Run only when 'score' changes

    useEffect(() => {
        console.log("Wickets SV changes");
    }, [wickets]); // Run only when 'wickets' changes

    useEffect(() => {
        console.log("score,wickets SV changes");
    }, [score, wickets]); // Run when either 'score' or 'wickets' change

    useEffect(() => {
        console.log("Any SV changes");
    }, [score, wickets]); // This will also catch any changes in 'score' or 'wickets'

    useEffect(() => {
        return () => {
            console.log("FCCounter -Unloading");
        };
    }, []); // Run only once on unmount

    return (
        <div className='stateDiv'>
            <h1>FCCounter</h1>
            <h1>Score: {score}</h1>
            <h1>Wickets: {wickets}</h1>
            <button
                type='button'
                onClick={() => {
                    setScore(score + 1);
                }}
            >
                Increment Score
            </button>
            <button
                type='button'
                onClick={() => {
                    setScore(score - 1);
                }}
            >
                Decrement Score
            </button>
            <br />
            <button
                type='button'
                onClick={() => {
                    setWickets(wickets + 1);
                }}
            >
                Increment Wickets
            </button>
            <button
                type='button'
                onClick={() => {
                    setWickets(wickets - 1);
                }}
            >
                Decrement Wickets
            </button>
        </div>
    );
}

export default FCCounter;
