import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import LoadingSkeleton from "./Skeleton/Loading.skeleton";
import { kResultOk } from "../utils/contants";
import Router from "next/router";
import SuccessSkeleton from "./Skeleton/SuccessBar.skeleton";
import ErrorBar from "./Skeleton/ErrorBar.skeleton";

interface Props {}

export default function ProblemCard({}: Props): ReactElement {
  const dispatch = useDispatch();
  const createProblemReducer = useSelector(
    (state) => state.createProblemReducer
  );
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("name", data.name);
    formData.append("mem", data.mem);
    formData.append("score", data.score);
    formData.append("testcase", data.testcase);
    formData.append("timeout", data.timeout);
    formData.append("status", data.status);
    dispatch(actions.createProblem(formData));
    e.target.reset();
  };

  return (
    <form
      className="grid grid-flow-row my-4 w-full bg-white rounded-md shadow-md p-5 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {createProblemReducer.isFetching && <LoadingSkeleton />}
      {createProblemReducer.isFailed && (
        <ErrorBar message="Please try again later." />
      )}
      {createProblemReducer.result === kResultOk && (
        <SuccessSkeleton msg="Create Problem Successful." />
      )}
      <span>
        <label>Problem Name : </label>
        <br />
        <input
          type="text"
          name="name"
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
          placeholder="Problem Name"
          autoFocus
          ref={register({ required: true })}
        />
        <small className="text-primary">
          {errors.name && <span>This field is required</span>}
        </small>
      </span>
      <span>
        <label>Timelimit : </label>
        <br />
        <input
          type="number"
          minLength={1}
          defaultValue={1}
          maxLength={5}
          name="timeout"
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
          placeholder="TimeLimit"
          ref={register({ required: true })}
        />
        <br />
        <small className="text-primary">
          min 1s - max 5s per tesecase ( recommend 1s )
        </small>
      </span>
      <span>
        <label>Score : </label>
        <br />
        <input
          type="number"
          step="0.01"
          name="score"
          ref={register({ required: true })}
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
          placeholder="Score"
        />
      </span>
      <span>
        <label>NumberOfTestCase : </label>
        <br />
        <input
          type="number"
          name="testcase"
          ref={register({ required: true })}
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
          placeholder="NumberOfTestCase"
          defaultValue={1}
        />
      </span>
      <span>
        <label>Testcase File</label>
        <br />
        <input
          type="file"
          name="file"
          accept=".zip"
          ref={register({ required: true })}
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
        />
        <br />
        <small className="text-primary">
          upload file .zip ( ตามจำนวนของ testcase เช่นมี 2 testcase ให้ zip
          รวมไฟล์ 1.in 2.in 1.out 2.out )
        </small>
      </span>

      <input
        type="hidden"
        name="mem"
        defaultValue={256}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="status"
        defaultValue="inactive"
        ref={register({ required: true })}
      />
      <input
        type="submit"
        defaultValue="Create"
        className="w-full bg-primary py-1 px-3 text-white rounded-md shadow-md cursor-pointer"
        disabled={createProblemReducer.isFetching}
      />
    </form>
  );
}
