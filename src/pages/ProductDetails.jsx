import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { removeTransparentBg, headerScroll } from "../utilities/utilities";

export async function loader({ params }) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${params.productId}`,
    );
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

function ProductDetails() {
  const { data } = useLoaderData();
  console.log(data);
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

      <main className="grid w-full grid-cols-1 gap-5 md:grid-cols-2"></main>
    </div>
  );
}

export default ProductDetails;
