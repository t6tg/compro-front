import React, { ReactElement } from "react";

interface Props {}

export default function FileCard({}: Props): ReactElement {
  return (
    <div className="bg-white rounded-md p-5 w-full">
      <h3 className="text-2xl">File Upload</h3>
      <form className="grid">
        <input
          type="file"
          name="file"
          className="bg-gray-100 rounded-md p-3 my-5"
        />
        <input
          type="submit"
          className="bg-primary py-2 px-5 rounded-md text-white cursor-pointer float-right"
        />
      </form>
    </div>
  );
}
