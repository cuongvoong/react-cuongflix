import {
  FETCH_TV_SHOW_DETAILS,
  FETCH_TV_SHOW_CREDITS,
  RECEIVE_TV_SHOW_DETAILS,
  RECEIVE_TV_SHOW_CREDITS
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
    case FETCH_TV_SHOW_CREDITS:
      return {
        ...state,
        credits: {
          ...state.credits,
          isFetching: action.payload.isFetching
        }
      };
    case RECEIVE_TV_SHOW_CREDITS:
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
