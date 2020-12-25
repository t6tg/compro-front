import { CreateProblemReducer } from "../../types/createProblem.types";
import {
  CREATE_PROBLEM_FAILED,
  CREATE_PROBLEM_FETCHING,
  CREATE_PROBLEM_SUCCESS,
} from "../saga/actionTypes";

const initialState: CreateProblemReducer = {
  isFailed: false,
  isFetching: false,
  result: null,
};

const createProblemReducer = (
  state = initialState,
  { type, payload }
): CreateProblemReducer => {
  switch (type) {
    case CREATE_PROBLEM_FETCHING:
      return { ...state, isFetching: true, isFailed: false, result: null };
    case CREATE_PROBLEM_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        result: payload.result,
      };
    case CREATE_PROBLEM_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        result: null,
      };
    default:
      return state;
  }
};

export default createProblemReducer;
