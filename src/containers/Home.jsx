import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import TrailerModal from "../components/home/TrailerModal";
import Billboard from "../components/home/Billboard";
import { connect } from "react-redux";
import {
  fetchDiscoverMovies,
  fetchDiscoverTVShows,
  assignBillboardMovie,
  fetchBillboardMovieVideos,
  showTrailerModal
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

  componentDidMount() {
    this.props.fetchDiscoverMovies();
    this.props.fetchDiscoverTVShows();
    this.props.clearSearchTerm();
    this.props.updateSearchBoxFocus(false);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.discover.movies_page1.isFetching !==
        this.props.discover.movies_page1.isFetching ||
      prevProps.discover.movies_page2.isFetching !==
        this.props.discover.movies_page2.isFetching
    ) {
      if (
        !this.props.discover.movies_page1.isFetching &&
        !this.props.discover.movies_page2.isFetching
      ) {
        this.calculateRandomMovie();
      }
    }
  }

  calculateRandomMovie = () => {
    const { movies_page1, movies_page2 } = this.props.discover;

    const randomIndex = Math.floor(Math.random() * 40);

    const movies = randomIndex < 20 ? movies_page1 : movies_page2;

    if (this.isBackDropNull(movies, randomIndex)) {
      this.calculateRandomMovie();
    } else {
      const index = randomIndex < 20 ? randomIndex : randomIndex - 20;
      this.props.assignBillboardMovie(movies.results[index]);
    }
  };

  isBackDropNull = (movies, randomIndex) => {
    const index = randomIndex < 20 ? randomIndex : randomIndex - 20;
    const movie = movies.results[index];
    return movie.backdrop_path === null;
  };

  calculateBillboardTrailer = () => {
    const { videos } = this.props.discover.billboardMovie;

    const videoTrailers = videos.results.find(video => {
      return video.type === "Trailer" && video.site === "YouTube";
    })
      ? videos.results.filter(
          video => video.type === "Trailer" && video.site === "YouTube"
        )
      : videos.results.filter(video => video.site === "YouTube");

    return videoTrailers.length > 0 ? videoTrailers[0] : null;
  };

  handleOnPlayTrailerClick = () => {
    this.props.showTrailerModal(true);
  };

  handleOnFetchMovieTrailer = id => {
    this.props.fetchBillboardMovieVideos(id);
  };

  handleOnCloseTrailerModal = () => {
    this.props.showTrailerModal(false);
  };

  render() {
    const {
      movies_page1,
      movies_page2,
      tvShows_page1,
      tvShows_page2,
      billboardMovie,
      showTrailerModal
    } = this.props.discover;

    return (
      <div className="mainView">
        {!movies_page1.isFetching &&
          !movies_page2.isFetching &&
          !this.props.window.isMobile && (
            <React.Fragment>
              <Billboard
                movies_page1={movies_page1}
                movies_page2={movies_page2}
                billboardMovie={billboardMovie}
                onPlayTrailerClick={() => this.handleOnPlayTrailerClick()}
              />

              <TrailerModal
                trailer={this.calculateBillboardTrailer()}
                isFetching={billboardMovie.videos.isFetching}
                billboardMovie={billboardMovie}
                showTrailerModal={showTrailerModal}
                youTubePlayerRef={this.youTubePlayerRef}
                onCloseTrailerModal={() => this.handleOnCloseTrailerModal()}
                onFetchMovieTrailer={id => this.handleOnFetchMovieTrailer(id)}
              />
            </React.Fragment>
          )}

        {!movies_page1.isFetching &&
          !movies_page2.isFetching && (
            <React.Fragment>
              <DiscoverMoviesRow
                movies={movies_page1}
                columnsInRow={this.props.window.columnsInRow}
                totalItems={movies_page1.results.length}
              />

              <DiscoverMoviesRow
                movies={movies_page2}
                columnsInRow={this.props.window.columnsInRow}
                totalItems={movies_page2.results.length}
              />

              <DiscoverTVShowsRow
                tvShows={tvShows_page1}
                columnsInRow={this.props.window.columnsInRow}
                totalItems={tvShows_page1.results.length}
              />

              <DiscoverTVShowsRow
                tvShows={tvShows_page2}
                columnsInRow={this.props.window.columnsInRow}
                totalItems={tvShows_page2.results.length}
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
  fetchBillboardMovieVideos: PropTypes.func.isRequired,
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
    assignBillboardMovie,
    fetchBillboardMovieVideos,
    showTrailerModal,
    clearSearchTerm,
    updateSearchBoxFocus
  }
)(Home);
