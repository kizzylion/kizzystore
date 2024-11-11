import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactGA from "react-ga4";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorElement";
import LandingPage from "@/pages/landingPage/LandingPage";
import Products, { fetchProducts as loadProducts } from "@/routes/Products";
import ProductDetails from "@/routes/ProductDetails";
import AllCategoriesPage from "@/routes/AllCategoriesPage";
import { loader as loadProductDetails } from "@/routes/ProductDetails";
import CategoryProducts, {
  loader as loadCategoryProducts,
} from "@/routes/CategoryProducts";
import CheckoutPage from "@/routes/CheckoutPage";

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
          {
            path: "/checkout",
            element: <CheckoutPage />,
          },
        ],
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
