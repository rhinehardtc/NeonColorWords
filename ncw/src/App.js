import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('white'); //For the word that is displayed
  const [hue, setHue] = useState('white'); //For the color of the displayed text

  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'magenta'];
  const selectRandomColor = () => { return colors[Math.floor(Math.random() * colors.length)] };

  const style = {'color': hue}

  return (
    <div 
        className="App" 
        onClick={() => {setWord(selectRandomColor()); setHue(selectRandomColor())}} 
        onAuxClick={(e) => {
            e.preventDefault();
            setWord(selectRandomColor()); setHue(selectRandomColor());
          }
        }
        onContextMenu={(e) => {e.preventDefault()}}
    >
      <h1 style={style}>{word}</h1>
    </div>
  );
}

export default App;
