import React, { ReactElement } from "react";
import Router from "next/router";

interface Props {
  statusCode: string;
}

// Called in client-side
export default function Error({ statusCode }: Props): ReactElement {
  React.useEffect(() => {
    Router.push("/login");
  }, []);
  return <div></div>;
}

// Called in server-side
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
