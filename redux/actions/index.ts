import login from "./login.action";
import activeProblem from "./activeProblem.action";
import problemId from "./problemId.action";
import submissionId from "./submissionId.action";
import submit from "./submit.action";
import profile from "./profile.action";
import tProblem from "./teacherProblem.action";
import createProblem from "./createProblem.action";
import testcase from "./testcase.action";
import tProblemID from "./tproblemId.action";
import uploadStudent from "./uploadStudent.action";

export default {
  ...login,
  ...activeProblem,
  ...problemId,
  ...submissionId,
  ...submit,
  ...profile,
  ...tProblem,
  ...createProblem,
  ...testcase,
  ...tProblemID,
  ...uploadStudent,
};
