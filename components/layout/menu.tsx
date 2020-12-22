import Router from "next/router";
import React, { ReactElement, ReactNode } from "react";
import { List } from "../List";

interface Props {
  children: ReactNode;
}

export default function Menu({ children }: Props): ReactElement {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full min-h-full ">
      <div className="w-2/12 bg-white rounded p-3 shadow-lg hide min-h-full">
        <ul className="space-y-2 text-sm">
          <li>
            <span className="flex items-center justify-center space-x-3 text-white p-2 rounded-md font-medium bg-primary">
              <span>COMPRO GRADER</span>
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
                Router.push("/announcement");
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Router.push("/score");
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
              <span>Score</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Router.push("/password");
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
        <br />
        <hr />
        <br />
        <List />
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
