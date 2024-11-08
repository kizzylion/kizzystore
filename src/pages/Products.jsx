import { removeTransparentBg, headerScroll } from "@/utilities/utilities";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Products() {
  const { category } = useParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  return (
    <div id="shop" className="h-fit w-screen py-5 md:py-10 lg:px-8">
      <section className="heading mb-8 flex flex-col px-5 md:mb-10 md:px-8">
        <div id="breadcrumb" className="mb-8 flex items-center gap-2 py-4">
          <Link to="/">Home</Link>
          <span>Shop</span>
        </div>
        <h1 className="text-center text-4xl font-medium capitalize">
          {category ? category : "Shop"}
        </h1>
      </section>
      <div className="flex px-5 md:mb-10 md:px-8">
        <aside></aside>
        <main></main>
      </div>
    </div>
  );
}

export default Products;
