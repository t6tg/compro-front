import Router from "next/router";
import React, { ReactElement, ReactNode } from "react";
import { kToken } from "../../utils/contants";
import { removeCookie } from "../../utils/cookie";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";

interface Props {
  children: ReactNode;
}

export default function TMenu({ children }: Props): ReactElement {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full min-h-full ">
      <div className="w-2/12 bg-white  p-3 shadow-lg hide min-h-full">
        <ul className="space-y-2 text-md">
          <li onClick={() => Router.push("/bo")} className="cursor-pointer">
            <span className="flex items-center justify-center space-x-3 text-white p-2 rounded-md font-medium bg-primary">
              <span>TEACHER</span>
            </span>
          </li>
          <li>
            <span className="flex items-center justify-center space-x-3 text-gray-700 p-2 rounded-md font-medium bg-gray-200">
              <span>Menu</span>
            </span>
          </li>

          <li>
            <a
              onClick={() => {
                Router.push("/bo");
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                    strokeWidth={2}
                    d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                  />
                </svg>
              </span>
              <span>Problem Management</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                Router.push("/bo/student");
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <span>Student Management</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                Router.push("/bo/file");
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <span>File Management</span>
            </a>
          </li>
          
          <li>
            <a
              onClick={() => {
                Router.push("/bo/score");
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <span>Student Score</span>
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                Router.push("/bo/password");
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <span>Change password</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                removeCookie(kToken);
                Router.push("/login");
              }}
              className="cursor-pointer flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-9/12 mx-auto min-h-screen">
        <div className="p-4 text-gray-500">{children}</div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 600px) {
          .hide {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
