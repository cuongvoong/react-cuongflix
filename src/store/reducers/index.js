import { combineReducers } from "redux";
import windowReducer from "./windowReducer";
import movieReducer from "./movieReducer";
import moviesReducer from "./moviesReducer";
import tvShowsReducer from "./tvShowsReducer";
import tvShowReducer from "./tvShowReducer";
import discoverReducer from "./discoverReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  window: windowReducer,
  movie: movieReducer,
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  tvShow: tvShowReducer,
  discover: discoverReducer,
  search: searchReducer
});
