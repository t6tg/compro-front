import { ProblemIdReducer } from "../../types/problemId.types";
import {
  TPROBLEM_FAILED,
  TPROBLEM_FETCHING,
  TPROBLEM_SUCCESS,
} from "../saga/actionTypes";

const initialState: ProblemIdReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const tProblemReducer = (
  state = initialState,
  { type, payload }
): ProblemIdReducer => {
  switch (type) {
    case TPROBLEM_FETCHING:
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        data: null,
        result: null,
      };
    case TPROBLEM_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        data: payload.data,
      };
    case TPROBLEM_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        data: null,
      };
    default:
      return state;
  }
};

export default tProblemReducer;
