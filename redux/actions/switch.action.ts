import {
  SWITCHID_FETCHING,
  SWITCHID_REQUEST,
  SWITCHID_SUCCESS,
  SWITCHID_FAILED,
} from "../saga/actionTypes";

export const switchStudent = (payload) => ({
  type: SWITCHID_REQUEST,
  payload,
});

export const switchFetching = () => ({
  type: SWITCHID_FETCHING,
});

export const switchSuccess = (payload) => ({
  type: SWITCHID_SUCCESS,
  payload,
});

export const switchFailed = () => ({
  type: SWITCHID_FAILED,
});

export default {
  switchStudent,
  switchFetching,
  switchSuccess,
  switchFailed,
};
