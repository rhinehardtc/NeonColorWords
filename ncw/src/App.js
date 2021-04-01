import React, {useState, useEffect} from 'react';
import './App.css';
import EndScreen from './EndScreen';
import StartScreen from './StartScreen';

function App() {
  const [start, setStart] = useState(false); //Determines if game is started. Passed as props to StartScreen & EndScreen Components.
  const [end, setEnd] = useState(false); //Determines if game is ended. Passed as props to StartScreen & EndScreen Components.
  const [word, setWord] = useState('white'); //For the word that is displayed
  const [hue, setHue] = useState('white'); //For the color of the displayed text
  const [backgroundColor, setBackgroundColor] = useState('#070708'); //For background color change, which should only take place after the score in modify()
  const [score, setScore] = useState(0); //The score to be incremented upon successful matching or rejection of hue and word

  //List of colors to be randomly selected for both hue and word in the selectRandomColor function
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'magenta'];
  //Select a color from the colors array at random based on index
  const selectRandomColor = () => { return colors[Math.floor(Math.random() * colors.length)] };

  //Styling used for the h1. It uses the hue set in state.
  const wordStyle = {'color': hue, 'text-shadow': `0 0 6vmin ${hue}`, fontSize: "14vmin", "-webkit-text-stroke": "0.5px #070708"};
  //Styling used for the score counter
  const scoreStyle = {'color': 'white', 'text-shadow': '0 0 4vmin white', 'margin': '0 0 15vh 2vw', 'align-self': 'flex-start'};

  // isMatch will increase the score if the hue and word are the same color, or else reset the score, and is used for onClick
  // isNotMatch does the same thing in reverse for onAuxClick
  // These functions will eventually need to determine if the game is reset, including seleciting to re-render the eventual start/end screen
  const isMatch = () => {
    if(hue === word){ setScore(score + 1); setBackgroundColor("#070708"); }
    else {setStart(false); setEnd(true)};
  };
  const isNotMatch = () => {
    if(hue !== word){ setScore(score + 1); setBackgroundColor("#070708"); }
    else {setStart(false); setEnd(true)};
  };

  // function for randomly choosing whether to modify different visual properties
  const modify = () => {
    if(score > 10){
      if(randomRoll(2)){
        setHue("black");
      };
    };
    if(score > 20){
      if(randomRoll(6)){
        setBackgroundColor(selectRandomColor());
      };
    };
  };

  // function used to return boolean based on target being compared to a random number between 1 and 10
  const randomRoll = (target) => {
    return Math.floor(Math.random() * 20) <= target ? true : false;
  };

  //Decides whether to render the start screen, end screen, or main game interface based on start and end state boolean values.
  //Exclusively returned in App return statement.
  const decideGamePhase = () => {
    if(start){
      return(
        <div 
          className="App" 
          style={{backgroundColor: backgroundColor}}
          onClick={() => {
              isMatch();
              setWord(selectRandomColor()); setHue(selectRandomColor());
              modify();
            }
          } 
          onAuxClick={(e) => {
              e.preventDefault();
              isNotMatch();
              setWord(selectRandomColor()); setHue(selectRandomColor());
              modify();
            }
          }
          onContextMenu={(e) => {e.preventDefault()}}
          >
          <h3 style={scoreStyle}>Repairs: {score}</h3>
          <h1 style={wordStyle}>{word}</h1>
        </div>
      )
    } else if(end){
      return <EndScreen score={score} setScore={setScore} setStart={setStart} setEnd={setEnd}/>
    } else {
      return <StartScreen setStart={setStart}/>
    }
  }

  return (
    <>
      {decideGamePhase()}
    </>
  );
}

export default App;
