import Head from "next/head";
import React, { ReactElement } from "react";
import ChangePass from "../../components/changePass";

interface Props {}

export default function Password({}: Props): ReactElement {
  return (
    <div>
      <Head>
        <title>Change Password | Computer Programming II</title>
      </Head>
      {/* <ChangePass /> */}
    </div>
  );
}
