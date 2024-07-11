import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TitleBar from "./ui/TitleBar/TitleBar.jsx";
import App from "./ui/App.jsx";
import Welcome from "./ui/Welcome/Welcome.jsx";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const isFirstLoad = await window.electronAPI?.checkFirstLoad();

root.render(
  <React.StrictMode>
    <TitleBar />
    {isFirstLoad ? <Welcome /> : <RouterProvider router={router} />}
  </React.StrictMode>
);
