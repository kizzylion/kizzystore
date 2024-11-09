import { removeTransparentBg, headerScroll } from "@/utilities/utilities";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export async function fetchProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function Products() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  const { category } = useParams();
  const { data } = useLoaderData();

  console.log(data);

  return (
    <div id="shop" className="relative h-fit w-screen py-5 md:py-10 lg:px-8">
      <section className="heading flex flex-col items-center px-5 py-8 md:px-8">
        <h1 className="text-center text-2xl font-medium capitalize md:text-4xl">
          {category ? category : "Shop"}
        </h1>
        <div
          id="breadcrumb"
          className="flex w-fit items-center gap-2 py-4 text-sm text-gray-500"
        >
          <Link to="/">Home</Link> /<span className="text-gray-900">Shop</span>
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <div className="filter-section sticky top-[4.55rem] z-[100] mb-4 bg-white/40 px-5 py-3 backdrop-blur-sm md:px-8">
          <button className="flex items-center gap-2 text-lg font-medium">
            <i className="bi bi-sliders2"></i> Filter
          </button>
        </div>
        <div className="flex px-5 md:mb-10 md:px-8">
          <aside></aside>
          <main className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {data
              .filter(
                (product) =>
                  product.title != "New Product" &&
                  !product.images[0].includes(
                    "https://example.com/image.jpg",
                  ) &&
                  !product.images[0].includes(
                    "https://placeimg.com/640/480/any",
                  ),
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Products;
