import React from 'react';
import Countdown from 'react-countdown-now';

// Temporary until I get everything working
import { BlockStub } from '../stubs/BlockStub';

const currentBlockIndex = 0;
const currentBlock = BlockStub[currentBlockIndex];



export default class Workout extends React.Component {
  render() {
    return (
      <div>
        <h1>Exercise: {currentBlock.name}</h1>
        <h1>Time Left:&nbsp;
          <Countdown date={Date.now() + 10000} />
        </h1>
        {currentBlock.incline &&
          <h1>Incline: {currentBlock.incline}</h1>
        }
        {currentBlock.reps &&
          <h1>Reps: {currentBlock.reps}</h1>
        }
      </div>
    )
  }
}
