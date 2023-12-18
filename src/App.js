import { useState } from 'react';
import Game from './components/game/Game';
import Menu from './components/menu/Menu';
import './App.css';


function App() {
  const [play, setPlay] = useState(false);
  const [len, setLen] = useState(0);
  
  
  const handleMenu = (newLen) => {
    setLen(newLen)
    setPlay(true)
  }

  return(
    <div className="App">
        {play ? <Game len={len} setPlay={setPlay} /> 
        : <Menu handle={handleMenu}/>}
    </div>
  )
}
export default App;
