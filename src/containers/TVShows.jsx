import React, { Component } from "react";
import "./TVShows.css";
import OnTVRow from "../components/tvShows/OnTVRow";
import TopRatedRow from "../components/tvShows/TopRatedRow";
import PopularRow from "../components/tvShows/PopularRow";
import AiringToday from "../components/tvShows/AiringToday";
import { connect } from "react-redux";
import {
  fetchOnTV,
  fetchPopular,
  fetchAiringToday,
  fetchTopRated
} from "../store/actions/tvShowsActions";
import {
  clearSearchTerm,
  updateSearchBoxFocus
} from "../store/actions/searchActions";

class TVShows extends Component {
  componentDidMount() {
    this.props.fetchOnTV();
    this.props.fetchPopular();
    this.props.fetchAiringToday();
    this.props.fetchTopRated();
    this.props.clearSearchTerm();
    this.props.updateSearchBoxFocus(false);
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainView">
          <section className="tv-shows">
            <OnTVRow
              tvShows={this.props.tvShows.onTV}
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.tvShows.onTV.results.length}
            />
            <TopRatedRow
              tvShows={this.props.tvShows.topRated}
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.tvShows.topRated.results.length}
            />
            <PopularRow
              tvShows={this.props.tvShows.popular}
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.tvShows.popular.results.length}
            />
            <AiringToday
              tvShows={this.props.tvShows.airingToday}
              columnsInRow={this.props.window.columnsInRow}
              totalItems={this.props.tvShows.airingToday.results.length}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tvShows: state.tvShows,
  window: state.window
});

export default connect(
  mapStateToProps,
  {
    fetchOnTV,
    fetchPopular,
    fetchAiringToday,
    fetchTopRated,
    clearSearchTerm,
    updateSearchBoxFocus
  }
)(TVShows);
