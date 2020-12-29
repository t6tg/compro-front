export interface TestcaseReducer {
  result: string;
  isFetching: boolean;
  isFailed: boolean;
  data: Object;
  input: [];
  output: [];
}
