import React, { ReactElement, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { Card } from "../../components/Card";
import LoadBar from "../../components/Skeleton/LoadBar.skeleton";
import ErrorBar from "../../components/Skeleton/ErrorBar.skeleton";
import SubmissionTable from "../../components/SubmissionTable";
import submissionReducer from "../../redux/reducers/submissionId.reducer";
import submitReducer from "../../redux/reducers/submit.reducer";
import LoadingSkeleton from "../../components/Skeleton/Loading.skeleton";
import Head from "next/head";
import { useRouter } from "next/router";

export default function TaskID(): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.problemId(id));
    dispatch(actions.submissionId(id));
  }, []);

  const problemReducer = useSelector((state) => state.problemReducer);
  const submissionReducer = useSelector((state) => state.submissionReducer);
  const submitReducer = useSelector((state) => state.submitReducer);
  return (
    <Layout>
      <Head>
        <title>
          {problemReducer.data && problemReducer.data.Name} | Computer
          Programming
        </title>
      </Head>
      {submitReducer.isFetching && <LoadingSkeleton />}
      {problemReducer.isFetching && (
        <LoadBar msg="Currently fetching information. Wait a moment please" />
      )}
      {problemReducer.isFailed && (
        <ErrorBar message={"Task Not Found. Please contact administrator."} />
      )}
      {problemReducer.data && (
        <Card
          id={problemReducer.data.ID}
          name={problemReducer.data.Name}
          score={`${problemReducer.data.Score}`}
          timeout={`${problemReducer.data.Timeout}`}
          mem={`${problemReducer.data.Mem}`}
          testcase={`${problemReducer.data.Testcase}`}
        />
      )}
      {!problemReducer.isFailed && submissionReducer.data != null && (
        <SubmissionTable />
      )}
    </Layout>
  );
}
