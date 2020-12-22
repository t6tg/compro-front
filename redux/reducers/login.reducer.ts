import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../saga/actionTypes";

import { LoginReducer } from "../../types/login.types";

const initialState: LoginReducer = {
  result: null,
  token: null,
  isFetching: false,
  isFailed: false,
  role: null,
};

const loginReducet = (
  state = initialState,
  { type, payload }
): LoginReducer => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, result: null, isFailed: false, isFetching: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        result: payload.result,
        isFetching: false,
        isFailed: false,
        token: payload.token,
        role: payload.role,
      };
    case LOGIN_FAILED:
      return { ...state, result: null, isFailed: true, isFetching: false };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default loginReducet;
