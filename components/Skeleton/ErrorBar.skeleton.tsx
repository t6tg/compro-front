import React, { ReactElement } from "react";

interface Props {
  message: string;
}

export default function ErrorBar({ message }: Props): ReactElement {
  return (
    <div>
      <div className="p-2 container mx-auto">
        <div className="inline-flex  w-full items-center bg-white leading-none text-red-600 rounded-full p-3 shadow text-teal text-sm">
          <span className="inline-flex bg-red-600 text-white rounded-full h-6 px-3 py-3 justify-center items-center">
            Error
          </span>
          <span className="inline-flex px-2">{message}</span>
        </div>
      </div>
    </div>
  );
}
