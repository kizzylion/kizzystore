import { Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ReactGA from "react-ga";

import HeadingBanner from "../components/HeadingBanner";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views whenever the location changes
    ReactGA.pageview(location.pathname + location.search);
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
