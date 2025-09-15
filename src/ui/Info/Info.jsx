import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import logo from "/logo.png";

const Info = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />

      <main className="relative flex flex-col flex-1 items-center justify-center gap-6 mb-24 overflow-hidden">
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
        <img src={logo} alt="logo" className="drop-shadow-2xl h-64" />

        <h1 className="text-4xl font-bold">Welcome to Difference Checker!</h1>
        <h2 className="text-xl font-medium">
          This is a desktop software to help compare the differences between two
          files
        </h2>
        <h3 className="text-lg select-text">
          To view more details, please visit{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/kevintsoii/Difference-Checker"
          >
            https://github.com/kevintsoii/Difference-Checker
          </a>
        </h3>
      </main>
    </div>
  );
};

export default Info;
