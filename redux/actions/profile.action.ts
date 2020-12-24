import {
  PROFILE_FAILED,
  PROFILE_FETCHING,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
} from "../saga/actionTypes";

export const profile = () => ({
  type: PROFILE_REQUEST,
});

export const profileFetching = () => ({
  type: PROFILE_FETCHING,
});

export const profileSuccess = (payload) => ({
  type: PROFILE_SUCCESS,
  payload,
});

export const profileFailed = () => ({
  type: PROFILE_FAILED,
});

export default {
  profile,
  profileFetching,
  profileSuccess,
  profileFailed,
};
