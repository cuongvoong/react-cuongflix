import React from "react";
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

export default Details;
