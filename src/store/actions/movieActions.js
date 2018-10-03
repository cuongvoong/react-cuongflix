import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_CREDITS,
  RECEIVE_MOVIE_DETAILS,
  RECEIVE_MOVIE_CREDITS
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovieDetails = id => dispatch => {
  dispatch({
    type: FETCH_MOVIE_DETAILS,
    payload: {
      isFetching: true
    }
  });

  const queryURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`;

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

export const fetchMovieCredits = id => dispatch => {
  dispatch({
    type: FETCH_MOVIE_CREDITS,
    payload: {
      isFetching: true
    }
  });
  const queryURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(credits => {
      receiveMovieCredits(credits, dispatch);
    });
};

export const receiveMovieCredits = (credits, dispatch) => {
  dispatch({
    type: RECEIVE_MOVIE_CREDITS,
    payload: credits
  });
};
