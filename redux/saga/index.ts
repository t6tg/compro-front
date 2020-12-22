import { takeEvery, all } from "redux-saga/effects";
// import { sagaRegister } from "./register.saga";
import { sagaLogin } from "./login.saga";
import { sagaActiveProblem } from "./activeProblem.saga";
import * as actionTypes from "./actionTypes";

// Register
export function* watchRegisterRequest() {
  //   yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister);
}

// Login
export function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin);
}

// GET Active Problem
export function* watchActiveProblemRequest() {
  yield takeEvery(actionTypes.ACTIVE_PROBLEM_REQUEST, sagaActiveProblem);
}
export default function* rootSaga() {
  yield all([
    // watchRegisterRequest(),
    watchLoginRequest(),
    watchActiveProblemRequest(),
    // watchLogoutRequest(),
    // watchReLoginRequest(),
  ]);
}
