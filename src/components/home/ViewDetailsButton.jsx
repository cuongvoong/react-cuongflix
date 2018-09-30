import React from "react";

const Viewdetails = ({ id }) => {
  return (
    <a href={`/movie/${id}`} className="details-link">
      <span className="icon-button flat-button">
        <span className="flat-button-text">View Details</span>
      </span>
    </a>
  );
};

export default Viewdetails;
