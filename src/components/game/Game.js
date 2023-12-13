import { useState } from 'react'
import Cell from './../cell/Cell'
import getMatrix from './../../services/getMatrix'

export default function Game({len, handleCheck}) {
    const [matrix, setMatrix] = useState(getMatrix(len))

    const handleCell = (i, j, handleCheck) => {
        let newMatrix = [...matrix]
        newMatrix[i][j].state = true
        setMatrix(newMatrix)
        handleCheck()
    }

    const styleMatrix = {
        gridTemplateColumns: `repeat(${len}, ${500/len}px)`,
        gridTemplateRows: `repeat(${len}, ${500/len}px)`,
        userSelect: "none",
        height: "500px",
        width: "500px"
    }

    return (
        <section style={styleMatrix}>
        {matrix.map((array, i) => {
        return array.map( (cell, j) => {
            return <Cell key={`${i}${j}`} state={cell.state} simbol={cell.simbol} click={() => handleCell(i, j, handleCheck)} />
        })
        })}
    </section>
    )
    
}