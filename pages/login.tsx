import Head from "next/head";
import { Router } from "next/router";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";

interface Props {}

interface formInput {
  username: String;
  password: String;
}

export default function Login({}: Props): ReactElement {
  const { register, handleSubmit, errors } = useForm<formInput>();
  const dispatch = useDispatch();
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);

  const onSubmit = (data: formInput) => {
    dispatch(actions.login(data));
  };
  return (
    <>
      <Head>
        <title>Login | Computer Programming II</title>
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-gray-900 w-4/6 xl:w-2/6 bg-white font-bold rounded-lg border shadow-lg p-6">
          <div className="flex justify-center">
            <img loading="lazy" src="/logo.png" alt="logo" width="300px" />
          </div>
          {loginReducer.isFetching && (
            <div className="bg-blue-200 p-3 rounded-md text-lg flex items-center mx-auto w-full xl:w-full mb-3">
              <svg
                viewBox="0 0 24 24"
                className="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
                ></path>
              </svg>
              <span className="text-blue-800 font-normal text-sm">
                Wait a moment please . . . .
              </span>
            </div>
          )}
          {loginReducer.isFailed && (
            <div className="bg-red-200 p-3 rounded-md text-lg flex items-center mx-auto w-full xl:w-full mb-3">
              <svg
                viewBox="0 0 24 24"
                className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
              >
                <path
                  fill="currentColor"
                  d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                ></path>
              </svg>
              <span className="text-red-800 font-normal text-sm">
                Please check your password or try again later.
              </span>
            </div>
          )}
          <label htmlFor="username" className="text-gray-600">
            Username :{" "}
          </label>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="username"
              name="username"
              ref={register({ required: true, maxLength: 13 })}
              type="text"
              placeholder="630406xxxxxx"
              className="mt-2 w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            />
            {errors.username && (
              <span className="text-primary text-xs float-right font-normal">
                Please input username.
              </span>
            )}
            <br />
            <br />
            <label htmlFor="password" className="text-gray-600 mt-3">
              Password :
            </label>
            <br />
            <input
              id="password"
              name="password"
              ref={register({ required: true, minLength: 1 })}
              type="password"
              placeholder="***************"
              className="mt-2 w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker"
            />
            {errors.password && (
              <span className="text-primary text-xs float-right font-normal">
                Please input password.
              </span>
            )}
            <br />
            <br />
            <input
              type="submit"
              className="w-full bg-primary text-white font-bold p-2 rounded-md cursor-pointer"
              value="SIGN IN"
            />
          </form>
        </div>
      </div>
    </>
  );
}
