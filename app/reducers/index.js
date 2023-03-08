import { combineReducers } from "redux";
import dataSample from "./apiData";

const appReducer = combineReducers({
  API_DATA: dataSample
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
