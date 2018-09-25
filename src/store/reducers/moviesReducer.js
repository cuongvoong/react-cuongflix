import {
  FETCH_MOVIES_IN_THEATRES,
  FETCH_MOVIES_POPULAR,
  FETCH_MOVIES_UPCOMING,
  FETCH_MOVIES_TOP_RATED
} from "../actions/types";

const initialState = {
  inTheatres: {
    results: []
  },
  popular: {
    results: []
  },
  upcoming: {
    results: []
  },
  topRated: {
    results: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_IN_THEATRES:
      return {
        ...state,
        inTheatres: action.payload
      };
    case FETCH_MOVIES_POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case FETCH_MOVIES_UPCOMING:
      return {
        ...state,
        upcoming: action.payload
      };
    case FETCH_MOVIES_TOP_RATED:
      return {
        ...state,
        topRated: action.payload
      };
    default:
      return state;
  }
};
