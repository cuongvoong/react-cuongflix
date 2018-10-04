import {
  FETCH_TV_SHOW_DETAILS,
  RECEIVE_TV_SHOW_DETAILS
} from "../actions/types";

const initialState = {
  details: {
    genres: [],
    videos: {
      results: []
    },
    credits: {
      cast: [],
      isFetching: true
    },
    isFetching: true
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_SHOW_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          isFetching: action.payload.isFetching
        }
      };
    case RECEIVE_TV_SHOW_DETAILS:
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
