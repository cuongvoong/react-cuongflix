import { TOGGLE_SIDEDRAWER_STATE } from "./types";

export const toggleSideDrawerState = () => dispatch => {
  dispatch({
    type: TOGGLE_SIDEDRAWER_STATE,
    payload: null
  });
};
