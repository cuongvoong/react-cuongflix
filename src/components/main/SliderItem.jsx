import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SliderItem.css";
import TitleCard from "./TitleCard";

class SliderItem extends Component {
  constructor(props) {
    super(props);

    this.sliderItem = React.createRef();
    this.titleCard = React.createRef();
  }

  handleMouseEnter = () => {
    const normalWidth = this.titleCard.current.poster.current.offsetWidth;
    const offsetWidth = normalWidth * 1.4;
    const translateXPixels = Math.floor((offsetWidth - normalWidth) / 2);

    this.sliderItem.current.style.zIndex = 4;
    this.sliderItem.current.style.transitionDuration = "400ms";
    this.sliderItem.current.style.transitionTimingFunction =
      "cubic-bezier(0.5, 0, 0.1, 1)";
    this.sliderItem.current.style.transitionDelay = "0ms";

    if (this.props.viewportPosition === "leftEdge") {
      this.sliderItem.current.style.transform = `translate3d(${translateXPixels}px, 0px, 0px)`;
    } else if (this.props.viewportPosition === "rightEdge") {
      this.sliderItem.current.style.transform = `translate3d(-${translateXPixels}px, 0px, 0px)`;
    }

    this.props.onMouseEnter(
      this.props.viewportIndex,
      this.props.viewportPosition,
      offsetWidth
    );
  };

  handleMouseLeave = () => {
    this.sliderItem.current.style.removeProperty("z-index");
    this.sliderItem.current.style.removeProperty("transform");
    this.sliderItem.current.style.removeProperty("transition-duration");
    this.sliderItem.current.style.removeProperty("transition-timing-function");
    this.sliderItem.current.style.removeProperty("transition-delay");

    this.props.onMouseLeave();
  };

  render() {
    const { href, item } = this.props;

    return (
      <div
        ref={this.sliderItem}
        className={`slider-item ${this.props.additionalClasses}`}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div className="title-card-container">
          <TitleCard ref={this.titleCard} href={href} item={item} />
        </div>
      </div>
    );
  }
}

SliderItem.propTypes = {
  sliderItemId: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string.isRequired,
  viewportIndex: PropTypes.number.isRequired,
  viewportPosition: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default SliderItem;
