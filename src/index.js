import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store/store.js";

import TitleBar from "./ui/TitleBar/TitleBar.jsx";
import App from "./ui/App.jsx";
import Welcome from "./ui/Welcome/Welcome.jsx";
import Info from "./ui/Info/Info.jsx";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

root.render(
  <React.StrictMode>
    <TitleBar />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
