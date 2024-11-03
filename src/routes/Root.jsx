import { Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ReactGA from "react-ga";
import { useEffect } from "react";

ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);

const Root = () => {
  function Analytics() {
    const location = useLocation();

    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return null;
  }

  return (
    <>
      <Heading />
      <Analytics />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
