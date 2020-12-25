import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import TLayout from "../../../components/layout/TLayout";

interface Props {}

export default function Edit({}: Props): ReactElement {
  const router = useRouter();
  const { id } = router.query;
  return <TLayout>{id}</TLayout>;
}
