import React from "react";
import PropTypes from "prop-types";
import "./BillboardRow.css";

import BackDrop from "./BackDrop";
import BillboardOverlay from "./BillboardOverlay";

const BillboardRow = ({ onPlayTrailerClick, billboardMovie }) => {
  return (
    <div className="billboard-row">
      <BackDrop backdrop_path={billboardMovie.backdrop_path} />
      <BillboardOverlay
        billboardMovie={billboardMovie}
        onPlayTrailerClick={onPlayTrailerClick}
      />
    </div>
  );
};

BillboardRow.propTypes = {
  movies_page1: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  movies_page2: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  tvShows_page1: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  tvShows_page2: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  billboardMovie: PropTypes.object.isRequired
};

export default BillboardRow;
