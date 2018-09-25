import {
  FETCH_TV_SHOWS_ON_TV,
  FETCH_TV_SHOWS_POPULAR,
  FETCH_TV_SHOWS_AIRING_TODAY,
  FETCH_TV_SHOWS_TOP_RATED
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchOnTV = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&append_to_response=videos`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_TV_SHOWS_ON_TV,
        payload: data
      });
    });
};

export const fetchPopular = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_TV_SHOWS_POPULAR,
        payload: data
      });
    });
};

export const fetchAiringToday = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_TV_SHOWS_AIRING_TODAY,
        payload: data
      });
    });
};

export const fetchTopRated = () => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_TV_SHOWS_TOP_RATED,
        payload: data
      });
    });
};
