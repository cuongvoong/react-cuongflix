import { FETCH_MOVIE_DETAILS, RECEIVE_MOVIE_DETAILS } from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovieDetails = id => dispatch => {
  dispatch({
    type: FETCH_MOVIE_DETAILS,
    payload: {
      isFetching: true
    }
  });

  const queryURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates,credits`;

  fetch(queryURL)
    .then(response => response.json())
    .then(details => {
      receiveMovieDetails(details, dispatch);
    });
};

export const receiveMovieDetails = (details, dispatch) => {
  dispatch({
    type: RECEIVE_MOVIE_DETAILS,
    payload: details
  });
};
