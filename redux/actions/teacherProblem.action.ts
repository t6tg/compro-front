import {
  TPROBLEM_FAILED,
  TPROBLEM_FETCHING,
  TPROBLEM_REQUEST,
  TPROBLEM_SUCCESS,
} from "../saga/actionTypes";

export const tProblem = (payload) => ({
  type: TPROBLEM_REQUEST,
  payload,
});

export const tProblemFetching = () => ({
  type: TPROBLEM_FETCHING,
});

export const tProblemSuccess = (payload) => ({
  type: TPROBLEM_SUCCESS,
  payload,
});

export const tProblemFailed = () => ({
  type: TPROBLEM_FAILED,
});

export default { tProblem, tProblemFetching, tProblemSuccess, tProblemFailed };
