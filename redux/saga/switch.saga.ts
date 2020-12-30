import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaSwitchID({ payload }: any) {
  try {
    yield put(action.switchFetching());
    const res = yield call(httpClient.post, `/switchUserByUsername/${payload}`);
    yield put(action.switchSuccess(res.data));
    yield put(action.student());
  } catch (error) {
    yield put(action.switchFailed());
  }
}
