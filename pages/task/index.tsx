import React, { ReactElement } from "react";
import Layout from "../../components/layout/layout";

interface Props {}

export default function Task({}: Props): ReactElement {
  return (
    <Layout>
      <div className="flex justify-center">
        <img loading="lazy" src="/no-task.svg" alt="no-task" width="60%" />
      </div>
      <p className="text-center font-thin text-4xl mt-4">
        Please select a task.
      </p>
      <p className="text-center font-thin text-xl">
        Please select a task from the menu on the left hand side
      </p>
    </Layout>
  );
}
