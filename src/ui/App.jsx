import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-1">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
