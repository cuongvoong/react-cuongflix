import React from "react";
import PropTypes from "prop-types";
import "./SecondaryNavigation.css";
import SearchBox from "./SearchBox";

const SecondaryNavigation = ({
  onSearchInputChange,
  onSearchBoxClose,
  term,
  onSearchBoxFocus,
  isSearchBoxFocused
}) => {
  return (
    <div className="secondary-navigation">
      <div className="nav-element">
        <SearchBox
          onSearchInputChange={onSearchInputChange}
          onSearchBoxClose={onSearchBoxClose}
          onSearchBoxFocus={onSearchBoxFocus}
          term={term}
          isSearchBoxFocused={isSearchBoxFocused}
        />
      </div>
    </div>
  );
};

SecondaryNavigation.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchBoxClose: PropTypes.func.isRequired,
  onSearchBoxFocus: PropTypes.func.isRequired,
  isSearchBoxFocused: PropTypes.bool.isRequired,
  term: PropTypes.string.isRequired
};

export default SecondaryNavigation;
