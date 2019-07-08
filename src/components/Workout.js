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
          <h2>Current Exercise</h2>
          <h4>{this.state.currentBlock.name}</h4>
          <h4>
            <Countdown
              date={this.state.nextWorkoutTime}
              key={this.state.nextWorkoutTime}
              onComplete={
                (this.state.currentBlockIndex + 1) < BlockStub.length ?
                  this.countdownCallback :
                  undefined // would be nice to render some sort of a good job message
              }
              renderer={countdownRenderer}
            />
          </h4>
          {this.state.currentBlock.incline &&
            <h4>Incline: {this.state.currentBlock.incline}</h4>
          }
          {this.state.currentBlock.reps &&
            <h4>Reps: {this.state.currentBlock.reps}</h4>
          }
        </div>
        <br />
        <h2>Up Next</h2>
        {((this.state.currentBlockIndex + 1) < BlockStub.length) &&
          <h4>{BlockStub[this.state.currentBlockIndex + 1].name} - {BlockStub[this.state.currentBlockIndex + 1].time} seconds</h4>
        }
        <br />
        <h2>Remaining Time:&nbsp;
          <Countdown
            date={workoutEndTime}
            renderer={countdownRenderer}
          />
        </h2>
      </div>
    )
  }
}
