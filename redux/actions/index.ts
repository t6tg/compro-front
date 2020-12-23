import login from "./login.action";
import activeProblem from "./activeProblem.action";
import problemId from "./problemId.action";
import submissionId from "./submissionId.action";

export default {
  ...login,
  ...activeProblem,
  ...problemId,
  ...submissionId,
};
