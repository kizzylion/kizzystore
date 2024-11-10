import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactGA from "react-ga4";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorElement";
import LandingPage from "./pages/landingPage/LandingPage";
import Products, { fetchProducts as loadProducts } from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import { loader as loadProductDetails } from "./pages/ProductDetails";
import CategoryProducts, {
  loader as loadCategoryProducts,
} from "./pages/CategoryProducts";

// Initialize Google Analytics using the tracking ID from the .env file
const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
if (trackingId) {
  ReactGA.initialize(trackingId);
  console.log("Google Analytics initialized");
} else {
  console.error("Google Analytics tracking ID is missing.");
}

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
      {
        path: "/shop",
        element: <Products />,
        loader: loadProducts,
      },
      {
        path: "/categories",
        element: <AllCategoriesPage />,
      },
      {
        path: "/categories/:categoryId",
        element: <CategoryProducts />,
        loader: loadCategoryProducts,
      },
      {
        path: "/shop/:productId",
        element: <ProductDetails />,
        loader: loadProductDetails,
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
