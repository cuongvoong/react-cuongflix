import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import MainViewLink from "./MainViewLink";
import "./SideDrawer.css";

class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside = event => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      !this.props.hamburgerRef.current.contains(event.target) &&
      this.props.isSideDrawerOpen
    ) {
      this.props.onClickOutsideSideDrawer();
    }
  };

  handleClickLink = () => {
    this.props.onClickSideDrawerLink();
  };

  render() {
    const { isSideDrawerOpen } = this.props;
    const { pathname } = this.props.location;

    const sideDrawerClasses = "side-drawer" + (isSideDrawerOpen ? " show" : "");
    return (
      <div className={sideDrawerClasses} ref={this.setWrapperRef}>
        <ul onClick={this.handleClickLink}>
          <li className={pathname === "/" ? " current" : ""}>
            <MainViewLink
              href="/"
              className={pathname === "/" ? "current" : ""}
            >
              Home
            </MainViewLink>
          </li>
          <li className={pathname === "/tvshows" ? " current" : ""}>
            <MainViewLink
              href="/tvshows"
              className={pathname === "/tvshows" ? "current" : ""}
            >
              TV Shows
            </MainViewLink>
          </li>
          <li className={pathname === "/movies" ? " current" : ""}>
            <MainViewLink
              href="/movies"
              className={pathname === "/movies" ? "current" : ""}
            >
              Movies
            </MainViewLink>
          </li>
        </ul>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  isSideDrawerOpen: PropTypes.bool.isRequired
};

export default withRouter(SideDrawer);
