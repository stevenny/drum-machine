import React, { Component } from 'react';
import './style/App.css';
import DrumMachine from './drum-machine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrumMachine></DrumMachine>
      </div>
    );
  }
}

export default App;
