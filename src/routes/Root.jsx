import { Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ReactGA from "react-ga";

import HeadingBanner from "../components/HeadingBanner";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
    ReactGA.pageview(location.pathname + location.search);
    ReactGA.set({ page: location.pathname + location.search });
    console.log(location.pathname + location.search);
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
