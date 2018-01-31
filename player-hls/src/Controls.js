import React from 'react';
import Player from './Player';
import './App.css';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { width: '500px' },
      src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ src: this.input.value });
    event.preventDefault();
  }

  render() {
    return (
      <div className="Controls">
        <form onSubmit={this.handleSubmit}>
          <label>
            Video URL
            <input
              defaultValue="enter video url"
              type="text"
              ref={input => (this.input = input)}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <Player
          src={this.state.src}
          controls={true}
          autoplay={true}
          style={this.state.style}
        />
      </div>
    );
  }
}

export default Controls;
