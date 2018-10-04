import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ onToggleSideDrawerState, hamburgerRef }) => {
  return (
    <div
      className="hamburger-menu"
      onClick={onToggleSideDrawerState}
      ref={hamburgerRef}
    >
      <div className="hamburger-menu-line" />
      <div className="hamburger-menu-line" />
      <div className="hamburger-menu-line" />
    </div>
  );
};

export default HamburgerMenu;
