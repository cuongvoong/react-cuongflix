import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import TrailerModal from "../components/home/TrailerModal";
import Billboard from "../components/home/Billboard";
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

    this.modalRef = React.createRef();
    this.modalContentRef = React.createRef();
    this.youTubePlayerRef = React.createRef();
  }

  state = {
    isLoading: true,
    billboardMovie: {},
    randomIndex: Math.floor(Math.random() * 40)
  };

  componentDidMount() {
    this.props.fetchDiscoverMovies();
    this.props.fetchDiscoverTVShows();
    this.props.clearSearchTerm();
    this.props.updateSearchBoxFocus(false);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.discover !== this.props.discover &&
      this.props.discover.movies_page1.results.length !== 0 &&
      this.props.discover.movies_page2.results.length !== 0
    ) {
      this.calculateRandomMovie();
      this.setState({ isLoading: false });
    }
  }

  calculateRandomMovie = () => {
    const { movies_page1, movies_page2 } = this.props.discover;

    const { randomIndex } = this.state;

    if (this.isBackDropNull(randomIndex)) {
      this.setState({ randomIndex: Math.floor(Math.random() * 40) });
      this.calculateRandomMovie();
    } else {
      const billboardMovie =
        randomIndex < 20
          ? movies_page1.results[randomIndex]
          : movies_page2.results[randomIndex - 20];
      this.setState({ billboardMovie });
    }
  };

  isBackDropNull = randomIndex => {
    const { movies_page1, movies_page2 } = this.props.discover;

    const movie =
      randomIndex < 20
        ? movies_page1.results[randomIndex]
        : movies_page2.results[randomIndex - 20];

    return movie.backdrop_path === null;
  };

  handleOnPlayTrailerClick = id => {
    this.props.fetchBillboardVideos(id);
  };

  render() {
    const {
      movies_page1,
      movies_page2,
      tvShows_page1,
      tvShows_page2
    } = this.props.discover;

    return (
      <div className="mainView">
        {!this.state.isLoading &&
          !this.props.window.isMobile && (
            <React.Fragment>
              <Billboard
                movies_page1={movies_page1}
                movies_page2={movies_page2}
                tvShows_page1={tvShows_page1}
                tvShows_page2={tvShows_page2}
                billboardMovie={this.state.billboardMovie}
                onPlayTrailerClick={id => this.handleOnPlayTrailerClick(id)}
                modalRef={this.modalRef}
                modalContentRef={this.modalContentRef}
              />

              <TrailerModal
                videos={this.props.discover.videos}
                modalContentRef={this.modalContentRef}
                modalRef={this.modalRef}
                youTubePlayerRef={this.youTubePlayerRef}
              />
            </React.Fragment>
          )}

        {!this.state.isLoading && (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  fetchDiscoverMovies: PropTypes.func.isRequired,
  fetchDiscoverTVShows: PropTypes.func.isRequired,
  fetchBillboardVideos: PropTypes.func.isRequired,
  clearSearchTerm: PropTypes.func.isRequired,
  updateSearchBoxFocus: PropTypes.func.isRequired
};

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
