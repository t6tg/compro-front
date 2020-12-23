import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

interface Props {}

export default function SubmissionTable({}: Props): ReactElement {
  const submissionReducer = useSelector((state) => state.submissionReducer);
  const calendarStrings = {
    lastDay: "[Yesterday at] LT",
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  };
  {
    submissionReducer.isFetching && "Loading....";
  }
  return (
    <div className="text-gray-900 w-full">
      <div className="flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Submission ID</th>
              <th className="text-left p-3 px-5">Result</th>
              <th className="text-left p-3 px-5">Score</th>
              <th className="text-left p-3 px-5">Status</th>
              <th className="text-left p-3 px-5">Time Stamp</th>
              <th></th>
            </tr>
            {submissionReducer.data.map((r) => (
              <tr className="border-b hover:bg-orange-100 bg-gray-100 hover:bg-primary hover:text-white">
                <td className="p-3 px-5">{r.ID}</td>
                <td className="p-3 px-5">{r.Result}</td>
                <td className="p-3 px-5">{r.Score}</td>
                <td className="p-3 px-5">
                  {r.Status === "successful" ? (
                    <span className="bg-green-600 text-white rounded-sm px-3 py-1 text-xs font-bold">
                      {r.Status}
                    </span>
                  ) : (
                    <span className="bg-blue-600 text-white rounded-sm px-3 py-1 text-xs font-bold">
                      {r.Status}
                    </span>
                  )}
                </td>
                <td className="p-3 px-5">
                  <Moment calendar={calendarStrings}>{r.Stamp}</Moment>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Code
                  </button>
                  {r.Err == "" ? (
                    <button
                      type="button"
                      className="text-sm bg-gray-400 text-white py-1 px-2 rounded disabled:opacity-50 cursor-not-allowed"
                      disabled
                    >
                      Error Msg
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Error Msg
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
