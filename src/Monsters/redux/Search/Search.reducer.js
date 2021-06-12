import { SearchActionTypes } from "./Search.types";

const INITIAL_STATE = {
  loading: false,
};
export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.IS_SEARCHING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};
