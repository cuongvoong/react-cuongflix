import {
  CLEAR_SEARCH_TERM,
  UPDATE_SEARCH_TERM,
  FETCH_SEARCH_RESULTS,
  UPDATE_SEARCH_BOX_FOCUS
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const clearSearchTerm = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_TERM,
    payload: ""
  });
};

export const updateSearchTerm = term => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_TERM,
    payload: term
  });
};

export const updateSearchBoxFocus = focus => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_BOX_FOCUS,
    payload: focus
  });
};

export const fetchSearchResults = term => dispatch => {
  const queryMoviesURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;

  let movies;

  const moviePromise = fetch(queryMoviesURL)
    .then(response => response.json())
    .then(results => {
      movies = results;
    });

  const queryTVShowsURL = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${term}`;

  let tvShows;

  const tvShowsPromise = fetch(queryTVShowsURL)
    .then(response => response.json())
    .then(results => {
      tvShows = results;
    });

  Promise.all([moviePromise, tvShowsPromise]).then(() => {
    dispatch({
      type: FETCH_SEARCH_RESULTS,
      payload: { movies, tvShows }
    });
  });
};
