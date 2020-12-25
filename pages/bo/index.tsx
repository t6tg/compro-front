import Head from "next/head";
import React, { ReactElement } from "react";
import TLayout from "../../components/layout/TLayout";
import TProblem from "../../components/TProblem";

interface Props {}

export default function AIndex({}: Props): ReactElement {
  return (
    <TLayout>
      <Head>
        <title>Back Office | Computer Programming II</title>
      </Head>
      <h1 className="text-center p-3 bg-primary text-white rounded-md shadow-md text-xl">
        Back Office [ BO ]
      </h1>
      <TProblem />
    </TLayout>
  );
}
