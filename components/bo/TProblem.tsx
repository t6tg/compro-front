import React, { ReactElement } from "react";
import Table from "react-tailwind-table";
import "react-tailwind-table/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import LoadBar from "../Skeleton/LoadBar.skeleton";
import ErrorBar from "../Skeleton/ErrorBar.skeleton";
import Router from "next/router";

interface Props {}

export default function TProblem({}: Props): ReactElement {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.tProblem());
  }, []);

  const tProblemReducer = useSelector((state) => state.tProblemReducer);

  return (
    <div className="m-6 shadow-2xl w-full container mx-auto rounded-md">
      {tProblemReducer.isFetching && (
        <LoadBar msg="Currently fetching information. Wait a moment please" />
      )}
      {tProblemReducer.isFailed && (
        <ErrorBar message="Please contact administrator." />
      )}
      <button
        onClick={() => Router.push("/bo/problem/create")}
        className="float-right m-3 py-2 px-4 bg-primary rounded-md text-white"
      >
        Create New Problem
      </button>
      {tProblemReducer.data && (
        <Table
          per_page={10}
          table_header="Problem Management"
          columns={[
            {
              field: "Status",
              use: "Status",
              use_in_search: false,
            },
            {
              field: "Type",
              use: "Type",
              use_in_search: false,
            },
            {
              field: "problem_id",
              use: "ProblemID",
            },
            {
              field: "name",
              use: "Problem Name",
            },
            {
              field: "Testcase",
              use: "NumberOfTestCase",
              use_in_search: false,
            },
            {
              field: "Score",
              use: "Score",
              use_in_search: false,
            },
            // {
            //   field: "edit",
            //   use: "Edit",
            //   use_in_search: false,
            // },
            // {
            //   field: "ViewScore",
            //   use: "ViewScore",
            //   use_in_search: false,
            // },
            {
              field: "Switch",
              use: "Switch",
              use_in_search: false,
            },
          ]}
          rows={tProblemReducer.data.map((r) => ({
            problem_id: r.ID,
            name: (
              <a
                className="underline cursor-pointer hover:text-primary"
                onClick={() => Router.push(`/bo/problem/testcase?id=${r.ID}`)}
              >
                {r.Name}
              </a>
            ),
            Testcase: r.Testcase,
            Score: r.Score,
            Type: r.Teacher,
            // edit: (
            //   <button
            //     onClick={() => {
            //       Router.push(`/bo/problem/edit?id=${r.ID}`);
            //     }}
            //     className="bg-yellow-500 py-1 px-2 text-white rounded-md grid grid-flow-col gap-1 shadow-md"
            //   >
            //     <svg
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       stroke="currentColor"
            //       className="w-3 mt-1"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         strokeWidth={2}
            //         d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            //       />
            //     </svg>
            //     Edit
            //   </button>
            // ),
            // ViewScore: (
            //   <button
            //     onClick={() => {
            //       // Router.push("/bo/score")
            //     }}
            //     className="bg-pink-500 py-1 px-2 text-white rounded-md shadow-md"
            //   >
            //     Score
            //   </button>
            // ),
            Status:
              r.Status === "active" ? (
                <span className="bg-green-800 px-2 py-0.5 text-white text-sm">
                  {r.Status}
                </span>
              ) : (
                <span className="bg-red-800 py-1 px-2 text-white">
                  {r.Status}
                </span>
              ),
            Switch: (
              <button
                className="bg-primary text-white px-2 py-0.5 rounded-sm"
                onClick={() => {
                  dispatch(actions.switchStudent(r.Username));
                }}
              >
                Switch
              </button>
            ),
          }))}
        />
      )}
    </div>
  );
}
