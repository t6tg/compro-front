import { put, call, select, delay } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";
import { kResultNok, kResultOk } from "../../utils/contants";
import Router from "next/router";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";

export function* sagaLogin({ payload }: any) {
  try {
    yield put(action.loginFetching());
    const res = yield call(httpClient.post, "/login", payload);
    const { result } = res.data;
    if (result == kResultOk) {
      setCookie("token", res.data.token);
      yield put(action.loginSuccess(res.data));
      if (res.data.role === "student") {
        Router.push("/task");
      } else if (res.data.role === "teacher") {
        Router.push("/bo");
      }
    } else {
      yield put(action.loginFailed());
    }
  } catch (error) {
    yield put(action.loginFailed());
  }
}
