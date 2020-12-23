import React, { ReactElement, useEffect } from "react";
import { GetServerSideProps, NextPageContext } from "next";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { Card } from "../../components/Card";
import LoadBar from "../../components/Skeleton/LoadBar.skeleton";
import ErrorBar from "../../components/Skeleton/ErrorBar.skeleton";
import SubmissionTable from "../../components/SubmissionTable";
import submissionReducer from "../../redux/reducers/submissionId.reducer";

interface Props {
  id: string;
}

export default function TaskID({ id }: Props): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.problemId(id));
    dispatch(actions.submissionId(id));
  }, []);

  const problemReducer = useSelector((state) => state.problemReducer);
  const submissionReducer = useSelector((state) => state.submissionReducer);
  return (
    <Layout>
      {problemReducer.isFetching && <LoadBar />}
      {problemReducer.isFailed && (
        <ErrorBar message={"Task Not Found. Please contact administrator."} />
      )}
      {problemReducer.data && (
        <Card
          name={problemReducer.data.Name}
          score={`${problemReducer.data.Score}`}
        />
      )}
      {!problemReducer.isFailed && submissionReducer.data != null && (
        <SubmissionTable />
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const id = ctx.query.id;
  return {
    props: {
      id,
    },
  };
};
