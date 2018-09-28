import { FETCH_MOVIE_DETAILS, FETCH_MOVIE_CREDITS, SET_LOADING } from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovieDetails = id => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`;

  fetch(queryURL)
    .then(response => response.json())
    .then(details => {
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: details
      });
    })
    .then(() => {
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    });
};

export const fetchMovieCredits = id => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(credits => {
      dispatch({
        type: FETCH_MOVIE_CREDITS,
        payload: credits
      });
    });
};

export const setLoading = isLoading => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: isLoading
  });
};
