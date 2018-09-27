import React from "react";
import PropTypes from "prop-types";
import "./RowHeader.css";

const RowHeader = ({ title }) => {
  return (
    <h2 className="rowHeader">
      <span className="rowTitle">{title}</span>
    </h2>
  );
};

RowHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default RowHeader;
