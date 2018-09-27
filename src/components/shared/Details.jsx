import React from "react";
import PropTypes from "prop-types";
import "./Details.css";
import DetailsInfo from "./DetailsInfo";
import Facts from "./Facts";

const Details = ({ details, credits }) => {
  return (
    <section className="details">
      <DetailsInfo details={details} credits={credits} />
      <Facts details={details} />
    </section>
  );
};

Details.propTypes = {
  details: PropTypes.object.isRequired,
  credits: PropTypes.object.isRequired
};

export default Details;
