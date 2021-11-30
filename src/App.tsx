import React from 'react';
import './App.css';
import { Button  } from './stories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button primary={true} label={'Add'}></Button>
      </header>
    </div>
  );
}

export default App;
