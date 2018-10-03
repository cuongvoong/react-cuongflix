import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";
import "./MainHeader.css";
import PrimaryNavigation from "./PrimaryNavigation";
import MainViewLink from "./MainViewLink";
import SecondaryNavigation from "./SecondaryNavigation";

const MainHeader = ({
  onSearchInputChange,
  onSearchBoxClose,
  onSearchBoxFocus,
  term,
  isSearchBoxFocused,
  isMobile
}) => {
  return (
    <section className="pinning-header">
      <header className="main-header">
        <MainViewLink href="/" className="logo">
          <img src={logo} alt="logo" />
        </MainViewLink>
        <PrimaryNavigation isMobile={isMobile} />
        <SecondaryNavigation
          onSearchInputChange={onSearchInputChange}
          onSearchBoxClose={onSearchBoxClose}
          onSearchBoxFocus={onSearchBoxFocus}
          term={term}
          isSearchBoxFocused={isSearchBoxFocused}
        />
      </header>
    </section>
  );
};

MainHeader.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchBoxClose: PropTypes.func.isRequired,
  onSearchBoxFocus: PropTypes.func.isRequired,
  isSearchBoxFocused: PropTypes.bool.isRequired,
  term: PropTypes.string.isRequired
};

export default MainHeader;
