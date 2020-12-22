import "tailwindcss/tailwind.css";
import { wrapper } from "../redux";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
