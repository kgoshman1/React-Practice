import React from 'react';
import TextInput from './TextInput';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="App" style={{
        backgroundColor: 'lightgray', height: '200px', width: '200px'
      }}>
        < TextInput className='inputs' />
      </div>
    </div>
  );
}

export default App;
