import { StudentReducer } from "../../types/student.types";
import {
  STUDENT_FAILED,
  STUDENT_FETCHING,
  STUDENT_SUCCESS,
} from "../saga/actionTypes";

const initialState: StudentReducer = {
  data: null,
  isFailed: false,
  isFetching: false,
  result: null,
};

const studentReducer = (
  state = initialState,
  { type, payload }
): StudentReducer => {
  switch (type) {
    case STUDENT_FETCHING:
      return {
        ...state,
        isFetching: true,
        data: null,
        result: null,
        isFailed: false,
      };
    case STUDENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload.data,
        result: payload.result,
        isFailed: false,
      };
    case STUDENT_FAILED:
      return {
        ...state,
        isFetching: false,
        data: null,
        result: null,
        isFailed: true,
      };
    default:
      return state;
  }
};

export default studentReducer;
