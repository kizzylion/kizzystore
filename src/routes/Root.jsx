import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Root = () => {
  return (
    <>
      <Heading />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
