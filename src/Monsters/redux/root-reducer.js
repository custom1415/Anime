import { combineReducers } from "redux";
import { AnimeReducer as Anime } from "./Anime/Anime.reducers";
import { searchReducer as Search } from "./Search/Search.reducer";
export const rootReducer = combineReducers({
  Search,
  Anime,
});
