import * as actionTypes from "../saga/actionTypes";

export const activeProblem = () => ({
  type: actionTypes.ACTIVE_PROBLEM_REQUEST,
});

export const activeProblemFetching = () => ({
  type: actionTypes.ACTIVE_PROBLEM_FETCHING,
});

export const activeProblemSuccess = (payload) => ({
  type: actionTypes.ACTIVE_PROBLEM_SUCCESS,
  payload,
});

export const activeProblemFailed = () => ({
  type: actionTypes.ACTIVE_PROBLEM_FAILED,
});

export default {
  activeProblem,
  activeProblemFetching,
  activeProblemSuccess,
  activeProblemFailed,
};
