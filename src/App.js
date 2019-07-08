import React from 'react';
import './App.css';

import Treadmill from './components/Treadmill';
import Floor from './components/Floor';
import Workout from './components/Workout';

// Post MVP is to make this work
const workoutView = true;

function App() {
  return (
    <div className="App">
      {!workoutView &&
        <div>
          <Treadmill />
          <Floor />
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
