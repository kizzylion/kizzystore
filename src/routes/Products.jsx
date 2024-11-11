import { removeTransparentBg, headerScroll } from "@/utilities/utilities";
import { useEffect, useState } from "react";
import {
  Form,
  Link,
  useLoaderData,
  useParams,
  useSubmit,
} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { matchSorter } from "match-sorter";

export async function fetchProducts({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    let data = await response.json();
    if (q) {
      data = matchSorter(data, q, { keys: ["title"] });
    }
    return { data, q };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const submit = useSubmit();
  const { data, q } = useLoaderData();

  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const { category } = useParams();

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
        <div className="filter-section sticky top-[4.55rem] z-[100] mb-4 flex w-full items-center justify-between bg-white/40 px-5 py-3 backdrop-blur-sm md:px-8">
          <button
            className="flex items-center gap-2 text-lg font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <i className="bi bi-sliders2"></i> Filter
          </button>
          <Form
            role="search"
            className="searchbox border-1 w-40 rounded-lg border border-gray-400 px-3 py-[0.2em] outline-gray-400 ring-1 ring-inset ring-gray-400 lg:flex"
          >
            <i className="bi bi-search pr-2 text-base"></i>
            <input
              id="q"
              name="q"
              aria-label="Search product"
              type="search"
              placeholder="Search"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q === null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
              className="hidden border-none bg-transparent text-sm outline-none md:flex"
            />
          </Form>
          {/* <button className="searchbtn cursor-pointer lg:hidden">
            <i className="bi bi-search"></i>
          </button> */}
        </div>
        <div className="relative flex h-fit px-5 md:mb-10 md:px-8">
          <aside
            className={`sticky top-[7.7rem] z-[100] h-full min-h-fit w-full bg-gray-50 transition-all duration-300 ease-in-out md:w-1/4 ${
              isFilterOpen ? "flex translate-x-0" : "hidden -translate-x-full"
            }`}
          >
            <h2 className="text-lg font-medium">Categories</h2>
          </aside>
          <main className="grid w-full grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
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
