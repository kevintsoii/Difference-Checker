import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store/store.js";

import './index.css'
import App from './App.jsx'
import Welcome from './ui/Welcome/Welcome.jsx'
import Info from './ui/Info/Info.jsx'
import TitleBar from './ui/TitleBar/TitleBar.jsx'

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleBar />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
