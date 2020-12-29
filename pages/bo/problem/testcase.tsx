import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Back from "../../../components/bo/Back";
import TLayout from "../../../components/layout/TLayout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/actions";
import LoadBar from "../../../components/Skeleton/LoadBar.skeleton";
import ErrorBar from "../../../components/Skeleton/ErrorBar.skeleton";
import Head from "next/head";

interface Props {}

export default function Testcase({}: Props): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.testcase(id));
  }, []);
  const testcaseReducer = useSelector((state) => state.testcaseReducer);

  return (
    <TLayout>
      <Head>
        <title>
          {testcaseReducer.data && testcaseReducer.data.Name} | Computer
          Programming II
        </title>
      </Head>
      <Back path="/bo" />
      <div className="bg-white rounded-md p-5 my-3">
        {testcaseReducer.isFetching && (
          <LoadBar msg="Data is Fetching..... , Please wait a moment" />
        )}
        {testcaseReducer.isFailed && (
          <ErrorBar message="Please try again later or contact administrator." />
        )}
        {testcaseReducer.data && (
          <div className="grid gap-3">
            <p>
              Problem ID :{" "}
              <span className="bg-gray-100 rounded-md py-1 px-2">
                {testcaseReducer.data.ID}
              </span>
            </p>
            <p>
              Problem Name :{" "}
              <span className="bg-gray-100 rounded-md py-1 px-2">
                {testcaseReducer.data.Name}
              </span>
            </p>
            <p>
              Number Of Testcase :{" "}
              <span className="bg-gray-100 rounded-md py-1 px-2">
                {testcaseReducer.data.Testcase}
              </span>
            </p>
            <p>
              Score :{" "}
              <span className="bg-gray-100 rounded-md py-1 px-2">
                {testcaseReducer.data.Score}
              </span>
            </p>
            <p>
              Timelimit :{" "}
              <span className="bg-gray-100 rounded-md py-1 px-2">
                {testcaseReducer.data.Timeout} s.
              </span>
            </p>
          </div>
        )}
        <div className="grid gap-3 grid-cols-2">
          <div>
            <h4 className="text-2xl my-3">Input</h4>
            {testcaseReducer.input &&
              testcaseReducer.input.map((r) => (
                <div key={r} className="bg-gray-100 my-4 rounded-md p-3">
                  <pre>
                    <code>{r}</code>
                  </pre>
                </div>
              ))}
            <div></div>
          </div>
          <div>
            <h4 className="text-2xl my-3">Output</h4>
            {testcaseReducer.output &&
              testcaseReducer.output.map((r) => (
                <div key={r} className="bg-gray-100 my-4 rounded-md p-3">
                  <pre>
                    <code>{r}</code>
                  </pre>
                </div>
              ))}
            <div></div>
          </div>
        </div>
      </div>
    </TLayout>
  );
}
