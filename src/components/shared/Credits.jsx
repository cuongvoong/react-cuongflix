import React, { Component } from "react";
import "./Credits.css";
import Cast from "./Cast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

class Credits extends Component {
  constructor(props) {
    super(props);

    this.cast = React.createRef();
    this.sliderAnimation = null;
  }

  state = {
    hasMovedOnce: false,
    moves: 0,
    animating: false,
    width: 0,
    pages: 0
  };

  componentDidUpdate(prevProps) {
    if (prevProps.credits.cast !== this.props.credits.cast) {
      const width = this.cast.current.offsetWidth;
      const pages =
        Math.floor(
          (Object.keys(this.props.credits.cast).length * 138) / width
        ) + 1;
      this.setState({ width, pages });
    }
  }

  advancePrev = () => {
    if (!this.state.animating) {
      this.setState({ animating: true }, () => {
        const translatePercent = (this.state.moves - 1) * 100;
        this.cast.current.style.transform = `translate3d(-${translatePercent}%,0,0)`;
        this.sliderAnimation = setTimeout(() => {
          const moves = this.state.moves === 0 ? 0 : this.state.moves - 1;
          this.setState({
            animating: false,
            hasMovedOnce: true,
            moves
          });
        }, 750);
      });
    }
  };

  advanceNext = () => {
    if (!this.state.animating) {
      const translatePercent = (this.state.moves + 1) * 100;
      this.cast.current.style.transform = `translate3d(-${translatePercent}%,0,0)`;
      this.setState({ animating: true }, () => {
        this.sliderAnimation = setTimeout(() => {
          this.setState({
            animating: false,
            hasMovedOnce: true,
            moves: this.state.moves + 1
          });
        }, 750);
      });
    }
  };

  render() {
    const { credits } = this.props;

    const cast = credits.cast.map(member => {
      return <Cast key={member.credit_id} cast={member} />;
    });

    const castClasses = "cast" + (this.state.animating ? " animating" : "");

    return (
      <section className="credits">
        <h3>Cast</h3>
        <div className="cast-container">
          {this.state.hasMovedOnce &&
            this.state.moves !== 0 && (
              <span
                onClick={() => this.advancePrev()}
                className="handle handlePrev"
              >
                <FontAwesomeIcon icon={faChevronLeft} size="3x" />
              </span>
            )}
          <section className={castClasses} ref={this.cast}>
            {cast}
          </section>
          {!(this.state.moves + 1 >= this.state.pages) && (
            <span
              onClick={() => this.advanceNext()}
              className="handle handleNext"
            >
              <FontAwesomeIcon icon={faChevronRight} size="3x" />
            </span>
          )}
        </div>
      </section>
    );
  }
}

export default Credits;
