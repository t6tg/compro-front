import React from "react";
import LoadingSkeleton from "./Skeleton/Loading.skeleton";

interface Props {
  name: string;
}

export const Card = ({ name }: Props) => {
  return (
    <div>
      <div className="bg-white p-6 my-5 w-full rounded-md shadow-md">
        <div className="grid grid-flow-col">
          <div>
            <span>
              <b>Task Name : </b>
              {name}
            </span>
          </div>
          <div>
            <button className="px-3 py-2 rounded-md shadow-md bg-gray-100 ">
              Choose File
            </button>
            <br />
            <button className="px-3 py-2 mt-3 float-right rounded-md shadow-md bg-primary text-white ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
