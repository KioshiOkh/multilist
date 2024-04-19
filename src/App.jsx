import React, { useState } from 'react';
import './App.css';
import goback from './goback.svg'

function Click_Main(text, setChosenOption) {
  return (
    <button onClick={() => setChosenOption(text)}>{text}</button>
  );
}

function App() {
  const [chosenOption, setChosenOption] = useState(null);
  const [buttons, setButtons] = useState([]);

  const handleClick = (text) => {
    if (!chosenOption) {
      setButtons([...buttons, text]);
      setChosenOption(text);
    }
  };

  const handleGoBack = () => {
    setChosenOption(null);
    setButtons([]);
  };

  return (
    <div className="App">
      <h1 className='header justify'>Wähle eine Option</h1>
      <div className='justify table'>
        {chosenOption ? (
          <button onClick={handleGoBack} className='smaller-btn white-border fixed' >Zurück{" "}<img className='icon' src={goback}/></button>
        ) : (
          <>
            <button onClick={() => handleClick("Button 1")} className='button' >Option 1</button>
            <button onClick={() => handleClick("Button 2")} className='button' >Option 2</button>
            <button onClick={() => handleClick("Button 3")} className='button' >Option 3</button>
          </>
        )}
        {buttons.map((buttonText, index) => (
          <div  className='justify' key={index}>
            <button className='button'>{buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
