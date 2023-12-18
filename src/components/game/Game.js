import { useState } from 'react'
import Cell from './../cell/Cell'
import getMatrix from './../../services/getMatrix'
import Message from '../Message/Message'

export default function Game({len, setPlay}) {
    const [matrix, setMatrix] = useState(getMatrix(len))
    const [check, setCheck] = useState(0);

    const handleCheck = () => {
        let checkAux = check + 1
        let totalCells = len*len;
        if ((len === 8 && checkAux === totalCells - 10) || (len === 16 && checkAux === totalCells - 40)  || 
        (checkAux === totalCells - 99)) setCheck(-2)
        else setCheck(checkAux)
    }

    const handleCell = (i, j) => {
        let newMatrix = [...matrix]
        newMatrix[i][j].state = true
        setMatrix(newMatrix)
        if (newMatrix[i][j].simbol === "B") setCheck(-1)
        else handleCheck()
    }

    const handleReset = () => {
        setMatrix(getMatrix(len))
        setCheck(0)
    }

    const styleMatrix = {
        gridTemplateColumns: `repeat(${len}, ${500/len}px)`,
        gridTemplateRows: `repeat(${len}, ${500/len}px)`,
        userSelect: "none",
        height: "500px",
        width: "500px"
    }

    return (
        <>
            <section className='game' style={styleMatrix}>
                {matrix.map((array, i) => {
                    return array.map( (cell, j) => {
                        return (
                            check === -1 ? <Cell key={`${i}${j}`} state={cell.state} simbol={cell.simbol} click={() => {}} />
                            : <Cell key={`${i}${j}`} state={cell.state} simbol={cell.simbol} click={() => handleCell(i, j)} />
                        )
                    })
                })}
            </section>
            {check < 0 ? <Message handleReset={handleReset} setPlay={setPlay} check={check} />
            : <></>}
        </>
        
    )
    
}