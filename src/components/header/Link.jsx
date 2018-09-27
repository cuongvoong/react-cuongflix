import React from "react";
import PropTypes from "prop-types";
import "./Link.css";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ className, href, children }) => {
  return (
    <RouterLink className={className} to={href}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Link;
