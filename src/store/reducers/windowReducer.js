import { UPDATE_COLUMNS_IN_ROW, DETECT_MOBILE } from "../actions/types";

const initialState = {
  // width: 0,
  // height: 0,
  columnsInRow: 3,
  isMobile: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLUMNS_IN_ROW:
      return {
        ...state,
        columnsInRow: action.payload
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
