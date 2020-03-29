import React from 'react';

import './App.css';
import Start from './Start';
import Board from './Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      finalNumber: "0",
      numberOfPairs: "8"
    };
    this.totalSteps = 2;
  }

  onConfigChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onIncrementStep = () => {
    this.setState(previousState => ({
      step: (previousState.step + 1) % this.totalSteps
    }));
  }

  renderStep() {
    const { finalNumber, numberOfPairs } = this.state;
    switch (this.state.step) {
      case 0:
        return <Start
          finalNumber={finalNumber}
          numberOfPairs={numberOfPairs}
          onConfigChange={this.onConfigChange}
          onIncrementStep={this.onIncrementStep}
        />;
      case 1:
        return <Board
          finalNumber={finalNumber}
          numberOfPairs={numberOfPairs}
          onIncrementStep={this.onIncrementStep}
        />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="main-container">
        { this.renderStep() }
      </div>
    );
  }
}

export default App;
