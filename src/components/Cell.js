import "./Cell.css";

function Cell({state, simbol, click}) {
    return <article className={`${state}`} onClick={click}>{simbol}</article>
}

export default Cell;