import { useState } from 'react'
import Cell from './../cell/Cell'
import getMatrix from './../../services/getMatrix'
import Message from '../Message/Message'

export default function Game({len, setPlay}) {
    const [matrix, setMatrix] = useState(getMatrix(len))
    const [check, setCheck] = useState(0);

    const handleCheck = (aux) => {
        let checkAux = check + aux
        let totalCells = len*len;
        if ((len === 8 && checkAux === totalCells - 10) || (len === 16 && checkAux === totalCells - 40)  || 
        (len === 24 && checkAux === totalCells - 99)) setCheck(-2)
        else setCheck(checkAux)
    }

    const pulseCell = (i,j, matrix, aux) => {
        if (matrix[i][j].state === false) {
            matrix[i][j].state = true
            aux++
            if (matrix[i][j].simbol === 0) {
                aux = pulseCell(i,j,matrix, aux)
                if (i === 0){
                    if (j !== 0) {
                        aux = pulseCell(i,j-1,matrix, aux)
                        aux = pulseCell(i+1,j-1,matrix, aux)
                    }
                    if (j !== len-1) {
                        aux = pulseCell(i,j+1,matrix, aux)
                        aux = pulseCell(i+1,j+1,matrix, aux)
                    }
                    aux = pulseCell(i+1,j,matrix, aux)
        
                } else if (i === len-1){
                    if (j !== 0) {
                        aux = pulseCell(i,j-1,matrix, aux)
                        aux = pulseCell(i-1,j-1,matrix, aux)
                    }
                    if (j !== len-1) {
                        aux = pulseCell(i,j+1,matrix, aux)
                        aux = pulseCell(i-1,j+1,matrix, aux)
                    }
                    aux = pulseCell(i-1,j,matrix, aux)
            
                } else {
                    if (j !== 0) {
                        aux = pulseCell(i,j-1,matrix, aux)
                        aux = pulseCell(i+1,j-1,matrix, aux)
                        aux = pulseCell(i-1,j-1,matrix, aux)
                    }
                    if (j !== len-1) {
                        aux = pulseCell(i,j+1,matrix, aux)
                        aux = pulseCell(i+1,j+1,matrix, aux)
                        aux = pulseCell(i-1,j+1,matrix, aux)
                    }
                    aux = pulseCell(i+1,j,matrix, aux)
                    aux = pulseCell(i-1,j,matrix, aux)
                }
            }
        }
        return aux
    }

    const handleCell = (i, j) => {
        let newMatrix = [...matrix]
        let aux = pulseCell(i,j,newMatrix,0)
        setMatrix(newMatrix)
        if (newMatrix[i][j].simbol === "B") setCheck(-1)
        else handleCheck(aux)
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
                            check < 0 ? <Cell key={`${i}${j}`} state={cell.state} simbol={cell.simbol} click={() => {}} />
                            : <Cell key={`${i}${j}`} state={cell.state} simbol={cell.simbol} click={() => handleCell(i, j)} />
                        )
                    })
                })}
            </section>
            {check < 0 ? <Message handleReset={handleReset} setPlay={setPlay} check={check} />
            : <button onClick={() => {setPlay(false)}}>Back</button>}
        </>
        
    )
    
}