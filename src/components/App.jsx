import {useState, useEffect, useRef} from 'react';
import {useInterval} from '../hooks/useInterval';

import Controls from './Controls';
import Timer from './Timer';
import TimeSet from './TimeSet';

const BREAK_LENGTH = 5;
const SESSION_LENGTH = 25;

export default function App() {
    const [breakLength, setBreakLength] = useState(BREAK_LENGTH)
    const [sessionLength, setSessionLength] = useState(SESSION_LENGTH)
    const [mode, setMode] = useState('session')
    const [time, setTime] = useState(SESSION_LENGTH * 60 * 1000)
    const [active, setActive] = useState(false)
    const beepRef = useRef()

    useInterval(() => setTime(time - 1000), active ? 1000 : null)

    useEffect(() => {
        setTime(sessionLength * 60 * 1000)
    }, [sessionLength])

    useEffect(() => {
        if (time === -1000 && mode === 'session') {
                beepRef.current.play()
                setMode('break')
                setTime(breakLength * 60 * 1000)
        } else if (time === -1000 && mode === 'break') {
                beepRef.current.play()
                setMode('session')
                setTime(sessionLength * 60 * 1000)
        }
    }, [time, breakLength, sessionLength, mode])

    const handleReset = () => {
        beepRef.current.pause()
        beepRef.current.currentTime = 0;
        setActive(false)
        setMode('session')
        setBreakLength(BREAK_LENGTH)
        setSessionLength(SESSION_LENGTH)
        setTime(SESSION_LENGTH * 60 * 1000)
    }

    return (
        <div className="container">
            <div className="app">
                <header>
                    <h1>Pomodoro Clock</h1>
                </header>
                <div className="app__time-setters">
                    <TimeSet type={'Break'} value={[breakLength, setBreakLength]} />
                    <TimeSet type={'Session'} value={[sessionLength, setSessionLength]} />
                </div>
                <Timer currentMode={[mode, setMode]} currentTime={[time, setTime]} />
                <Controls activeStatus={[active, setActive]} handleReset={handleReset} />
                <audio ref={beepRef} id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
            </div>
        </div>
    )
}

