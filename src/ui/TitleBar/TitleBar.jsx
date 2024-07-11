import { useState } from "react";

import logo from "../../static/logo.svg";

import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RemoveIcon from "@mui/icons-material/Remove";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const TitleBar = () => {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

  return (
    <header className="flex px-3 h-12 bg-gray-100 items-center justify-between">
      <img src={logo} width={32} alt="logo" />

      <div className="flex gap-3 items-center">
        <h1 className="font-semibold">Difference Checker · v1.0.0</h1>
        <button
          className={`flex ${
            isAlwaysOnTop ? "text-red-400" : "text-green-700/75"
          } hover:bg-gray-200 p-1 rounded-xl`}
          onClick={() => {
            window.electronAPI.alwaysOnTop();
            setIsAlwaysOnTop(!isAlwaysOnTop);
          }}
        >
          {isAlwaysOnTop ? <LockIcon /> : <LockOpenIcon />}
        </button>
      </div>

      <div className="flex gap-2">
        <button
          className="flex hover:bg-gray-200 p-1 rounded-xl"
          onClick={() => window.electronAPI.minimizeWindow()}
        >
          <RemoveIcon fontSize="small" />
        </button>
        <button
          className="flex hover:bg-gray-200 p-1 rounded-xl"
          onClick={() => window.electronAPI.maximizeWindow()}
        >
          <CropSquareIcon fontSize="small" />
        </button>
        <button
          className="flex hover:bg-red-500 hover:text-white p-1 rounded-xl"
          onClick={() => window.electronAPI.closeWindow()}
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>
    </header>
  );
};

export default TitleBar;
