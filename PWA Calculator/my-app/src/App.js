import React from 'react';
import Calculator from './components/Calculator';
import './App.css';


function App() {
  return (
    <div className='App'>
      <header className='App-Header'>
      <Calculator count={0}/>
      </header>
    </div>
  );
}

export default App;
