import {
  PROBLEMID_FAILED,
  PROBLEMID_FETCHING,
  PROBLEMID_SUCCESS,
} from "../saga/actionTypes";

import { ProblemIdReducer } from "../../types/problemId.types";

const initialState: ProblemIdReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const problemReducer = (
  state = initialState,
  { type, payload }
): ProblemIdReducer => {
  switch (type) {
    case PROBLEMID_FETCHING:
      return {
        ...state,
        isFailed: false,
        isFetching: true,
        data: null,
        result: null,
      };
    case PROBLEMID_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        data: payload.data,
        result: payload.result,
      };
    case PROBLEMID_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default problemReducer;
