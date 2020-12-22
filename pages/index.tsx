import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Rediract....</title>
      </Head>
    </>
  );
}

Index.getInitialProps = ({ res, err }) => {
  res.writeHead(301, { Location: "/login" });
  res.end();
  return {};
};
