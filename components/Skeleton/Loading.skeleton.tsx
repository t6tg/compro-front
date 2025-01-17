import React, { ReactElement } from "react";

interface Props {}

export default function LoadingSkeleton({}: Props): ReactElement {
  return (
    <div>
      <div
        className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
          <div className="loader-dots block relative w-20 h-5 mt-2">
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary"></div>
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary"></div>
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary"></div>
            <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div className="text-gray-500 text-xs font-light mt-2 text-center">
            Please wait...
          </div>
        </div>
      </div>
      <style jsx>{`
        .loader-dots div {
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .loader-dots div:nth-child(1) {
          left: 8px;
          animation: loader-dots1 0.6s infinite;
        }
        .loader-dots div:nth-child(2) {
          left: 8px;
          animation: loader-dots2 0.6s infinite;
        }
        .loader-dots div:nth-child(3) {
          left: 32px;
          animation: loader-dots2 0.6s infinite;
        }
        .loader-dots div:nth-child(4) {
          left: 56px;
          animation: loader-dots3 0.6s infinite;
        }
        @keyframes loader-dots1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes loader-dots3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes loader-dots2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(24px, 0);
          }
        }
      `}</style>
    </div>
  );
}
