import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class PlayTrailerButton extends Component {
  handlePlayTrailerClick = () => {
    this.props.modalRef.current.style.display = "flex";
    this.props.modalContentRef.current.style.width = "95%";
    this.props.onPlayTrailerClick(this.props.id);
  };

  render() {
    return (
      <a className="trailer-link">
        <span
          onClick={() => this.handlePlayTrailerClick()}
          className="icon-button flat-button"
        >
          <FontAwesomeIcon icon={faPlay} className="flat-button-icon" />
          <span className="flat-button-text">Play Trailer</span>
        </span>
      </a>
    );
  }
}

export default PlayTrailerButton;
