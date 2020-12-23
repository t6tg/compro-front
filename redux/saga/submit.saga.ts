import { put, call, select, delay } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";
import { kResultOk } from "../../utils/contants";

export function* sagaSubmit({ payload }: any) {
  try {
    yield put(action.submitFetching());
    const res = yield call(httpClient.post, "/submit", payload);
    const { result } = res.data;
    if (result == kResultOk) {
      yield put(action.submitSuccess(res.data));
      yield put(action.submissionId(res.data.data.Problem));
    } else {
      yield put(action.submitFailed());
    }
  } catch (error) {
    yield put(action.submitFailed());
  }
}
