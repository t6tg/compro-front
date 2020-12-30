import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaStudent({ payload }: any) {
  try {
    yield put(action.studentFetching());
    const res = yield call(httpClient.get, `/getStudent`);
    yield put(action.studentSuccess(res.data));
  } catch (error) {
    yield put(action.studentFailed());
  }
}
