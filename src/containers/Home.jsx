import React, { Component } from "react";
import "./Home.css";
import Billboard from "../components/main/billboard/Billboard";
import { connect } from "react-redux";
import {
  fetchDiscoverMovies,
  fetchDiscoverTVShows,
  fetchBillboardVideos
} from "../store/actions/discoverActions";
import DiscoverMoviesRow from "../components/discover/DiscoverMoviesRow";
import DiscoverTVShowsRow from "../components/discover/DiscoverTVShowsRow";
import {
  clearSearchTerm,
  updateSearchBoxFocus
} from "../store/actions/searchActions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomIndex: Math.floor(Math.random() * 20)
    };
  }
  componentDidMount() {
    this.props.fetchDiscoverMovies();
    this.props.fetchDiscoverTVShows();
    this.props.clearSearchTerm();
    this.props.updateSearchBoxFocus(false);
  }

  handleFetchBillboardVideos = id => {
    this.props.fetchBillboardVideos(id);
  };

  render() {
    return (
      <div className="mainView">
        {!this.props.window.isMobile && (
          <Billboard
            discover={this.props.discover}
            randomIndex={this.state.randomIndex}
            onFetchBillboardVideos={id => this.handleFetchBillboardVideos(id)}
          />
        )}
        <DiscoverMoviesRow
          movies={this.props.discover.movies_page1}
          columnsInRow={this.props.window.columnsInRow}
          totalItems={this.props.discover.movies_page1.results.length}
        />

        <DiscoverMoviesRow
          movies={this.props.discover.movies_page2}
          columnsInRow={this.props.window.columnsInRow}
          totalItems={this.props.discover.movies_page2.results.length}
        />

        <DiscoverTVShowsRow
          tvShows={this.props.discover.tvShows_page1}
          columnsInRow={this.props.window.columnsInRow}
          totalItems={this.props.discover.tvShows_page1.results.length}
        />

        <DiscoverTVShowsRow
          tvShows={this.props.discover.tvShows_page2}
          columnsInRow={this.props.window.columnsInRow}
          totalItems={this.props.discover.tvShows_page2.results.length}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discover: state.discover,
  window: state.window
});

export default connect(
  mapStateToProps,
  {
    fetchDiscoverMovies,
    fetchDiscoverTVShows,
    fetchBillboardVideos,
    clearSearchTerm,
    updateSearchBoxFocus
  }
)(Home);