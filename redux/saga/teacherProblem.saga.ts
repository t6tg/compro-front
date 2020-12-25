import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaTProblem({ payload }: any) {
  try {
    yield put(action.tProblemFetching());
    const res = yield call(httpClient.get, `/getTeacherProblem`);
    yield put(action.tProblemSuccess(res.data));
  } catch (error) {
    yield put(action.tProblemFailed());
  }
}
