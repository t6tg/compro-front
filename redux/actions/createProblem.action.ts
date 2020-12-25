import {
  CREATE_PROBLEM_FAILED,
  CREATE_PROBLEM_FETCHING,
  CREATE_PROBLEM_REQUEST,
  CREATE_PROBLEM_SUCCESS,
} from "../saga/actionTypes";

export const createProblem = (payload) => ({
  type: CREATE_PROBLEM_REQUEST,
  payload,
});

export const createProblemFetching = () => ({
  type: CREATE_PROBLEM_FETCHING,
});

export const createProblemSuccess = (payload) => ({
  type: CREATE_PROBLEM_SUCCESS,
  payload,
});

export const createProblemFailed = () => ({
  type: CREATE_PROBLEM_FAILED,
});

export default {
  createProblem,
  createProblemFetching,
  createProblemSuccess,
  createProblemFailed,
};
