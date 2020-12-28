import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";

interface Props {}

export default function UploadStudent({}: Props): ReactElement {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    e.target.reset();
  };

  return (
    <div className="bg-white rounded-md p-5">
      <h3 className="text-2xl">Upload Student</h3>{" "}
      <a href="#" className="text-primary">
        ( File example )
      </a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <input
            type="file"
            name="file"
            accept=".csv"
            className="bg-gray-100 p-2 rounded-md w-3/4"
            ref={register({ required: true })}
          />
          <br />
          {errors.file && (
            <span className="text-primary text-xs">This field is required</span>
          )}
        </div>
        <input
          type="submit"
          value="Upload"
          className="bg-primary py-2 px-4 float-right rounded-md text-white shadow-md cursor-pointer"
        />
      </form>
    </div>
  );
}
