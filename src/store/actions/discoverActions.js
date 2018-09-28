import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_TV_SHOWS,
  FETCH_BILLBOARD_VIDEOS
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;
const year = new Date().getFullYear();

export const fetchDiscoverMovies = () => dispatch => {
  let movies_page1;
  let movies_page2;

  const promise1 = fetchByPageNumber("movie", 1, year).then(results => {
    movies_page1 = results[0];
  });

  const promise2 = fetchByPageNumber("movie", 2, year).then(results => {
    movies_page2 = results[0];
  });

  Promise.all([promise1, promise2]).then(() => {
    dispatch({
      type: FETCH_DISCOVER_MOVIES,
      payload: { movies_page1, movies_page2 }
    });
  });
};

export const fetchDiscoverTVShows = () => dispatch => {
  let tvShows_page1;
  let tvShows_page2;
  const promise1 = fetchByPageNumber("tv", 1, year).then(results => {
    tvShows_page1 = results[0];
  });

  const promise2 = fetchByPageNumber("tv", 2, year).then(results => {
    tvShows_page2 = results[0];
  });

  Promise.all([promise1, promise2]).then(() => {
    dispatch({
      type: FETCH_DISCOVER_TV_SHOWS,
      payload: { tvShows_page1, tvShows_page2 }
    });
  });
};

export const fetchBillboardVideos = id => dispatch => {
  const queryURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  fetch(queryURL)
    .then(response => response.json())
    .then(videos => {
      dispatch({
        type: FETCH_BILLBOARD_VIDEOS,
        payload: videos
      });
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

  const queryURL = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&include_video=true&page=${page}${appendYear}`;
  console.log(queryURL);

  const promise = fetch(queryURL).then(response => response.json());

  return Promise.all([promise]);
};
