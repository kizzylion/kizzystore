import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorElement";
import LandingPage from "./pages/landingPage/LandingPage";

// Initialize Google Analytics using the tracking ID from the .env file

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

// Track page views when the route changes

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
