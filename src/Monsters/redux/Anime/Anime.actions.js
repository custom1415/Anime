import { AnimeActionTypes } from "./Anime.types";

export const GetAnime = (Anime) => ({
  type: AnimeActionTypes.GET_ANIME,
  payload: Anime,
});
