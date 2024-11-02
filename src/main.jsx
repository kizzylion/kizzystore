import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorElement";
import LandingPage from "./pages/landingPage/LandingPage";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
