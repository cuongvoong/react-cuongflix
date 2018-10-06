import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TrailerModal.css";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ClipLoader } from "react-spinners";

class TrailerModal extends PureComponent {
  constructor(props) {
    super(props);

    this.modalRef = React.createRef();
    this.modalContentRef = React.createRef();
  }

  state = {
    trailer: null
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.showTrailerModal !== this.props.showTrailerModal &&
      this.props.showTrailerModal
    ) {
      if (this.state.trailer === null) {
        this.props.onFetchMovieTrailer(this.props.billboardMovie.id);
      }

      this.modalRef.current.style.display = "flex";
      this.modalContentRef.current.style.width = "90%";
    }

    if (prevProps.billboardMovie !== this.props.billboardMovie) {
      const trailer = this.calculateBillboardTrailer();
      this.setState({
        trailer
      });
    }
  }

  componentWillUnmount() {
    this.setState({ trailer: null });
    if (this.props.billboardMovie.videos.results.length !== 0) {
      this.props.onResetBillboardVideos();
    }
  }

  calculateBillboardTrailer = () => {
    const { videos } = this.props.billboardMovie;

    const videoTrailers = videos.results.find(video => {
      return video.type === "Trailer" && video.site === "YouTube";
    })
      ? videos.results.filter(
          video => video.type === "Trailer" && video.site === "YouTube"
        )
      : videos.results.filter(video => video.site === "YouTube");

    return videoTrailers.length > 0 ? videoTrailers[0] : null;
  };

  handleOnCloseTrailerModal = () => {
    this.modalRef.current.style.display = "none";
    this.modalContentRef.current.style.width = "0";
    this.props.onCloseTrailerModal();
    if (this.props.youTubePlayerRef.current !== null) {
      this.props.youTubePlayerRef.current.internalPlayer.pauseVideo();
    }
  };

  render() {
    const { youTubePlayerRef, isFetching } = this.props;

    return (
      <div
        ref={this.modalRef}
        style={{ display: "none" }}
        className="trailer-modal"
      >
        <div
          ref={this.modalContentRef}
          style={{ width: "0" }}
          className="content"
        >
          <div className="modal-header">
            <span>Play Trailer</span>
            <button
              onClick={() => this.handleOnCloseTrailerModal()}
              className="close"
            >
              <FontAwesomeIcon icon={faTimesCircle} size="2x" color="white" />
            </button>
          </div>
          {isFetching && (
            <div className="loader">
              <ClipLoader color={"#fff"} loading={isFetching} />
            </div>
          )}
          {!isFetching &&
            this.state.trailer !== null && (
              <div className="iframe-container">
                <YouTube
                  ref={youTubePlayerRef}
                  videoId={this.state.trailer.key}
                  opts={{
                    playerVars: { rel: 0 }
                  }}
                />
              </div>
            )}

          {!isFetching &&
            this.state.trailer === null && (
              <div className="loader">
                There are no trailers for this movie!
              </div>
            )}
        </div>
      </div>
    );
  }
}

TrailerModal.propTypes = {
  onCloseTrailerModal: PropTypes.func.isRequired,
  onFetchMovieTrailer: PropTypes.func.isRequired,
  showTrailerModal: PropTypes.bool.isRequired,
  billboardMovie: PropTypes.object.isRequired
};

export default TrailerModal;
