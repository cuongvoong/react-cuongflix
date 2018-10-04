import { TOGGLE_SIDEDRAWER_STATE } from "../actions/types";

const initialState = {
  isSideDrawerOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEDRAWER_STATE:
      return {
        ...state,
        isSideDrawerOpen: !state.isSideDrawerOpen
      };
    default:
      return state;
  }
};
