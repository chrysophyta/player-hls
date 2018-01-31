import React from 'react';
import PropTypes from 'prop-types';
import Hls from 'hls.js';
import styled from 'styled-components';
import { DEVICE } from './config';

class HlsPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerId: Date.now()
    };

    this.hls = null;
  }

  componentDidMount() {
    if (
      navigator.userAgent.match(/Chrome[^ ]+/) &&
      navigator.userAgent.match(/Chrome[^ ]+/)[0].match(/[0-9]+/) > 50
    ) {
      this._initPlayer(DEVICE.CHROME);
    } else {
      this._initPlayer();
    }
  }

  componentWillUnmount() {
    let { hls } = this;

    if (hls) {
      hls.destroy();
    }
  }

  componentWillUpdate() {
    if (
      navigator.userAgent.match(/Chrome[^ ]+/) &&
      navigator.userAgent.match(/Chrome[^ ]+/)[0].match(/[0-9]+/) > 50
    ) {
      this._initPlayer(DEVICE.CHROME);
    } else {
      this._initPlayer();
    }
  }

  _initPlayer(platform) {
    let { src, autoplay, hlsConfig } = this.props;
    let { video: $video } = this.refs;

    switch (platform) {
      case DEVICE.CHROME:
        if (this.hls) {
          this.hls.destroy();
        }

        let hls = new Hls(hlsConfig);

        if (!Hls.isSupported()) console.error('Not support Hls!');

        hls.loadSource(src);
        hls.attachMedia($video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoplay) {
            $video.play();
          }
        });

        this.hls = hls;
        break;
      default:
        let source = document.createElement('source');
        source.src = this.props.src;
        $video.appendChild(source);
        if (autoplay) {
          $video.play();
        }
    }
  }

  render() {
    const { id, controls, poster, className, preload, style, src } = this.props;
    return (
      <PlayerBlock key={this.state.playerId}>
        <video
          ref="video"
          id={id}
          controls={controls}
          poster={poster}
          className={className}
          style={style}
          preload={preload}
          src={src}
        />
      </PlayerBlock>
    );
  }
}

HlsPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  hlsConfig: PropTypes.object, //https://github.com/video-dev/hls.js/blob/master/doc/API.md#fine-tuning
  controls: PropTypes.bool,
  poster: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

HlsPlayer.defaultProps = {
  autoplay: false,
  hlsConfig: {},
  controls: false,
  preload: 'auto'
};

export default HlsPlayer;

const PlayerBlock = styled.div`
  width: 50vw;
  height: 50vh;
  position: relative;
  top: 0;
`;
