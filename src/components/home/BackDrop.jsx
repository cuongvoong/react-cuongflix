import React from "react";

const BackDrop = ({ backdrop_path }) => {
  return (
    <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="" />
  );
};

export default BackDrop;
