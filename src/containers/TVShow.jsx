import React, { Component } from "react";
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
    const { isLoading, details, credits } = this.props.tvShow;
    return (
      <div className="mainView">
        {details.status_message ? (
          <Redirect to="/error" />
        ) : (
          <section className="tvshow">
            <section className="poster-trailer-row">
              <Poster details={details} />
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
  tvShow: state.tvShow
});

export default connect(
  mapStateToProps,
  { fetchTVShowDetails, fetchTVShowCredits }
)(TVShow);
