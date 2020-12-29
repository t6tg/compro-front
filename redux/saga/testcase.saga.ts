import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaTestcase({ payload }: any) {
  try {
    yield put(action.testcaseFetching());
    const res = yield call(httpClient.get, `/getTestcase/${payload}`);
    yield put(action.testcaseSuccess(res.data));
  } catch (error) {
    yield put(action.testcaseFailed());
  }
}
