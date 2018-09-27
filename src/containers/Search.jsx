import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import GalleryContent from "../components/search/GalleryContent";
import { connect } from "react-redux";
import { fetchSearchResults } from "../store/actions/searchActions";
import { withRouter } from "react-router-dom";

class Search extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.location.search !== this.props.location.search &&
      this.props.location.search !== ""
    ) {
      const values = queryString.parse(this.props.location.search);
      this.props.fetchSearchResults(values.q);
    }
  }

  render() {
    return (
      <div className="mainView">
        <div className="search">
          <GalleryContent search={this.props.search} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  fetchSearchResults: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchSearchResults
    }
  )(Search)
);
