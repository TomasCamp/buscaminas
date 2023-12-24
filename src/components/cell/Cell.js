import "./Cell.css"

function Cell({content, click, rightClick}) {
    const {state, simbol, flag} = content
    
    
    return( 
        <article className={`${state} ${state? "n"+simbol : " "}`} 
        onClick={!state && !flag ? click : null}
        onContextMenu={!state ? rightClick : null}>
            {flag ? "🚩": 
            !state || simbol === 0 ? "": 
            state && simbol === "B" ? "💣" :
             simbol}
        </article>
    )
}

export default Cell;