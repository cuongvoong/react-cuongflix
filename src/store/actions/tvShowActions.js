import {
  FETCH_TV_SHOW_DETAILS,
  FETCH_TV_SHOW_CREDITS,
  RECEIVE_TV_SHOW_DETAILS,
  RECEIVE_TV_SHOW_CREDITS
} from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTVShowDetails = id => dispatch => {
  dispatch({
    type: FETCH_TV_SHOW_DETAILS,
    payload: {
      isFetching: true
    }
  });

  const queryDetailsURL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`;

  fetch(queryDetailsURL)
    .then(response => response.json())
    .then(details => {
      receiveTVShowDetails(details, dispatch);
    });
};

export const receiveTVShowDetails = (details, dispatch) => {
  dispatch({
    type: RECEIVE_TV_SHOW_DETAILS,
    payload: details
  });
};

export const fetchTVShowCredits = id => dispatch => {
  dispatch({
    type: FETCH_TV_SHOW_CREDITS,
    payload: {
      isFetching: true
    }
  });

  const queryCreditsURL = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`;

  fetch(queryCreditsURL)
    .then(response => response.json())
    .then(credits => {
      receiveTVShowCredits(credits, dispatch);
    });
};

export const receiveTVShowCredits = (details, dispatch) => {
  dispatch({
    type: RECEIVE_TV_SHOW_CREDITS,
    payload: details
  });
};
