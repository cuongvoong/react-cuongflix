import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";

class PlayButton extends Component {
  render() {
    return (
      <a href={`/movie/${this.props.id}`} className="details-link">
        <span
          onClick={() => this.handlePlayButtonClick()}
          className="icon-button flat-button"
        >
          {/* <FontAwesomeIcon icon={faPlay} className="flat-button-icon" />
          <span className="flat-button-text">Play</span>
          */}
          <span className="flat-button-text">View Details</span>
        </span>
      </a>
    );
  }
}

export default PlayButton;
