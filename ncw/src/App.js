import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('word');
  const [hue, setHue] = useState('white');

  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'pink'];
  const selectRandomColor = () => { return colors[Math.floor(Math.random() * colors.length)] };

  const style = {'color': hue}

  return (
    <div className="App">
      <h1 style={style} onClick={() => {setWord(selectRandomColor()); setHue(selectRandomColor())}}>{word}</h1>
    </div>
  );
}

export default App;
