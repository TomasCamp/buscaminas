export default function Message({handleReset, setPlay, check}) {
    return (<div className="message">
        <p>You {check === -1 ? "loose" : "win"}</p>
        <div>
            <button onClick={handleReset}>Reset</button>
            <button onClick={()=>{setPlay(false)}}>Back</button>
        </div>
    </div>)
}