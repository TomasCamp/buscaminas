import "./Cell.css"

function Cell({state, simbol, click}) {
    return( 
        state ? <article className={`${state}`}>{simbol}</article>
        : <article className={`${state}`} onClick={click}>{simbol}</article>
    )
}

export default Cell;