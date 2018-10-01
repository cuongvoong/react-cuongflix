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

    this.youTubePlayerRef = React.createRef();
  }

  state = {
    isLoading: true,
    billboardMovie: {},
    randomIndex: Math.floor(Math.random() * 20),
    showTrailerModal: false
  };

  componentDidMount() {
    this.props.fetchDiscoverMovies();
    this.props.fetchDiscoverTVShows();
    this.props.clearSearchTerm();
    this.props.updateSearchBoxFocus(false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.discover.movies_page1 !== this.props.discover.movies_page1) {
      this.calculateRandomMovie();
      this.setState({ isLoading: false });
    }

    if (prevState.randomIndex !== this.state.randomIndex) {
      this.calculateRandomMovie();
    }
  }

  calculateRandomMovie = () => {
    const { movies_page1 } = this.props.discover;

    const { randomIndex } = this.state;

    if (this.isBackDropNull(randomIndex)) {
      this.setState({ randomIndex: Math.floor(Math.random() * 20) });
    } else {
      const billboardMovie = movies_page1.results[randomIndex];
      this.setState({ billboardMovie });
    }
  };

  isBackDropNull = randomIndex => {
    const { movies_page1 } = this.props.discover;

    const movie = movies_page1.results[randomIndex];

    return movie.backdrop_path === null;
  };

  calculateBillboardTrailer = () => {
    const { videos } = this.props.discover;

    const videoTrailers = videos.results.find(video => {
      return video.type === "Trailer" && video.site === "YouTube";
    })
      ? videos.results.filter(
          video => video.type === "Trailer" && video.site === "YouTube"
        )
      : videos.results.filter(video => video.site === "YouTube");

    return videoTrailers.length > 0 ? videoTrailers[0] : null;
  };

  handleOnPlayTrailerClick = id => {
    this.props.fetchBillboardVideos(id);

    this.setState({ showTrailerModal: true });
  };

  handleOnCloseTrailerModal = () => {
    this.setState({ showTrailerModal: false });
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
              />

              <TrailerModal
                trailer={this.calculateBillboardTrailer()}
                showTrailerModal={this.state.showTrailerModal}
                youTubePlayerRef={this.youTubePlayerRef}
                onCloseTrailerModal={() => this.handleOnCloseTrailerModal()}
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
