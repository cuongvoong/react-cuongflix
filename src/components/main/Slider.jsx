import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Slider.css";
import SliderItem from "./SliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.sliderContent = React.createRef();
    this.sliderAnimation = null;
  }

  state = {
    hasMovedOnce: false,
    animating: false,
    lowestVisibleItemIndex: 0
  };

  componentWillUnmount() {
    clearTimeout(this.sliderAnimation);
  }

  handleSliderItemMouseEnter = (
    viewportIndex,
    viewportPosition,
    offsetWidth
  ) => {
    const translateXPixels = Math.floor((offsetWidth - offsetWidth / 1.4) / 2);
    const translateXPixelsEdge = Math.floor(offsetWidth - offsetWidth / 1.4);
    let sliderItemNumber = 0;

    for (let i = 0; i < this.sliderContent.current.children.length; i++) {
      if (
        this.sliderContent.current.children[i].classList.contains(
          `slider-item-${sliderItemNumber}`
        )
      ) {
        this.sliderContent.current.children[i].style.transitionDuration =
          "400ms";
        this.sliderContent.current.children[i].style.transitionTimingFunction =
          "cubic-bezier(0.5, 0, 0.1, 1)";
        this.sliderContent.current.children[i].style.transitionDelay = "0ms";

        if (
          viewportPosition === "leftEdge" &&
          viewportIndex !== sliderItemNumber &&
          sliderItemNumber !== viewportIndex - 1
        ) {
          this.sliderContent.current.children[
            i
          ].style.transform = `translate3d(${translateXPixelsEdge}px,0px,0px)`;
        } else if (
          viewportPosition === "rightEdge" &&
          viewportIndex !== sliderItemNumber &&
          sliderItemNumber !== viewportIndex + 1
        ) {
          this.sliderContent.current.children[
            i
          ].style.transform = `translate3d(-${translateXPixelsEdge}px,0px,0px)`;
        } else if (
          viewportPosition === "middle" &&
          sliderItemNumber < viewportIndex
        ) {
          this.sliderContent.current.children[
            i
          ].style.transform = `translate3d(-${translateXPixels + 1}px,0px,0px)`;
        } else if (
          viewportPosition === "middle" &&
          sliderItemNumber > viewportIndex
        ) {
          this.sliderContent.current.children[
            i
          ].style.transform = `translate3d(${translateXPixels}px,0px,0px)`;
        }

        sliderItemNumber++;
      }
    }
  };

  handleSliderItemMouseLeave = () => {
    for (let i = 0; i < this.sliderContent.current.children.length; i++) {
      this.sliderContent.current.children[i].style.removeProperty("transform");
      this.sliderContent.current.children[i].style.removeProperty(
        "transition-duration"
      );
      this.sliderContent.current.children[i].style.removeProperty(
        "transition-timing-function"
      );
      this.sliderContent.current.children[i].style.removeProperty(
        "transition-delay"
      );
    }
  };

  advancePrev = () => {
    if (!this.state.animating) {
      const { columnsInRow, totalItems } = this.props;

      const translatePercent = 100 / columnsInRow;

      this.sliderContent.current.style.transform = `translate3d(${-translatePercent}%,0,0)`;

      this.setState({ animating: true }, () => {
        this.sliderAnimation = setTimeout(() => {
          const translatePercentEnd = 100 + 100 / columnsInRow;
          this.sliderContent.current.style.transform = `translate3d(-${translatePercentEnd}%,0,0)`;

          const lowestVisibleItemIndex =
            this.state.lowestVisibleItemIndex -
            columnsInRow +
            (this.state.lowestVisibleItemIndex - columnsInRow < 0
              ? totalItems
              : 0);
          this.setState({
            animating: false,
            hasMovedOnce: true,
            lowestVisibleItemIndex
          });
        }, 750);
      });
    }
  };

  advanceNext = () => {
    if (!this.state.animating) {
      const { columnsInRow, totalItems } = this.props;

      const translatePercent =
        100 + (this.state.hasMovedOnce ? 100 / columnsInRow + 100 : 0);

      this.sliderContent.current.style.transform = `translate3d(-${translatePercent}%,0,0)`;

      this.setState({ animating: true }, () => {
        this.sliderAnimation = setTimeout(() => {
          const translatePercentEnd = 100 + 100 / columnsInRow;
          this.sliderContent.current.style.transform = `translate3d(-${translatePercentEnd}%,0,0)`;

          const lowestVisibleItemIndex =
            this.state.lowestVisibleItemIndex +
            columnsInRow -
            (this.state.lowestVisibleItemIndex + columnsInRow > totalItems - 1
              ? totalItems
              : 0);
          this.setState({
            animating: false,
            hasMovedOnce: true,
            lowestVisibleItemIndex
          });
        }, 750);
      });
    }
  };

  generateSliderItemsToRender() {
    const { href, results, columnsInRow, totalItems } = this.props;

    const numItemsToRender = this.state.hasMovedOnce
      ? columnsInRow * 3 + 2
      : columnsInRow * 2 + 1;

    let sliderItemsToRender = [];

    if (results.length > 0) {
      let index = this.state.hasMovedOnce
        ? this.state.lowestVisibleItemIndex - columnsInRow - 1
        : 0;

      for (let i = 0; i < numItemsToRender; i++) {
        if (index < 0) {
          index += totalItems;
        }

        if (index >= totalItems) {
          index -= totalItems;
        }

        const additionalClasses = this.generateAdditionalClasses(i);
        const viewportIndex = this.calculateViewportIndex(i);
        const viewportPosition = this.calculateViewportPosition(viewportIndex);

        sliderItemsToRender.push(
          <SliderItem
            key={`item_${i}/${results[index].id}_${index}`}
            sliderItemId={`item_${i}`}
            href={href}
            item={results[index]}
            additionalClasses={additionalClasses}
            viewportIndex={viewportIndex}
            viewportPosition={viewportPosition}
            onMouseEnter={(vpIndex, vpPosition, offsetWidth) =>
              this.handleSliderItemMouseEnter(vpIndex, vpPosition, offsetWidth)
            }
            onMouseLeave={() => this.handleSliderItemMouseLeave()}
          />
        );

        index++;
      }
    }

    return sliderItemsToRender;
  }

  generateAdditionalClasses = index => {
    const { columnsInRow } = this.props;
    const firstViewPortIndex = this.state.hasMovedOnce ? columnsInRow : 0;

    if (
      index >= firstViewPortIndex &&
      index <= columnsInRow + firstViewPortIndex + 1
    )
      return `slider-item-${index - firstViewPortIndex}`;

    return `slider-item-`;
  };

  calculateViewportIndex = index => {
    const { columnsInRow } = this.props;
    const firstViewPortIndex = this.state.hasMovedOnce ? columnsInRow : 0;

    if (
      index >= firstViewPortIndex &&
      index <= columnsInRow + firstViewPortIndex + 1
    )
      return index - firstViewPortIndex;

    return "";
  };

  calculateViewportPosition = viewportIndex => {
    const { columnsInRow } = this.props;
    const positionOffset = this.state.hasMovedOnce ? 1 : 0;

    if (viewportIndex !== "") {
      if (this.state.hasMovedOnce && viewportIndex === 0) {
        return "leftPeek";
      } else if (viewportIndex - positionOffset === 0) {
        return "leftEdge";
      } else if (viewportIndex - positionOffset === columnsInRow) {
        return "rightPeek";
      } else if (viewportIndex - positionOffset === columnsInRow - 1) {
        return "rightEdge";
      } else if (
        viewportIndex + positionOffset > 0 &&
        viewportIndex + positionOffset <= columnsInRow
      ) {
        return "middle";
      }
    }

    return "";
  };

  render() {
    const sliderContentClasses =
      "sliderContent" + (this.state.animating ? " animating" : "");

    return (
      <div className="slider-container">
        {this.state.hasMovedOnce && (
          <span
            ref={this.leftHandle}
            onClick={() => this.advancePrev()}
            className="handle handlePrev"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="3x" />
          </span>
        )}
        <div className="slider">
          <div className={sliderContentClasses} ref={this.sliderContent}>
            {this.generateSliderItemsToRender()}
          </div>
        </div>
        <span
          ref={this.rightHandle}
          onClick={() => this.advanceNext()}
          className="handle handleNext active"
        >
          <FontAwesomeIcon icon={faChevronRight} size="3x" />
        </span>
      </div>
    );
  }
}

Slider.propTypes = {
  href: PropTypes.string.isRequired,
  results: PropTypes.object.isRequired,
  columnsInRow: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default Slider;
