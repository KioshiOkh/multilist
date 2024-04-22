import React, { useState } from 'react';
import './App.css';
import goback from './goback.svg';
import waschm from './waschmaschine.png';
import schrauben from './schrauben.png';
import welding from './welding.png';
import { Footer } from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleTopicClick = (topic) => {
    setCurrentPage("Subtopics");
    setSelectedTopic(topic);
    setSelectedSubtopic(null);
    setSelectedOption(null);
  };

  const handleSubtopicClick = (subtopic) => {
    setCurrentPage("Options");
    setSelectedSubtopic(subtopic);
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setCurrentPage("Image");
    document.getElementById("header").innerHTML = option
  };

  const handleGoBack = () => {
    if (currentPage === "Image") {
      setCurrentPage("Options");
      setSelectedOption(null);
      document.getElementById("header").innerHTML = "Wähle eine Option"
    } else if (currentPage === "Options") {
      setCurrentPage("Subtopics");
      setSelectedSubtopic(null);
    } else if (currentPage === "Subtopics") {
      setCurrentPage("Home");
      setSelectedTopic(null);
    }
  };

  return (
    <div className="App">
      <body>
        <h1 className='header justify' id='header'>Wähle eine Option</h1>
        <div className='justify table'>
          {currentPage === "Home" && (
            <>
              <button onClick={() => handleTopicClick("Topic One")} className='button'>Haushalt</button>
              <button onClick={() => handleTopicClick("Topic Two")} className='button'>Topic 2</button>
              <button onClick={() => handleTopicClick("Topic Three")} className='button'>Topic 3</button>
            </>
          )}
          {currentPage === "Subtopics" && (
            <>
              <h2 className='header justify'>{selectedTopic}</h2>
              <button onClick={() => handleSubtopicClick("Subtopic One")} className='button'>Waschmaschine</button>
              <button onClick={() => handleSubtopicClick("Subtopic Two")} className='button'>Subtopic 2</button>
              <button onClick={() => handleSubtopicClick("Subtopic Three")} className='button'>Subtopic 3</button>
              <button onClick={handleGoBack} className='smaller-btn btn-right'>Zurück{" "}<img className='icon' alt='back' src={goback}/></button>
            </>
          )}
          {currentPage === "Options" && (
            <>
              <h2 className='header justify'>{selectedSubtopic}</h2>
              <button onClick={() => handleOptionClick("Schweißen")} className='button'>Schweißen</button>
              <button onClick={() => handleOptionClick("Schrauben")} className='button'>Schrauben</button>
              <button onClick={() => handleOptionClick("Bauplan")} className='button'>Bauplan</button>
              <button onClick={handleGoBack} className='smaller-btn btn-right'>Zurück{" "}<img className='icon' alt='back' src={goback}/></button>
            </>
          )}
          {(currentPage === "Image" && selectedOption) && (
            <>
              <img className='picture' src={selectedOption === "Schweißen" ? welding : selectedOption === "Schrauben" ? schrauben : waschm} alt="bild" />
              <p>Pictures are from  <a className='link' href='https://www.flaticon.com/' target="_blank" rel="noreferrer">Flaticon</a></p>
              <button onClick={handleGoBack} className='smaller-btn btn-right'>Zurück{" "}<img className='icon' alt='back' src={goback}/></button>
            </>
          )}
        </div>
        <div className='move'>
          <p className='justify'>DISCLAIMER: This is just a test project and doesnt has any use</p>
          <p className='justify'>HAFTUNGSAUSSCHLUSS: Dies ist nur ein Testprojekt und hat keinen Nutzen</p>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;