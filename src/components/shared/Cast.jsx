import React from "react";
import "./Cast.css";
import Card from "./Card";

const Cast = ({ cast }) => {
  return <Card castMember={cast} />;
};

export default Cast;
