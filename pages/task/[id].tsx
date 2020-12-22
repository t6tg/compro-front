import React, { ReactElement } from "react";
import { GetServerSideProps, NextPageContext } from "next";
import Layout from "../../components/layout/layout";

interface Props {
  id: string;
}

export default function TaskID({ id }: Props): ReactElement {
  return <Layout>{id}</Layout>;
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  return {
    props: {
      id: ctx.query.id,
    },
  };
};
