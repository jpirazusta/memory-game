import React from 'react';
import './App.css';
import Start from './Start';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      number: 0,
      size: 0
    };
  }

  render() {
    const { started, number, size } = this.state;
    return (
      <div className="main-container">
        <Start display={started ? 'none' : 'block'} />
        {/* <Board display={started} /> */}
      </div>
    );
  }
}

export default App;
