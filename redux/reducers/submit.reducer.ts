import { SubmitReducer } from "../../types/submit.types";
import {
  SUBMIT_FAILED,
  SUBMIT_FETCHING,
  SUBMIT_SUCCESS,
} from "../saga/actionTypes";

const initialState: SubmitReducer = {
  isFailed: false,
  isFetching: false,
  result: null,
};

const submitReducer = (
  state = initialState,
  { type, payload }
): SubmitReducer => {
  switch (type) {
    case SUBMIT_FETCHING:
      return { ...state, isFetching: true, isFailed: false, result: null };
    case SUBMIT_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        result: payload.result,
      };
    default:
      return state;
  }
};
export default submitReducer;
