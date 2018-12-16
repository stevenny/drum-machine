import React, { Component } from 'react';
import './App.css';
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
