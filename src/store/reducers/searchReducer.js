import {
  CLEAR_SEARCH_TERM,
  UPDATE_SEARCH_TERM,
  FETCH_SEARCH_RESULTS,
  UPDATE_SEARCH_BOX_FOCUS
} from "../actions/types";

const initialState = {
  term: "",
  isSearchBoxFocused: false,
  movies: {
    results: []
  },
  tvShows: {
    results: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      };
    case FETCH_SEARCH_RESULTS:
      return {
        ...state,
        movies: action.payload.movies,
        tvShows: action.payload.tvShows
      };
    case UPDATE_SEARCH_BOX_FOCUS:
      return {
        ...state,
        isSearchBoxFocused: action.payload
      };
    case CLEAR_SEARCH_TERM:
      return {
        ...state,
        term: ""
      };
    default:
      return state;
  }
};
