import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TabbedHeader.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MainHeader from "../components/header/MainHeader";
import SubHeader from "../components/header/SubHeader";
import {
  updateSearchTerm,
  clearSearchTerm,
  updateSearchBoxFocus
} from "../store/actions/searchActions";

class TabbedHeader extends Component {
  state = {
    prevPath: "/"
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== "/search" &&
      this.props.location.pathname !== this.state.prevPath
    ) {
      this.setState({ prevPath: prevProps.location.pathname });
    }

    if (prevProps.search.term !== this.props.search.term) {
      if (this.props.search.term !== "") {
        this.props.history.push(`/search?q=${this.props.search.term}`);
      } else {
        this.props.history.push(this.state.prevPath);
      }
    }
  }

  handleSearchInputChange = e => {
    this.props.updateSearchTerm(e.target.value);
  };

  handleSearchBoxClose = () => {
    this.props.clearSearchTerm();
  };
  handleSearchBoxFocus = focus => {
    this.props.updateSearchBoxFocus(focus);
  };

  render() {
    return (
      <div className="pinning-header">
        <MainHeader
          onSearchInputChange={this.handleSearchInputChange}
          onSearchBoxClose={this.handleSearchBoxClose}
          onSearchBoxFocus={this.handleSearchBoxFocus}
          term={this.props.search.term}
          isSearchBoxFocused={this.props.search.isSearchBoxFocused}
          isMobile={this.props.window.isMobile}
        />
        <SubHeader />
      </div>
    );
  }
}

TabbedHeader.propTypes = {
  updateSearchTerm: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired,
  updateSearchBoxFocus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: state.search,
  window: state.window
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      updateSearchTerm,
      clearSearchTerm,
      updateSearchBoxFocus
    }
  )(TabbedHeader)
);
