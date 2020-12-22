import "tailwindcss/tailwind.css";
import { wrapper } from "../redux";
import { setInterceptor } from "./../utils/httpClient";
import { useDispatch } from "react-redux";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  setInterceptor(useDispatch());
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
