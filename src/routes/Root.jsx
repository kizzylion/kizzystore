import { Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ReactGA from "react-ga4";

import HeadingBanner from "../components/HeadingBanner";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views whenever the location changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log("Tracked page view:", location.pathname); // Log for debugging
  }, [location]);

  return (
    <>
      <HeadingBanner />
      <Heading />
      <main className="relative">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
