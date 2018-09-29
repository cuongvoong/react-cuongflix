import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BillboardRow.css";
import ViewDetailsButton from "./ViewDetailsButton";
import PlayTrailerButton from "./PlayTrailerButton";
import BackDrop from "./BackDrop";

class BillboardRow extends Component {
  billboardText = text => {
    return text !== undefined && text.length > 500
      ? `${text.substr(0, 500)} ...`
      : text;
  };

  render() {
    const {
      onPlayTrailerClick,
      modalRef,
      modalContentRef,
      billboardMovie
    } = this.props;

    return (
      <div className="billboard-row">
        <BackDrop backdrop_path={billboardMovie.backdrop_path} />
        <div className="billboard-text-overlay info">
          <div className="logo-and-text">
            <span className="billboard-title">{billboardMovie.title}</span>
            <div className="billboard-links button-layer">
              <ViewDetailsButton id={billboardMovie.id} />

              <PlayTrailerButton
                modalRef={modalRef}
                modalContentRef={modalContentRef}
                id={billboardMovie.id}
                onPlayTrailerClick={onPlayTrailerClick}
              />
            </div>

            <p className="billboard-overview">
              {this.billboardText(billboardMovie.overview)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

BillboardRow.propTypes = {
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
  }),
  billboardMovie: PropTypes.object.isRequired
};

export default BillboardRow;
