import {
  FETCH_DISCOVER_MOVIES,
  RECEIVE_DISCOVER_MOVIES,
  FETCH_DISCOVER_TV_SHOWS,
  RECEIVE_DISCOVER_TV_SHOWS,
  ASSIGN_BILLBOARD_MOVIE,
  FETCH_BILLBOARD_MOVIE_VIDEOS,
  RECEIVE_BILLBOARD_MOVIE_VIDEOS,
  SHOW_TRAILER_MODAL,
  RESET_BILLBOARD_MOVIE_VIDEOS
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;
const year = new Date().getFullYear();

export const fetchDiscoverMovies = () => dispatch => {
  dispatch({
    type: FETCH_DISCOVER_MOVIES,
    payload: {
      isFetching: true
    }
  });

  fetchByPageNumber("movie", 1, year).then(results => {
    receiveDiscoverMovies(results[0], 1, dispatch);
  });

  fetchByPageNumber("movie", 2, year).then(results => {
    receiveDiscoverMovies(results[0], 2, dispatch);
  });
};

export const receiveDiscoverMovies = (movies, page, dispatch) => {
  dispatch({
    type: RECEIVE_DISCOVER_MOVIES,
    payload: {
      movies,
      page
    }
  });
};

export const fetchDiscoverTVShows = () => dispatch => {
  dispatch({
    type: FETCH_DISCOVER_TV_SHOWS,
    payload: {
      isFetching: true
    }
  });

  fetchByPageNumber("tv", 1, year).then(results => {
    receiveDiscoverTVShows(results[0], 1, dispatch);
  });

  fetchByPageNumber("tv", 2, year).then(results => {
    receiveDiscoverTVShows(results[0], 2, dispatch);
  });
};

export const receiveDiscoverTVShows = (tvShows, page, dispatch) => {
  dispatch({
    type: RECEIVE_DISCOVER_TV_SHOWS,
    payload: {
      tvShows,
      page
    }
  });
};

export const fetchBillboardMovieVideos = id => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  dispatch({
    type: FETCH_BILLBOARD_MOVIE_VIDEOS,
    payload: { isFetching: true }
  });

  fetch(queryURL)
    .then(response => response.json())
    .then(videos => receiveBillboardMovieVideos(videos, dispatch));
};

export const assignBillboardMovie = movie => dispatch => {
  dispatch({
    type: ASSIGN_BILLBOARD_MOVIE,
    payload: movie
  });
};

export const receiveBillboardMovieVideos = (videos, dispatch) => {
  dispatch({
    type: RECEIVE_BILLBOARD_MOVIE_VIDEOS,
    payload: { videos, isFetching: false }
  });
};

const fetchByPageNumber = (type, page, year = null) => {
  let appendYear = "";
  if (year !== null) {
    if (type === "movie") {
      appendYear = `&primary_release_year=${year}`;
    }
    if (type === "tv") {
      appendYear = `&first_air_date_year=${year}`;
    }
  }

  const queryURL = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&page=${page}${appendYear}`;

  const promise = fetch(queryURL).then(response => response.json());

  return Promise.all([promise]);
};

export const showTrailerModal = show => dispatch => {
  dispatch({
    type: SHOW_TRAILER_MODAL,
    payload: show
  });
};

export const resetBillboardMovieVideos = () => dispatch => {
  dispatch({
    type: RESET_BILLBOARD_MOVIE_VIDEOS,
    payload: null
  });
};
