import { call, put } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaSubmissionId({ payload }: any) {
  try {
    yield put(action.submissionIdFetching());
    const res = yield call(httpClient.get, `/getSubmissionByID/${payload}`);
    yield put(action.submissionIdSuccess(res.data));
  } catch (error) {
    yield put(action.submissionIdFailed());
  }
}
