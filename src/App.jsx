import { useState } from 'react';
import './App.css';

function App() {
  const [value, SetValue] = useState(0)

  function decrease() {
    SetValue(value - 1);
    if (value == 0) {
      SetValue(0);
    }
  }
  function reset() {
    SetValue(0);
  }
  function increase() {
    SetValue(value + 1);
  }

  return (
    <div className="App">
      <div className='content'>
        <h2>Counter</h2>
        <p>{value}</p>
        <div className='divBotoes'>
          <button onClick={decrease} className='decrease'>Decrease</button>
          <button onClick={reset} className='reset'>Reset</button>
          <button onClick={increase} className='increase'>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
