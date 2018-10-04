import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import Details from "../components/shared/Details";
import Poster from "../components/shared/Poster";
import Trailer from "../components/shared/Trailer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchMovieDetails } from "../store/actions/movieActions";

class Movie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetails(id);
  }

  render() {
    const { details } = this.props.movie;
    return (
      <div className="mainView">
        {details.status_message && <Redirect to="/error" />}

        <section className="movie">
          {!details.isFetching && (
            <section className="poster-trailer-row">
              <Poster details={details} />
              <Trailer trailers={details.videos} />
            </section>
          )}
          {!details.isFetching && (
            <Details details={details} credits={details.credits} />
          )}
        </section>
      </div>
    );
  }
}

Movie.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  movie: PropTypes.shape({
    details: PropTypes.object.isRequired
  })
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { fetchMovieDetails }
)(Movie);
