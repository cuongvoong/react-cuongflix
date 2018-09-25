import {
  FETCH_TV_SHOWS_ON_TV,
  FETCH_TV_SHOWS_POPULAR,
  FETCH_TV_SHOWS_AIRING_TODAY,
  FETCH_TV_SHOWS_TOP_RATED
} from "../actions/types";

const initialState = {
  onTV: {
    results: []
  },
  popular: {
    results: []
  },
  airingToday: {
    results: []
  },
  topRated: {
    results: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_SHOWS_ON_TV:
      return {
        ...state,
        onTV: action.payload
      };
    case FETCH_TV_SHOWS_POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case FETCH_TV_SHOWS_AIRING_TODAY:
      return {
        ...state,
        airingToday: action.payload
      };
    case FETCH_TV_SHOWS_TOP_RATED:
      return {
        ...state,
        topRated: action.payload
      };
    default:
      return state;
  }
};
