import React from "react";
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

export default Poster;
