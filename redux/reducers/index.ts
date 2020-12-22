import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import activeProblemReducer from "./activeProblem.reducer";

export default combineReducers({
  activeProblemReducer,
  loginReducer,
});
