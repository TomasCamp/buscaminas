import "./Cell.css"

function Cell({content, click, rightClick}) {
    const {state, simbol, flag} = content
    
    
    return( 
        <article className={`${state}`} 
        onClick={!state && !flag ? click : null}
        onContextMenu={!state ? rightClick : null}>
            {flag ? "F": !state || simbol === 0 ? "": simbol}
        </article>
    )
}

export default Cell;