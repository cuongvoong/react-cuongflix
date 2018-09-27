import React from "react";
import PropTypes from "prop-types";
import "./Poster.css";

const Poster = ({ details }) => {
  return (
    <section className="poster">
      <img
        src={
          details.poster_path === null
            ? "https://via.placeholder.com/342x514"
            : `https://image.tmdb.org/t/p/w342${details.poster_path}`
        }
        alt=""
      />
    </section>
  );
};

Poster.propTypes = {
  details: PropTypes.object.isRequired
};

export default Poster;
