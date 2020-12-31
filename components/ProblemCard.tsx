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
    formData.append("quiz", data.quiz);
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
        <select
          name="timeout"
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
          ref={register({ required: true })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
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
        <select
          name="testcase"
          ref={register({ required: true })}
          className="bg-gray-100 px-3 py-1 w-full rounded-md"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
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
      <span className="py-1 px-4 bg-gray-100 my-2 rounded-md">
        <input type="checkbox" name="quiz" id="quiz" ref={register} /> : Quiz
        Mode
        <small className="text-primary mx-2">
          ( สำหรับสร้างโจทย์เพื่อออกข้อสอบเท่านั้น )
        </small>
      </span>
      <input
        type="submit"
        className="w-full bg-primary py-1 px-3 text-white rounded-md shadow-md cursor-pointer"
        disabled={createProblemReducer.isFetching}
      />
    </form>
  );
}
