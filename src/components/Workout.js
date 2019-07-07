import React from 'react';
import Countdown from 'react-countdown-now';

// Temporary until I get everything working
import { BlockStub } from '../stubs/BlockStub';

const countdownRenderer = ({ hours, minutes, seconds }) => {
    return <span>{minutes}:{seconds}</span>;
};

export default class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBlockIndex: 0,
      currentBlock: BlockStub[0],
    };
    this.countdownCallback = this.countdownCallback.bind(this);
  }

  countdownCallback() {
    this.setState({
      currentBlockIndex: this.state.currentBlockIndex + 1,
      currentBlock: BlockStub[this.state.currentBlockIndex + 1],
    })
  }

  render() {
    return (
      <div>
        <h1>Exercise: {this.state.currentBlock.name}</h1>
        <h1>Time Left:&nbsp;
          <Countdown
            date={Date.now() + (this.state.currentBlock.time * 1000)}
            onComplete={this.countdownCallback}
            renderer={countdownRenderer}
          />
        </h1>
        {this.state.currentBlock.incline &&
          <h1>Incline: {this.state.currentBlock.incline}</h1>
        }
        {this.state.currentBlock.reps &&
          <h1>Reps: {this.state.currentBlock.reps}</h1>
        }
      </div>
    )
  }
}
