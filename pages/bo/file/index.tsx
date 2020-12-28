import Head from "next/head";
import React, { ReactElement } from "react";
import FileCard from "../../../components/bo/FileCard";
import FileTable from "../../../components/bo/FileTable";
import TLayout from "../../../components/layout/TLayout";

interface Props {}

export default function File({}: Props): ReactElement {
  return (
    <TLayout>
      <Head>
        <title>File Management | Computer Programming II</title>
      </Head>
      <FileCard />
      <FileTable />
    </TLayout>
  );
}
