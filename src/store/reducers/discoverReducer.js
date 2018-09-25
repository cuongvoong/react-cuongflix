import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_TV_SHOWS,
  FETCH_BILLBOARD_VIDEOS
} from "../actions/types";

const initialState = {
  movies_page1: {
    results: []
  },
  movies_page2: {
    results: []
  },
  tvShows_page1: {
    results: []
  },
  tvShows_page2: {
    results: []
  },
  videos: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOVER_MOVIES:
      return {
        ...state,
        movies_page1: action.payload.movies_page1,
        movies_page2: action.payload.movies_page2
      };
    case FETCH_DISCOVER_TV_SHOWS:
      return {
        ...state,
        tvShows_page1: action.payload.tvShows_page1,
        tvShows_page2: action.payload.tvShows_page2
      };
    case FETCH_BILLBOARD_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
};
