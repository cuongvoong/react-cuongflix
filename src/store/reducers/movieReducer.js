import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_CREDITS,
  RECEIVE_MOVIE_DETAILS,
  RECEIVE_MOVIE_CREDITS
} from "../actions/types";

const initialState = {
  details: {
    genres: [],
    videos: {
      results: []
    },
    isFetching: true
  },
  credits: {
    cast: [],
    isFetching: true
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          isFetching: action.payload.isFetching
        }
      };

    case RECEIVE_MOVIE_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          isFetching: false,
          ...action.payload
        }
      };

    case FETCH_MOVIE_CREDITS:
      return {
        ...state,
        credits: {
          ...state.credits,
          isFetching: action.payload.isFetching
        }
      };

    case RECEIVE_MOVIE_CREDITS:
      return {
        ...state,
        credits: {
          ...state.credits,
          isFetching: false,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
