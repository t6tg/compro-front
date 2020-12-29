import {
  TPROBLEMID_FAILED,
  TPROBLEMID_FETCHING,
  TPROBLEMID_REQUEST,
  TPROBLEMID_SUCCESS,
} from "../saga/actionTypes";

export const TproblemId = (payload) => ({
  type: TPROBLEMID_REQUEST,
  payload,
});

export const TproblemIdFetching = () => ({
  type: TPROBLEMID_FETCHING,
});

export const TproblemIdSuccess = (payload) => ({
  type: TPROBLEMID_SUCCESS,
  payload,
});

export const TproblemIdFailed = () => ({
  type: TPROBLEMID_FAILED,
});

export default {
  TproblemId,
  TproblemIdFetching,
  TproblemIdSuccess,
  TproblemIdFailed,
};
