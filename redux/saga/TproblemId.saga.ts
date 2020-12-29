import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaTProblemID({ payload }: any) {
  try {
    yield put(action.TproblemIdFetching());
    const res = yield call(httpClient.get, `/getTProblemID/${payload}`);
    yield put(action.TproblemIdSuccess(res.data));
  } catch (error) {
    yield put(action.TproblemIdFailed());
  }
}
