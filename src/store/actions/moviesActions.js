import {
  FETCH_MOVIES_IN_THEATRES,
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_TOP_RATED
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchUpcoming = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&append_to_response=videos`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_MOVIES_IN_THEATRES,
        payload: data
      });
    });
};

export const fetchPopular = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_MOVIES_POPULAR,
        payload: data
      });
    });
};

export const fetchInTheatres = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_MOVIES_UPCOMING,
        payload: data
      });
    });
};

export const fetchTopRated = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_MOVIES_TOP_RATED,
        payload: data
      });
    });
};
