import React from 'react';
import Countdown, { zeroPad } from 'react-countdown-now';

// Temporary until I get everything working
import { BlockStub } from '../stubs/BlockStub';

const countdownRenderer = ({ minutes, seconds }) => {
    return <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
};
const workoutEndTime = Date.now() + BlockStub.reduce((accumulator, block) => {
  return accumulator + block.time;
}, 0) * 1000;

export default class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBlockIndex: 0,
      currentBlock: BlockStub[0],
      nextWorkoutTime: Date.now() + (BlockStub[0].time * 1000),
    };
    this.countdownCallback = this.countdownCallback.bind(this);
  }

  countdownCallback() {
    this.setState({
      currentBlockIndex: this.state.currentBlockIndex + 1,
      currentBlock: BlockStub[this.state.currentBlockIndex + 1],
      nextWorkoutTime: Date.now() + (BlockStub[this.state.currentBlockIndex + 1].time * 1000),
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Current Exercise</h1>
          <h2>{this.state.currentBlock.name}</h2>
          <h2>
            <Countdown
              date={this.state.nextWorkoutTime}
              key={this.state.nextWorkoutTime}
              onComplete={this.countdownCallback}
              renderer={countdownRenderer}
            />
          </h2>
          {this.state.currentBlock.incline &&
            <h2>Incline: {this.state.currentBlock.incline}</h2>
          }
          {this.state.currentBlock.reps &&
            <h2>Reps: {this.state.currentBlock.reps}</h2>
          }
        </div>
        <br />
        <br />
        <h1>Up Next</h1>
        {/* This bugs out on the last block */}
        <h2>{BlockStub[this.state.currentBlockIndex+1].name}</h2>
        <br />
        <br />
        <h1>Remaining Time:&nbsp;
          <Countdown
            date={workoutEndTime}
            renderer={countdownRenderer}
          />
        </h1>
      </div>
    )
  }
}
