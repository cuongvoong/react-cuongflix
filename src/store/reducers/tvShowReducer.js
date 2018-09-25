import {
  FETCH_TV_SHOW_DETAILS,
  FETCH_TV_SHOW_CREDITS,
  SET_LOADING
} from "../actions/types";

const initialState = {
  details: {
    genres: [],
    videos: {
      results: []
    }
  },
  credits: {
    cast: []
  },
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_SHOW_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    case FETCH_TV_SHOW_CREDITS:
      return {
        ...state,
        credits: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};
