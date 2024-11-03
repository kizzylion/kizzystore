import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactGA from "react-ga";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorElement";
import LandingPage from "./pages/landingPage/LandingPage";

// Initialize Google Analytics using the tracking ID from the .env file
ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

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
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={routes} />
  </StrictMode>,
);
