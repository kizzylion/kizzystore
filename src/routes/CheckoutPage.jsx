import { useEffect } from "react";
import { Link, redirect, useOutletContext } from "react-router-dom";
import { headerScroll, removeTransparentBg } from "../utilities/utilities";
import Button from "../components/Button";

function CheckoutPage() {
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  const { setCartItems } = useOutletContext();

  return (
    <div className="h-screen w-screen">
      <h1 className="mt-10 text-center text-2xl font-semibold">
        Checkout Page
      </h1>
      <div className="container mx-auto mt-10 flex w-fit flex-col items-center gap-4 rounded-lg border border-orange-300 bg-orange-50 p-10">
        {/* let them know this is a demo site */}
        <h3 className="text-center text-2xl font-normal text-orange-900">
          Site is under maintenance.
        </h3>
        <p className="text-center text-sm text-orange-950/70">
          No payments will be processed.
        </p>
        <Link
          to="/"
          onClick={() => setCartItems([])}
          className="block w-fit px-[14px] py-2 uppercase text-orange-900 hover:bg-orange-200"
        >
          Go to Homepage <i className="bi bi-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;
