import React, { Component } from 'react';
import Player from './Player';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*http://52.229.170.236/hls/datain.m3u8*/}
        <Player
          src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"
          controls={true}
          autoplay={true}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
