import {
  SUBMISSIONID_FAILED,
  SUBMISSIONID_FETCHING,
  SUBMISSIONID_SUCCESS,
  SUBMISSIONID_REQUEST,
} from "../saga/actionTypes";

export const submissionId = (payload) => ({
  type: SUBMISSIONID_REQUEST,
  payload,
});

export const submissionIdFetching = () => ({
  type: SUBMISSIONID_FETCHING,
});

export const submissionIdFailed = () => ({
  type: SUBMISSIONID_FAILED,
});

export const submissionIdSuccess = (payload) => ({
  type: SUBMISSIONID_SUCCESS,
  payload,
});

export default {
  submissionId,
  submissionIdFetching,
  submissionIdFailed,
  submissionIdSuccess,
};
