import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TVShow.css";
import Details from "../components/shared/Details";
import Poster from "../components/shared/Poster";
import Trailer from "../components/shared/Trailer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  fetchTVShowDetails,
  fetchTVShowCredits
} from "../store/actions/tvShowActions";

class TVShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchTVShowDetails(id);
    this.props.fetchTVShowCredits(id);
  }

  render() {
    const { details, credits } = this.props.tvShow;
    return (
      <div className="mainView">
        {details.status_message && <Redirect to="/error" />}

        <section className="tvshow">
          {!details.isFetching && (
            <section className="poster-trailer-row">
              <Poster details={details} />
              <Trailer trailers={details.videos} />
            </section>
          )}

          {!details.isFetching &&
            !credits.isFetching && (
              <Details details={details} credits={credits} />
            )}
        </section>
      </div>
    );
  }
}

TVShow.propTypes = {
  fetchTVShowDetails: PropTypes.func.isRequired,
  fetchTVShowCredits: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  tvShow: PropTypes.shape({
    details: PropTypes.object.isRequired,
    credits: PropTypes.object.isRequired
  })
};

const mapStateToProps = state => ({
  tvShow: state.tvShow
});

export default connect(
  mapStateToProps,
  { fetchTVShowDetails, fetchTVShowCredits }
)(TVShow);
