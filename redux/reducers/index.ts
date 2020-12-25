import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import activeProblemReducer from "./activeProblem.reducer";
import problemReducer from "./problemId.reducer";
import submissionReducer from "./submissionId.reducer";
import submitReducer from "./submit.reducer";
import profileReducer from "./profile.reducer";
import tProblemReducer from "./teacherProblem.reducer";
import createProblemReducer from "./createProblem.reducer";

export default combineReducers({
  activeProblemReducer,
  loginReducer,
  problemReducer,
  submissionReducer,
  submitReducer,
  profileReducer,
  tProblemReducer,
  createProblemReducer,
});
