import React from 'react';
import './App.css';

import Treadmill from './components/Treadmill';
import Floor from './components/Floor';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Exercise Me</h1>
      <Treadmill />
      <Floor />
      <br />
      <br />
      <button type="submit" className="btn btn-primary">Create Workout</button>
    </div>
  );
}

export default App;
