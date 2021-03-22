import { combineReducers } from "redux";
import galleryReducer from "./Gallery/reducers";

//We can comine multiple reducers when using a project of large scale
export default () =>
  combineReducers({
    galleryReducer,
  });
