
export default function Controls({ activeStatus, handleReset }) {
    const [active, setActive] = activeStatus
    return (
        <div className="app__controls">
            <button id="start_stop" onClick={() => setActive(!active)}>
                {active ? <span>Stop</span> : <span>Start</span>}
            </button>
            <button id="reset" onClick={handleReset}>
                Reset
            </button>
        </div>
    )
}