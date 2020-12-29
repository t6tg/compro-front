import { put, call } from "redux-saga/effects";
import action from "../actions";
import httpClient from "../../utils/httpClient";

export function* sagaUploadStudent({ payload }: any) {
  try {
    yield put(action.uploadStudentFetching());
    const res = yield call(httpClient.post, `/uploadStudent`, payload);
    yield put(action.uploadStudentSuccess(res.data));
  } catch (error) {
    yield put(action.uploadStudentFailed());
  }
}
