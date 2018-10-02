import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TrailerModal.css";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ClipLoader } from "react-spinners";

class TrailerModal extends PureComponent {
  state = {
    trailerModalStyles: {
      display: "none"
    },
    contentModalStyles: {
      width: 0
    },
    trailer: null,
    isLoading: true
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.showTrailerModal !== this.props.showTrailerModal &&
      this.props.showTrailerModal
    ) {
      if (this.props.youTubePlayerRef.current === null) {
        this.props.onFetchMovieTrailer(this.props.billboardMovie.id);
      }

      this.setState({
        trailerModalStyles: { display: "flex" },
        contentModalStyles: { width: "90%" }
      });
    }

    if (prevProps.trailer !== this.props.trailer) {
      this.setState({
        trailer: this.props.trailer,
        isLoading: false
      });
    }
  }

  componentWillUnmount() {
    this.setState({ trailer: null });
  }

  handleOnCloseTrailerModal = () => {
    this.setState({
      trailerModalStyles: { display: "none" },
      contentModalStyles: { width: 0 }
    });
    this.props.onCloseTrailerModal();
    this.props.youTubePlayerRef.current.internalPlayer.pauseVideo();
  };

  render() {
    const { youTubePlayerRef, trailer } = this.props;

    return (
      <div style={this.state.trailerModalStyles} className="trailer-modal">
        <div style={this.state.contentModalStyles} className="content">
          <div className="modal-header">
            <span>Play Trailer</span>
            <button
              onClick={() => this.handleOnCloseTrailerModal()}
              className="close"
            >
              <FontAwesomeIcon icon={faTimesCircle} size="2x" color="white" />
            </button>
          </div>

          <div className="iframe-container">
            <ClipLoader color={"#fff"} loading={this.state.isLoading} />
            {!this.state.isLoading &&
              this.state.trailer !== null && (
                <YouTube
                  ref={youTubePlayerRef}
                  videoId={trailer.key}
                  opts={{
                    playerVars: { rel: 0 }
                  }}
                />
              )}
          </div>
        </div>
      </div>
    );
  }
}

TrailerModal.propTypes = {
  trailer: PropTypes.object,
  onCloseTrailerModal: PropTypes.func.isRequired,
  onFetchMovieTrailer: PropTypes.func.isRequired,
  showTrailerModal: PropTypes.bool.isRequired,
  billboardMovie: PropTypes.object.isRequired
};

export default TrailerModal;
