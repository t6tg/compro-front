import { UploadStudentReducer } from "../../types/uploadStudent.types";
import {
  UPLOAD_STUDENT_FAILED,
  UPLOAD_STUDENT_FETCHING,
  UPLOAD_STUDENT_SUCCESS,
} from "../saga/actionTypes";

const initialState: UploadStudentReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const uploadStudentReducer = (
  state = initialState,
  { type, payload }
): UploadStudentReducer => {
  switch (type) {
    case UPLOAD_STUDENT_FETCHING:
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        data: null,
        result: null,
      };
    case UPLOAD_STUDENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailed: false,
        data: payload.data,
        result: payload.result,
      };
    case UPLOAD_STUDENT_FAILED:
      return {
        ...state,
        isFetching: false,
        isFailed: true,
        data: null,
        result: null,
      };
    default:
      return state;
  }
};

export default uploadStudentReducer;
