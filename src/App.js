import React from 'react';
import './App.css';

import Treadmill from './components/Treadmill';
import Floor from './components/Floor';
import Workout from './components/Workout';

const workoutView = true;

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Exercise Me</h1>

      {!workoutView &&
        <div>
          <Treadmill />
          <Floor />
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Create Workout</button>
        </div>
      }

      {workoutView &&
        <div>
          <Workout />
        </div>
      }
    </div>
  );
}

export default App;
