import React from "react";
import PropTypes from "prop-types";
import "./Cast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Cast = ({ cast }) => {
  return (
    <section className="cast-item">
      <section className="card">
        {cast.profile_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w138_and_h175_face${
              cast.profile_path
            }`}
            alt=""
          />
        ) : (
          <div className="no-profile">
            <FontAwesomeIcon icon={faUser} size="6x" />
          </div>
        )}
        <section className="name">{cast.name}</section>
        <section className="character">{cast.character}</section>
      </section>
    </section>
  );
};

Cast.propTypes = {
  cast: PropTypes.object.isRequired
};

export default Cast;
