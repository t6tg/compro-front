import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

interface Props {}

export default function SubmissionTable({}: Props): ReactElement {
  const [showModal, setShowModal] = React.useState(false);
  const [code, setCode] = React.useState(null);
  const OnClick = (code: string, show: boolean) => {
    setCode(code);
    setShowModal(show);
  };
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
              <th className="text-left p-3 px-5">Code</th>
            </tr>
            {submissionReducer.data.map((r) => (
              <tr
                key={r.ID}
                className="border-b hover:bg-orange-100 bg-gray-100 "
              >
                <td className="p-3 px-5 py-10">{r.ID}</td>
                <td className="p-3 px-5 bg-blue-200 text-center">
                  [ {r.Result} ]
                </td>
                <td className="p-3 px-5 bg-blue-300 text-center">{r.Score}</td>
                <td className="p-3 px-5">
                  {r.Status === "successful" ? (
                    <span className="bg-green-500 text-white rounded-sm px-3 py-1 text-xs font-bold">
                      {r.Status}
                    </span>
                  ) : (
                    <span className="bg-pink-500 text-white rounded-sm px-3 py-1 text-xs font-bold">
                      {r.Status}
                    </span>
                  )}
                </td>
                <td className="p-3 px-5">
                  <Moment calendar={calendarStrings}>{r.Stamp}</Moment>
                </td>
                <td className="p-3 px-5">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => OnClick(r.Code, true)}
                  >
                    Code
                  </button>
                </td>
              </tr>
            ))}
            {showModal ? (
              <>
                <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative my-6 mx-auto max-w-3xl w-full">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold text-primary">
                          Source Code
                        </h3>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <pre className="overflow-auto max-h-60 overflow-y-auto bg-gray-200 p-4 rounded-lg my-4 text-gray-600 text-lg leading-relaxed">
                          <code>{code}</code>
                        </pre>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                          onClick={() => setShowModal(false)}
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-60 fixed inset-0 z-40 bg-black hover:cursor-pointer"></div>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
