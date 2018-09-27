import React from "react";
import PropTypes from "prop-types";
import "./Cast.css";
import Card from "./Card";

const Cast = ({ cast }) => {
  return <Card castMember={cast} />;
};

Cast.propTypes = {
  cast: PropTypes.object.isRequired
};

export default Cast;
