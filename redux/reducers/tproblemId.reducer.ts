import {
  TPROBLEMID_FAILED,
  TPROBLEMID_FETCHING,
  TPROBLEMID_SUCCESS,
} from "../saga/actionTypes";

import { ProblemIdReducer } from "../../types/problemId.types";

const initialState: ProblemIdReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const TproblemReducer = (
  state = initialState,
  { type, payload }
): ProblemIdReducer => {
  switch (type) {
    case TPROBLEMID_FETCHING:
      return {
        ...state,
        isFailed: false,
        isFetching: true,
        data: null,
        result: null,
      };
    case TPROBLEMID_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        data: payload.data,
        result: payload.result,
      };
    case TPROBLEMID_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default TproblemReducer;
