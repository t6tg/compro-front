import {
  UPLOAD_STUDENT_FAILED,
  UPLOAD_STUDENT_FETCHING,
  UPLOAD_STUDENT_REQUEST,
  UPLOAD_STUDENT_SUCCESS,
} from "../saga/actionTypes";

export const uploadStudent = (payload) => ({
  type: UPLOAD_STUDENT_REQUEST,
  payload,
});

export const uploadStudentFetching = () => ({
  type: UPLOAD_STUDENT_FETCHING,
});
export const uploadStudentSuccess = (payload) => ({
  type: UPLOAD_STUDENT_SUCCESS,
  payload,
});

export const uploadStudentFailed = () => ({
  type: UPLOAD_STUDENT_FAILED,
});

export default {
  uploadStudent,
  uploadStudentFetching,
  uploadStudentSuccess,
  uploadStudentFailed,
};
