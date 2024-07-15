import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import SidebarToggler from "./SidebarToggler.jsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const initial = { width: 0, opacity: 0 };
  const transition = { duration: 0.5 };

  return (
    <div className="flex flex-col my-5 mx-1 px-2 py-2 border-r-2 rounded-sm max-h-[calc(100vh-88px)]">
      <div className="flex items-center justify-between text-gray-500 pb-3 border-b-2">
        {isOpen && (
          <motion.h1
            initial={initial}
            animate={{ width: isOpen ? 100 : 0, opacity: 1 }}
            transition={transition}
            className="font-semibold text-lg text-gray-600 px-2"
          >
            Settings
          </motion.h1>
        )}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-gray-500 rounded-lg hover:bg-gray-200 px-2 my-1"
        >
          {isOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </button>
      </div>

      <motion.div
        initial={initial}
        animate={{ width: isOpen ? 225 : 0, opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="flex flex-col flex-1 overflow-hidden text-nowrap mt-3 gap-6 justify-between"
      >
        <ul>
          <SidebarToggler setting={"showAll"} />
        </ul>

        <div className="flex flex-col self-center gap-2">
          <Link to="/">
            <button className="flex items-center justify-center w-48 bg-gray-500 hover:opacity-80 gap-2 py-2 px-12 text-white rounded-xl font-medium active:scale-90">
              <HomeIcon />
              <h2>Home</h2>
            </button>
          </Link>
          <Link to="/info">
            <button className="flex items-center justify-center w-48 bg-gray-500 hover:opacity-80 gap-2 py-2 px-12 text-white rounded-xl font-medium active:scale-90">
              <InfoIcon />
              <h2>Info</h2>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
