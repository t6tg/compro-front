import { takeEvery, all } from "redux-saga/effects";
// import { sagaRegister } from "./register.saga";
import { sagaLogin } from "./login.saga";
import * as actionTypes from "./actionTypes";

// Register
export function* watchRegisterRequest() {
  //   yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister);
}

// Login
export function* watchLoginRequest() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin);
}

//Logout
export function* watchLogoutRequest() {
  //   yield takeEvery(actionTypes.LOGOUT_REQUEST, sagaLogout);
}

// Re - Login
export function* watchReLoginRequest() {
  //   yield takeEvery(actionTypes.RELOGIN_REQUEST, sagaReLogin);
}

export default function* rootSaga() {
  yield all([
    // watchRegisterRequest(),
    watchLoginRequest(),
    // watchLogoutRequest(),
    // watchReLoginRequest(),
  ]);
}
