import "tailwindcss/tailwind.css";
import { wrapper } from "../redux";
import { setInterceptor } from "./../utils/httpClient";
import { useDispatch } from "react-redux";
import App from "next/app";
import server from "../utils/server.json";
import "../styles/global.css";

const ResetSystem = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-gray-900 w-4/6 xl:w-2/6 bg-white font-bold rounded-lg border shadow-lg p-6">
        <div className="grid justify-center">
          <img loading="lazy" src="/logo.png" alt="logo" width="300px" />
        </div>
        <div className="grid justify-items-center bg-gray-200 p-5 rounded-md text-center">
          <svg
            className="h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          ขออภัยในความไม่สดวกเวลา 00:00 - 00:30 ของทุกวันระบบจะทำการปิดปรับปรุง
        </div>
      </div>
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  setInterceptor(useDispatch());
  if (
    new Date().getHours().toLocaleString() === server.clear_memory_time_hr &&
    new Date().getMinutes() <= server.clear_memory_time_min
  ) {
    return <ResetSystem />;
  } else {
    return <Component {...pageProps} />;
  }
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
