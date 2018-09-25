import React from "react";
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

export default SecondaryNavigation;
