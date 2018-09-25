import React from "react";
import "./PrimaryNavigation.css";
import MainViewLink from "./MainViewLink";
// import { Link } from "react-router-dom";

const PrimaryNavigation = () => {
  return (
    <ul className="tabbed-primary-navigation">
      <li className="navigation-tab">
        <MainViewLink href="/" className="">
          Home
        </MainViewLink>
      </li>
      <li className="navigation-tab">
        <MainViewLink href="/tvshows" className="">
          TV Shows
        </MainViewLink>
      </li>
      <li className="navigation-tab">
        <MainViewLink href="/movies" className="">
          Movies
        </MainViewLink>
      </li>
    </ul>
  );
};

export default PrimaryNavigation;
