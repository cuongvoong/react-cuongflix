import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Movies from "./Movies";
import TVShows from "./TVShows";
import TVShow from "./TVShow";
import Search from "./Search";
import TabbedHeader from "./TabbedHeader";
import Error from "../components/error/Error";

class CuongFlix extends Component {
  render() {
    return (
      <React.Fragment>
        <TabbedHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvshows" component={TVShows} />
          <Route path="/tvshow/:id" component={TVShow} />
          <Route path="/search" component={Search} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default CuongFlix;
