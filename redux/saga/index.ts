import { takeEvery, all } from "redux-saga/effects";
import { sagaLogin } from "./login.saga";
import { sagaActiveProblem } from "./activeProblem.saga";
import * as actionTypes from "./actionTypes";
import { sagaProblemID } from "./problemId.saga";
import { sagaSubmissionId } from "./submissionId.saga";
import { sagaSubmit } from "./submit.saga";

// Login
export function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin);
}

// GET Active Problem
export function* watchActiveProblemRequest() {
  yield takeEvery(actionTypes.ACTIVE_PROBLEM_REQUEST, sagaActiveProblem);
}

export function* watchProblemID() {
  yield takeEvery(actionTypes.PROBLEMID_REQUEST, sagaProblemID);
}

export function* watchSubmissionID() {
  yield takeEvery(actionTypes.SUBMISSIONID_REQUEST, sagaSubmissionId);
}

export function* watchSubmit() {
  yield takeEvery(actionTypes.SUBMIT_REQUEST, sagaSubmit);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchActiveProblemRequest(),
    watchProblemID(),
    watchSubmissionID(),
    watchSubmit(),
  ]);
}
