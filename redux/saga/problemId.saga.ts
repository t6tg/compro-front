import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaProblemID({ payload }: any) {
  try {
    yield put(action.problemIdFetching());
    const res = yield call(httpClient.get, `/getProblemByID/${payload}`);
    yield put(action.problemIdSuccess(res.data));
  } catch (error) {
    yield put(action.problemIdFailed());
  }
}
