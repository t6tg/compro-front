import React from "react";
import activeProblem from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import Router from "next/router";

interface Props {}

export const List = (props: Props) => {
  const dispatch = useDispatch();
  const activeProblemReducer = useSelector(
    (state) => state.activeProblemReducer
  );

  React.useEffect(() => {
    dispatch(actions.activeProblem());
  }, []);
  return (
    <ul className="space-y-2 text-md">
      <li>
        <span className="flex items-center justify-center space-x-3 text-gray-700 p-2 rounded-md font-medium bg-gray-200">
          <span>Task</span>
        </span>
      </li>
      {activeProblemReducer.data &&
        activeProblemReducer.data.map((r) => (
          <li key={r.ID}>
            <a
              onClick={() => {
                Router.push(`/task/${r.ID}`);
                dispatch(actions.problemId(r.ID));
                dispatch(actions.submissionId(r.ID));
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline"
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span>{r.Name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
};
