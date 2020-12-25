import React, { ReactElement } from "react";

interface Props {
  msg: string;
}

export default function SuccessSkeleton({ msg }: Props): ReactElement {
  return (
    <div>
      <div className="p-2 container mx-auto m-4">
        <div className="inline-flex  w-full items-center bg-white leading-none text-green-600 rounded-full p-3 shadow text-teal text-sm">
          <span className="inline-flex bg-green-600 text-white rounded-full h-6 px-3 py-3 justify-center items-center">
            Successful
          </span>
          <span className="inline-flex px-2">{msg}</span>
        </div>
      </div>
    </div>
  );
}
