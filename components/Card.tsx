import React from "react";
import LoadingSkeleton from "./Skeleton/Loading.skeleton";

interface Props {
  name: string;
  score: string;
}

export const Card = ({ name, score }: Props) => {
  return (
    <div>
      <div className="bg-white p-6 my-5 w-full rounded-md shadow-md">
        <div className="grid grid-flow-col">
          <div className="grid gap-1">
            <p>
              <b>Task Name : </b>
              <span className="rounded-md my-1 py-1 px-3 bg-gray-100">
                {name}
              </span>
            </p>
            <p>
              <b>Max Score : </b>{" "}
              <span className="rounded-md py-1 px-3 bg-gray-100">{score}</span>
            </p>
            <p>
              <b>Timeout : </b>{" "}
              <span className="rounded-md py-1 px-3 bg-gray-100">{score}</span>
              <b> s.</b>
            </p>
            <p>
              <b>MemoryLimit : </b>{" "}
              <span className="rounded-md py-1 px-3 bg-gray-100">{score}</span>
              <b> MB.</b>
            </p>
          </div>
          <div>
            <button className="px-3 py-2 rounded-md shadow-md bg-gray-100 ">
              Choose File
            </button>
            <br />
            <br />
            <button className="px-8 py-2 mt-3 float-right rounded-md shadow-md bg-primary text-white ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
