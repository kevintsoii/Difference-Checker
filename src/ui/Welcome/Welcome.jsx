import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";

import logo from "../../static/logo.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Welcome = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(null);

  useEffect(() => {
    const checkFirstLoad = async () => {
      const firstLoad = await window.electronAPI?.storeOperation(
        "get",
        "isFirstLoad"
      );
      setIsFirstLoad(firstLoad);
    };

    checkFirstLoad();
  }, []);

  if (isFirstLoad === null) {
    return null; // Loading
  }

  if (isFirstLoad === false) {
    return <Navigate to="/" />;
  }

  return (
    <main className="relative flex flex-col flex-1 items-center justify-center gap-5 pb-20 overflow-hidden">
      <div className="absolute z-[-1] top-[10%] bottom-[25%] left-[-20%] right-0 bg-gradient-to-r from-red-300 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute z-[-1] top-[25%] bottom-[10%] left-0 right-[-20%] bg-gradient-to-l from-green-300 via-transparent to-transparent blur-3xl"></div>

      <img src={logo} alt="logo" className="drop-shadow-2xl" />
      <h1 className="text-4xl font-semibold">Welcome to Difference Checker!</h1>
      <p className="text-lg mb-6">
        This app helps you compare files and highlight differences between them.
      </p>

      <Link to="/">
        <button
          className="flex items-center bg-green-600 hover:opacity-90 gap-2 py-3 px-4 text-white rounded-2xl font-medium active:scale-90"
          onClick={async () => {
            await window.electronAPI?.storeOperation(
              "set",
              "isFirstLoad",
              false
            );
          }}
        >
          <h2>Get Started</h2>
          <ArrowForwardIcon fontSize="small" />
        </button>
      </Link>
    </main>
  );
};

export default Welcome;
