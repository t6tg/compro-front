import {
  SUBMIT_FAILED,
  SUBMIT_FETCHING,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
} from "../saga/actionTypes";

export const submit = (payload) => ({
  type: SUBMIT_REQUEST,
  payload,
});

export const submitFetching = () => ({
  type: SUBMIT_FETCHING,
});

export const submitSuccess = (payload) => ({
  type: SUBMIT_SUCCESS,
  payload,
});

export const submitFailed = () => ({
  type: SUBMIT_FAILED,
});

export default {
  submit,
  submitFetching,
  submitSuccess,
  submitFailed,
};
