import Head from "next/head";
import React, { ReactElement } from "react";
import SwitchAll from "../../../components/bo/SwitchAll";
import UploadStudent from "../../../components/bo/UploadStudent";
import UserTable from "../../../components/bo/UserTable";
import TLayout from "../../../components/layout/TLayout";

interface Props {}

export default function Student({}: Props): ReactElement {
  return (
    <TLayout>
      <Head>
        <title>Student Management | Computer Programming II</title>
      </Head>
      <div className="grid gap-5 mb-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <UploadStudent />
        <SwitchAll />
      </div>
      <UserTable />
    </TLayout>
  );
}
