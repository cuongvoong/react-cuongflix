import { FETCH_MOVIE_DETAILS, RECEIVE_MOVIE_DETAILS } from "../actions/types";

const initialState = {
  details: {
    genres: [],
    videos: {
      results: []
    },
    release_dates: {
      results: []
    },
    credits: {
      cast: []
    },
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
    default:
      return state;
  }
};
