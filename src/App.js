import freecodecampLogo from './images/fcc_primary_large.jpg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';



function App() {
  
  const [numClics, setNumClics] = useState(0);


  const handleClick = () => {
    setNumClics(numClics + 1);
  }

  const restartCounter = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-container-icon'>
        <img 
          className='freecodecamp-logo'
          src={freecodecampLogo}
          alt='freecodecamp logo'
        />
      </div>
      <div className='principal-container'>

        <Counter numClics={numClics} />

        <Button 
          text='Click'
          isAClickButton={true}
          handleClick={handleClick}
        />

        <Button 
          text='Restart'
          isAClickButton={false}
          handleClick={restartCounter}
        />

      </div>
    </div>
  );
}

export default App;
