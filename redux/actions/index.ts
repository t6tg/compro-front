import login from "./login.action";
import activeProblem from "./activeProblem.action";
import problemId from "./problemId.action";
import submissionId from "./submissionId.action";
import submit from "./submit.action";
import profile from "./profile.action";
import tProblem from "./teacherProblem.action";
import createProblem from "./createProblem.action";

export default {
  ...login,
  ...activeProblem,
  ...problemId,
  ...submissionId,
  ...submit,
  ...profile,
  ...tProblem,
  ...createProblem,
};
