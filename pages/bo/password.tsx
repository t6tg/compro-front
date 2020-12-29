import Head from "next/head";
import React, { ReactElement } from "react";
import TLayout from "../../components/layout/TLayout";

interface Props {}

export default function Password({}: Props): ReactElement {
  return (
    <TLayout>
      <Head>
        <title>Change Password | Computer Programming II</title>
      </Head>
    </TLayout>
  );
}
