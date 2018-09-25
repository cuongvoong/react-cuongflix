import {
  FETCH_TV_SHOW_DETAILS,
  FETCH_TV_SHOW_CREDITS,
  SET_LOADING
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTVShowDetails = id => dispatch => {
  const queryDetailsURL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos`;

  fetch(queryDetailsURL)
    .then(response => response.json())
    .then(details => {
      dispatch({
        type: FETCH_TV_SHOW_DETAILS,
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

export const fetchTVShowCredits = id => dispatch => {
  const queryCreditsURL = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`;

  fetch(queryCreditsURL)
    .then(response => response.json())
    .then(credits => {
      dispatch({
        type: FETCH_TV_SHOW_CREDITS,
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
