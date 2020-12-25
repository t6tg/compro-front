import React, { ReactElement } from "react";
import TLayout from "../../../components/layout/TLayout";
import ProblemCard from "../../../components/ProblemCard";

interface Props {}

export default function CreateProblem({}: Props): ReactElement {
  return (
    <TLayout>
      <h1 className="text-primary text-3xl font-bold">Create Problem</h1>
      <ProblemCard />
    </TLayout>
  );
}
