import React from "react";
import PropTypes from "prop-types";
import "./Billboard.css";
import BillboardRow from "./BillboardRow";

const Billboard = ({ discover, randomIndex }) => {
  return (
    <div className="billboard">
      <BillboardRow discover={discover} randomIndex={randomIndex} />
    </div>
  );
};

Billboard.propTypes = {
  discover: PropTypes.shape({
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
    })
  }),
  randomIndex: PropTypes.number.isRequired
};

export default Billboard;
