import { useState } from 'react';
import './App.css';
import Cell from './components/Cell';
import getMatrix from './getMatrix';

function App() {
  const LEN = 24;
  const [matrix, setMatrix] = useState(getMatrix(LEN));

  const handleCell = (i, j) => {
    let newMatrix = [...matrix];
    newMatrix[i][j].state = true;
    setMatrix(newMatrix);
  }

  const styleMatrix = {
    gridTemplateColumns: `repeat(${LEN}, 20px)`,
    gridTemplateRows: `repeat(${LEN}, 20px)`
  }

  return (
    <div className="App">
      <section style={styleMatrix}>
        {matrix.map((array, i) => {
          return array.map( (cell, j) => {
            return <Cell key={`${i}${j}`} state={cell.state} simbol={cell.simbol} click={() => handleCell(i, j)} />
          })
        })}
      </section>
    </div>
  );
}

export default App;
