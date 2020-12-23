import {
  ACTIVE_PROBLEM_FAILED,
  ACTIVE_PROBLEM_FETCHING,
  ACTIVE_PROBLEM_SUCCESS,
} from "../saga/actionTypes";

import { ActiveProblemReducer } from "../../types/activeProblem.types";

const initialState: ActiveProblemReducer = {
  result: null,
  data: null,
  isFailed: false,
  isFetching: false,
};

const activeProblemReducer = (
  state = initialState,
  { type, payload }
): ActiveProblemReducer => {
  switch (type) {
    case ACTIVE_PROBLEM_FETCHING:
      return { ...state, isFetching: true, result: null, isFailed: false };
    case ACTIVE_PROBLEM_SUCCESS:
      return {
        ...state,
        result: payload.result,
        data: payload.data,
        isFetching: false,
        isFailed: false,
      };
    case ACTIVE_PROBLEM_FAILED:
      return { ...state, isFailed: true, isFetching: false, result: null };
    default:
      return state;
  }
};
export default activeProblemReducer;
