import {
  SUBMIT_FAILED,
  SUBMIT_FETCHING,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
} from "../saga/actionTypes";

export const submit = (payload, id) => ({
  type: SUBMIT_REQUEST,
  payload,
  id,
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
