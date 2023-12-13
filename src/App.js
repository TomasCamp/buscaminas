import { useState } from 'react';
import Game from './components/game/Game';
import Menu from './components/menu/Menu';
import './App.css';


function App() {
  const [play, setPlay] = useState(false);
  const [len, setLen] = useState(0);
  const [check, setCheck] = useState(0);
  
  const handleMenu = (newLen) => {
    setLen(newLen)
    setPlay(true)
  }

  const handleCheck = () => {
    let checkAux = check + 1
    let totalCells = len*len;
    if ((len === 8 && checkAux === totalCells - 10) || (len === 16 && checkAux === totalCells - 40)  || 
    (checkAux === totalCells - 99)) setPlay(false)
    else setCheck(checkAux)
  }

  console.log(play)

  return(
    play ? <Game len={len} handleCheck={handleCheck} /> 
    : <Menu handle={handleMenu}/>
  )
}
export default App;
