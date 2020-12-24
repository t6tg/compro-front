import {
  PROFILE_FAILED,
  PROFILE_FETCHING,
  PROFILE_SUCCESS,
} from "../saga/actionTypes";

import { ProfileReducer } from "../../types/profile.types";

const initialState: ProfileReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const profileReducer = (
  state = initialState,
  { type, payload }
): ProfileReducer => {
  switch (type) {
    case PROFILE_FETCHING:
      return {
        ...state,
        isFailed: false,
        isFetching: true,
        data: null,
        result: null,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        data: payload.data,
        result: payload.result,
      };
    case PROFILE_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
