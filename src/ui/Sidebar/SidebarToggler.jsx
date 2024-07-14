import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { toggle } from "../../store/settingsSlice.js";

const SidebarToggler = ({ setting }) => {
  const isToggled = useSelector((state) => state.settings[setting]);
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between px-2">
      <h2 className="font-medium">{setting}</h2>
      <button
        onClick={() => {
          dispatch(toggle(setting));
        }}
        className={`flex w-10 h-6 rounded-xl p-1 ${
          isToggled
            ? "justify-end bg-green-400/80"
            : "justify-start bg-gray-300"
        }`}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-md"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </button>
    </li>
  );
};

export default SidebarToggler;
