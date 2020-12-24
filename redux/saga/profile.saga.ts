import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaProfile({ payload }: any) {
  try {
    yield put(action.profileFetching());
    const res = yield call(httpClient.get, `/getProfile`);
    yield put(action.profileSuccess(res.data));
  } catch (error) {
    yield put(action.profileFailed());
  }
}
