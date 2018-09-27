import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TrailerModal.css";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class TrailerModal extends Component {
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
          <button onClick={() => this.handleClose()} className="close">
            <FontAwesomeIcon icon={faTimesCircle} size="2x" color="white" />
          </button>
          <div className="iframe-container">
            {/* <iframe
              src="https://www.youtube.com/embed/5HNnXJMJkY0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            /> */}
            <div
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
            >
              <YouTube
                ref={this.props.youTubePlayerRef}
                videoId="5HNnXJMJkY0"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TrailerModal.propTypes = {
  modalRef: PropTypes.ref,
  modalContentRef: PropTypes.ref
};

export default TrailerModal;
