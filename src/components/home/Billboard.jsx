import React from "react";
import PropTypes from "prop-types";
import "./Billboard.css";
import BillboardRow from "./BillboardRow";

const Billboard = ({
  movies_page1,
  movies_page2,
  tvShows_page1,
  tvShows_page2,
  billboardMovie,
  onPlayTrailerClick
}) => {
  return (
    <div className="billboard">
      <BillboardRow
        movies_page1={movies_page1}
        movies_page2={movies_page2}
        tvShows_page1={tvShows_page1}
        tvShows_page2={tvShows_page2}
        billboardMovie={billboardMovie}
        onPlayTrailerClick={onPlayTrailerClick}
      />
    </div>
  );
};

Billboard.propTypes = {
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

export default Billboard;
