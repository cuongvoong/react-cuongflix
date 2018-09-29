import { UPDATE_WINDOW_STATE, DETECT_MOBILE } from "../actions/types";

const initialState = {
  width: 0,
  height: 0,
  columnsInRow: 3,
  isMobile: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WINDOW_STATE:
      let columnsInRow;
      if (action.payload.width < 500) {
        columnsInRow = 3;
      } else if (action.payload.width < 750) {
        columnsInRow = 3;
      } else if (action.payload.width < 950) {
        columnsInRow = 4;
      } else if (action.payload.width < 1300) {
        columnsInRow = 5;
      } else {
        columnsInRow = 6;
      }
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
        columnsInRow
      };
    case DETECT_MOBILE:
      return {
        ...state,
        isMobile: action.payload
      };
    default:
      return state;
  }
};
