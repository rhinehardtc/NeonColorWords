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
  const wordStyle = {'color': hue, 'text-shadow': `0 0 6vmin ${hue}`};
  //Styling used for the score counter
  const scoreStyle = {'color': 'white', 'text-shadow': '0 0 4vmin white', 'margin-left': '2vw', 'align-self': 'flex-start'};

  // isMatch will increase the score if the hue and word are the same color, or else reset the score, and is used for onClick
  // isNotMatch does the same thing in reverse for onAuxClick
  // These functions will eventually need to determine if the game is reset, including seleciting to re-render the eventual start/end screen
  const isMatch = () => {
    hue === word ? setScore(score + 1) : setScore(0);
  };
  const isNotMatch = () => {
    hue !== word ? setScore(score + 1) : setScore(0);
  };

  return (
    <div 
        className="App" 
        onClick={() => {
            isMatch();
            setWord(selectRandomColor()); setHue(selectRandomColor());
          }
        } 
        onAuxClick={(e) => {
            e.preventDefault();
            isNotMatch();
            setWord(selectRandomColor()); setHue(selectRandomColor());
          }
        }
        onContextMenu={(e) => {e.preventDefault()}}
    >
      <h3 style={scoreStyle}>Score: {score}</h3>
      <h1 style={wordStyle}>{word}</h1>
    </div>
  );
}

export default App;
