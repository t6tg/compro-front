import React, { ReactElement } from "react";
import ChangePass from "../components/changePass";

interface Props {}

export default function Password({}: Props): ReactElement {
  return (
    <div>
      <ChangePass />
    </div>
  );
}
