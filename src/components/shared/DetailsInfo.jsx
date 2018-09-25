import React from "react";
import "./DetailsInfo.css";
import Credits from "./Credits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Videos from "./Videos";

const DetailsInfo = ({ details, credits }) => {
  return (
    <section className="details-info">
      <section className="title-rating-row">
        <h3 className="title">{details.title || details.name}</h3>
        <div className="rating">
          <div className="rating-star">
            <FontAwesomeIcon icon={faStar} size="2x" />
          </div>{" "}
          <div>
            <span className="rating-text">
              {parseFloat(details.vote_average).toFixed(1)}
            </span>
            <span className="rating-scale">/10</span>
          </div>
        </div>
      </section>
      <h4 className="overview-header">Overview</h4>
      <section className="overview">{details.overview}</section>
      <Credits credits={credits} />
      {/* <Videos videos={details.videos} /> */}
    </section>
  );
};

export default DetailsInfo;
