import React from "react";
import "./PrimaryNavigation.css";
import { withRouter } from "react-router-dom";
import MainViewLink from "./MainViewLink";

const PrimaryNavigation = props => {
  const { pathname } = props.location;

  const { isMobile } = props;

  return (
    <ul className="tabbed-primary-navigation">
      <li className="navigation-tab">
        <MainViewLink href="/" className={pathname === "/" ? "current" : ""}>
          Home
        </MainViewLink>
      </li>
      <li className="navigation-tab">
        <MainViewLink
          href="/tvshows"
          className={pathname === "/tvshows" ? "current" : ""}
        >
          TV Shows
        </MainViewLink>
      </li>
      <li className="navigation-tab">
        <MainViewLink
          href="/movies"
          className={pathname === "/movies" ? "current" : ""}
        >
          Movies
        </MainViewLink>
      </li>
    </ul>
  );
};

export default withRouter(PrimaryNavigation);
