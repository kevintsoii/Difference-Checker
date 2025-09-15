import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "/logo.png";
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
      <motion.div
        className="absolute z-[-1] top-[10%] bottom-[25%] left-[-20%] right-0 bg-gradient-to-r from-red-300 via-transparent to-transparent blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      ></motion.div>
      <motion.div
        className="absolute z-[-1] top-[25%] bottom-[10%] left-0 right-[-20%] bg-gradient-to-l from-green-300 via-transparent to-transparent blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      ></motion.div>

      <motion.img
        src={logo}
        alt="logo"
        className="drop-shadow-2xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      ></motion.img>
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
