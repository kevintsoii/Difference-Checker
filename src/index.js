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
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);


root.render(
  <React.StrictMode>
    <TitleBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
