import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import activeProblemReducer from "./activeProblem.reducer";
import problemReducer from "./problemId.reducer";
import submissionReducer from "./submissionId.reducer";

export default combineReducers({
  activeProblemReducer,
  loginReducer,
  problemReducer,
  submissionReducer,
});
