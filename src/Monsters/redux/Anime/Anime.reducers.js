import { AnimeActionTypes } from "./Anime.types";

const Initial_state = {
  Anime: [],
};
export const AnimeReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case AnimeActionTypes.GET_ANIME:
      return {
        ...state,
        Anime: action.payload,
      };
    default:
      return { ...state };
  }
};
