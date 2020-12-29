import {
  TESTCASE_FETCHING,
  TESTCASE_FAILED,
  TESTCASE_REQUEST,
  TESTCASE_SUCCESS,
} from "../saga/actionTypes";

export const testcase = (payload) => ({
  type: TESTCASE_REQUEST,
  payload,
});

export const testcaseFetching = () => ({
  type: TESTCASE_FETCHING,
});

export const testcaseSuccess = (payload) => ({
  type: TESTCASE_SUCCESS,
  payload,
});

export const testcaseFailed = () => ({
  type: TESTCASE_FAILED,
});

export default { testcase, testcaseFetching, testcaseSuccess, testcaseFailed };
