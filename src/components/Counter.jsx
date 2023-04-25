import React from 'react';
import '../style-sheets/Counter.css';

function Counter({ numClics }) {

  return (
    <div className='counter' >
      {numClics}
    </div>
  )
}

export default Counter;