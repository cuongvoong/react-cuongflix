import React from "react";
import PropTypes from "prop-types";
import "./Credits.css";
import Cast from "./Cast";

const Credits = ({ credits }) => {
  const cast = credits.cast.map(member => {
    return <Cast key={member.credit_id} cast={member} />;
  });

  return (
    <section className="credits">
      <h4>Cast</h4>
      <section className="cast">{cast}</section>
    </section>
  );
};

Credits.propTypes = {
  credits: PropTypes.object.isRequired
};

export default Credits;
