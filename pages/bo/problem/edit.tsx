import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import TLayout from "../../../components/layout/TLayout";
import Back from "../../../components/bo/Back";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/actions";
import LoadBar from "../../../components/Skeleton/LoadBar.skeleton";
import ErrorBar from "../../../components/Skeleton/ErrorBar.skeleton";
import TProblem from "../../../components/bo/TProblem";
import Head from "next/head";

interface Props {}

export default function Edit({}: Props): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.tProblem(id));
  }, []);
  const TproblemReducer = useSelector((state) => state.TproblemReducer);
  return (
    <TLayout>
      <Head>
        <title>Problem Management | Computer Programming II</title>
      </Head>
      <Back path="/bo" />
      <div className="my-4">
        {TproblemReducer.isFetching && (
          <LoadBar msg="Data is Fetching..... , Please wait a moment." />
        )}
        {TproblemReducer.isFailed && (
          <ErrorBar message="Please try again later or contact administrator." />
        )}
      </div>
      {TproblemReducer.data && (
        <form className="grid grid-flow-row my-4 w-full bg-white rounded-md shadow-md p-5 gap-2">
          <span>
            <label>Problem ID : </label>
            <br />
            <input
              type="text"
              name="name"
              className="bg-gray-100 px-3 py-1 w-full rounded-md"
              defaultValue={id}
              disabled
            />
            <small className="text-primary"></small>
          </span>
          <span>
            <label>Problem Name : </label>
            <br />
            <input
              type="text"
              name="name"
              className="bg-gray-100 px-3 py-1 w-full rounded-md"
              placeholder="Problem Name"
              defaultValue={TproblemReducer.data && TproblemReducer.data.Name}
              autoFocus
            />
            <small className="text-primary"></small>
          </span>
          <span>
            <label>Timelimit : </label>
            <br />
            <select
              name="timeout"
              className="bg-gray-100 px-3 py-1 w-full rounded-md"
              defaultValue={TproblemReducer.data.Timeout}
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
              className="bg-gray-100 px-3 py-1 w-full rounded-md"
              placeholder="Score"
              defaultValue={TproblemReducer.data && TproblemReducer.data.Score}
              disabled
            />
          </span>
          <span>
            <label>NumberOfTestCase : </label>
            <br />
            <select
              name="testcase"
              className="bg-gray-100 px-3 py-1 w-full rounded-md"
              disabled
            >
              <option value="1">
                {TproblemReducer.data && TproblemReducer.data.Testcase}
              </option>
            </select>
          </span>
          <span>
            <label>Testcase File</label>
            <br />
            <input
              type="file"
              name="file"
              accept=".zip"
              className="bg-gray-100 px-3 py-1 w-full rounded-md"
            />
            <br />
            <small className="text-primary">
              upload file .zip ( ตามจำนวนของ testcase เช่นมี 2 testcase ให้ zip
              รวมไฟล์ 1.in 2.in 1.out 2.out )
            </small>
          </span>

          <input type="hidden" name="mem" defaultValue={256} />
          <input type="hidden" name="status" defaultValue="inactive" />
          <input
            type="submit"
            defaultValue="Create"
            className="w-full bg-primary py-1 px-3 text-white rounded-md shadow-md cursor-pointer"
          />
        </form>
      )}
    </TLayout>
  );
}
