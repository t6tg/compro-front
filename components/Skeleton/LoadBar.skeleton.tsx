import React, { ReactElement } from "react";

interface Props {}

export default function LoadBar({}: Props): ReactElement {
  return (
    <div>
      <div className="p-2 container mx-auto">
        <div className="inline-flex  w-full items-center bg-white leading-none text-green-600 rounded-full p-3 shadow text-teal text-sm">
          <span className="inline-flex bg-green-600 text-white rounded-full h-6 px-3 py-3 justify-center items-center">
            Loading
          </span>
          <span className="inline-flex px-2">
            Currently fetching information. Wait a moment please
          </span>
        </div>
      </div>
    </div>
  );
}
