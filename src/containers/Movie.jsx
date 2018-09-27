import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import Details from "../components/shared/Details";
import Poster from "../components/shared/Poster";
import Trailer from "../components/shared/Trailer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCredits
} from "../store/actions/movieActions";

class Movie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetails(id);
    this.props.fetchMovieCredits(id);
  }

  render() {
    const { isLoading, details, credits } = this.props.movie;
    return (
      <div className="mainView">
        {details.status_message ? (
          <Redirect to="/error" />
        ) : (
          <section className="movie">
            <section className="poster-trailer-row">
              <Poster details={details} isLoading={isLoading} />
              <Trailer trailers={details.videos} isLoading={isLoading} />
            </section>
            <Details
              details={details}
              credits={credits}
              isLoading={isLoading}
            />
          </section>
        )}
      </div>
    );
  }
}

Movie.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  fetchMovieCredits: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  movie: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    details: PropTypes.object.isRequired,
    credits: PropTypes.object.isRequired
  })
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieCredits }
)(Movie);
