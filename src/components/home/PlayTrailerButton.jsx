import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlayTrailerButton = ({ onPlayTrailerClick, id }) => {
  return (
    <a onClick={() => onPlayTrailerClick(id)} className="trailer-link">
      <span className="icon-button flat-button">
        <FontAwesomeIcon icon={faPlay} className="flat-button-icon" />
        <span className="flat-button-text">Play Trailer</span>
      </span>
    </a>
  );
};

export default PlayTrailerButton;
