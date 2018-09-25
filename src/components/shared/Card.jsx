import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Card = ({ castMember }) => {
  return (
    <section className="card">
      {castMember.profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w138_and_h175_face${
            castMember.profile_path
          }`}
          alt=""
        />
      ) : (
        <div className="no-profile">
          <FontAwesomeIcon icon={faUser} size="6x" />
        </div>
      )}
      <section className="name">{castMember.name}</section>
      <section className="character">{castMember.character}</section>
    </section>
  );
};

export default Card;
