import { SwitchReducer } from "../../types/switch.types";
import {
  SWITCHID_FETCHING,
  SWITCHID_SUCCESS,
  SWITCHID_FAILED,
} from "../saga/actionTypes";

const initialState: SwitchReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const switchReducer = (
  state = initialState,
  { type, payload }
): SwitchReducer => {
  switch (type) {
    case SWITCHID_FETCHING:
      return {
        ...state,
        data: null,
        isFailed: false,
        isFetching: true,
        result: null,
      };
    case SWITCHID_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isFailed: false,
        isFetching: false,
        result: payload.result,
      };
    case SWITCHID_FAILED:
      return {
        ...state,
        data: null,
        isFailed: true,
        isFetching: false,
        result: null,
      };
    default:
      return state;
  }
};
export default switchReducer;
