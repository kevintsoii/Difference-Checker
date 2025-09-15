import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import store from "./store/store.js";

import './index.css'
import App from './App.jsx'
import Welcome from './ui/Welcome/Welcome.jsx'
import Info from './ui/Info/Info.jsx'
import TitleBar from './ui/TitleBar/TitleBar.jsx'

// Component to check first visit and redirect accordingly
const AppWrapper = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(null);

  useEffect(() => {
    const checkFirstLoad = async () => {
      try {
        // First, try to check electron store if available
        if (window.electronAPI?.storeOperation) {
          const electronFirstLoad = await window.electronAPI.storeOperation(
            "get",
            "isFirstLoad"
          );
          setIsFirstLoad(electronFirstLoad !== false);
          return;
        }
        
        // Fallback to localStorage if electron API is not available
        const hasVisited = localStorage.getItem("hasVisitedBefore");
        setIsFirstLoad(hasVisited === null);
      } catch (error) {
        // If both methods fail, assume it's the first visit
        console.warn("Storage check failed:", error);
        setIsFirstLoad(true);
      }
    };

    checkFirstLoad();
  }, []);

  if (isFirstLoad === null) {
    return null; // Loading
  }

  if (isFirstLoad === true) {
    return <Navigate to="/welcome" replace />;
  }

  return <App />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
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
