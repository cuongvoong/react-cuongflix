import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BillboardRow.css";
import PlayButton from "./PlayButton";
// import TrailerModal from "./TrailerModal";

class BillboardRow extends Component {
  constructor(props) {
    super(props);

    this.modalRef = React.createRef();
    this.modalContentRef = React.createRef();
    this.youTubePlayerRef = React.createRef();
  }

  billboardText = text => {
    return text.length > 500 ? `${text.substr(0, 500)} ...` : text;
  };

  render() {
    const { discover, randomIndex } = this.props;
    const billboard = discover.movies_page1.results[randomIndex];

    return (
      <div className="billboard-row">
        {billboard && (
          <React.Fragment>
            <img
              src={`https://image.tmdb.org/t/p/w1280${billboard.backdrop_path}`}
              alt=""
            />
            {/* <TrailerModal
              videos={billboard}
              modalContentRef={this.modalContentRef}
              modalRef={this.modalRef}
              youTubePlayerRef={this.youTubePlayerRef}
            /> */}
            <div className="billboard-text-overlay info">
              <div className="logo-and-text">
                <span className="billboard-title">{billboard.title}</span>
                <div className="billboard-links button-layer">
                  <PlayButton
                    id={billboard.id}
                    modalRef={this.modalRef}
                    modalContentRef={this.modalContentRef}
                    youTubePlayerRef={this.youTubePlayerRef}
                  />
                </div>

                <p className="billboard-overview">
                  {this.billboardText(billboard.overview)}
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

BillboardRow.propTypes = {
  discover: PropTypes.shape({
    movies_page1: PropTypes.shape({
      results: PropTypes.array.isRequired
    }),
    movies_page2: PropTypes.shape({
      results: PropTypes.array.isRequired
    }),
    tvShows_page1: PropTypes.shape({
      results: PropTypes.array.isRequired
    }),
    tvShows_page2: PropTypes.shape({
      results: PropTypes.array.isRequired
    })
  }),
  randomIndex: PropTypes.number.isRequired
};

export default BillboardRow;
