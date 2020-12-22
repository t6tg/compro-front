import { put, call, select, delay } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaActiveProblem({ payload }: any) {
  try {
    yield put(action.activeProblemFetching());
    const res = yield call(httpClient.get, "/getActiveProblem");
    yield put(action.activeProblemSuccess(res.data));
  } catch (error) {
    yield put(action.activeProblemFailed());
  }
}
