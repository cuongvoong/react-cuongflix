import React, { Component } from "react";
import "./Movies.css";
import InTheatresRow from "../components/movies/InTheatresRow";
import TopRatedRow from "../components/movies/TopRatedRow";
import PopularRow from "../components/movies/PopularRow";
import UpcomingRow from "../components/movies/UpcomingRow";
import { connect } from "react-redux";
import {
  fetchInTheatres,
  fetchPopular,
  fetchUpcoming,
  fetchTopRated
} from "../store/actions/moviesActions";
import {
  clearSearchTerm,
  updateSearchBoxFocus
} from "../store/actions/searchActions";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchInTheatres();
    this.props.fetchPopular();
    this.props.fetchUpcoming();
    this.props.fetchTopRated();
    this.props.clearSearchTerm();
    this.props.updateSearchBoxFocus(false);
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainView">
          <section className="movies">
            <InTheatresRow
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.movies.inTheatres.results.length}
              movies={this.props.movies.inTheatres}
            />
            <TopRatedRow
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.movies.topRated.results.length}
              movies={this.props.movies.topRated}
            />
            <PopularRow
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.movies.popular.results.length}
              movies={this.props.movies.popular}
            />
            <UpcomingRow
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.movies.upcoming.results.length}
              movies={this.props.movies.upcoming}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  window: state.window
});

export default connect(
  mapStateToProps,
  {
    fetchInTheatres,
    fetchPopular,
    fetchUpcoming,
    fetchTopRated,
    clearSearchTerm,
    updateSearchBoxFocus
  }
)(Movies);
