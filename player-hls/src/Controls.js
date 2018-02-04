import React from 'react';
import Player from './Player';
import './App.css';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { width: '800px' },
      src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
      playbackRate: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    let player = document.querySelector('video');
    player.playbackRate = this.state.playbackRate;
  }

  handleSubmit(event) {
    this.setState({ src: this.input.value });
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({
      style: { width: event.target.value }
    });
  }
  handleSelect(event) {
    console.log(event.target.value);
    this.setState({
      playbackRate: event.target.value
    });
  }
  render() {
    return (
      <div className="Controls">
        <Player
          src={this.state.src}
          controls={true}
          autoplay={true}
          style={this.state.style}
          playbackRate={this.state.playbackRate}
        />

        <form onSubmit={this.handleSubmit}>
          <label>
            Video URL
            <input
              defaultValue="enter video url"
              type="text"
              ref={input => (this.input = input)}
            />
          </label>

          <label>
            Width:
            <input
              name="width"
              type="text"
              value={this.state.style.width}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Playback Rate
            <select
              name="playbackRate"
              defaultValue="1"
              onChange={this.handleSelect}>
              <option value=".75">0.75</option>
              <option value="1">1</option>
              <option value="1.25">1.25</option>
              <option value="1.5">1.5</option>
            </select>
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  x;
}

export default Controls;
