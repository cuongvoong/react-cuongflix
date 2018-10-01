import React from "react";
import PropTypes from "prop-types";

const ViewDetailsButton = ({ id }) => {
  return (
    <a href={`/movie/${id}`} className="details-link">
      <span className="icon-button flat-button">
        <span className="flat-button-text">View Details</span>
      </span>
    </a>
  );
};

ViewDetailsButton.propTypes = {
  id: PropTypes.number
};

export default ViewDetailsButton;
