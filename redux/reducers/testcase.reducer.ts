import { TestcaseReducer } from "../../types/testcase.types";
import {
  TESTCASE_FETCHING,
  TESTCASE_FAILED,
  TESTCASE_SUCCESS,
} from "../saga/actionTypes";

const initialState: TestcaseReducer = {
  input: null,
  output: null,
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const testcaseReducer = (
  state = initialState,
  { type, payload }
): TestcaseReducer => {
  switch (type) {
    case TESTCASE_FETCHING:
      return { ...state, isFetching: true, isFailed: false };
    case TESTCASE_SUCCESS:
      return {
        ...state,
        input: payload.input,
        output: payload.output,
        data: payload.data,
        isFailed: false,
        isFetching: false,
      };
    case TESTCASE_FAILED:
      return { ...state, isFailed: true, isFetching: false };
    default:
      return state;
  }
};

export default testcaseReducer;
