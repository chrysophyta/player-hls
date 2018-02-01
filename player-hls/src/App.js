import React, { Component } from 'react';
import Controls from './Controls';
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
