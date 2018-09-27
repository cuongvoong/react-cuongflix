import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";

const MainViewLink = ({ href, className, children }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

MainViewLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default MainViewLink;
