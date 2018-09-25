import React from "react";
import "./SubHeader.css";

const SubHeader = props => {
  return <div className="sub-header">{props.children}</div>;
};

export default SubHeader;
