import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

    const sideDrawerClasses = "side-drawer" + (isSideDrawerOpen ? " show" : "");
    return (
      <div className={sideDrawerClasses} ref={this.setWrapperRef}>
        <ul>
          <li>
            <Link onClick={this.handleClickLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={this.handleClickLink} to="/tvshows">
              TV Shows
            </Link>
          </li>
          <li>
            <Link onClick={this.handleClickLink} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  isSideDrawerOpen: PropTypes.bool.isRequired
};

export default SideDrawer;
