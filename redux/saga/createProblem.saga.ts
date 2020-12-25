import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaCreateProblem({ payload }: any) {
  try {
    yield put(action.createProblemFetching());
    const res = yield call(httpClient.post, `/createProblem`, payload);
    yield put(action.createProblemSuccess(res.data));
  } catch (error) {
    yield put(action.createProblemFailed());
  }
}
