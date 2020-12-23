import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";

interface Props {
  id: string;
  name: string;
  score: string;
  timeout: string;
  mem: string;
}

export const Card = ({ id, name, score, mem, timeout }: Props) => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("id", data.ProblemID);
    dispatch(actions.submit(formData));
    e.target.reset();
  };

  return (
    <div>
      <div className="bg-white p-6 mb-5 w-full rounded-md shadow-md">
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
              <span className="rounded-md py-1 px-3 bg-gray-100">
                {timeout}
              </span>
              <b> s.</b>
            </p>
            <p>
              <b>MemoryLimit : </b>{" "}
              <span className="rounded-md py-1 px-3 bg-gray-100">{mem}</span>
              <b> MB.</b>
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="file"
                name="file"
                accept=".c"
                ref={register({ required: true })}
              />
              <br />
              {errors.file && (
                <span className="text-primary font-normal text-xs">
                  Please input .c file
                </span>
              )}
              <input type="hidden" name="ProblemID" value={id} ref={register} />
              <br />
              <br />
              <input
                value="Submit"
                type="submit"
                className="px-8 py-2 mt-3 float-right rounded-md shadow-md bg-primary text-white cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
