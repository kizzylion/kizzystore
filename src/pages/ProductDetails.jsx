import { Link } from "react-router-dom";
import { useEffect } from "react";
import { removeTransparentBg, headerScroll } from "../utilities/utilities";

function ProductDetails() {
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);
  return (
    <div id="product-detail" className="h-fit w-screen py-5 md:py-10 lg:px-8">
      <section className="heading mb-8 flex flex-col px-5 md:mb-10 md:px-8">
        <div id="breadcrumb" className="mb-8 flex items-center gap-2 py-4">
          <Link to="/">Home</Link>
          <span>Shop</span>
        </div>
      </section>

      <main className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"></main>
    </div>
  );
}

export default ProductDetails;
