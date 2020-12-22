import React, { ReactElement, ReactNode } from "react";
import Menu from "./menu";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Menu> {children}</Menu>
    </>
  );
}
