import "./Cell.css"

function Cell({state, simbol, click}) {
    return( 
        state ? <article className={`${state}`}>{simbol === 0 ? " ": simbol}</article>
        : <article className={`${state}`} onClick={click}>{simbol === 0 ? " ": simbol}</article>
    )
}

export default Cell;