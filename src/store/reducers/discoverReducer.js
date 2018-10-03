import {
  FETCH_DISCOVER_MOVIES,
  RECEIVE_DISCOVER_MOVIES,
  FETCH_DISCOVER_TV_SHOWS,
  RECEIVE_DISCOVER_TV_SHOWS,
  ASSIGN_BILLBOARD_MOVIE,
  FETCH_BILLBOARD_MOVIE_VIDEOS,
  RECEIVE_BILLBOARD_MOVIE_VIDEOS,
  SHOW_TRAILER_MODAL
} from "../actions/types";

const initialState = {
  movies_page1: {
    isFetching: true,
    results: []
  },
  movies_page2: {
    isFetching: true,
    results: []
  },
  tvShows_page1: {
    isFetching: true,
    results: []
  },
  tvShows_page2: {
    isFetching: true,
    results: []
  },
  billboardMovie: {
    videos: {
      isFetching: false,
      results: []
    }
  },
  randomIndex: 0,
  showTrailerModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOVER_MOVIES:
      return {
        ...state,
        movies_page1: {
          ...state.movies_page1,
          isFetching: action.payload.isFetching
        },
        movies_page2: {
          ...state.movies_page2,
          isFetching: action.payload.isFetching
        }
      };
    case RECEIVE_DISCOVER_MOVIES:
      switch (action.payload.page) {
        case 1:
          return {
            ...state,
            movies_page1: {
              ...state.movies_page1,
              ...action.payload.movies,
              isFetching: false
            }
          };
        case 2:
          return {
            ...state,
            movies_page2: {
              ...state.movies_page2,
              ...action.payload.movies,
              isFetching: false
            }
          };
        default:
          return state;
      }
    case FETCH_DISCOVER_TV_SHOWS:
      return {
        ...state,
        tvShows_page1: {
          ...state.tvShows_page1,
          isFetching: action.payload.isFetching
        },
        tvShows_page2: {
          ...state.tvShows_page2,
          isFetching: action.payload.isFetching
        }
      };

    case RECEIVE_DISCOVER_TV_SHOWS:
      switch (action.payload.page) {
        case 1:
          return {
            ...state,
            tvShows_page1: {
              ...state.tvShows_page1,
              ...action.payload.tvShows,
              isFetching: false
            }
          };
        case 2:
          return {
            ...state,
            tvShows_page2: {
              ...state.tvShows_page2,
              ...action.payload.tvShows,
              isFetching: false
            }
          };
        default:
          return state;
      }
    case ASSIGN_BILLBOARD_MOVIE:
      return {
        ...state,
        billboardMovie: {
          ...state.billboardMovie,
          ...action.payload
        }
      };
    case FETCH_BILLBOARD_MOVIE_VIDEOS:
      return {
        ...state,
        billboardMovie: {
          ...state.billboardMovie,
          videos: {
            ...state.billboardMovie.videos,
            isFetching: action.payload.isFetching
          }
        }
      };

    case RECEIVE_BILLBOARD_MOVIE_VIDEOS:
      return {
        ...state,
        billboardMovie: {
          ...state.billboardMovie,
          videos: {
            ...state.billboardMovie.videos,
            ...action.payload.videos,
            isFetching: action.payload.isFetching
          }
        }
      };
    case SHOW_TRAILER_MODAL:
      return {
        ...state,
        showTrailerModal: action.payload
      };
    default:
      return state;
  }
};
