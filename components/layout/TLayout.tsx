import React, { ReactElement, ReactNode } from "react";
import TMenu from "./TMenu";

interface Props {
  children: ReactNode;
}

export default function TLayout({ children }: Props): ReactElement {
  return (
    <>
      <TMenu> {children}</TMenu>
    </>
  );
}
