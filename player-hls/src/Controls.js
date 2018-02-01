import React from 'react';
import Player from './Player';
import './App.css';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { width: '800px' },
      src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({ src: this.input.value });
    event.preventDefault();
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      style: { width: event.target.value }
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
            <input
              name="random"
              defaultValue="enter video url"
              type="text"
              value={this.state.random}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Controls;
