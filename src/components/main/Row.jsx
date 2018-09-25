import React from "react";
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

export default Row;
