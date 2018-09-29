import React, { Component } from "react";
import "./TrailerModal.css";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class TrailerModal extends Component {
  state = {
    videoTrailers: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps.videos !== this.props.videos) {
      const { videos } = this.props;

      const videoTrailers = videos.results.find(video => {
        return video.type === "Trailer" && video.site === "YouTube";
      })
        ? videos.results.filter(
            video => video.type === "Trailer" && video.site === "YouTube"
          )
        : videos.results.filter(video => video.site === "YouTube");

      this.setState({ videoTrailers });
    }
  }

  componentWillUnmount() {
    this.setState({ videoTrailers: [] });
  }

  handleClose = () => {
    this.props.modalRef.current.style.display = "none";
    this.props.modalContentRef.current.style.width = "0";
    this.props.youTubePlayerRef.current.internalPlayer.pauseVideo();
  };

  handleMouseOver = () => {
    this.props.youTubePlayerRef.current.internalPlayer.playVideo();
  };

  handleMouseOut = () => {
    this.props.youTubePlayerRef.current.internalPlayer.pauseVideo();
  };

  render() {
    return (
      <div ref={this.props.modalRef} className="trailer-modal">
        <div ref={this.props.modalContentRef} className="content">
          <div className="modal-header">
            <span>Play Trailer</span>
            <button onClick={() => this.handleClose()} className="close">
              <FontAwesomeIcon icon={faTimesCircle} size="2x" color="white" />
            </button>
          </div>

          <div className="iframe-container">
            <div
            // onMouseOver={this.handleMouseOver}
            // onMouseOut={this.handleMouseOut}
            >
              {this.state.videoTrailers.length !== 0 && (
                <YouTube
                  ref={this.props.youTubePlayerRef}
                  videoId={this.state.videoTrailers[0].key}
                  opts={{ playerVars: { rel: 0 } }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailerModal;
