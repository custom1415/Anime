import { SearchActionTypes } from "./Search.types";

export const IsLoading = (loading) => ({
  type: SearchActionTypes.IS_SEARCHING,
  payload: loading,
});
