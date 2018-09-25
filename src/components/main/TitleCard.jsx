import React, { Component } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

class TitleCard extends Component {
  constructor(props) {
    super(props);

    this.titleCard = React.createRef();
    this.poster = React.createRef();
  }

  handleMouseEnter = () => {
    this.titleCard.current.style.transform = "scale(1.4)";
    this.titleCard.current.style.transitionDuration = "400ms";
    this.titleCard.current.style.transitionTimingFunction =
      "cubic-bezier(0.5, 0, 0.1, 1)";
  };

  handleMouseLeave = () => {
    this.titleCard.current.style.removeProperty("transform");
    this.titleCard.current.style.removeProperty("transition-duration");
    this.titleCard.current.style.removeProperty("transition-timing-function");
  };

  render() {
    const { href, item } = this.props;
    return (
      <div
        ref={this.titleCard}
        className="title-card"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <Link to={{ pathname: `${href}/${item.id}` }}>
          <img
            ref={this.poster}
            src={
              item.poster_path === null
                ? "https://via.placeholder.com/342x514"
                : `https://image.tmdb.org/t/p/w342${item.poster_path}`
            }
            alt=""
          />
          {/* <div className="movie-text-overlay">
            {href === "/movie" ? (
              <span className="movie-title">{item.title}</span>
            ) : (
              <span className="tvShow-name">{item.name}</span>
            )}
            <span className="rating">
              {(item.vote_average * 10).toFixed(0) + `%`}
            </span>
          </div> */}
        </Link>
      </div>
    );
  }
}

export default TitleCard;
