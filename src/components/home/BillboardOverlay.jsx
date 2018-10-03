import React from "react";
import "./BillboardOverlay.css";
import ViewDetailsButton from "./ViewDetailsButton";
import PlayTrailerButton from "./PlayTrailerButton";

const BillboardOverlay = ({ billboardMovie, onPlayTrailerClick }) => {
  const billboardText = text => {
    return text !== undefined && text.length > 500
      ? `${text.substr(0, 500)} ...`
      : text;
  };

  return (
    <div className="billboard-text-overlay info">
      <div className="logo-and-text">
        <span className="billboard-title">{billboardMovie.title}</span>
        <div className="billboard-links button-layer">
          <ViewDetailsButton id={billboardMovie.id} />

          <PlayTrailerButton onPlayTrailerClick={onPlayTrailerClick} />
        </div>

        <p className="billboard-overview">
          {billboardText(billboardMovie.overview)}
        </p>
      </div>
    </div>
  );
};

export default BillboardOverlay;
