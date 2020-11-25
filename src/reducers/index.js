import { combineReducers } from "redux";
import MissionReducer from "./MissionReducer";

export default combineReducers({
  missionResponse: MissionReducer
});
