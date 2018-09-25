import React, { Component } from "react";
import "./Movie.css";
import Details from "../components/shared/Details";
import Poster from "../components/shared/Poster";
import Trailer from "../components/shared/Trailer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  setLoading
} from "../store/actions/movieActions";

class Movie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieDetails(id);
    this.props.fetchMovieCredits(id);
    // }
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

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieCredits, setLoading }
)(Movie);
