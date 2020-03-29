import React from 'react';

import Start from './components/Start';
import Board from './components/Board';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      finalNumber: "0",
      level: "junior"
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
    const { finalNumber, level } = this.state;
    switch (this.state.step) {
      case 0:
        return <Start
          finalNumber={finalNumber}
          level={level}
          onConfigChange={this.onConfigChange}
          onIncrementStep={this.onIncrementStep}
        />;
      case 1:
        return <Board
          finalNumber={finalNumber}
          level={level}
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
