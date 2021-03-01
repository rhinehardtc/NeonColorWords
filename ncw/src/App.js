import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('white'); //For the word that is displayed
  const [hue, setHue] = useState('white'); //For the color of the displayed text
  const [score, setScore] = useState(0); //The score to be incremented upon successful matching or rejection of hue and word

  //List of colors to be randomly selected for both hue and word in the selectRandomColor function
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'magenta'];
  //Select a color from the colors array at random based on index
  const selectRandomColor = () => { return colors[Math.floor(Math.random() * colors.length)] };

  //Styling used for the h1. It uses the hue set in state.
  const style = {'color': hue, 'text-shadow': `0 0 6vmin ${hue}`};
  //Styling used for the score counter
  const scoreStyle = {'color': 'white', 'text-shadow': '0 0 4vmin white', 'margin-left': '2vw', 'align-self': 'flex-start'}

  return (
    <div 
        className="App" 
        onClick={() => {
            setWord(selectRandomColor()); setHue(selectRandomColor());
          }
        } 
        onAuxClick={(e) => {
            e.preventDefault();
            setWord(selectRandomColor()); setHue(selectRandomColor());
          }
        }
        onContextMenu={(e) => {e.preventDefault()}}
    >
      <h3 style={scoreStyle}>Score: {score}</h3>
      <h1 style={style}>{word}</h1>
    </div>
  );
}

export default App;
