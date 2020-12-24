import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { submit } from "../redux/actions/submit.action";

interface Props {
  id: string;
  name: string;
  score: string;
  timeout: string;
  mem: string;
  testcase: string;
}

export const Card = ({ id, name, score, mem, timeout, testcase }: Props) => {
  const { register, handleSubmit, errors } = useForm();

  const submitReducer = useSelector((state) => state.submitReducer);
  const dispatch = useDispatch();

  //suvmit form
  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("id", data.ProblemID);
    dispatch(actions.submit(formData, data.ProblemID));
    // submit error
    submitReducer.isFailed &&
      toast.error("Error Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    e.target.reset();
  };

  return (
    <div>
      <ToastContainer />
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
              <b>Number of Test Case : </b>{" "}
              <span className="rounded-md py-1 px-3 bg-gray-100">
                {testcase}
              </span>
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
              <div className="bg-gray-100 w-4/4 px-3 py-2 rounded-md">
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
              </div>
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
