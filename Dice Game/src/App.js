import { useState } from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import GamePlay from './components/gameplay';


function App() {

  const [gameStarted, setGameStarted] = useState(false);

  function toggleGamePlay(){
    setGameStarted((prev) => !prev)
  }

  return (
    gameStarted ? <GamePlay />: <LandingPage toggle = {toggleGamePlay}/>
  );
}

export default App;
