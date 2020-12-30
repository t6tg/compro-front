import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import activeProblemReducer from "./activeProblem.reducer";
import problemReducer from "./problemId.reducer";
import submissionReducer from "./submissionId.reducer";
import submitReducer from "./submit.reducer";
import profileReducer from "./profile.reducer";
import tProblemReducer from "./teacherProblem.reducer";
import createProblemReducer from "./createProblem.reducer";
import testcaseReducer from "./testcase.reducer";
import TproblemIDReducer from "./tproblemId.reducer";
import uploadStudentReducer from "./uploadStudent.reducer";
import studentReducer from "./student.reducer";
import switchReducer from "./switch.reducer";

export default combineReducers({
  activeProblemReducer,
  loginReducer,
  problemReducer,
  submissionReducer,
  submitReducer,
  profileReducer,
  tProblemReducer,
  createProblemReducer,
  testcaseReducer,
  TproblemIDReducer,
  uploadStudentReducer,
  studentReducer,
  switchReducer,
});
