import React, { ReactElement } from "react";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import LoadBar from "../components/Skeleton/LoadBar.skeleton";
import ErrorBar from "../components/Skeleton/ErrorBar.skeleton";
import { useForm } from "react-hook-form";

interface Props {}

type Inputs = {
  oldPass: string;
  newPass: string;
  conPass: string;
};

export default function ChangePass({}: Props): ReactElement {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  const dispatch = useDispatch();
  const profileReducer = useSelector((state) => state.profileReducer);
  React.useEffect(() => {
    dispatch(actions.profile());
  }, []);
  return (
    <Layout>
      {profileReducer.isLoading && <LoadBar msg="Loading ... Your Profile" />}
      {profileReducer.isFailed && (
        <ErrorBar message="Please try again later or contact administrator" />
      )}
      {profileReducer.data && (
        <form
          className="grid grid-flow-row mx-auto container w-3/4 bg-white rounded-lg shadow-md p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-3xl text-center m-3">Change Password</span>
          <span className="w-full">
            <label>Username : </label>
            <input
              type="text"
              value={profileReducer.data.Username}
              className="bg-gray-200 p-2 rounded-lg text-gray-700 w-full"
              disabled
            />
          </span>
          <span className="w-full">
            <label>Name : </label>
            <input
              type="text"
              value={profileReducer.data.Fullname}
              className="bg-gray-200 p-2 rounded-lg text-gray-700 w-full"
              disabled
            />
          </span>
          <span>
            <label>Section : </label>
            <input
              type="text"
              value={profileReducer.data.Section}
              className="bg-gray-200 p-2 rounded-lg text-gray-700  w-full"
              disabled
            />
          </span>
          <span>
            <label>Old Password : </label>
            <input
              name="oldPass"
              type="password"
              className="bg-gray-100 p-2 rounded-lg text-gray-700 w-full"
              ref={register({
                required: "You must specify an old password",
              })}
            />
            {errors.oldPass && (
              <p className="text-xs text-primary float-right">
                {errors.oldPass && errors.oldPass.message}
              </p>
            )}
          </span>
          <span>
            <label>New Password : </label>
            <input
              name="newPass"
              type="password"
              className="bg-gray-100 p-2 rounded-lg text-gray-700 w-full"
              ref={register({
                required: "You must specify a new password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {errors.newPass && (
              <p className="text-xs text-primary float-right">
                {errors.newPass && errors.newPass.message}
              </p>
            )}
          </span>
          <span>
            <label>Confirm Password : </label>
            <input
              name="conPass"
              type="password"
              className="bg-gray-100 p-2 rounded-lg text-gray-700 w-full"
              ref={register({
                validate: (value) =>
                  value === watch("newPass") || "The passwords do not match",
              })}
            />
            {errors.conPass && (
              <p className="text-xs text-primary float-right">
                {errors.conPass && errors.conPass.message}
              </p>
            )}
          </span>
          <br />
          <span>
            <input
              type="submit"
              className="bg-primary p-2 rounded-lg text-white w-full cursor-pointer"
            />
          </span>
        </form>
      )}
    </Layout>
  );
}
