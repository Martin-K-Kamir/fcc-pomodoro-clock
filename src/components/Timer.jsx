import React from 'react';

export default function Timer({ currentMode, currentTime }) {
    const [mode] = currentMode;
    const [time] = currentTime;

    const formatTimer = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="app__timer">
            <p id="timer-label" className="app__timer-session">
                {mode === 'session' ? 'Session' : 'Break'}
            </p>
            <p id="time-left" className="app__timer-display">
                {formatTimer(time)}
            </p>
        </div>
    );
}
