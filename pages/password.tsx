import React, { ReactElement } from "react";
import Layout from "../components/layout/layout";

interface Props {}

export default function Password({}: Props): ReactElement {
  return (
    <Layout>
      <form>
        <input
          type="text"
          className="bg-white p-2 rounded-lg text-gray-700"
          disabled
        />
      </form>
    </Layout>
  );
}
