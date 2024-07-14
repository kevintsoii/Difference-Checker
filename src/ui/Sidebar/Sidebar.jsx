import { useState } from "react";
import { motion } from "framer-motion";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import SidebarToggler from "./SidebarToggler.jsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const initial = { width: 0, opacity: 0 };
  const transition = { duration: 0.5 };

  return (
    <div className="flex flex-col my-5 mx-1 px-2 py-2 border-r-2 rounded-sm">
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
        animate={{ width: isOpen ? 250 : 0, opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="flex flex-col flex-1 overflow-hidden text-nowrap mt-3"
      >
        <ul>
          <SidebarToggler setting={"showAll"} />
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
