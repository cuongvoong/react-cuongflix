import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TrailerModal.css";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class TrailerModal extends Component {
  state = {
    trailerModalStyles: {
      display: "none"
    },
    contentModalStyles: {
      width: 0
    }
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.showTrailerModal !== this.props.showTrailerModal &&
      this.props.showTrailerModal
    ) {
      this.setState({
        trailerModalStyles: { display: "flex" },
        contentModalStyles: { width: "95%" }
      });
    }
  }

  handleOnCloseTrailerModal = () => {
    this.setState({
      trailerModalStyles: { display: "none" },
      contentModalStyles: { width: 0 }
    });
    this.props.onCloseTrailerModal();
    this.props.youTubePlayerRef.current.internalPlayer.pauseVideo();
  };

  render() {
    const { youTubePlayerRef, trailer } = this.props;

    return (
      <div style={this.state.trailerModalStyles} className="trailer-modal">
        <div style={this.state.contentModalStyles} className="content">
          <div className="modal-header">
            <span>Play Trailer</span>
            <button
              onClick={() => this.handleOnCloseTrailerModal()}
              className="close"
            >
              <FontAwesomeIcon icon={faTimesCircle} size="2x" color="white" />
            </button>
          </div>

          <div className="iframe-container">
            <div>
              {trailer !== null && (
                <YouTube
                  ref={youTubePlayerRef}
                  videoId={trailer.key}
                  opts={{
                    playerVars: { rel: 0 }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TrailerModal.propTypes = {
  trailer: PropTypes.object,
  onCloseTrailerModal: PropTypes.func.isRequired,
  showTrailerModal: PropTypes.bool.isRequired
};

export default TrailerModal;
