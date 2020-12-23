import { SubmissionReducer } from "../../types/submissionId.types";
import {
  SUBMISSIONID_FAILED,
  SUBMISSIONID_FETCHING,
  SUBMISSIONID_SUCCESS,
} from "../saga/actionTypes";

const initialState: SubmissionReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const submissionReducer = (
  state = initialState,
  { type, payload }
): SubmissionReducer => {
  switch (type) {
    case SUBMISSIONID_FETCHING:
      return { ...state, isFailed: false, isFetching: true, data: null };
    case SUBMISSIONID_SUCCESS:
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        data: payload.data,
        result: payload.result,
      };
    case SUBMISSIONID_FAILED:
      return {
        ...state,
        isFailed: true,
        isFetching: false,
        data: null,
        result: null,
      };
    default:
      return state;
  }
};

export default submissionReducer;
