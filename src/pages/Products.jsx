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
        <main className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {data
            .filter(
              (product) =>
                product.title != "New Product" &&
                !product.images[0].includes("https://example.com/image.jpg") &&
                !product.images[0].includes("https://placeimg.com/640/480/any"),
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </main>
      </div>
    </div>
  );
}

export default Products;
