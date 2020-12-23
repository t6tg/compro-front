import {
  PROBLEMID_FAILED,
  PROBLEMID_FETCHING,
  PROBLEMID_REQUEST,
  PROBLEMID_SUCCESS,
} from "../saga/actionTypes";

export const problemId = (payload) => ({
  type: PROBLEMID_REQUEST,
  payload,
});

export const problemIdFetching = () => ({
  type: PROBLEMID_FETCHING,
});

export const problemIdSuccess = (payload) => ({
  type: PROBLEMID_SUCCESS,
  payload,
});

export const problemIdFailed = () => ({
  type: PROBLEMID_FAILED,
});

export default {
  problemId,
  problemIdFetching,
  problemIdSuccess,
  problemIdFailed,
};
