import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import "./MainHeader.css";
import PrimaryNavigation from "./PrimaryNavigation";
import MainViewLink from "./MainViewLink";
import SecondaryNavigation from "./SecondaryNavigation";

class MainHeader extends Component {
  state = {};
  render() {
    const {
      onSearchInputChange,
      onSearchBoxClose,
      onSearchBoxFocus,
      term,
      isSearchBoxFocused
    } = this.props;
    return (
      <section className="pinning-header">
        <header className="main-header">
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
  }
}

export default MainHeader;
