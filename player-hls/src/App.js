import React, { Component } from 'react';
import Player from './Player';
import Controls from './Controls';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*http://52.229.170.236/hls/datain.m3u8*/}

        <Controls />
      </div>
    );
  }
}

export default App;
