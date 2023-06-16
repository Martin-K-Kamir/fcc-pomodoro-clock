export default function TimeSet({ value, type }) {
    const [val, setVal] = value
    const _type = type.toLowerCase()
    const handleIncrement = ()=> val >= 60 ? null : setVal(val + 1)
    const handleDecrement = () =>  val <= 1 ? null : setVal(val - 1)

    return (
        <div className="timer-setter">
            <p id={`${_type}-label`}>{type} Length</p>
            <div className="timer-setter__controls">
                <button id={`${_type}-decrement`} onClick={handleDecrement} aria-label={`Decrease ${type} length`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 9h24v6h-24z" />
                    </svg>
                </button>
                <p id={`${_type}-length`}>{val}</p>
                <button id={`${_type}-increment`} onClick={handleIncrement} aria-label={`Increase ${type} length`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}