import React, { ReactElement } from "react";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import LoadBar from "../components/Skeleton/LoadBar.skeleton";
import ErrorBar from "../components/Skeleton/ErrorBar.skeleton";

interface Props {}

export default function Password({}: Props): ReactElement {
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
        <form>
          <label>ชื่อ - สกุล :</label>
          <input
            type="text"
            value={profileReducer.data.Fullname}
            className="bg-white p-2 rounded-lg text-gray-700"
            disabled
          />
        </form>
      )}
    </Layout>
  );
}
