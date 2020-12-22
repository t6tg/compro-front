export interface LoginReducer {
  result: string;
  isFetching: boolean;
  isFailed: boolean;
  token: string;
  role: string;
}
