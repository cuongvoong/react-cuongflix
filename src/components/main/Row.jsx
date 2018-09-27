import React from "react";
import PropTypes from "prop-types";
import "./Row.css";
import Slider from "./Slider";

const Row = ({ href, results, columnsInRow, totalItems }) => {
  return (
    <div className="rowContainer">
      <Slider
        href={href}
        results={results}
        columnsInRow={columnsInRow}
        totalItems={totalItems}
      />
    </div>
  );
};

Row.propTypes = {
  href: PropTypes.string.isRequired,
  results: PropTypes.object.isRequired,
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default Row;
