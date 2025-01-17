import Router from "next/router";
import React, { ReactElement } from "react";

interface Props {
  path: string;
}

export default function Back({ path }: Props): ReactElement {
  return (
    <span
      className="flex py-1 px-2 bg-primary text-white w-20 rounded-md cursor-pointer"
      onClick={() => {
        Router.push(path);
      }}
    >
      <svg
        className="h-5 my-0.5 mx-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
      </svg>
      Back
    </span>
  );
}
