import React from "react";
import "./RowHeader.css";

const RowHeader = props => {
  return (
    <h2 className="rowHeader">
      <span className="rowTitle">{props.title}</span>
    </h2>
  );
};

export default RowHeader;
