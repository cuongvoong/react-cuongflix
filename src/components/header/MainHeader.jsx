import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";
import "./MainHeader.css";
import PrimaryNavigation from "./PrimaryNavigation";
import MainViewLink from "./MainViewLink";
import SecondaryNavigation from "./SecondaryNavigation";
import HamburgerMenu from "./HamburgerMenu";
import SideDrawer from "./SideDrawer";

const MainHeader = ({
  onSearchInputChange,
  onSearchBoxClose,
  onSearchBoxFocus,
  onToggleSideDrawerState,
  onClickSideDrawerLink,
  onClickOutsideSideDrawer,
  term,
  isSearchBoxFocused,
  isSideDrawerOpen
}) => {
  const hamburgerRef = React.createRef();

  return (
    <section className="pinning-header">
      <header className="main-header">
        <HamburgerMenu
          onToggleSideDrawerState={onToggleSideDrawerState}
          hamburgerRef={hamburgerRef}
        />
        <SideDrawer
          isSideDrawerOpen={isSideDrawerOpen}
          onClickSideDrawerLink={onClickSideDrawerLink}
          onClickOutsideSideDrawer={onClickOutsideSideDrawer}
          hamburgerRef={hamburgerRef}
        />
        <MainViewLink href="/" className="logo">
          <img src={logo} alt="logo" />
        </MainViewLink>
        <PrimaryNavigation />
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
