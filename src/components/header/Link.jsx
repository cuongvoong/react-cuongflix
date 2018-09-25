import React from "react";
import "./Link.css";
import { Link as RouterLink } from "react-router-dom";

const Link = props => {
  return (
    <RouterLink className={props.className} to={props.href}>
      {props.children}
    </RouterLink>
  );
};

export default Link;
