import {
  STUDENT_FAILED,
  STUDENT_REQUEST,
  STUDENT_FETCHING,
  STUDENT_SUCCESS,
} from "../saga/actionTypes";

export const student = () => ({
  type: STUDENT_REQUEST,
});

export const studentFetching = () => ({
  type: STUDENT_FETCHING,
});

export const studentSuccess = (payload) => ({
  type: STUDENT_SUCCESS,
  payload,
});

export const studentFailed = () => ({
  type: STUDENT_FAILED,
});

export default {
  student,
  studentFetching,
  studentSuccess,
  studentFailed,
};
